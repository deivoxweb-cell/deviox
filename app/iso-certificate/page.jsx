"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Award, Download, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/src/components/Magnetic";

const certificates = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    tagline: "Quality Management System",
    image: "/images/cert1.png",
    pdf: "/images/cert-1.pdf",
    icon: <Award size={32} />,
    description: "The primary standard for quality management systems (QMS), ensuring we consistently provide products and services that exceed customer and regulatory requirements.",
    points: ["Repair Excellence", "Mechanical Spares", "Motor Services", "Rotating Equipment Support"],
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015",
    tagline: "Environmental Management",
    image: "/images/cert2.png",
    pdf: "/images/cert-2.pdf",
    icon: <ShieldCheck size={32} />,
    description: "Outlines the requirements for an effective environmental management system (EMS), emphasizing our aggressive commitment to reducing our environmental footprint.",
    points: ["Sustainable Practices", "Resource Efficiency", "Compliance Assurance", "Reduced Impact"],
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018",
    tagline: "Occupational Health",
    image: "/images/cert3.png",
    pdf: "/images/cert-3.pdf",
    icon: <CheckCircle2 size={32} />,
    description: "The international standard for occupational health and safety (OH&S), designed to protect workers and visitors from work-related accidents and diseases.",
    points: ["Zero-Accident Protocol", "Worker Wellbeing", "Risk Mitigation", "Certified Safety"],
  },
];

// Interactive 3D Physics Card
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
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full h-[600px] rounded-[3rem] bg-white/5 border border-white/10 p-8 flex flex-col justify-between group cursor-pointer shadow-[0_0_60px_rgba(0,0,0,0.5)] lg:h-[700px]"
    >
      {/* Dynamic Glow Layer */}
      <div className="absolute inset-0 bg-linear-to-b from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3rem]" />

      {/* Content Wrapper physically separated for 3D effect */}
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col h-full pointer-events-none">

        {/* Top Header */}
        <div className="flex justify-between items-start mb-12">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex flex-col items-center justify-center text-accent">
              {cert.icon}
            </div>
            <div>
              <p className="text-[9px] font-black text-white/50 uppercase tracking-[0.3em] mb-1">Standard</p>
              <h3 className="text-xl lg:text-3xl font-black text-white uppercase tracking-tighter">{cert.title}</h3>
            </div>
          </div>
          <div className="text-5xl lg:text-7xl font-black text-white-[0.05] tracking-tighter mix-blend-overlay">
            0{index + 1}
          </div>
        </div>

        {/* Certificate Image Mockup with extreme shadow */}
        <div className="flex-1 w-full bg-black/40 rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] mb-8 relative">
          <img src={cert.image} alt={cert.title} className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-80 group-hover:mix-blend-normal transition-all duration-700" />
          <div className="absolute inset-0 bg-linear-to-tr from-primary/80 via-transparent to-transparent opacity-80" />
        </div>

        {/* Badge & Points */}
        <div className="space-y-4">
          <p className="text-xs font-black text-accent uppercase tracking-[0.2em]">{cert.tagline}</p>
          <p className="text-sm font-medium text-white/60 line-clamp-2 md:line-clamp-3 leading-relaxed">{cert.description}</p>
        </div>

      </div>

      {/* Interactive Download Action physically floating higher */}
      <div className="mt-8 flex justify-end" style={{ transform: "translateZ(80px)" }}>
        <a
          href={cert.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300 pointer-events-auto"
        >
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

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-primary text-white selection:bg-accent selection:text-white pb-32 min-h-screen" ref={container}>

      {/* ── 1. Brutalist Hero with 3D Entrance ────────────────────── */}
      <section className="relative md:min-h-[95vh] min-h-[60vh] flex flex-col justify-center pt-24 pb-24 overflow-hidden px-4 lg:px-10 border-b border-white/5 perspective-1000">
        {/* Massive Background Typography Mask with Parallax */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]), opacity: useTransform(scrollYProgress, [0, 0.5], [0.1, 0]) }}
          className="absolute top-1/2 left-0 -translate-y-1/2 text-[150px] sm:text-[250px] md:text-[350px] font-black tracking-tighter text-white select-none pointer-events-none uppercase whitespace-nowrap leading-none z-0 translate-x-1/4 opacity-10 blur-sm"
        >
          ISO CERT
        </motion.div>

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-accent text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-4"
          >
            Verified Compliance
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, rotateX: 20, y: 40 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-[8.5rem] font-black tracking-[-0.04em] uppercase leading-[0.8] mb-8"
            >
              Certified<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-orange-600">Excellence</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/50 max-w-2xl text-lg md:text-xl font-medium leading-relaxed"
          >
            DEI VOX India maintains the highest international standards in quality, environment, and industrial safety. Lead with trust.
          </motion.p>
        </motion.div>
      </section>

      {/* ── 2. 3D Tilt Certificates Gallery ──────────────── */}
      <section className="py-32 w-full px-4 lg:px-10 relative z-30" style={{ perspective: "2000px" }}>
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {certificates.map((cert, i) => (
            <TiltCertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </section>

      {/* ── 3. Brutalist Footer Divider ──────────────────── */}
      <div className="w-full px-4 lg:px-10 max-w-[1600px] mx-auto mt-20">
        <div className="w-full h-px bg-white/10" />
        <div className="pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-black text-white/30 uppercase tracking-tighter">
            Verified Compliance
          </h2>
          <Magnetic intensity={0.4}>
            <Link href="/contact" className="inline-block">
              <button className="px-12 h-20 min-w-[260px] bg-white text-primary font-black rounded-full transition-all hover:bg-accent hover:text-white uppercase tracking-[0.2em] text-[12px] active:scale-95 shadow-xl">
                Request Audit Report
              </button>
            </Link>
          </Magnetic>
        </div>
      </div>

    </div>
  );
}
