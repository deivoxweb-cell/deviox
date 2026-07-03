import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const MAX_ATTACHMENT_SIZE = 10 * 1024 * 1024;
const ALLOWED_ATTACHMENT_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
]);
const ALLOWED_ATTACHMENT_EXTENSIONS = new Set([".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"]);
const REQUIRED_FIELDS = ["name", "email", "phone", "country", "location", "designation", "subject", "message"];
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 5;

export async function POST(request) {
  try {
    const rateLimitResponse = checkRateLimit(request);
    if (rateLimitResponse) return rateLimitResponse;

    if (!request.headers.get("content-type")?.includes("multipart/form-data")) {
      return errorResponse("Malformed request.", 415);
    }

    const configError = getConfigError();
    if (configError) {
      console.error("[Contact API]", configError);
      return errorResponse("Internal server error: email is not configured.", 500);
    }

    const formData = await request.formData();
    const fields = getFields(formData);
    const attachment = formData.get("attachment");
    const enquiryId = `DV-${Date.now().toString(36).toUpperCase()}`;

    const validationError = validateFields(fields) || validateAttachment(attachment);
    if (validationError) return errorResponse(validationError, 400);

    const attachmentPayload = await buildAttachmentPayload(attachment);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const [ownerResult] = await Promise.all([
      transporter.sendMail({
        from: process.env.CONTACT_EMAIL_FROM,
        to: process.env.CONTACT_OWNER_EMAIL,
        replyTo: fields.email,
        subject: `[Dei Vox Enquiry ${enquiryId}] ${fields.subject} - ${fields.name}`,
        html: renderOwnerEmail(fields, enquiryId, attachmentPayload?.filename),
        attachments: attachmentPayload ? [attachmentPayload] : undefined,
      }),
      transporter.sendMail({
        from: process.env.CONTACT_EMAIL_FROM,
        to: fields.email,
        replyTo: process.env.CONTACT_OWNER_EMAIL,
        subject: `We received your Dei Vox enquiry - ${enquiryId}`,
        html: renderCustomerEmail(fields, enquiryId),
      }),
    ]);

    return NextResponse.json(
      { success: true, id: ownerResult.messageId, enquiryId },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API Error]", err);
    return errorResponse("An unexpected error occurred.", 500);
  }
}

function getConfigError() {
  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_EMAIL_FROM", "CONTACT_OWNER_EMAIL"];
  const missing = required.filter((key) => !process.env[key]);
  return missing.length ? `Missing environment variables: ${missing.join(", ")}` : "";
}

function getFields(formData) {
  return {
    name: cleanText(formData.get("name")),
    email: cleanText(formData.get("email")).toLowerCase(),
    phone: cleanText(formData.get("phone")),
    company: cleanText(formData.get("company")),
    country: cleanText(formData.get("country")),
    location: cleanText(formData.get("location")),
    designation: cleanText(formData.get("designation")),
    subject: cleanText(formData.get("subject")),
    message: cleanText(formData.get("message"), 3000),
  };
}

function validateFields(fields) {
  const missingField = REQUIRED_FIELDS.find((field) => !fields[field]);
  if (missingField) return `${toLabel(missingField)} is required.`;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return "Please provide a valid email address.";
  }

  if (!/^\d{7,15}$/.test(fields.phone)) {
    return "Please provide a valid phone number.";
  }

  return "";
}

function validateAttachment(attachment) {
  if (!attachment || typeof attachment === "string" || attachment.size === 0) return "";

  const extension = getFileExtension(attachment.name);
  if (!ALLOWED_ATTACHMENT_TYPES.has(attachment.type) || !ALLOWED_ATTACHMENT_EXTENSIONS.has(extension)) {
    return "Attachment must be PDF, DOC, DOCX, JPG, JPEG, or PNG.";
  }

  if (attachment.size > MAX_ATTACHMENT_SIZE) {
    return "Attachment must be 10 MB or smaller.";
  }

  return "";
}

async function buildAttachmentPayload(attachment) {
  if (!attachment || typeof attachment === "string" || attachment.size === 0) return null;

  const buffer = Buffer.from(await attachment.arrayBuffer());
  return {
    filename: sanitizeFilename(attachment.name),
    content: buffer,
    contentType: attachment.type,
  };
}

function checkRateLimit(request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const record = rateLimitStore.get(ip) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };

  if (now > record.resetAt) {
    record.count = 0;
    record.resetAt = now + RATE_LIMIT_WINDOW_MS;
  }

  record.count += 1;
  rateLimitStore.set(ip, record);

  if (record.count > RATE_LIMIT_MAX) {
    return errorResponse("Too many requests. Please try again shortly.", 429);
  }

  return null;
}

function cleanText(value, maxLength = 200) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeFilename(name) {
  const safeName = String(name || "attachment").replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
  return safeName || "attachment";
}

function getFileExtension(name) {
  const safeName = String(name || "");
  const dotIndex = safeName.lastIndexOf(".");
  return dotIndex >= 0 ? safeName.slice(dotIndex).toLowerCase() : "";
}

function toLabel(field) {
  return field.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}

function errorResponse(error, status) {
  return NextResponse.json({ error }, { status });
}

function renderRow(label, value) {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
        <p style="margin:0 0 2px;font-size:10px;font-weight:900;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.3);">${escapeHtml(label)}</p>
        <p style="margin:0;font-size:15px;font-weight:600;color:#ffffff;">${escapeHtml(value || "-")}</p>
      </td>
    </tr>
  `;
}

function renderOwnerEmail(fields, enquiryId, attachmentName) {
  const replySubject = encodeURIComponent(`Re: ${fields.subject} - ${fields.name}`);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Enquiry - Dei Vox</title>
    </head>
    <body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;color:#ffffff;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
              <tr>
                <td style="background:linear-gradient(135deg,#f97316,#ea580c);padding:40px 48px;border-radius:16px 16px 0 0;">
                  <p style="margin:0;font-size:11px;font-weight:900;letter-spacing:0.3em;text-transform:uppercase;color:rgba(0,0,0,0.6);">New Enquiry ${escapeHtml(enquiryId)}</p>
                  <h1 style="margin:8px 0 0;font-size:32px;font-weight:900;letter-spacing:-0.02em;color:#000000;">DEI VOX</h1>
                </td>
              </tr>
              <tr>
                <td style="background:#111111;padding:48px;border-radius:0 0 16px 16px;border:1px solid rgba(255,255,255,0.08);border-top:none;">
                  <p style="margin:0 0 32px;font-size:15px;color:rgba(255,255,255,0.5);line-height:1.6;">
                    A new enquiry has been submitted through the Dei Vox contact form. Details below:
                  </p>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${renderRow("Full Name", fields.name)}
                    ${renderRow("Email", fields.email)}
                    ${renderRow("Phone", fields.phone)}
                    ${renderRow("Company", fields.company)}
                    ${renderRow("Country", fields.country)}
                    ${renderRow("Location", fields.location)}
                    ${renderRow("Designation", fields.designation)}
                    ${renderRow("Nature of Enquiry", fields.subject)}
                    ${renderRow("Attachment", attachmentName || "No attachment uploaded")}
                  </table>
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                    <tr>
                      <td style="padding:24px;background:rgba(249,115,22,0.06);border:1px solid rgba(249,115,22,0.2);border-radius:12px;">
                        <p style="margin:0 0 8px;font-size:10px;font-weight:900;letter-spacing:0.25em;text-transform:uppercase;color:#f97316;">Message</p>
                        <p style="margin:0;font-size:15px;color:#ffffff;line-height:1.7;white-space:pre-wrap;">${escapeHtml(fields.message)}</p>
                      </td>
                    </tr>
                  </table>
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                    <tr>
                      <td>
                        <a href="mailto:${escapeHtml(fields.email)}?subject=${replySubject}"
                           style="display:inline-block;padding:14px 32px;background:#f97316;color:#000000;font-weight:900;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;text-decoration:none;border-radius:100px;">
                          Reply to ${escapeHtml(fields.name)}
                        </a>
                      </td>
                    </tr>
                  </table>
                  <p style="margin:40px 0 0;font-size:12px;color:rgba(255,255,255,0.2);border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;">
                    This email was sent from the Dei Vox website contact form.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

function renderCustomerEmail(fields, enquiryId) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Enquiry Received - Dei Vox</title>
    </head>
    <body style="margin:0;padding:0;background:#f5f5f0;font-family:'Segoe UI',Arial,sans-serif;color:#111111;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f0;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid rgba(0,0,0,0.08);">
              <tr>
                <td style="background:#0a0a0a;padding:36px 44px;">
                  <p style="margin:0;font-size:11px;font-weight:900;letter-spacing:0.3em;text-transform:uppercase;color:#C6F023;">DEI VOX</p>
                  <h1 style="margin:10px 0 0;font-size:28px;font-weight:900;letter-spacing:-0.02em;color:#ffffff;">Enquiry Received</h1>
                </td>
              </tr>
              <tr>
                <td style="padding:44px;">
                  <p style="margin:0 0 18px;font-size:18px;font-weight:800;">Thank you, ${escapeHtml(fields.name)}.</p>
                  <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#333333;">
                    We have received your enquiry and our team will review the details shortly. Please keep this reference ID for future communication.
                  </p>
                  <p style="margin:0 0 30px;padding:16px 18px;background:#C6F023;color:#000000;font-size:13px;font-weight:900;letter-spacing:0.15em;text-transform:uppercase;">
                    Reference ID: ${escapeHtml(enquiryId)}
                  </p>
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid rgba(0,0,0,0.08);padding-top:20px;">
                    <tr>
                      <td style="padding:8px 0;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.2em;color:#777777;">Nature of Enquiry</td>
                    </tr>
                    <tr>
                      <td style="padding:0 0 20px;font-size:16px;font-weight:700;color:#111111;">${escapeHtml(fields.subject)}</td>
                    </tr>
                  </table>
                  <p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:#666666;">
                    Dei Vox India<br />
                    Mission-critical power systems support and technical consultation.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
