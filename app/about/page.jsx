"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { CheckCircle2, Award, Users, Lightbulb, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/src/components/Magnetic";

const WordReveal = ({ children }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 90%", "end 20%"],
  });

  const words = children.split(" ");
  return (
    <div ref={container} className="relative py-20">
      <p className="flex flex-wrap text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-black/5">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1.5 / words.length);
          const opacity = useTransform(scrollYProgress, [start, end], [0.05, 1]);
          const y = useTransform(scrollYProgress, [start, end], [20, 0]);

          return (
            <span key={i} className="relative mr-4 md:mr-8 mb-6 md:mb-10">
              <span className="absolute text-black/5 select-none">{word}</span>
              <motion.span
                style={{ opacity, y }}
                className="text-black relative z-10 inline-block"
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </p>
    </div>
  );
};

const capabilities = [
  "Boiler Circulation Pump Overhauling",
  "Boiler Water Circulation Pump Repair",
  "BCP (BCP Pump) Maintenance",
  "Submersible Pump Repair & Upgrading",
  "In-Situ Machining",
  "Motor Rewinding",
  "Reverse Engineering & Spare Parts"
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
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-12 bg-accent" />
            <p className="text-accent text-[11px] font-black uppercase tracking-[0.5em]">
              THE GENESIS OF DEI VOX
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] mb-12"
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
      <section className="py-40 w-full px-6 lg:px-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-black rounded-[4rem] p-20 flex items-center justify-center border border-black/5 shadow-2xl">
              <Image
                src="/images/Logo.png"
                alt="DEI VOX Logo"
                width={220}
                height={110}
                className="object-contain brightness-0 invert"
              />
            </div>
            {/* Absolute Stat */}
            <div className="absolute -bottom-10 -right-10 bg-accent p-10 rounded-[3rem] shadow-2xl">
               <p className="text-5xl font-black text-black tracking-tighter">10+</p>
               <p className="text-[10px] font-black uppercase tracking-widest text-black/60 mt-1">Years Experience</p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-12 pt-10">
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-12 leading-[0.9]">
              Decades of <br /><span className="text-black/20">Expertise.</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium text-black/50 leading-relaxed max-w-3xl">
              As India's premier specialists for <strong>Boiler Circulation Pumps (BCP)</strong>, we go beyond simple maintenance. We architect reliability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
               <div className="p-10 bg-white rounded-[2.5rem] border border-black/5">
                  <CheckCircle2 className="text-accent mb-6" size={32} />
                  <p className="text-sm font-medium text-black/60 leading-relaxed">
                    OEM-quality spare parts and advanced reverse engineering that meets global standards.
                  </p>
               </div>
               <div className="p-10 bg-white rounded-[2.5rem] border border-black/5">
                  <Award className="text-accent mb-6" size={32} />
                  <p className="text-sm font-medium text-black/60 leading-relaxed">
                    Uncompromising performance at domestic pricing, ensuring maximum ROI for your facility.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Origin Story ─────────────── */}
      <section className="py-40 w-full px-6 lg:px-16 bg-white relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex items-center gap-6 mb-20">
            <div className="h-px w-16 bg-black" />
            <p className="text-black text-[11px] font-black uppercase tracking-[0.5em]">THE ORIGIN STORY</p>
          </div>

          <WordReveal>
            BORN FROM A VISION TO EMPOWER INDIA'S POWER SECTOR THROUGH DOMESTIC ENGINEERING EXCELLENCE. WE ARCHITECT THE FUTURE OF FLUID RELIABILITY.
          </WordReveal>
        </div>
      </section>

      {/* ── 4. Capabilities (Industrial Grid) ─────────────────── */}
      <section className="py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        
        <div className="w-full px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl mb-24">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-accent" />
                <p className="text-accent text-[11px] font-black uppercase tracking-[0.5em]">TECHNICAL DOMAIN</p>
             </div>
             <h2 className="text-6xl md:text-8xl font-black tracking-[-0.05em] uppercase leading-[0.88]">
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
                className="group p-10 bg-white/[0.03] border border-white/5 rounded-[2.5rem] hover:bg-accent hover:border-accent transition-all duration-500 cursor-pointer"
              >
                <div className="flex flex-col justify-between h-full">
                   <h3 className="text-2xl font-black uppercase tracking-tighter text-white group-hover:text-black leading-tight mb-8">
                     {cap}
                   </h3>
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-black group-hover:text-black transition-all">
                      <ArrowUpRight size={20} />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Meet The Team ─────────────────────── */}
      <section className="py-40 bg-[#F5F5F5]">
        <div className="w-full px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <p className="text-accent text-[11px] font-black uppercase tracking-[0.4em] mb-6">THE HUMAN ENGINE</p>
              <h2 className="text-6xl md:text-8xl font-black text-black tracking-[-0.05em] uppercase leading-[0.85]">
                Meet the<br />Team.
              </h2>
            </div>
            <p className="text-black/40 text-lg max-w-md font-medium leading-relaxed">
              Bringing together India's finest technical minds to redefine boiler circulation expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-black/5 rounded-[3rem] p-10 hover:shadow-2xl transition-all duration-700 flex flex-col group cursor-pointer"
              >
                <div className="flex-1">
                  {member.tag && (
                    <span className="inline-block text-[10px] font-black bg-black text-accent uppercase tracking-widest px-6 py-2 rounded-full mb-8">
                      {member.tag}
                    </span>
                  )}
                  <h3 className="font-black text-3xl text-black uppercase tracking-tighter mb-2 group-hover:text-accent transition-colors">{member.name}</h3>
                  <p className="text-[11px] font-black text-black/30 uppercase tracking-widest mb-8">{member.role}</p>
                  
                  {member.qualification && (
                    <p className="text-sm text-black/60 font-semibold leading-relaxed mb-8 border-l-4 border-black/5 pl-6">
                      {member.qualification}
                    </p>
                  )}
                </div>

                {(member.email || member.phone) && (
                  <div className="mt-10 pt-10 border-t border-black/5 flex flex-col gap-6">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="flex flex-col group/link">
                        <span className="text-[9px] font-black text-black/20 uppercase tracking-[0.3em] mb-2">Email</span>
                        <span className="text-sm font-bold text-black group-hover/link:text-accent transition-colors">{member.email}</span>
                      </a>
                    )}
                    {member.phone && (
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-black/20 uppercase tracking-[0.3em] mb-2">Direct Line</span>
                        <span className="text-sm font-bold text-black">{member.phone}</span>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
