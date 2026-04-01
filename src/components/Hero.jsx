"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-white">
      <section className="relative h-screen mt-24 flex items-center overflow-hidden">
        {/* Background image optimized for LCP */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_industrial.png"
            alt="Industrial Boiler Circulation Pump Background"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
          />
          {/* Primary navy tint */}
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/70 to-transparent" />
        </div>

        <div className="w-full px-4 lg:px-10 relative z-20">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-xs font-black uppercase tracking-[0.3em]">
                BCP Specialists — India
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[1.05] mb-6 uppercase"
            >
              From Maintenance <br className="hidden sm:block" />
              to Repair, Service, <br className="hidden sm:block" />
              Spares, Rewinding —{" "}
              <span className="text-accent">DEI VOX does all!</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-sm sm:text-base text-white/90 font-medium mb-10 leading-relaxed max-w-xl"
            >
              Worried about BCW pump maintenance and repairs? With DEI VOX in the industry
              you never have to worry — we cover maintenance, repair, rewinding, spare parts,
              and full BCP consultancy, all under one roof.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link href="/services">
                <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-accent hover:bg-accent/90 text-zinc-950 font-black rounded-2xl transition-all shadow-xl shadow-accent/30 hover:-translate-y-0.5 uppercase tracking-widest text-sm active:scale-95">
                  Explore Services
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-sm">
                  <Phone size={16} />
                  Get a Free Consultation
                </button>
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10"
            >
              {[
                "ISO 9001:2015 Certified",
                "India's BCP Pioneers",
                "24/7 Service Support",
              ].map((tag) => (
                <div key={tag} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-[10px] font-black text-white/70 uppercase tracking-widest">{tag}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>


      </section>
    </div>

  );
};

export default Hero;
