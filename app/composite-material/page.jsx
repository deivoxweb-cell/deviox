"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ChevronRight, Settings } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/src/components/Magnetic";

const thermoplasticsUse = [
  { industry: "Aviation", desc: "Employed in aircraft bodies, panels, and cabin interiors to reduce overall weight and improve fuel economy." },
  { industry: "Automobiles", desc: "Used in car bodywork, internal structures, and components to boost efficiency by cutting down on weight." },
  { industry: "Defense", desc: "Used for high-strength composite armor layering and radar-absorbent structures." },
  { industry: "Infrastructure", desc: "Utilized in making structural boards and infrastructure components that need to withstand harsh conditions." },
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

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-primary text-white selection:bg-accent selection:text-white pb-32" ref={container}>

      {/* ── 1. Brutalist Hero ────────────────────────────── */}
      <section className="relative min-h-[70svh] lg:min-h-screen flex flex-col justify-center pt-24 pb-24 overflow-hidden px-4 lg:px-10 border-b border-white/5">
        <motion.div
          className="absolute inset-0 z-0 bg-[url('/images/hero_industrial.png')] bg-cover bg-center grayscale mix-blend-overlay opacity-30"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/80 to-transparent z-10 pointer-events-none" />

        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[150px] sm:text-[230px] md:text-[300px] font-black tracking-tighter text-white/1 select-none pointer-events-none uppercase whitespace-nowrap leading-none z-0 translate-x-1/4 opacity-10">
          MATERIAL
        </div>

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <p className="text-accent text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-4">Core Components</p>
          <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-[-0.04em] uppercase leading-[0.9] mb-8">
            Composite<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-orange-600">Material</span>
          </h1>
          <p className="text-white/50 max-w-2xl text-lg md:text-xl font-medium leading-relaxed">
            Your elite solution for Thermoplastic Composites and Industrial Bearings.
            From aerospace tolerances to extreme boiler demands, we supply it all.
          </p>
        </motion.div>
      </section>

      {/* ── 2. Thermoplastics (Glass & Dark Sticky) ──────────────── */}
      <section className="py-32 w-full px-4 lg:px-10 relative z-30">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 relative lg:sticky lg:top-32"
          >
            <div>
              <p className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4">Innovation in Materials</p>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                Thermoplastic<br />
                <span className="text-white/30">Composites</span>
              </h2>
            </div>

            <div className="w-full h-px bg-white/10 my-4" />

            <p className="text-lg md:text-xl font-medium text-white/50 leading-relaxed">
              Formed by blending high-grade thermoplastic polymers with reinforcing carbon, glass, or aramid fibers.
              These materials dominate aerospace and automotive fields due to extreme tensile strength and shocking weight reduction.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {characteristics.map((char, i) => (
                <div key={i} className="flex flex-col gap-2 bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                  <CheckCircle2 size={24} className="text-accent mb-2" />
                  <span className="text-sm font-black text-white uppercase tracking-tight">{char.title}</span>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{char.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] mb-12">
              <img
                src="/images/compositon.jpeg"
                alt="Composite Material Layering"
                className="w-full h-[400px] object-cover grayscale-[0.3]"
              />
              <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
            </div>

            <h3 className="text-2xl font-black text-white tracking-tighter uppercase border-b border-white/10 pb-4">
              Industry Application
            </h3>
            <div className="space-y-4">
              {thermoplasticsUse.map((use, i) => (
                <div key={i} className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-black text-accent uppercase tracking-widest">{use.industry}</h4>
                    <ChevronRight className="text-white/20 group-hover:text-accent transition-colors" size={16} />
                  </div>
                  <p className="text-sm font-medium text-white/50">{use.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 3. Bearing Supply (Light Callout Layout) ─────────────── */}
      <section className="py-32 bg-[#fafafa] relative min-h-screen flex items-center border-y border-black/5">
        <div className="max-w-[1400px] mx-auto w-full px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="w-20 h-20 bg-primary/5 border border-black/5 rounded-full flex items-center justify-center text-accent mb-8 shadow-sm">
              <Settings size={32} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase leading-[0.9] mb-8">
              All Types of<br />
              <span className="text-primary/30">Bearings.</span>
            </h2>
            <div className="space-y-6 text-lg text-primary/70 font-bold leading-relaxed">
              <p>
                We specialize in providing high-tolerance bearings. From high-speed aviation performance to heavy-load industrial endurance, we supply the exact mechanical component required.
              </p>
              <p className="text-primary font-black uppercase tracking-tight">
                Ball bearings, roller bearings, thrust bearings, needle bearings, precision taper bearings, and spherical bearings.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <Magnetic intensity={0.4}>
                <Link href="/contact" className="inline-block">
                  <button className="relative overflow-hidden group px-12 h-20 min-w-[260px] bg-accent text-zinc-950 font-black rounded-full transition-all shadow-xl hover:shadow-2xl uppercase tracking-[0.2em] text-[12px] active:scale-95">
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                      <span className="absolute transition-transform duration-500 group-hover:-translate-y-20">Request Specs</span>
                      <span className="absolute translate-y-20 transition-transform duration-500 group-hover:translate-y-0">Contact Sales</span>
                    </div>
                    <div className="absolute inset-0 bg-white transition-transform duration-500 ease-out origin-bottom scale-y-0 group-hover:scale-y-100 opacity-20 z-0" />
                  </button>
                </Link>
              </Magnetic>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden border border-black/10 shadow-xl group flex flex-col lg:block bg-gray-50">
              <img
                src="/images/product_motor.png"
                alt="Industrial Bearings"
                className="w-full h-80 lg:h-[600px] object-cover grayscale-[0.3] group-hover:grayscale-0 lg:group-hover:scale-105 transition-all duration-1000"
              />

              {/* Mobile-Stacked / Desktop-Floating Quote Card */}
              <div className="relative lg:absolute lg:bottom-8 lg:left-8 lg:right-8 xl:left-1/4 bg-gray-50/80 lg:bg-gray-50/60 backdrop-blur-2xl p-8 rounded-b-[3rem] lg:rounded-3xl border-t lg:border border-black/10 shadow-xl">
                <p className="text-[10px] font-black tracking-widest uppercase text-accent mb-4">Quality Promise</p>
                <p className="text-sm md:text-base font-medium text-primary/80 italic leading-relaxed">
                  "Whether you’re looking for standard, miniature, or high-performance composites and bearings, you can count on absolute reliability and top-notch precision."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
