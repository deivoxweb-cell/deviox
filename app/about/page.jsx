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
  "Components Procurement",
  "Retrofit & Reverse Engineering",
  "On-Site Troubleshooting",
  "Strategic BCP Advisory",
  "Operational Support"
];

const team = [
  { name: "Kunal", role: "CEO & MD", qualification: "PMP, PMI USA, MBA, B.E. Mechanical", tag: "Founder", email: "sales@deivox.co.in", phone: "+91 74282-00229" },
  { name: "Ravi", role: "Head Technical", qualification: "M.Tech. Thermal, B.E. Mechanical", tag: "Founder", phone: "+91 98864-24770" },
  { name: "Satya Narayan Sharma", role: "Head – Sales", qualification: "", tag: "" },
  { name: "Vijay Nehra", role: "Manager – Service", qualification: "", tag: "" },
  { name: "Pankaj Kumar", role: "Manager – Dispatch", qualification: "", tag: "" },
  { name: "Ramesh Yadav", role: "Manager Procurement", qualification: "", tag: "" },
  { name: "Abhishek Singh", role: "Executive Engineer", qualification: "", tag: "" },
  { name: "Namita Singh", role: "Manager – Sales", qualification: "", tag: "" },
  { name: "Ritika", role: "Manager (HR)", qualification: "", tag: "" },
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
    <div className="bg-card text-black selection:bg-accent selection:text-black" ref={container}>

      {/* ── 1. Neo-Brutalist Hero ────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center py-32 overflow-hidden px-6 lg:px-16 bg-black text-white">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent/15 sm:bg-accent/25 rounded-full blur-[80px] sm:blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[250px] h-[250px] bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
        {/* Floating dot particles */}
        {[
          { top: "15%", left: "6%", size: 5, delay: 0, dur: 4 },
          { top: "40%", left: "2%", size: 3, delay: 1.5, dur: 5 },
          { top: "70%", left: "12%", size: 4, delay: 0.8, dur: 6 },
          { top: "25%", left: "55%", size: 3, delay: 2, dur: 4.5 },
          { top: "80%", left: "60%", size: 5, delay: 0.3, dur: 5.5 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: dot.dur, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full bg-accent pointer-events-none"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
          />
        ))}

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-12 bg-accent" />
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">
              CORPORATE ESTABLISHMENT
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88] mb-12"
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

          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 right-12 flex items-center gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Scroll Down</span>
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
            <div className="relative bg-[#0a0a0a] rounded-[2.5rem] sm:rounded-[4rem] p-12 sm:p-20 flex items-center justify-center border border-white/5 shadow-2xl overflow-hidden group">
              {/* Glow orb */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-[60px] pointer-events-none group-hover:bg-accent/35 transition-all duration-700" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-primary/15 rounded-full blur-[50px] pointer-events-none" />
              {/* Shimmer top */}
              <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              {/* Circuit dots */}
              <div className="absolute top-5 right-5 grid grid-cols-3 gap-1.5 opacity-20">
                {[...Array(9)].map((_, i) => <div key={i} className={`w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-accent' : 'bg-white/30'}`} />)}
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-accent/8 blur-2xl scale-150" />
                <Image
                  src="/images/Logo.png"
                  alt="DEI VOX Logo"
                  width={220}
                  height={110}
                  className="object-contain relative z-10 drop-shadow-[0_0_20px_rgba(103,172,67,0.25)]"
                />
              </div>
            </div>
            {/* Absolute Stat */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 bg-accent p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-accent/20">
              <p className="text-3xl sm:text-5xl font-extrabold text-black tracking-tighter">20+</p>
              <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-black/60 mt-1">Years Experience</p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-12 pt-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-black uppercase tracking-tighter mb-4 sm:mb-12 leading-[0.9]">
              The Trusted<br /><span className="text-black/20">BCP Doctors.</span>
            </h2>
            <div className="flex flex-col gap-8">
              <p className="text-xl font-medium text-black/60 leading-relaxed max-w-3xl">
                <strong className="text-black">Deivox</strong>, officially known as{" "}
                <strong className="text-black">DEI VOX PVT. LTD.</strong>, is a trusted{" "}
                <strong className="text-black">Boiler Circulation Pump (BCP)</strong> repair,
                overhauling, and industrial pump solutions company serving power plants and
                industries across India.
              </p>
              <p className="text-xl font-medium text-black/60 leading-relaxed max-w-3xl">
                Widely recognized as the <strong className="text-black">BCP Doctors</strong>, DEI VOX INDIA is a pioneering 100% <strong className="text-black uppercase">Make in India</strong> engineering firm specialized in the maintenance of <strong className="text-black">Boiler Circulation Pumps (BCP) & Boiler Water Circulation Pump (BWCP) </strong>.
              </p>
              <p className="text-lg font-medium text-black/40 leading-relaxed max-w-3xl">
                We bridge the gap between complex engineering and field reliability by providing specialized BCW Pump services and high-precision re-engineering. Our mission is to deliver uncompromising <strong className="text-black uppercase">OEM-standard quality</strong> at cost-efficient pricing, ensuring maximum operational uptime for global utilities and heavy industry.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
              <motion.div whileHover={{ y: -4 }} className="p-6 sm:p-10 bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all group">
                <CheckCircle2 className="text-accent mb-4 sm:mb-6 group-hover:scale-110 transition-transform" size={24} />
                <p className="text-xs sm:text-sm font-medium text-black/60 leading-relaxed">
                  OEM-quality spare parts and advanced reverse engineering that meets global standards.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} className="p-6 sm:p-10 bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all group">
                <Award className="text-accent mb-4 sm:mb-6 group-hover:scale-110 transition-transform" size={24} />
                <p className="text-xs sm:text-sm font-medium text-black/60 leading-relaxed">
                  Uncompromising performance at domestic pricing, ensuring maximum ROI for your facility.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Origin Story ─────────────── */}
      <section className="py-24 sm:py-40 w-full px-6 lg:px-16 bg-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[90rem] mx-auto relative z-10">
          <div className="flex items-center gap-6 mb-12 sm:mb-20">
            <div className="h-px w-12 sm:w-16 bg-black" />
            <p className="text-black text-[10px] font-bold uppercase tracking-[0.3em]">CORPORATE ESTABLISHMENT</p>
          </div>

          <h2 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-black uppercase tracking-tighter leading-[1.1] max-w-6xl">
            Born from a vision to empower India's power sector through domestic engineering excellence. We <span className="text-accent font-extrabold">architect the future</span> of fluid reliability.
          </h2>
        </div>
      </section>

      {/* ── 4. Capabilities (Industrial Grid) ─────────────────── */}
      <section className="py-24 sm:py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />

        <div className="w-full px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl mb-12 sm:mb-24">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="h-px w-8 sm:w-12 bg-accent" />
              <p className="text-accent text-[11px] font-bold uppercase tracking-[0.4em]">TECHNICAL DOMAIN</p>
            </div>
            <motion.h1 className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88] mb-12">
              Core<br />Engineering.
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group p-8 sm:p-10 bg-white/[0.03] border border-white/5 rounded-[2rem] sm:rounded-[2.5rem] hover:bg-accent hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                {/* Shimmer top on hover */}
                <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col justify-between h-full">
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tighter text-white group-hover:text-black leading-tight mb-8">
                    {cap}
                  </h3>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-black group-hover:text-black transition-all group-hover:bg-black/10">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* ── 5. Meet The Team (Technical Directory) ─────────────────────── */}
      < section className="py-24 sm:py-40 bg-white" >
        <div className="w-full px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24 gap-12 border-b-4 border-black pb-12">
            <div className="max-w-2xl">
              <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-6">TECHNICAL LEADERSHIP</p>
              <motion.h1 className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88] mb-12">
                Executive<br />Leadership.
              </motion.h1>
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
                className="bg-[#111111] p-8 sm:p-10 flex flex-col group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
              >
                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-accent/20 group-hover:bg-accent transition-all duration-500" />
                {/* Top shimmer on hover */}
                <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Glow orb on hover */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/0 group-hover:bg-accent/15 rounded-full blur-[50px] transition-all duration-700" />

                <div className="flex justify-between items-start mb-12">
                  <span className="text-4xl font-extrabold text-white/5 tracking-tighter">0{i + 1}</span>
                  {member.tag && (
                    <span className="text-[9px] font-bold text-accent uppercase tracking-[0.25em] border border-accent/20 px-3 py-1">
                      {member.tag}
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tighter leading-none mb-3 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em] mb-8">
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
                    <a href={`mailto:${member.email}`} className="text-[10px] font-bold text-white/40 hover:text-accent transition-colors">
                      {member.email}
                    </a>
                  )}
                  {member.phone && (
                    <span className="text-[10px] font-bold text-white/20">
                      {member.phone}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

    </div >
  );
}
