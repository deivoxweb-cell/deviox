"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CheckCircle2, Cog, Wrench, Zap, Settings, ArrowUpRight, ChevronRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ── Data ─────────────────────────────────────── */

const capabilities = [
  {
    icon: <Cog size={22} />,
    title: "BCP Overhauling",
    desc: "Complete strip-down, component inspection, dimensional measurement, and restoration to original tolerances. Includes impeller reconditioning, bearing replacement, can liner inspection, and full-load performance testing.",
  },
  {
    icon: <Wrench size={22} />,
    title: "In-Situ Casing Machining",
    desc: "Precision in-situ machining of pump casings without removing them from the boiler piping — minimising plant outage time and risk when BCP casings develop leaks at flange faces or body joints.",
  },
  {
    icon: <Zap size={22} />,
    title: "Motor Rewinding",
    desc: "Rewind of canned motor stators using high-temperature insulation rated for continuous immersion in hot process water. All rewinds are tested to IEC standards with IR, hi-pot, and surge comparison testing.",
  },
  {
    icon: <Settings size={22} />,
    title: "Spare Parts & Reverse Engineering",
    desc: "OEM spare parts for older BCP models are frequently discontinued. DEI VOX uses reverse engineering to recreate precise dimensional replicas of impellers, wear rings, bearing housings, and can liners.",
  },
];

const applications = [
  { label: "Thermal & supercritical steam power stations" },
  { label: "Combined cycle and co-generation power plants" },
  { label: "Captive power plants in steel, cement & chemical industries" },
  { label: "Process steam generators in petrochemical & refinery applications" },
  { label: "Waste heat recovery boilers (WHRBs) and HRSGs" },
];

const maintenance = [
  {
    title: "Continuous Condition Monitoring",
    desc: "Vibration, temperature, and differential pressure trending to detect bearing degradation or flow disturbances early.",
  },
  {
    title: "Water Chemistry Control",
    desc: "Maintain oxygen levels, pH, and conductivity within boiler water quality standards to minimise corrosion of motor internals.",
  },
  {
    title: "Planned Overhauls",
    desc: "At OEM-recommended intervals or based on condition trigger points — typically every 18,000–25,000 operating hours.",
  },
  {
    title: "Wear Component Replacement",
    desc: "Wear rings, thrust bearings, can liner integrity checks at each planned outage to maintain OEM-spec clearances.",
  },
  {
    title: "Emergency Response",
    desc: "24/7 on-site support when pump trips or abnormal performance is detected. DEI VOX mobilises within 24–48 hours anywhere in India.",
  },
];

const whyUs = [
  "ISO 9001:2015, 14001:2015 & 45001:2018 certified processes",
  "Over a decade of dedicated BCP field experience",
  "In-house precision engineering workshop for component restoration",
  "Multi-OEM capability: KSB, Sulzer, Weir, BHEL, and others",
  "Pan-India service reach with 24/7 emergency response",
  "Reverse engineering capability for obsolete & hard-to-source parts",
];

const faqs = [
  {
    q: "What is a Boiler Circulation Pump (BCP)?",
    a: "A BCP is a specialised centrifugal pump that circulates water through the boiler drum and evaporator tubes of a high-pressure steam boiler. It maintains controlled water flow rates to ensure uniform heat transfer, prevent tube overheating, and protect the boiler from thermal stress.",
  },
  {
    q: "How often should a Boiler Circulation Pump be overhauled?",
    a: "Typical overhaul intervals range from 12,000 to 24,000 operating hours depending on water chemistry, operating pressures, and manufacturer recommendations. DEI VOX recommends a condition-based maintenance approach with regular vibration monitoring and seal inspections.",
  },
  {
    q: "Can DEI VOX repair BCPs from all major manufacturers?",
    a: "Yes. We have extensive experience overhauling BCPs from all major OEM manufacturers including KSB, Sulzer, Weir, BHEL, and imported units. Our reverse engineering capability also enables us to produce hard-to-source spare parts for legacy pump models.",
  },
];

const backlinks = [
  { label: "Composite Material", href: "/composite-material" },
  { label: "In-Situ Machining Services", href: "/in-situ-machining-services" },
  { label: "Motor Rewinding Services", href: "/motor-rewinding-services" },
  { label: "All Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

/* ── Page ─────────────────────────────────────── */

export default function BoilerCirculationPumpPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        id="bcp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: "Boiler Circulation Pump Repair India",
                provider: { "@type": "Organization", name: "DEI VOX India", url: "https://deivoxbcp.com" },
                serviceType: "Boiler Circulation Pump Repair and Overhauling",
                areaServed: "India",
                description: "Complete BCP overhauling, repair, motor rewinding, in-situ casing machining, spare parts supply and reverse engineering. ISO 9001:2015 certified.",
                url: "https://deivoxbcp.com/boiler-circulation-pump",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />

      <div className="bg-card text-black selection:bg-accent selection:text-black" ref={container}>

        {/* ── 1. Hero ────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col justify-center py-32 overflow-hidden px-6 lg:px-16 bg-black text-white">
          <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-[-5%] left-[-5%] w-[350px] h-[350px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

          {[
            { top: "15%", left: "6%", size: 5, delay: 0, dur: 4 },
            { top: "42%", left: "2%", size: 3, delay: 1.5, dur: 5 },
            { top: "72%", left: "11%", size: 4, delay: 0.8, dur: 6 },
            { top: "28%", left: "54%", size: 3, delay: 2, dur: 4.5 },
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
              <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">BCP SPECIALIST INDIA</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88] mb-12"
            >
              Boiler Circulation<br />
              <span className="text-white/20">Pump India.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-12 sm:items-center mt-12"
            >
              <p className="text-white/40 text-sm font-medium leading-relaxed max-w-xs">
                India's most trusted BCP specialists — overhauling, repair, in-situ machining & spare parts. ISO certified. 24/7 support.
              </p>
              <div className="h-px w-24 bg-white/10 hidden sm:block" />
            </motion.div>
          </motion.div>
        </section>

        {/* ── 2. What is a BCP ─────────────────────────────── */}
        <section className="py-24 sm:py-40 bg-black text-white">
          <div className="w-full px-6 lg:px-16">
            <div className="mb-20 border-b border-white/5 pb-16">
              <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6">TECHNICAL OVERVIEW</p>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                <h2 className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88]">
                  What Is A<br />
                  <span className="text-white/20">Boiler Pump?</span>
                </h2>
                <p className="text-white/40 text-lg font-medium leading-relaxed max-w-lg">
                  A Boiler Circulation Pump is a high-pressure centrifugal pump installed within the boiler circuit of a steam power plant — maintaining forced circulation of water through the evaporator tubes and boiler drum.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <div className="relative rounded-[3rem] overflow-hidden aspect-[16/10] border border-white/5 shadow-2xl">
                  <Image
                    src="/images/bcp_overhauling.png"
                    alt="Boiler Circulation Pump Overhauling — DEI VOX India"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12">
                    <p className="text-accent text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.3em] mb-2">SYSTEM REHABILITATION</p>
                    <p className="text-white text-xl sm:text-2xl font-bold uppercase tracking-tighter">BCP Overhauling</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-5">
                <p className="text-white/40 text-sm font-medium leading-relaxed mb-2">
                  BCPs typically operate under extreme conditions: system pressures from 100 to 200+ bar, water temperatures approaching saturation point, and continuous duty cycles with minimal planned downtime.
                </p>
                <p className="text-white/40 text-sm font-medium leading-relaxed mb-4">
                  Most modern BCPs use a <em className="text-white/70">canned motor</em> or <em className="text-white/70">wet motor</em> design where the rotor operates submerged in process fluid — eliminating mechanical shaft seals and associated leak risk at high pressures.
                </p>
                {["Canned Motor Design", "Wet Motor Design", "100–200+ Bar Operating Pressure", "Continuous Duty Cycles", "Multi-OEM Capable", "ISO 9001:2015 Certified"].map((tag) => (
                  <div key={tag} className="flex items-center gap-4 border-b border-white/5 pb-4">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Our Capabilities ──────────────────────────── */}
        <section className="py-24 sm:py-40 bg-[#0a0a0a] text-white">
          <div className="w-full px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10 border-b border-white/5 pb-16">
              <div>
                <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6">DEI VOX CAPABILITIES</p>
                <h2 className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88]">
                  BCP Specialist<br />
                  <span className="text-white/20">Services.</span>
                </h2>
              </div>
              <p className="text-white/40 text-lg font-medium leading-relaxed max-w-md">
                A comprehensive suite of services around the Boiler Circulation Pump lifecycle — built on direct field experience across multiple plant types and pump configurations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 sm:p-10 bg-white/[0.03] border border-white/5 rounded-[2rem] sm:rounded-[2.5rem] hover:bg-accent hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-accent group-hover:text-black mb-6 transition-colors">{cap.icon}</div>
                  <h3 className="text-xl font-bold uppercase tracking-tighter text-white group-hover:text-black leading-tight mb-4">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-white/40 group-hover:text-black/70 leading-relaxed transition-colors">
                    {cap.desc}
                  </p>
                  <div className="mt-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-black group-hover:text-black transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Applications ──────────────────────────────── */}
        <section className="py-24 sm:py-40 bg-card text-black">
          <div className="w-full px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10 border-b border-black/5 pb-16">
              <div>
                <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6">WHERE WE OPERATE</p>
                <h2 className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88]">
                  Applications<br />
                  <span className="text-black/20">Across Industries.</span>
                </h2>
              </div>
              <p className="text-black/50 text-lg font-medium leading-relaxed max-w-md">
                From thermal power stations to refinery steam generators — Boiler Circulation Pumps are critical infrastructure that Dei Vox is trusted to maintain.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] border border-black/5 shadow-2xl">
                  <Image
                    src="/images/pump_rebuild.png"
                    alt="BCP Applications — Power Plants India"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-accent text-[9px] font-bold uppercase tracking-[0.3em] mb-2">FIELD OPERATIONS</p>
                    <p className="text-white text-xl font-bold uppercase tracking-tighter">Pan-India Reach</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-4">
                {applications.map((app, i) => (
                  <motion.div
                    key={app.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-5 bg-white border border-black/5 rounded-[2rem] px-8 py-6 group hover:border-accent transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-black transition-all">
                      <ChevronRight size={14} />
                    </div>
                    <span className="text-sm font-semibold text-black uppercase tracking-wider">{app.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Maintenance Best Practices ────────────────── */}
        <section className="py-24 sm:py-40 bg-black text-white">
          <div className="w-full px-6 lg:px-16">
            <div className="mb-20 border-b border-white/5 pb-16">
              <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6">MAINTENANCE FRAMEWORK</p>
              <h2 className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88]">
                BCP Maintenance<br />
                <span className="text-white/20">Best Practices.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {maintenance.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:bg-accent hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-[10px] font-bold text-accent group-hover:text-black/60 uppercase tracking-[0.3em] mb-4 transition-colors">{`0${i + 1}`}</p>
                  <h3 className="text-lg font-bold uppercase tracking-tighter text-white group-hover:text-black leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/40 group-hover:text-black/70 leading-relaxed transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Why Choose DEI VOX ────────────────────────── */}
        <section className="py-24 sm:py-40 bg-card text-black">
          <div className="w-full px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10 border-b border-black/5 pb-16">
              <div>
                <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6">WHY DEI VOX</p>
                <h2 className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88]">
                  The BCP<br />
                  <span className="text-black/20">Doctors.</span>
                </h2>
              </div>
              <p className="text-black/50 text-lg font-medium leading-relaxed max-w-md">
                Our certified engineers can be mobilised to any plant location in India within 24–48 hours for emergency assessment and repair work.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6 grid grid-cols-1 gap-3">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-5 bg-white border border-black/5 rounded-[2rem] px-8 py-6 group hover:border-accent transition-all"
                  >
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    <span className="text-sm font-semibold text-black">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] border border-black/5 shadow-2xl">
                  <Image
                    src="/images/bcp-motor-winding-inspection.png"
                    alt="DEI VOX BCP Motor Winding Inspection"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-accent text-[9px] font-bold uppercase tracking-[0.3em] mb-2">TECHNICAL LEADERSHIP</p>
                    <p className="text-white text-xl font-bold uppercase tracking-tighter">DEI VOX Engineers</p>
                  </div>
                  <div className="absolute top-8 right-8 bg-accent px-6 py-3 rounded-[1.5rem] shadow-xl shadow-accent/20">
                    <p className="text-black text-[10px] font-bold uppercase tracking-widest">ISO Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. FAQ ───────────────────────────────────────── */}
        <section className="py-24 sm:py-40 bg-[#0a0a0a] text-white">
          <div className="w-full px-6 lg:px-16">
            <div className="mb-20 border-b border-white/5 pb-16">
              <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6">FREQUENTLY ASKED</p>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] uppercase leading-[0.88]">
                BCP<br />
                <span className="text-white/20">Questions.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 sm:p-10 bg-white/[0.03] border border-white/5 rounded-[2rem] sm:rounded-[2.5rem]"
                >
                  <p className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-4">{`Q${i + 1}`}</p>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tighter leading-tight mb-4">{faq.q}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. Backlinks ─────────────────────────────────── */}
        <section className="py-20 bg-card text-black">
          <div className="w-full px-6 lg:px-16">
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-10">EXPLORE MORE</p>
            <div className="flex flex-wrap gap-3">
              {backlinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 bg-white border border-black/5 hover:border-accent hover:text-accent rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-all group"
                >
                  {link.label}
                  <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. CTA ───────────────────────────────────────── */}
        <section className="py-40 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/12 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
            <h2 className="text-3xl md:text-6xl font-extrabold text-white uppercase tracking-tighter mb-12 sm:mb-20 leading-[0.9]">
              BCP Emergency?<br /><span className="text-white/20">Call DEI VOX.</span>
            </h2>
            <p className="text-white/40 text-lg sm:text-xl font-medium mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
              Our certified engineers can be mobilised to any plant location in India within 24–48 hours for emergency assessment, in-situ repair, or full BCP overhauling.
            </p>
            <Link href="/contact" className="inline-block">
              <button className="flex items-center gap-4 sm:gap-6 bg-accent text-black px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold uppercase tracking-[0.25em] text-[10px] sm:text-sm hover:scale-105 transition-all shadow-2xl shadow-accent/20 group">
                Get Emergency Support
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center text-accent group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={16} />
                </div>
              </button>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
