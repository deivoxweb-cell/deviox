"use client";

import React from "react";
import Image from "next/image";

const ClientSeries = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="w-full px-4 lg:px-10">
        <p className="text-center text-[10px] font-black text-secondary tracking-[0.3em] uppercase mb-8">
          CLIENT SERIES
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Using text-based placeholders for now, can be replaced with real logos */}
          <div className="text-xl font-black text-primary tracking-tighter">DEIVOX</div>
          <div className="text-xl font-bold italic text-gray-400">SIEMENS</div>
          <div className="text-xl font-black text-gray-400">ABB</div>
          <div className="text-xl font-serif text-gray-400">GE</div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center text-[10px] font-black text-accent">✓</div>
            <div className="text-[10px] font-black text-secondary tracking-widest uppercase">GST COMPLIANT</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSeries;
