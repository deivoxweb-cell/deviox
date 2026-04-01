"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ShieldCheck, Settings } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/src/components/Magnetic";

export default function PowerGenerationPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-primary text-white selection:bg-accent selection:text-white pb-32" ref={container}>

      {/* ── 1. Brutalist Hero with 3D Entrance ────────────────────── */}
      <section className="relative min-h-[85vh] flex flex-col justify-center py-20 overflow-hidden px-4 lg:px-10 perspective-1000">
        {/* Massive Background Typography Mask with Parallax */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]), opacity: useTransform(scrollYProgress, [0, 0.5], [0.1, 0]) }}
          className="absolute top-1/2 left-0 -translate-y-1/2 text-[180px] sm:text-[300px] md:text-[400px] font-black tracking-tighter text-white select-none pointer-events-none uppercase whitespace-nowrap leading-none z-0 translate-x-1/4 opacity-10 blur-sm"
        >
          POWER
        </motion.div>

        <motion.div
          className="absolute inset-0 z-0 bg-[url('/images/hero_industrial.png')] bg-cover bg-center grayscale mix-blend-overlay opacity-30"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/80 to-transparent z-10 pointer-events-none" />

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-accent text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-4"
          >
            Industries
          </motion.p>
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ opacity: 0, rotateX: 20, y: 40 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-[-0.04em] uppercase leading-[0.9] mb-8"
            >
              Power<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-orange-600">Generation</span>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/50 max-w-2xl text-lg md:text-xl font-medium leading-relaxed"
          >
            India is powered mainly by Thermal plants! If you are not powered yet, you are missing out.
            With our absolute expertise in Boiler Water Circulating Pumps, we ensure India is never left behind.
          </motion.p>
        </motion.div>
      </section>

      {/* ── 2. Pump Rebuilds (Glassmorphic Tilt) ────────────────── */}
      <section className="py-32 w-full px-4 lg:px-10 relative z-30">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:order-2 relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 h-[600px] group">
              <img
                src="/images/pump_rebuild.png"
                alt="Pump Rebuild"
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                <div className="flex items-center gap-4 mb-3 text-accent">
                  <ShieldCheck size={28} />
                  <h3 className="font-black text-white uppercase tracking-tight text-lg">Best-in-Class Wet Stators</h3>
                </div>
                <p className="text-sm text-white/60 font-medium leading-relaxed">
                  Our wet stators are the best available in the market, developed using specific designs and extreme high-tolerance specifications required by thermal plants.
                </p>
              </div>
            </div>
            {/* Outline decorative element */}
            <div className="absolute -z-10 inset-0 border border-accent/20 rounded-[3rem] translate-x-4 translate-y-4 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:order-1 flex flex-col gap-8"
          >
            <div>
              <p className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4">Specialized Service</p>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                Pump<br />
                <span className="text-white/30">Rebuilds & Maintenance</span>
              </h2>
            </div>

            <div className="w-full h-px bg-white/10 my-4" />

            <div className="space-y-6 text-lg md:text-xl font-medium text-white/50 leading-relaxed">
              <p>
                BCP is a highly specialized product requiring deep metallurgical and mechanical expertise. We physically examine the pump on-site, analyze to find the root cause of failure, and complete our documentation before intervention.
              </p>
              <p>
                We <strong className="text-white">replace, rebuild, or refurbish parts</strong> with micron-level precision, ensuring we evaluate the winding stator. The rotating assembly is dynamically balanced before final test and shipping.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <CheckCircle2 size={24} className="text-accent" />
                <span className="text-xs font-black text-white tracking-widest uppercase">Meticulous Documentation</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <CheckCircle2 size={24} className="text-accent" />
                <span className="text-xs font-black text-white tracking-widest uppercase">Specialized Stator Design</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 3. Total Restoration (Light CTA Block) ──────────────── */}
      <section className="py-32 bg-[#fafafa] relative overflow-hidden flex items-center justify-center min-h-[60vh] border-y border-black/5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full px-4 lg:px-10 max-w-5xl mx-auto text-center relative z-10"
        >
          <div className="w-20 h-20 bg-primary/5 border border-black/5 rounded-full flex items-center justify-center text-accent mx-auto mb-8 shadow-sm">
            <Settings size={32} />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase leading-[0.9] mb-8">
            Total Restoration<br />
            <span className="text-accent">At Our Facility.</span>
          </h2>

          <p className="text-primary/60 text-lg md:text-xl font-bold leading-relaxed mb-16 max-w-3xl mx-auto">
            From complete pump body restoration to high-tech motor rewinding, we house the equipment and talent to bring any BCP back to peak factory performance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Magnetic intensity={0.4}>
              <Link href="/contact" className="inline-block">
                <button className="relative overflow-hidden group px-12 h-20 min-w-[260px] bg-accent text-zinc-950 font-black rounded-full transition-all shadow-xl hover:shadow-2xl uppercase tracking-[0.2em] text-[12px] active:scale-95">
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <span className="absolute transition-transform duration-500 group-hover:-translate-y-20">Request Inspection</span>
                    <span className="absolute translate-y-20 transition-transform duration-500 group-hover:translate-y-0">Go to Contact</span>
                  </div>
                  <div className="absolute inset-0 bg-white transition-transform duration-500 ease-out origin-bottom scale-y-0 group-hover:scale-y-100 opacity-20 z-0" />
                </button>
              </Link>
            </Magnetic>

            <Magnetic intensity={0.2}>
              <Link href="/services">
                <span className="px-12 h-20 min-w-[260px] flex items-center justify-center border border-primary/20 text-primary font-black rounded-full hover:bg-primary/5 uppercase tracking-[0.2em] text-[12px] transition-all cursor-pointer shadow-sm">
                  Browse Services
                </span>
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
