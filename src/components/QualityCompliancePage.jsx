"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardCheck,
  FileCheck2,
  HardHat,
  Leaf,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react";

const certifications = [
  {
    title: "ISO 9001:2015",
    scope: "Quality management",
    meaning: "Controlled processes, records and continual improvement.",
    image: "/images/cer1.png",
    pdf: "/images/cert-1.pdf",
  },
  {
    title: "ISO 14001:2015",
    scope: "Environmental management",
    meaning: "Responsible handling of waste, materials and workshop impact.",
    image: "/images/cer2.png",
    pdf: "/images/cert-2.pdf",
  },
  {
    title: "ISO 45001:2018",
    scope: "Occupational health and safety",
    meaning: "Safe working practices for our people and on-site work.",
    image: "/images/cer3.png",
    pdf: "/images/cert-3.pdf",
  },
];

const qualityPractices = [
  "Documented procedures for receipt, inspection, repair, testing, packing and dispatch.",
  "Document control to help ensure the correct version of each procedure and drawing is used.",
  "Calibrated measuring and test equipment, with calibration records maintained.",
  "Material and component traceability linking parts to their source and job record.",
  "Controlled special processes, including welding, machining, balancing and testing, carried out by trained personnel.",
  "Non-conformance and corrective action processes to record, investigate and address issues at their root.",
  "Internal audits and management reviews to monitor and maintain the system.",
  "Customer feedback collected and acted upon.",
  "Records retained for 10 years to support job history, future outages and audits.",
];

const supplierControls = [
  "Suppliers are approved and reviewed against defined criteria.",
  "Incoming materials and services are inspected or verified.",
  "Certificates and test records are requested where the job requires them.",
  "Critical work remains under DEI VOX supervision and responsibility.",
  "We advise customers in advance when any part of a job needs to be performed outside DEI VOX, where the contract requires it.",
];

const hsePractices = [
  "Safe handling of heavy rotating equipment, lifting and testing.",
  "Defined workshop safety procedures and protective equipment.",
  "Safe working plans for in-situ and on-site jobs.",
  "Controlled handling and disposal of oils, chemicals and waste.",
  "Training, incident reporting and respect for environmental rules applicable to our workshop.",
];

const ethicsPractices = [
  {
    title: "Anti-bribery and anti-corruption",
    description:
      "We do not offer, give or accept bribes or improper payments, and we keep clear, honest records.",
  },
  {
    title: "Code of conduct",
    description:
      "Our written code covers conflicts of interest, gifts and hospitality, and fair dealing.",
  },
  {
    title: "Export controls and sanctions",
    description:
      "We comply with trade laws applicable to our work and shipments. We may decline or delay an order where the law requires it, and ask partners for accurate end-user and destination details.",
  },
  {
    title: "Honest representation",
    description:
      "We describe our capabilities, makes and results accurately and do not claim approvals, certifications or experience we do not have.",
  },
  {
    title: "Fair competition and labour",
    description:
      "We compete on quality, service and price, respect applicable Indian labour laws and treat our people fairly.",
  },
];

const faqs = [
  {
    question: "Which certifications do you hold?",
    answer:
      "ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018. Certificates are available to view and download above.",
  },
  {
    question: "Can we audit your workshop?",
    answer:
      "Yes. We welcome on-site and remote audits, and can agree an audit plan with you in advance.",
  },
  {
    question: "Where can I report a concern?",
    answer:
      "Email sales@deivox.co.in. We review concerns fairly and confidentially.",
  },
];

function BulletList({ items, light = false }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3 text-sm leading-relaxed ${
            light ? "text-white/65" : "text-black/65"
          }`}
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function QualityCompliancePage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={container}
      className="bg-card text-black selection:bg-accent selection:text-black"
    >
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 py-32 text-white lg:px-16">
        <div className="industrial-grid pointer-events-none absolute inset-0 opacity-[0.03]" />
        <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[300px] w-[300px] rounded-full bg-accent/20 blur-[80px] sm:h-[600px] sm:w-[600px] sm:blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-5%] left-[-5%] h-[250px] w-[250px] rounded-full bg-primary/20 blur-[80px]" />
        {[
          { top: "15%", left: "6%", size: 5, delay: 0, duration: 4 },
          { top: "40%", left: "2%", size: 3, delay: 1.5, duration: 5 },
          { top: "70%", left: "12%", size: 4, delay: 0.8, duration: 6 },
          { top: "25%", left: "55%", size: 3, delay: 2, duration: 4.5 },
          { top: "80%", left: "60%", size: 5, delay: 0.3, duration: 5.5 },
        ].map((dot, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -12, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute rounded-full bg-accent"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
          />
        ))}
        <motion.div
          style={{ y: yHeroText, opacity: opacityHero }}
          className="relative z-10 mx-auto w-full max-w-7xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-accent" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              QUALITY, COMPLIANCE &amp; CONFIDENTIALITY
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-10 text-4xl font-extrabold uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl md:text-[72px]"
          >
            A Partner You<br />
            <span className="text-white/20">Can Approve.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="max-w-2xl text-base font-medium leading-relaxed text-white/60 sm:text-xl"
          >
            Certified management systems, ethical business practices and a
            confidentiality-first way of working, so your procurement, quality
            and legal teams can say yes.
          </motion.p>
        </motion.div>
        <div className="absolute bottom-12 right-12 flex items-center gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            Scroll Down
          </span>
          <div className="h-px w-12 bg-white/20" />
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
            TRUST BUILT INTO EVERY ASSIGNMENT
          </p>
          <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-tighter sm:text-5xl">
            Confidence from the first review.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-black/60">
            <p>
              Boiler circulation pumps sit at the heart of critical plant, and
              the companies that service them are chosen carefully. Behind
              every repair is a question of trust: will the work be done to a
              controlled standard, will drawings and customer data stay
              private, and will the supplier behave properly in international
              business?
            </p>
            <p>
              This page sets out how DEI VOX answers those questions—from our
              certifications and quality system to the rules we work to and
              the way we protect information and customer relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              CERTIFIED MANAGEMENT SYSTEMS
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              Three international standards.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white"
              >
                <div className="relative aspect-[1.3/1] bg-white p-4">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6 text-black">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                    {cert.scope}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="mt-3 min-h-12 text-sm leading-relaxed text-black/55">
                    {cert.meaning}
                  </p>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-black transition-colors hover:text-green-900"
                  >
                    View Certificate (PDF) <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-black">
              <ClipboardCheck size={22} />
            </div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
              HOW OUR QUALITY SYSTEM WORKS
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              Quality built into every job.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black/55">
              From incoming equipment to dispatch, documented controls support
              consistent work, traceability and a useful service history for
              future outages and audits.
            </p>
            <Link
              href="/iso-certificate"
              className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-green-900"
            >
              Testing and Quality Assurance <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="space-y-3 lg:col-span-7">
            {qualityPractices.map((practice, index) => (
              <div
                key={practice}
                className="flex gap-4 rounded-2xl border border-black/5 bg-white p-4 sm:p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-[10px] font-bold text-green-950">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-black/65">{practice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12 lg:items-center">
          <div className="order-2 space-y-3 lg:order-1 lg:col-span-7">
            {supplierControls.map((control) => (
              <div
                key={control}
                className="flex gap-4 rounded-2xl bg-[#f5f5f0] p-5"
              >
                <FileCheck2 className="mt-0.5 shrink-0 text-green-800" size={19} />
                <p className="text-sm leading-relaxed text-black/65">{control}</p>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              RESPONSIBLE SOURCING
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              Supplier &amp; subcontractor control.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black/55">
              When outside suppliers are needed for raw materials, coatings,
              special testing or certain machining, we apply defined controls
              and keep critical work under our supervision.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-6 flex gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                <HardHat size={21} />
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Leaf size={21} />
              </span>
            </div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              HEALTH, SAFETY &amp; ENVIRONMENT
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              Safer work. Responsible practice.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/55">
              ISO 45001 and ISO 14001 certifications shape our daily work in
              the workshop and on site. If your customer&apos;s site requires
              method statements, risk assessments or other specific safety
              documents, tell us early so we can prepare them.
            </p>
          </div>
          <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] lg:col-span-7">
            <Image
              src="/images/quality-compliance-image2.png"
              alt="DEI VOX technician measuring and inspecting precision pump components"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 grid gap-3 sm:grid-cols-2">
              {hsePractices.map((practice) => (
                <div
                  key={practice}
                  className="rounded-xl border border-white/10 bg-black/65 p-4 text-xs leading-relaxed text-white/75 backdrop-blur-sm"
                >
                  {practice}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
              <Scale size={22} />
            </div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
              ETHICAL BUSINESS &amp; LEGAL COMPLIANCE
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              How we do business.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black/55">
              We conduct business honestly and lawfully, and expect the same
              of our partners. Anyone may raise a conduct concern at{" "}
              <a
                href="mailto:sales@deivox.co.in"
                className="font-semibold text-black underline decoration-accent decoration-2 underline-offset-4"
              >
                sales@deivox.co.in
              </a>
              ; we will review it fairly and confidentially.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {ethicsPractices.map((practice) => (
              <article
                key={practice.title}
                className="rounded-2xl border border-black/5 bg-white p-5"
              >
                <h3 className="text-sm font-bold uppercase tracking-wide text-black">
                  {practice.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/55">
                  {practice.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f0] px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:col-span-5">
            <Image
              src="/images/quality-compliance-image3.png"
              alt="DEI VOX engineers reviewing technical inspection records"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
              <ShieldCheck size={22} />
            </div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              INDEPENDENCE &amp; TRADEMARKS
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              Clear about who we are.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black/60">
              DEI VOX is an independent service provider. We are not affiliated
              with, endorsed by or sponsored by any pump or motor manufacturer.
              Manufacturer names and series designations on this site are
              trademarks of their respective owners and are used only to
              identify the equipment we service.
            </p>
            <p className="mt-4 text-base leading-relaxed text-black/60">
              We do not use OEM logos or present our parts or services as
              OEM-supplied.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
              <LockKeyhole size={22} />
            </div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              CONFIDENTIALITY: OUR STANDING COMMITMENTS
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              Protecting your information.
            </h2>
            <div className="mt-8">
              <h3 className="text-lg font-bold uppercase tracking-wide">Data protection</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                We handle personal data, such as contact details and enquiry
                information, in line with our Privacy Policy and applicable
                data-protection law, including India&apos;s Digital Personal
                Data Protection Act, 2023.
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10 lg:col-span-7">
            <h3 className="text-lg font-bold uppercase tracking-wide">Information security</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              We protect customer information using reasonable technical and
              organisational measures:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Secure, access-controlled storage of job files and drawings",
                "Strong passwords and, where possible, two-factor authentication",
                "Regular backups",
                "Restricted use of personal devices and removable media for customer data",
                "Prompt reporting and handling of any suspected incident",
              ].map((measure) => (
                <div key={measure} className="flex gap-3 rounded-xl bg-black/40 p-4">
                  <LockKeyhole className="mt-0.5 shrink-0 text-accent" size={15} />
                  <p className="text-xs leading-relaxed text-white/60">{measure}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/50">
              If your company requires a security questionnaire, we are glad to
              complete one.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f0] px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[90rem]">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="mb-10 text-3xl font-extrabold uppercase tracking-tighter sm:text-5xl">
            Supplier assurance.
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-black/5 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-start gap-3 text-sm font-bold leading-relaxed text-black marker:hidden">
                  <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{faq.question}</span>
                  <span className="text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="ml-8 mt-4 text-sm leading-relaxed text-black/55">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[90rem]">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0a0a0a] px-8 py-12 text-white sm:rounded-[3rem] sm:px-14 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-[90px]" />
            <div className="relative z-10 max-w-4xl">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                SUPPLIER APPROVAL
              </p>
              <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-tighter sm:text-5xl">
                Ready to approve DEI VOX as a supplier?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/55 sm:text-lg">
                Speak with our team about certificates, quality records,
                supplier documentation, an audit or your specific compliance
                requirements.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact?subject=Supplier%20Approval"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-xs font-bold uppercase tracking-wider text-black hover:bg-accent/80"
                >
                  Submit an RFQ <ArrowUpRight size={15} />
                </Link>
                <a
                  href="mailto:sales@deivox.co.in"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white hover:border-accent hover:text-accent"
                >
                  Contact Our Team <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
