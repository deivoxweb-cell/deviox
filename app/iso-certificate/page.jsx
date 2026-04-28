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
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left / rect.width - 0.5);
    y.set(e.clientY - rect.top / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative w-full h-[650px] rounded-[3.5rem] bg-white border border-black/5 p-12 flex flex-col justify-between group cursor-pointer shadow-2xl"
    >
      <div style={{ transform: "translateZ(40px)" }} className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-16">
          <div className="w-20 h-20 bg-black rounded-[2rem] flex items-center justify-center text-accent">
            {cert.icon}
          </div>
          <span className="text-6xl font-black text-black/5 tracking-tighter">0{index + 1}</span>
        </div>

        <div className="flex-1 w-full bg-black/[0.03] rounded-[2.5rem] overflow-hidden border border-black/5 mb-10 relative">
          <Image
            src={cert.image}
            alt={cert.title}
            width={500}
            height={700}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-white/80 via-transparent to-transparent" />
        </div>

        <div>
          <p className="text-[11px] font-black text-accent uppercase tracking-[0.4em] mb-4">{cert.tagline}</p>
          <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-4">{cert.title}</h3>
          <p className="text-sm font-medium text-black/40 leading-relaxed">{cert.description}</p>
        </div>
      </div>

      <div style={{ transform: "translateZ(60px)" }} className="flex justify-end mt-8">
        <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all">
          <Download size={24} />
        </a>
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
      <section className="relative min-h-screen flex flex-col justify-center py-32 overflow-hidden px-6 lg:px-16 bg-black text-white">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        
        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent text-[11px] font-black uppercase tracking-[0.5em] mb-10"
          >
            TRUSTED COMPLIANCE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] mb-12"
          >
            Certified<br />
            <span className="text-white/20">Excellence.</span>
          </motion.h1>

          <div className="flex items-center gap-8 mt-12">
             <div className="h-px w-24 bg-white/10" />
             <p className="text-white/40 text-lg max-w-sm font-medium leading-relaxed">
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
      <section className="py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="w-full px-6 lg:px-16 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
                Verified<br /><span className="text-accent">Standards.</span>
              </h2>
              <p className="text-white/30 text-lg font-medium leading-relaxed">
                DEI VOX India maintains the highest international standards in Quality Management and Safety.
              </p>
           </div>
           <Link href="/contact" className="inline-block">
              <button className="flex items-center gap-6 bg-accent text-black px-10 py-4 rounded-full group hover:scale-105 transition-all shadow-2xl">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] ml-2">Request Audit Report</span>
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={18} />
                </div>
              </button>
           </Link>
        </div>
      </section>

    </div>
  );
}
