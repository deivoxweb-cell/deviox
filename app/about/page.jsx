"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { CheckCircle2, Award, Users, Lightbulb, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/src/components/Magnetic";


const capabilities = [
  "In-Situ Machining",
  "BCP Overhauling",
  "Motor Rewinding",
  "Spare Parts Selling",
  "Retrofit & Reverse Engineering",
  "On-Site Troubleshooting",
  "BCP Consultancy (Sales & Marketing)",
  "Direct Customer Support"
];

const team = [
  { name: "Mr. Kunal", role: "CEO & MD", qualification: "PMP, PMI USA, MBA, B.E. Mechanical", tag: "Founder", email: "sales@deivox.co.in", phone: "+917428200229" },
  { name: "Mr. Ravi", role: "Head Technical", qualification: "M.Tech. Thermal, B.E. Mechanical", tag: "Founder" },
  { name: "Satya Narayan Sharma", role: "Head – Sales", qualification: "", tag: "" },
  { name: "Vijay Nehra", role: "Manager – Service", qualification: "", tag: "" },
  { name: "Pankaj Kumar", role: "Manager – Dispatch", qualification: "", tag: "" },
  { name: "Ramesh Yadav", role: "Manager Procurement", qualification: "", tag: "" },
  { name: "Abhishek Singh", role: "Executive Engineer", qualification: "", tag: "" },
  { name: "Namita Singh", role: "Manager – Sales", qualification: "", tag: "" },
  { name: "Ritesh", role: "Manager (HR)", qualification: "", tag: "" },
  { name: "Rama", role: "Manager (Accounts)", qualification: "", tag: "" },
];

export default function AboutPage() {
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
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent/10 sm:bg-accent/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-12 bg-accent" />
            <p className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">
              THE GENESIS OF DEI VOX
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-[72px] font-black tracking-[-0.05em] uppercase leading-[0.88] mb-12"
          >
            Pioneering<br />
            <span className="text-white/20">Industrial.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-12 sm:items-center mt-12"
          >
            <div className="max-w-xs">
              <p className="text-white/40 text-sm font-medium leading-relaxed">
                Pioneering industrial reliability through specialized engineering and BCP expertise.
              </p>
            </div>
            <div className="h-px w-24 bg-white/10 hidden sm:block" />
            <div>
              <p className="text-4xl font-black text-accent tracking-tighter">ESTD. 2014</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 right-12 flex items-center gap-6">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Scroll Down</span>
          <div className="w-12 h-px bg-white/20" />
        </div>
      </section>

      {/* ── 2. The Mission ──────────────── */}
      <section className="py-24 sm:py-40 w-full px-6 lg:px-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-black rounded-[2.5rem] sm:rounded-[4rem] p-12 sm:p-20 flex items-center justify-center border border-black/5 shadow-2xl">
              <Image
                src="/images/Logo.png"
                alt="DEI VOX Logo"
                width={220}
                height={110}
                className="object-contain brightness-0 invert"
              />
            </div>
            {/* Absolute Stat */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 bg-accent p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl">
              <p className="text-3xl sm:text-5xl font-black text-black tracking-tighter">10+</p>
              <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-black/60 mt-1">Years Experience</p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-12 pt-10">
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-4 sm:mb-12 leading-[0.9]">
              The Trusted<br /><span className="text-black/20">Industrial Partner.</span>
            </h2>
            <div className="flex flex-col gap-8">
              <p className="text-xl font-medium text-black/60 leading-relaxed max-w-3xl">
                If you are searching for a specialized BCP partner, the search ends here. <strong className="text-black">DEI VOX INDIA</strong> operates at full capacity with direct support from BCP OEMs, delivering specialized BCW Pump services and high-precision re-engineering.
              </p>
              <p className="text-lg font-medium text-black/40 leading-relaxed max-w-3xl">
                As the trusted technical consultants for India's BCW Pump sector, we bridge the gap between complex engineering and field reliability. Our facility is open for technical audits, showcasing our expertise in manufacturing and repairing BCPs, critical motors, and MAG drives for utilities and heavy industry. With over 20 years of specialized experience in rotating equipment, we don't just repair—we optimize.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
              <div className="p-6 sm:p-10 bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-black/5">
                <CheckCircle2 className="text-accent mb-4 sm:mb-6" size={24} />
                <p className="text-xs sm:text-sm font-medium text-black/60 leading-relaxed">
                  OEM-quality spare parts and advanced reverse engineering that meets global standards.
                </p>
              </div>
              <div className="p-6 sm:p-10 bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-black/5">
                <Award className="text-accent mb-4 sm:mb-6" size={24} />
                <p className="text-xs sm:text-sm font-medium text-black/60 leading-relaxed">
                  Uncompromising performance at domestic pricing, ensuring maximum ROI for your facility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Origin Story ─────────────── */}
      <section className="py-24 sm:py-40 w-full px-6 lg:px-16 bg-white relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex items-center gap-6 mb-12 sm:mb-20">
            <div className="h-px w-12 sm:w-16 bg-black" />
            <p className="text-black text-[10px] font-black uppercase tracking-[0.4em]">THE ORIGIN STORY</p>
          </div>

          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tighter leading-[1.1] max-w-6xl">
            Born from a vision to empower India's power sector through domestic engineering excellence. We <span className="text-accent">architect the future</span> of fluid reliability.
          </h2>
        </div>
      </section>

      {/* ── 4. Capabilities (Industrial Grid) ─────────────────── */}
      <section className="py-24 sm:py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />

        <div className="w-full px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl mb-12 sm:mb-24">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="h-px w-8 sm:w-12 bg-accent" />
              <p className="text-accent text-[11px] font-black uppercase tracking-[0.5em]">TECHNICAL DOMAIN</p>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-[-0.05em] uppercase leading-[0.88]">
              Core<br />Engineering.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 sm:p-10 bg-white/[0.03] border border-white/5 rounded-[2rem] sm:rounded-[2.5rem] hover:bg-accent hover:border-accent transition-all duration-500 cursor-pointer"
              >
                <div className="flex flex-col justify-between h-full">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white group-hover:text-black leading-tight mb-8">
                    {cap}
                  </h3>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-black group-hover:text-black transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Meet The Team (Technical Directory) ─────────────────────── */}
      <section className="py-24 sm:py-40 bg-white">
        <div className="w-full px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24 gap-12 border-b-4 border-black pb-12">
            <div className="max-w-2xl">
              <p className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-6">THE HUMAN ENGINE</p>
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-black tracking-[-0.05em] uppercase leading-[0.85]">
                Meet the<br />Team.
              </h2>
            </div>
            <p className="text-black/40 text-lg max-w-md font-medium leading-relaxed">
              Bringing together India's finest technical minds to redefine boiler circulation expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#111111] p-8 sm:p-10 flex flex-col group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-accent/20 group-hover:bg-accent transition-all duration-500" />

                <div className="flex justify-between items-start mb-12">
                  <span className="text-4xl font-black text-white/5 tracking-tighter">0{i + 1}</span>
                  {member.tag && (
                    <span className="text-[9px] font-black text-accent uppercase tracking-[0.3em] border border-accent/20 px-3 py-1">
                      {member.tag}
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none mb-3 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-8">
                    {member.role}
                  </p>

                  {member.qualification && (
                    <p className="text-[11px] text-white/20 font-medium leading-relaxed mb-10 border-l border-white/5 pl-6 group-hover:text-white/40 transition-colors">
                      {member.qualification}
                    </p>
                  )}
                </div>

                <div className="mt-auto flex flex-col gap-2 pt-8 border-t border-white/5">
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="text-[10px] font-black text-white/40 hover:text-accent transition-colors">
                      {member.email}
                    </a>
                  )}
                  {member.phone && (
                    <span className="text-[10px] font-black text-white/20">
                      {member.phone}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
