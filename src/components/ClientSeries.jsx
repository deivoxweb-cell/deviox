"use client";
import React from "react";
import { motion } from "framer-motion";

const ClientSeries = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="w-full px-4 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-black text-secondary tracking-[0.3em] uppercase mb-10"
        >
          TRUSTED BY INDUSTRY LEADERS
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        >
          <div className="text-2xl font-black text-primary tracking-tighter">DEI VOX</div>
          <div className="text-2xl font-bold italic text-gray-400">SIEMENS</div>
          <div className="text-2xl font-black text-gray-400">ABB</div>
          <div className="text-2xl font-serif text-gray-400">GE</div>
          <div className="text-2xl font-black text-gray-400">BHEL</div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center text-[10px] font-black text-accent">✓</div>
            <div className="text-[10px] font-black text-secondary tracking-widest uppercase">GST COMPLIANT</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSeries;
