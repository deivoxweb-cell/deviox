"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Ordered: ISO 9001 (cer1), ISO 45001 (cer3), ISO 14001 (cer2)
const certificates = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    image: "/images/cer1.png",
    pdf: "/images/cert-1.pdf",
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018",
    image: "/images/cer3.png",
    pdf: "/images/cert-3.pdf",
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015",
    image: "/images/cer2.png",
    pdf: "/images/cert-2.pdf",
  },
];

const CertCard = ({ cert, index }) => {
  return (
    <motion.a
      href={cert.pdf}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="block relative w-full aspect-[1/1.414] bg-white border-[8px] border-black shadow-md hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 overflow-hidden cursor-pointer"
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover"
      />
    </motion.a>
  );
};

export default function ISOCertificatePage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-[#F5F5F5] text-black selection:bg-accent selection:text-black" ref={container}>

      {/* ── 1. Neo-Brutalist Hero ────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center py-24 sm:py-32 overflow-hidden px-6 lg:px-16 bg-black text-white">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent/10 sm:bg-accent/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-10"
          >
            TRUSTED COMPLIANCE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.05em] uppercase leading-[0.88] mb-12"
          >
            Certified<br />
            <span className="text-white/20">Excellence.</span>
          </motion.h1>

          <div className="flex items-center gap-6 sm:gap-8 mt-12">
            <div className="h-px w-16 sm:w-24 bg-white/10" />
            <p className="text-white/40 text-base sm:text-lg max-w-sm font-medium leading-relaxed">
              International benchmarks in quality, safety, and environmental stewardship.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Certificates ──────────────── */}
      <section className="py-24 sm:py-40 w-full px-6 lg:px-16 flex items-center justify-center">
        <div className="max-w-[1500px] w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </section>

      {/* ── 3. Footer Section ──────────────────── */}
      <section className="py-24 sm:py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent/10 sm:bg-accent/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

        <div className="w-full px-6 lg:px-16 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.85] mb-6">
              Verified<br /><span className="text-accent">Standards.</span>
            </h2>
            <p className="text-white/30 text-base sm:text-lg font-medium leading-relaxed">
              DEI VOX India maintains the highest international standards in Quality Management and Safety.
            </p>
          </div>
          <Link href="/contact" className="inline-block">
            <button className="flex items-center gap-4 sm:gap-6 bg-accent text-black px-8 sm:px-10 py-4 rounded-full group hover:scale-105 transition-all shadow-2xl">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] ml-2">Request Audit Report</span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={16} />
              </div>
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
