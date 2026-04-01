"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { CheckCircle2, Award, Users, Lightbulb } from "lucide-react";
import Magnetic from "@/src/components/Magnetic";

// Awwwards Style Sticky Word Reveal for long paragraphs
const WordReveal = ({ children }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 85%", "start 25%"],
  });

  const words = children.split(" ");
  return (
    <p ref={container} className="flex flex-wrap text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] font-black uppercase tracking-tighter leading-[0.9] text-primary/10">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        return (
          <span key={i} className="relative mr-2 md:mr-3 mb-2 md:mb-4">
            <span className="absolute text-primary/10">{word}</span>
            <motion.span style={{ opacity }} className="text-primary relative z-10">{word}</motion.span>
          </span>
        );
      })}
    </p>
  );
};

// Data Arrays
const capabilities = [
  "BCP Consultancy (Sales & Mktg)", "Direct Customer Support", "Sales Support",
  "In Situ Machining", "Overhauling", "Spare Parts Selling",
  "On Site Troubleshooting", "On Site Service", "Motor Rewinding", "Reverse Engineering"
];

const team = [
  { name: "Mr. Kunal", role: "CEO & MD", qualification: "PMP, PMI USA, MBA, B.E. Mechanical", tag: "Founder" },
  { name: "Mr. Ravi", role: "Head Technical", qualification: "M.Tech. Thermal, B.E. Mechanical", tag: "Founder" },
  { name: "Ankit Sharma", role: "Manager – Dispatch", qualification: "", tag: "" },
  { name: "Vijay Nehra", role: "Manager – Service", qualification: "", tag: "" },
  { name: "Pankaj Kumar", role: "Manager – Dispatch", qualification: "", tag: "" },
  { name: "Ramesh Yadav", role: "Manager Procurement", qualification: "", tag: "" },
  { name: "Abhishek Singh", role: "Executive Engineer", qualification: "", tag: "" },
  { name: "Namita Singh", role: "Manager – Sales", qualification: "", tag: "" },
];

export default function AboutPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-primary text-white selection:bg-accent selection:text-white" ref={container}>

      {/* ── 1. Brutalist Parallax Hero ────────────────────────────── */}
      <section className="relative min-h-[60svh] lg:min-h-screen flex flex-col justify-center py-10 lg:py-20 overflow-hidden px-4 lg:px-10">
        <motion.div
          className="absolute inset-0 z-0 bg-[url('/images/hero_industrial.png')] bg-cover bg-center grayscale mix-blend-overlay opacity-30"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/80 to-transparent z-10" />

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <p className="text-accent text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-4">India's Leading Specialists</p>
          <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-[-0.04em] uppercase leading-[0.9] mb-6">
            We<br />Are the<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-orange-600">Core</span>
          </h1>
        </motion.div>
      </section>

      {/* ── 2. Who We Are (Glassmorphism & Contrast) ──────────────── */}
      <section className="py-32 w-full px-4 lg:px-10 relative z-30 bg-primary border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-4 relative lg:sticky lg:top-32"
          >
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-16 flex items-center justify-center border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
              <img src="/images/Logo.png" alt="DEI VOX Logo" className="object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-700" />
            </div>
          </motion.div>

          <div className="lg:col-span-8 flex flex-col gap-16">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Not just a service provider.<br />
              <span className="text-white/30">Your Business Consultant.</span>
            </h2>
            <div className="w-full h-px bg-white/10" />
            <p className="text-xl md:text-2xl font-bold text-white/60 leading-relaxed max-w-3xl">
              If you are looking for a BCP service provider, do not look far ahead — you will find no one else in this space except <strong className="text-white">DEI VOX PVT. LTD.</strong> We are functioning at full capacity and are ably supported by BCP OEMs. We provide all types of BCW Pumps, their services, and re-engineering works.
            </p>
            <p className="text-lg md:text-xl font-medium text-white/50 leading-relaxed max-w-3xl">
              Our service facility is open for potential customers to visit and know that we have the ability to not only manufacture but also repair many types of BCP, motors, and MAG drives for sewage treatment requirements, electric utility, and all other general pumps and motor users.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Origin Story (Cinematic Sticky Reveal) ─────────────── */}
      <section className="py-32 md:py-48 w-full px-4 lg:px-10 bg-[#fafafa] min-h-screen flex items-center border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-12">The Origin Story</p>
          <WordReveal>
            IT BEGAN OVER A CUP OF COFFEE WITH VISIONARY TALKS ABOUT CHALLENGES IN THE SECTOR THE VISION WAS TO EMPOWER INDIA WITH PROPER BCP SUPPLY AND MAINTENANCE DEI VOX WAS FORMED TO NEVER LOOK BACK
          </WordReveal>
        </div>
      </section>

      {/* ── 4. Capabilities (Dark Brutalist Grid) ─────────────────── */}
      <section className="py-32 bg-primary relative overflow-hidden">
        {/* Massive background numbers */}
        <div className="absolute top-0 right-0 text-[400px] font-black leading-none text-white/2 pointer-events-none select-none -translate-y-1/4 translate-x-1/4">
          X
        </div>

        <div className="w-full px-4 lg:px-10 relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-20 max-w-4xl leading-[0.9]">
            Our Engineering <br /><span className="text-accent">Capabilities.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-accent hover:border-accent transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <CheckCircle2 size={20} className="text-accent group-hover:text-zinc-950 transition-colors" />
                </div>
                <h3 className="text-lg font-black text-white group-hover:text-zinc-950 uppercase tracking-tight leading-snug">
                  {cap}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Meet The Team (Light Profiles) ─────────────────────── */}
      <section className="py-32 bg-[#fafafa] relative min-h-screen border-t border-black/5">
        <div className="w-full px-4 lg:px-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <p className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4">The Brains</p>
              <h2 className="text-5xl md:text-7xl font-black text-primary tracking-tighter uppercase leading-[0.9]">
                Meet the<br />Team.
              </h2>
            </div>
            <p className="text-primary/60 max-w-md text-sm md:text-base font-medium">
              India is a land of great talent. We dream to bring changes to the BCP sector utilizing the creativity and hard work of our finest technicians and engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Magnetic intensity={0.1} key={member.name}>
                <div className="bg-white border border-black/5 shadow-sm rounded-3xl p-8 hover:shadow-xl hover:border-accent/10 transition-all duration-500 flex flex-col items-start h-full group cursor-pointer relative overflow-hidden">

                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-linear-to-b from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-8 border border-black/5 group-hover:scale-110 transition-transform duration-500 relative z-10">
                    <Users size={24} />
                  </div>

                  {member.tag && (
                    <span className="text-[9px] font-black bg-accent/10 text-accent uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 relative z-10">
                      {member.tag}
                    </span>
                  )}

                  <h3 className="font-black text-2xl text-primary uppercase tracking-tight mb-2 relative z-10">{member.name}</h3>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest mb-4 relative z-10">{member.role}</p>

                  {member.qualification && (
                    <div className="mt-auto pt-6 border-t border-black/5 w-full relative z-10">
                      <p className="text-[10px] text-primary/30 font-black uppercase tracking-widest">{member.qualification}</p>
                    </div>
                  )}
                </div>
              </Magnetic>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
