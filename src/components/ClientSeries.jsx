"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/src/components/ScrollReveal";

const LOGOS = [
  { name: "DEI VOX", color: "#51139A", style: "font-bold tracking-tighter text-3xl" },
  { name: "SIEMENS", color: "#009999", style: "font-bold italic text-3xl" },
  { name: "ABB", color: "#ff000f", style: "font-bold text-3xl" },
  { name: "GE", color: "#005eb8", style: "font-serif italic text-4xl" },
  { name: "BHEL", color: "#1a1a2e", style: "font-bold tracking-widest text-3xl" },
  { name: "KSB", color: "#51139A", style: "font-bold tracking-wider text-3xl" },
  { name: "SULZER", color: "#333333", style: "font-bold tracking-wide text-2xl" },
];

const ClientSeries = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  /* Ticker drifts slightly on parallax for depth */
  const tickerY = useTransform(scrollYProgress, [0, 1], ["12px", "-12px"]);
  const ticker = (
    <div className="flex items-center gap-24 pr-24">
      {LOGOS.map((logo, index) => (
        <div key={`${logo.name}-${index}`} className="relative group cursor-default select-none flex items-center justify-center">
          {/* Grayscale Base */}
          <span className={`${logo.style} text-black/20 group-hover:opacity-0 transition-opacity duration-500 whitespace-nowrap`}>
            {logo.name}
          </span>
          {/* Colored Overlay on Hover */}
          <span 
            className={`${logo.style} absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap`}
            style={{ color: logo.color }}
          >
            {logo.name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} className="py-24 bg-white border-y border-black/[0.04] overflow-hidden relative">
      <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mb-24"
        >
          <div className="flex items-center gap-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-black/20" />
            <p className="text-[10px] font-bold text-black/40 tracking-[0.4em] uppercase">Trusted By Industry Leaders</p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-black/20" />
          </div>
        </motion.div>

        {/* Ticker */}
        <div className="relative">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden w-full py-4 group">
            <motion.div
              style={{ y: tickerY }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex items-center w-max group-hover:[animation-play-state:paused]"
            >
              {ticker}{ticker}
            </motion.div>
          </div>
        </div>

        {/* GST tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-24"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-black/10 bg-white hover:border-accent/30 hover:bg-[#f8f6ff] transition-all duration-500 group cursor-default shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold text-black/50 group-hover:text-black uppercase tracking-[0.2em] transition-colors">GST Compliant — GSTIN 29AAKCD5641B1ZQ</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSeries;
