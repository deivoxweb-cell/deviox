import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";



const RECIPIENT = "developer@initialace.com";
const FROM = "Deivox Contact Form <onboarding@resend.dev>";

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("[Contact API] Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        { error: "Internal server error: API key not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [RECIPIENT],
      replyTo: email,
      subject: `[Deivox Enquiry] ${subject || "General Inquiry"} — ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Enquiry — Deivox</title>
        </head>
        <body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;color:#ffffff;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#f97316,#ea580c);padding:40px 48px;border-radius:16px 16px 0 0;">
                      <p style="margin:0;font-size:11px;font-weight:900;letter-spacing:0.3em;text-transform:uppercase;color:rgba(0,0,0,0.6);">New Enquiry</p>
                      <h1 style="margin:8px 0 0;font-size:32px;font-weight:900;letter-spacing:-0.02em;color:#000000;">DEIVOX</h1>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="background:#111111;padding:48px;border-radius:0 0 16px 16px;border:1px solid rgba(255,255,255,0.08);border-top:none;">

                      <p style="margin:0 0 32px;font-size:15px;color:rgba(255,255,255,0.5);line-height:1.6;">
                        A new enquiry has been submitted through the Deivox contact form. Details below:
                      </p>

                      <!-- Details Grid -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        ${renderRow("Full Name", name)}
                        ${renderRow("Email", email)}
                        ${phone ? renderRow("Phone", phone) : ""}
                        ${company ? renderRow("Company", company) : ""}
                        ${renderRow("Subject", subject || "General Inquiry")}
                      </table>

                      <!-- Message -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                        <tr>
                          <td style="padding:24px;background:rgba(249,115,22,0.06);border:1px solid rgba(249,115,22,0.2);border-radius:12px;">
                            <p style="margin:0 0 8px;font-size:10px;font-weight:900;letter-spacing:0.25em;text-transform:uppercase;color:#f97316;">Message</p>
                            <p style="margin:0;font-size:15px;color:#ffffff;line-height:1.7;white-space:pre-wrap;">${message}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- Reply CTA -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                        <tr>
                          <td>
                            <a href="mailto:${email}?subject=Re: ${encodeURIComponent((subject || "General Inquiry") + " — " + name)}"
                               style="display:inline-block;padding:14px 32px;background:#f97316;color:#000000;font-weight:900;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;text-decoration:none;border-radius:100px;">
                              Reply to ${name}
                            </a>
                          </td>
                        </tr>
                      </table>

                      <!-- Footer -->
                      <p style="margin:40px 0 0;font-size:12px;color:rgba(255,255,255,0.2);border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;">
                        This email was sent from the Deivox website contact form. Do not reply directly to this email — use the button above.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("[Resend Error]", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

// Helper to build a table row for the email
function renderRow(label, value) {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
        <p style="margin:0 0 2px;font-size:10px;font-weight:900;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.3);">${label}</p>
        <p style="margin:0;font-size:15px;font-weight:600;color:#ffffff;">${value}</p>
      </td>
    </tr>
  `;
}
