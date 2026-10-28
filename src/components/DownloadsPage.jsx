"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const downloads = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System",
    image: "/images/cer1.png",
    filename: "ISO-1.pdf",
    href: "/images/cert-1.pdf",
  },
  {
    title: "ISO 14001:2015",
    description: "Environmental Management System",
    image: "/images/cer2.png",
    filename: "ISO-2.pdf",
    href: "/images/cert-2.pdf",
  },
  {
    title: "ISO 45001:2018",
    description: "Occupational Health & Safety Management System",
    image: "/images/cer3.png",
    filename: "ISO-3.pdf",
    href: "/images/cert-3.pdf",
  },
];

export default function DownloadsPage() {
  return (
    <main className="bg-[#F5F5F5] text-black selection:bg-accent selection:text-black">
      <section className="relative flex min-h-[72vh] flex-col justify-center overflow-hidden bg-black px-6 py-32 text-white lg:px-16">
        <div className="industrial-grid pointer-events-none absolute inset-0 opacity-[0.03]" />
        <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[300px] w-[300px] rounded-full bg-accent/20 blur-[80px] sm:h-[600px] sm:w-[600px] sm:blur-[130px]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px w-12 bg-accent" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              RESOURCES
            </p>
          </div>
          <h1 className="mb-8 text-4xl font-extrabold uppercase leading-[0.88] tracking-[-0.05em] sm:text-6xl md:text-[72px]">
            Downloads<br />
            <span className="text-white/25">Certificates &amp; Brochure.</span>
          </h1>
          <p className="max-w-2xl text-base font-medium leading-relaxed text-white/60 sm:text-xl">
            Download DEI VOX quality certificates and our company brochure.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              QUALITY &amp; COMPLIANCE
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              ISO Certificates
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {downloads.map((item, index) => (
              <motion.article
                key={item.filename}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-lg shadow-black/5 transition-all hover:-translate-y-1 hover:border-accent/60"
              >
                <div className="relative aspect-[1/1.414] overflow-hidden bg-white p-4 sm:p-6">
                  <Image
                    src={item.image}
                    alt={`${item.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40">
                    {item.filename}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/55">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    download={item.filename}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.03]"
                  >
                    Download certificate <ArrowDownToLine size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6 rounded-[2rem] bg-black p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                COMPANY PROFILE
              </p>
              <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
                DEI VOX Brochure
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Learn more about our services and capabilities.
              </p>
            </div>
            <a
              href="/images/DEI_VOX_Brochure_without_V-FLO.pdf"
              download="DEI_VOX_Brochure_without_V-FLO.pdf"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-accent px-6 py-4 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.03]"
            >
              Download brochure <ArrowDownToLine size={17} />
            </a>
          </div>

          <div className="mt-8 flex justify-end">
            <a
              href="/quality-compliance-confidentiality"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/55 transition-colors hover:text-black"
            >
              Quality, Compliance &amp; Confidentiality <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
