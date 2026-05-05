"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ChevronRight, Settings, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Magnetic from "@/src/components/Magnetic";

const thermoplasticsUse = [
  { industry: "Aviation", desc: "Employed in aircraft bodies, panels, and cabin interiors to reduce overall weight." },
  { industry: "Automobiles", desc: "Used in car bodywork and internal structures to boost efficiency by cutting down weight." },
  { industry: "Defense", desc: "Used for high-strength composite armor layering and radar-absorbent structures." },
  { industry: "Infrastructure", desc: "Utilized in structural boards and components that withstand harsh conditions." },
];

const characteristics = [
  { title: "Low Weight", desc: "Lighter than metals." },
  { title: "High Strength", desc: "Fiber reinforced." },
  { title: "Impact Resist", desc: "Resilient to stress." },
  { title: "Eco-Friendly", desc: "Fully recyclable." },
  { title: "Chemical Safe", desc: "Anti-corrosive." },
  { title: "Moisture Safe", desc: "Maintains integrity." },
];

export default function CompositeMaterialPage() {
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
            className="text-accent text-[11px] font-bold uppercase tracking-[0.5em] mb-10"
          >
            MATERIAL ENGINEERING
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-[8rem] font-bold tracking-[-0.05em] uppercase leading-[0.85] mb-12"
          >
            Composite<br />
            <span className="text-white/20">Solutions.</span>
          </motion.h1>

          <div className="flex items-center gap-8 mt-12">
             <div className="h-px w-24 bg-white/10" />
             <p className="text-white/40 text-lg max-w-sm font-medium leading-relaxed">
               Next-generation Thermoplastic Composites and Industrial Bearings for elite engineering demands.
             </p>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Thermoplastics ──────────────── */}
      <section className="py-40 w-full px-6 lg:px-16 bg-black text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-accent text-[11px] font-bold uppercase tracking-[0.4em] mb-6">INNOVATION</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-[0.9] mb-12">
              Thermoplastic<br />
              <span className="text-white/20">Composites</span>
            </h2>
            <p className="text-lg font-medium text-white/40 leading-relaxed mb-12">
              Blending high-grade polymers with reinforcing carbon and glass fibers. Lighter than metal, stronger than steel.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {characteristics.map((char, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-[2rem] border border-white/5">
                  <CheckCircle2 size={20} className="text-accent mb-4" />
                  <p className="text-xs font-bold text-white uppercase tracking-widest">{char.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="relative rounded-[3rem] overflow-hidden border border-white/5 aspect-[4/3]">
              <Image src="/images/compositon.jpeg" alt="Composites" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="space-y-4">
              {thermoplasticsUse.map((use, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-accent hover:text-black transition-all group">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest">{use.industry}</h4>
                    <ArrowUpRight size={18} />
                  </div>
                  <p className="text-sm font-medium opacity-50 group-hover:opacity-100">{use.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Bearings ─────────────── */}
      <section className="py-40 bg-white text-black relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-accent mb-10">
              <Settings size={28} />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tighter uppercase leading-[0.9] mb-10">
              High-Precision<br />
              <span className="text-black/20">Bearings.</span>
            </h2>
            <p className="text-lg font-medium text-black/50 leading-relaxed mb-12">
              Supplying high-tolerance mechanical components for aviation and industrial load endurance.
            </p>
            <Link href="/contact">
              <button className="px-12 py-8 bg-black text-white font-bold rounded-full transition-all hover:bg-accent hover:text-black uppercase tracking-widest text-sm shadow-2xl">
                Request Specifications
              </button>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-[4rem] overflow-hidden border border-black/5 aspect-video shadow-2xl">
              <Image src="/images/product_motor.png" alt="Bearings" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
