"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Award, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const capabilities = [
  {
    name: "BCP Stator Repair & Rewinding",
    detail: "Solutions for complex stator and winding-related failures.",
    href: "/motor-rewinding-services",
  },
  {
    name: "On-Site BCP Overhauling",
    detail: "Specialist on-site overhaul solutions for suitable applications.",
    href: "/bcp-overhauling-services",
  },
  {
    name: "BCP Motor Revival",
    detail: "Assessment and recovery for motors with extremely low or zero insulation resistance, where technically feasible.",
    href: "/contact?subject=Technical%20Assessment",
  },
  {
    name: "OEM Spare Parts Refurbishment",
    detail: "Restoration and reuse of eligible original components.",
    href: "/spare-parts",
  },
  {
    name: "Expedited Motor Rewinding",
    detail: "Targeted turnaround of approximately 4–6 weeks, subject to condition, scope and material availability.",
    href: "/motor-rewinding-services",
  },
  {
    name: "Reverse Engineering & Equivalent Spares",
    detail: "Alternative components designed for application suitability and one-to-one fitment, subject to technical verification.",
    href: "/reverse-engineering-custom-components",
  },
];

export default function AboutPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0px", "120px"]);
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

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-12 bg-accent" />
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">
              ABOUT DEI VOX
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88] mb-12"
          >
            Independent<br />
            <span className="text-white/20">BCP Specialists.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-12 sm:items-center mt-12"
          >
            <div className="max-w-xs">
              <p className="text-white/40 text-sm font-medium leading-relaxed">
                Multi-make Boiler Circulation Pump engineering for power utilities and international service partners.
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

      {/* ── 2. Company Overview ──────────────── */}
      <section className="py-24 sm:py-40 w-full px-6 lg:px-16 relative z-30">
        <div className="max-w-[90rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative min-h-[420px] sm:min-h-[560px] bg-[#0a0a0a] rounded-[2.5rem] sm:rounded-[4rem] border border-white/5 shadow-2xl overflow-hidden group">
                <Image
                  src="/images/dei-vox-company-office.png"
                  alt="DEI VOX INDIA PVT. LTD. corporate office"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                <p className="absolute bottom-8 left-8 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                  DEI VOX INDIA PVT. LTD.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 bg-accent p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-accent/20">
                <p className="text-3xl sm:text-5xl font-extrabold text-black tracking-tighter">12+</p>
                <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-black/60 mt-1">BCP Service Professionals</p>
              </div>
            </motion.div>

            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 pt-4">
              <h2 className="text-4xl md:text-6xl font-extrabold text-black uppercase tracking-tighter mb-2 sm:mb-4 leading-[0.9]">
                Independent<br /><span className="text-black/20">BCP Specialists.</span>
              </h2>
              <div className="flex flex-col gap-4 sm:gap-6">
                <p className="text-xl font-medium text-black/60 leading-relaxed max-w-3xl">
                  <strong className="text-black">DEI VOX</strong> is an independent, multi-make{" "}
                  <strong className="text-black">Boiler Circulation Pump (BCP)</strong> aftermarket
                  engineering specialist serving power utilities and supporting international
                  service partners.
                </p>
                <p className="text-xl font-medium text-black/60 leading-relaxed max-w-3xl">
                  Established in <strong className="text-black">2020</strong>, DEI VOX INDIA PVT. LTD. specialises in BCP repair and overhauling, glandless motor repair and rewinding, technical assessment, component refurbishment and engineered spare-parts solutions for the power generation industry.
                </p>
                <p className="text-lg font-medium text-black/40 leading-relaxed max-w-3xl">
                  Our team of approximately 12 BCP service professionals brings experience across multiple manufacturers. We have undertaken repair and overhaul work across a broad range of BCP makes and supplied equivalent spare parts designed to match original component fitment requirements.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2">
                <motion.div whileHover={{ y: -4 }} className="p-6 sm:p-10 bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all group">
                  <CheckCircle2 className="text-accent mb-4 sm:mb-6 group-hover:scale-110 transition-transform" size={24} />
                  <p className="text-xs sm:text-sm font-medium text-black/60 leading-relaxed">
                    Engineering quality, cost-conscious solutions and practical problem-solving for difficult repairs and ageing equipment.
                  </p>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} className="p-6 sm:p-10 bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all group">
                  <Award className="text-accent mb-4 sm:mb-6 group-hover:scale-110 transition-transform" size={24} />
                  <p className="text-xs sm:text-sm font-medium text-black/60 leading-relaxed">
                    Multi-make aftermarket support for challenging repairs and spare-parts requirements.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Mission & Commitment ─────────────── */}
      <section className="py-24 sm:py-40 w-full px-6 lg:px-16 bg-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[90rem] mx-auto relative z-10">
          <div className="flex items-center gap-6 mb-12 sm:mb-20">
            <div className="h-px w-12 sm:w-16 bg-black" />
            <p className="text-black text-[10px] font-bold uppercase tracking-[0.3em]">OUR MISSION & COMMITMENT</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-black p-8 sm:p-12 text-white">
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tighter mb-6">Our Mission</h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                To deliver reliable, cost-effective and engineering-driven Boiler Circulation Pump repair, refurbishment and aftermarket solutions that enhance equipment reliability, extend service life and support the power generation industry worldwide. We aim to build lasting partnerships through technical expertise, quality workmanship and practical engineering solutions across multiple makes and models.
              </p>
            </div>
            <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-accent p-8 sm:p-12 text-black">
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tighter mb-6">Our Commitment</h2>
              <p className="text-black/65 text-base sm:text-lg leading-relaxed">
                We approach every assignment with technical care, clear communication and focus on the customer's equipment requirements. We help customers make informed maintenance decisions, restore serviceable equipment where technically appropriate, address spare-parts challenges and identify cost-conscious alternatives without compromising engineering suitability and quality.
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-5xl text-base sm:text-lg text-black/50 leading-relaxed">
            At DEI VOX, aftermarket service is a long-term responsibility to support equipment reliability, maintainability and the continued operation of critical power infrastructure.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-accent text-black">
        <div className="max-w-[90rem] mx-auto w-full px-6 lg:px-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "20+", label: "Years of Management Experience" },
            { value: "200+", label: "Pumps Overhauled" },
            { value: "65+", label: "Motors Rewound" },
            { value: "250+", label: "Pumps Troubleshot" },
          ].map((stat) => (
            <div key={stat.label} className="border-l border-black/20 pl-5 sm:pl-8">
              <p className="text-3xl sm:text-5xl font-extrabold tracking-tighter">{stat.value}</p>
              <p className="mt-2 text-[9px] sm:text-xs font-bold uppercase tracking-[0.12em] text-black/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Capabilities (Industrial Grid) ─────────────────── */}
      <section className="py-24 sm:py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />

        <div className="max-w-[90rem] mx-auto w-full px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl mb-12 sm:mb-24">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="h-px w-8 sm:w-12 bg-accent" />
              <p className="text-accent text-[11px] font-bold uppercase tracking-[0.4em]">TECHNICAL DOMAIN</p>
            </div>
            <motion.h1 className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88] mb-12">
              Engineering<br />Solutions.
            </motion.h1>
            <p className="max-w-3xl text-base sm:text-lg text-white/50 leading-relaxed">
              Practical engineering, refurbishment and aftermarket solutions for complex Boiler Circulation Pump and motor challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <Link key={cap.name} href={cap.href} className="block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group p-8 sm:p-10 bg-white/[0.03] border border-white/5 rounded-[2rem] sm:rounded-[2.5rem] hover:bg-accent hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 cursor-pointer relative overflow-hidden h-full"
                >
                  {/* Shimmer top on hover */}
                  <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex flex-col justify-between h-full">
                    <div className="mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tighter text-white group-hover:text-black leading-tight mb-4">
                        {cap.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/45 group-hover:text-black/70">
                        {cap.detail}
                      </p>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-black group-hover:text-black transition-all group-hover:bg-black/10">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] border border-white/10 bg-white px-6 py-8 text-center text-black sm:px-10 sm:py-10">
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent text-accent">
              <CheckCircle2 size={22} aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              ISO-Certified Management Systems
            </h2>
            <p className="mt-4 text-base text-black/60 sm:text-lg">
              ISO 9001:2015 <span className="px-1 text-accent">·</span>
              ISO 14001:2015 <span className="px-1 text-accent">·</span>
              ISO 45001:2018
            </p>
            <p className="mt-4 text-sm leading-relaxed text-black/60 sm:text-base">
              Quality Management <span className="px-1 text-accent">·</span>
              Environmental Management <span className="px-1 text-accent">·</span>
              Occupational Health &amp; Safety Management
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-white/50">
            Committed to quality, environmental responsibility, and occupational health and safety through certified management systems.
          </p>
        </div>
      </section >

      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[90rem] mx-auto w-full px-6 lg:px-16">
          <div className="rounded-[2rem] sm:rounded-[3rem] bg-[#0a0a0a] px-8 py-12 sm:px-16 sm:py-20 text-white relative overflow-hidden">
            <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-accent/15 blur-[90px]" />
            <div className="relative z-10 max-w-4xl">
              <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-6">DEI VOX INDIA PVT. LTD.</p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[0.95]">
                Let's Discuss Your BCP Requirement
              </h2>
              <p className="mt-6 max-w-3xl text-white/50 text-base sm:text-lg leading-relaxed">
                Whether you require a pump overhaul, motor-related service, a difficult-to-source component or an aftermarket engineering partner, DEI VOX welcomes the opportunity to understand your requirement.
              </p>
              <p className="mt-5 text-sm font-semibold text-white/70">
                Your partner for multi-make BCP repair, engineering and aftermarket solutions.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact?subject=BCP%20Requirement"
                  className="inline-flex items-center justify-between gap-8 rounded-full bg-accent px-6 py-4 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:-translate-y-1"
                >
                  Discuss Your Requirement <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div >
  );
}
