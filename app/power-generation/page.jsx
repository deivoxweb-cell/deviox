"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ShieldCheck, Settings, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Magnetic from "@/src/components/Magnetic";

export default function PowerGenerationPage() {
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
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent text-[11px] font-black uppercase tracking-[0.5em] mb-10"
          >
            INDUSTRIAL SECTORS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] mb-12"
          >
            Power<br />
            <span className="text-white/20">Generation.</span>
          </motion.h1>

          <div className="flex items-center gap-8 mt-12">
             <div className="h-px w-24 bg-white/10" />
             <p className="text-white/40 text-lg max-w-sm font-medium leading-relaxed">
               Expert Boiler Water Circulating Pump solutions ensuring reliability for India's thermal power infrastructure.
             </p>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Pump Rebuilds ────────────────── */}
      <section className="py-40 w-full px-6 lg:px-16 bg-black text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="lg:order-2 relative">
            <div className="relative rounded-[4rem] overflow-hidden border border-white/5 aspect-square group shadow-2xl">
              <Image src="/images/pump_rebuild.png" alt="Pump Rebuild" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-10 right-10 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10">
                <div className="flex items-center gap-4 mb-4 text-accent">
                  <ShieldCheck size={24} />
                  <h3 className="font-black text-white uppercase tracking-widest text-sm">Best-in-Class Stators</h3>
                </div>
                <p className="text-sm text-white/50 font-medium leading-relaxed">
                  Developed using high-tolerance specifications required by supercritical thermal plants.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:order-1">
            <p className="text-accent text-[11px] font-black uppercase tracking-[0.4em] mb-6">SPECIALIZED SERVICES</p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-12">
              Pump<br />
              <span className="text-white/20">Rebuilds & Ops</span>
            </h2>
            <div className="space-y-8 text-lg font-medium text-white/40 leading-relaxed mb-12">
              <p>
                BCP is a highly specialized product requiring deep metallurgical expertise. We physically examine, analyze, and document root causes before intervention.
              </p>
              <p>
                We <strong className="text-white uppercase">Replace & Refurbish</strong> with micron-level precision, ensuring absolute stator integrity.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Documentation", "Stator Design", "Dynamic Balance", "Performance Test"].map((item) => (
                <div key={item} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span className="text-[10px] font-black text-white tracking-widest uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Total Restoration ──────────────── */}
      <section className="py-40 bg-white text-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-accent mx-auto mb-10">
            <Settings size={28} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase leading-[0.9] mb-8">
            Total Restoration<br />
            <span className="text-black/20">Facility.</span>
          </h2>
          <p className="text-black/50 text-lg md:text-xl font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
            From complete pump body restoration to high-tech motor rewinding, we house the equipment to bring BCP back to peak performance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
             <Link href="/contact">
                <button className="px-16 py-8 bg-black text-white font-black rounded-full transition-all hover:bg-accent hover:text-black uppercase tracking-widest text-sm shadow-2xl">
                  Request Inspection
                </button>
             </Link>
             <Link href="/services">
                <button className="px-16 py-8 border-2 border-black text-black font-black rounded-full transition-all hover:bg-black hover:text-white uppercase tracking-widest text-sm">
                  View Services
                </button>
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
