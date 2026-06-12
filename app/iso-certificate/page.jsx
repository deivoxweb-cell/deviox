"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Award, Download, ShieldCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Magnetic from "@/src/components/Magnetic";

const certificates = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    tagline: "Quality Management",
    image: "/images/cert1.png",
    pdf: "/images/cert-1.pdf",
    icon: <Award size={32} />,
    description: "Standard for quality management systems (QMS), ensuring consistency and exceeding customer expectations.",
    points: ["Repair Excellence", "Mechanical Spares", "Motor Services", "Rotating Equipment Support"],
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015",
    tagline: "Environmental",
    image: "/images/cert2.png",
    pdf: "/images/cert-2.pdf",
    icon: <ShieldCheck size={32} />,
    description: "Outlines requirements for effective EMS, emphasizing our commitment to reducing industrial footprint.",
    points: ["Sustainable Practices", "Resource Efficiency", "Compliance Assurance", "Reduced Impact"],
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018",
    tagline: "Health & Safety",
    image: "/images/cert3.png",
    pdf: "/images/cert-3.pdf",
    icon: <CheckCircle2 size={32} />,
    description: "International standard for OH&S, protecting workers and ensuring a zero-accident industrial environment.",
    points: ["Zero-Accident Protocol", "Worker Wellbeing", "Risk Mitigation", "Certified Safety"],
  },
];

const TiltCertCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative w-full h-auto min-h-[450px] bg-white border border-black/10 rounded-[2rem] p-8 sm:p-10 flex flex-col group cursor-pointer hover:bg-accent hover:border-accent transition-all duration-500 overflow-hidden"
    >
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-accent group-hover:bg-white group-hover:text-black transition-colors">
            {cert.icon}
          </div>
          <span className="text-4xl font-bold text-black/5 group-hover:text-black/10 transition-colors">0{index + 1}</span>
        </div>

        {/* Certificate Image Frame */}
        <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-black/5 mb-8 group-hover:bg-white/20 transition-colors">
          <Image
            src={cert.image}
            alt={cert.title}
            width={500}
            height={700}
            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <p className="text-[10px] font-bold text-black/30 uppercase tracking-[0.4em] mb-2 group-hover:text-black/50 transition-colors">{cert.tagline}</p>
          <h3 className="text-2xl sm:text-3xl font-semibold text-black uppercase tracking-tighter transition-colors">
            {cert.title}
          </h3>
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-8 border-t border-black/5 group-hover:border-black/10 flex justify-end">
           <a 
             href={cert.pdf} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex items-center gap-4 bg-black text-white px-8 py-3 rounded-full hover:scale-105 transition-all group-hover:bg-white group-hover:text-black"
           >
             <span className="text-[10px] font-bold uppercase tracking-widest">View PDF</span>
             <Download size={18} />
           </a>
        </div>
      </div>
    </motion.div>
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
        
        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
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
      <section className="py-40 w-full px-6 lg:px-16">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {certificates.map((cert, i) => (
            <TiltCertCard key={cert.id} cert={cert} index={i} />
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
                DEI VOX PVT. LTD. maintains the highest international standards in Quality Management and Safety.
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
