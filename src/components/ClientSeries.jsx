"use client";
import React from "react";
import { motion } from "framer-motion";

const ClientSeries = () => {
  const logos = (
    <div className="flex items-center gap-16 pr-16 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
      <div className="text-3xl font-black text-primary tracking-tighter mix-blend-multiply">DEI VOX</div>
      <div className="text-3xl font-black italic text-[#009999] mix-blend-multiply drop-shadow-sm">SIEMENS</div>
      <div className="text-3xl font-black text-[#ff000f] mix-blend-multiply drop-shadow-sm">ABB</div>
      <div className="text-4xl font-serif text-[#005eb8] mix-blend-multiply drop-shadow-sm italic">GE</div>
      <div className="text-3xl font-black text-primary mix-blend-multiply drop-shadow-sm tracking-widest">BHEL</div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border-[3px] border-accent flex items-center justify-center text-xs font-black text-accent drop-shadow-md">✓</div>
        <div className="text-xs font-black text-primary tracking-widest uppercase">GST COMPLIANT</div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-[#f8f9fa] border-y border-black/5 overflow-hidden">
      <div className="w-full relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-black text-primary/40 tracking-[0.4em] uppercase mb-16"
        >
          TRUSTED BY INDUSTRY LEADERS
        </motion.p>
        
        <div className="flex overflow-hidden w-full group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center w-max group-hover:[animation-play-state:paused]"
          >
            {logos}
            {logos}
            {logos}
            {logos}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientSeries;
