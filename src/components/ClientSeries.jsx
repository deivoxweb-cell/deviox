"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/src/components/ScrollReveal";

const LOGOS = [
  { name: "DEI VOX", color: "#51139A", style: "font-bold tracking-tighter text-2xl" },
  { name: "SIEMENS", color: "#009999", style: "font-bold italic text-2xl" },
  { name: "ABB", color: "#ff000f", style: "font-bold text-2xl" },
  { name: "GE", color: "#005eb8", style: "font-serif italic text-3xl" },
  { name: "BHEL", color: "#1a1a2e", style: "font-bold tracking-widest text-2xl" },
  { name: "KSB", color: "#51139A", style: "font-bold tracking-wider text-2xl" },
  { name: "SULZER", color: "#333333", style: "font-bold tracking-wide text-xl" },
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
    <div className="flex items-center gap-20 pr-20">
      {LOGOS.map((logo) => (
        <span
          key={logo.name}
          className={`${logo.style} opacity-30 hover:opacity-80 transition-all duration-300 whitespace-nowrap cursor-default select-none`}
          style={{ color: logo.color }}
        >
          {logo.name}
        </span>
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} className="py-20 bg-white border-y border-black/[0.04] overflow-hidden relative">
      {/* Faint grid overlay */}
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3 mb-14"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-linear-to-r from-transparent to-accent/40" />
            <p className="text-[10px] font-bold text-primary/35 tracking-[0.35em] uppercase">Trusted By Industry Leaders</p>
            <div className="h-px w-10 bg-linear-to-l from-transparent to-accent/40" />
          </div>
          <div className="flex items-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`rounded-full bg-accent/30 ${i === 1 ? "w-4 h-1" : "w-1.5 h-1.5"}`} />
            ))}
          </div>
        </motion.div>

        {/* Ticker */}
        <div className="relative">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden w-full group">
            <motion.div
              style={{ y: tickerY }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex items-center w-max group-hover:[animation-play-state:paused]"
            >
              {ticker}{ticker}
            </motion.div>
          </div>
        </div>

        {/* GST tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-[#f8f6ff]">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[9px] font-bold text-accent uppercase tracking-widest">GST Compliant — GSTIN 29AAKCD5641B1Z9</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSeries;
