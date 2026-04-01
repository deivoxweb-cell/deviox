"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Settings, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PowerGenerationPage() {
  return (
    <div className="pt-24 bg-white overflow-hidden">

      {/* ── Hero Banner ──────────────────────────────────── */}
      <section className="bg-primary py-20 industrial-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/80" />
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="w-full px-4 lg:px-10 relative z-10"
        >
          <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">Industries</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-tight mb-6">
            Power<br />
            <span className="text-accent">Generation</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-base leading-relaxed">
            India is powered mainly by Thermal plants! If you are not powered yet, then you are missing out on something big! Power Generation is the need of the hour and with our support in Boiler Water Circulating Pumps strictly, we are ensuring India is never left behind.
          </p>
        </motion.div>
      </section>

      {/* ── Pump Rebuilds and Maintenance ───────────────── */}
      <section className="py-20 w-full px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">Specialized Service</p>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tighter uppercase mb-6">
              Pump Rebuilds &amp; Maintenance
            </h2>
            <div className="w-16 h-1.5 bg-accent rounded-full mb-8" />

            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                BCP is a specialized product which requires deep expertise. First of all, we need to <strong className="text-primary">examine the pump physically</strong>. Then we complete the disassembling process, <strong className="text-primary">analyze to find the root cause</strong>, and complete our documentation and recommendation report properly.
              </p>
              <p>
                Following approval, we <strong className="text-primary">replace, rebuild, or refurbish the parts</strong> properly, making sure not to miss out on the winding stator if required. Then we <strong className="text-primary">balance the rotating assembly</strong>, fix all the sub-assemblies, do the fit and build, and the final test. Your repaired BCP is then ready to ship.
              </p>
              <p>
                Our Quality Assurance process is not complete until we do proper documentation of your BCW pumps and their components. We perform this check throughout our total facility to ensure the work has been done properly, while providing real-time updates to our clients.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-[#f8f9fb] p-4 rounded-xl border border-border">
                <CheckCircle2 size={18} className="text-accent mt-0.5" />
                <span className="text-sm font-bold text-primary uppercase">Meticulous Documentation</span>
              </div>
              <div className="flex items-start gap-3 bg-[#f8f9fb] p-4 rounded-xl border border-border">
                <CheckCircle2 size={18} className="text-accent mt-0.5" />
                <span className="text-sm font-bold text-primary uppercase">Specialized Stator Design</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 h-[500px]"
          >
            <img
              src="/images/pump_rebuild.png"
              alt="Pump Rebuild and Maintenance"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
              <div className="flex items-center gap-3 mb-2 text-accent">
                <ShieldCheck size={20} />
                <h3 className="font-black text-primary uppercase tracking-tight text-sm">Best-in-Class Wet Stators</h3>
              </div>
              <p className="text-xs text-foreground/70 font-medium">
                Our wet stators are the best possible ones present in the market, developed using specific designs and specifications as required by our clients.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Total Restoration Capabilities ──────────────── */}
      <section className="py-20 bg-[#f8f9fb] industrial-grid">
        <div className="w-full px-4 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="p-3 bg-accent/10 rounded-xl text-accent inline-block mb-6"><Settings size={28} /></div>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tighter uppercase mb-6">Total Restoration At Our Facility</h2>
            <p className="text-foreground/70 leading-relaxed text-base mb-10 max-w-3xl mx-auto">
              We are capable of doing total restoration in our facility thanks to the availability of all kinds of equipment and human resources. You can test, refurbish and repair the whole unit or parts of the unit in our facility easily. If required, we can also send our engineers to your units to provide full on-site restoration services for any issues you face with BCW Pumps.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <span className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-black rounded-2xl uppercase tracking-widest text-xs shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer">
                  Request an Inspection
                </span>
              </Link>
              <Link href="/services">
                <span className="px-8 py-4 border-2 border-primary/20 text-primary font-black rounded-2xl hover:bg-primary/5 uppercase tracking-widest text-xs transition-all cursor-pointer">
                  Browse Services
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
