"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Settings, ArrowUpRight, Recycle, Shield, Droplets, Zap, Weight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ── Data ─────────────────────────────────────── */

const characteristics = [
  {
    icon: <Weight size={20} />,
    title: "Low Weight",
    desc: "Significantly lighter than traditional metals — ideal for aircraft and automotive applications where reducing weight is vital.",
  },
  {
    icon: <Zap size={20} />,
    title: "Enhanced Mechanical Performance",
    desc: "Reinforcing fibers like carbon or glass greatly boost the stiffness and strength of the thermoplastic base, yielding highly durable materials.",
  },
  {
    icon: <Shield size={20} />,
    title: "Superior Impact Resistance",
    desc: "Known for resilience and ability to withstand heavy impacts, essential for products subjected to intense physical stress.",
  },
  {
    icon: <Recycle size={20} />,
    title: "Reusable & Recyclable",
    desc: "Unlike thermosets, thermoplastics can be melted and reshaped multiple times, making recycling and reprocessing fully feasible.",
  },
  {
    icon: <Shield size={20} />,
    title: "Chemical & Corrosion Resistant",
    desc: "Perform well even when exposed to oils, chemicals, or aggressive corrosive environments.",
  },
  {
    icon: <Droplets size={20} />,
    title: "Moisture Resistance",
    desc: "Absorb minimal moisture, helping maintain structural integrity and dimensional stability over time.",
  },
];

const applications = [
  {
    industry: "Aviation",
    desc: "Employed in aircraft bodies, panels, and cabin interiors to reduce overall weight and improve fuel economy without sacrificing strength.",
  },
  {
    industry: "Automobiles",
    desc: "Used in car bodywork, internal structures, and dashboard components to boost efficiency by cutting down on weight while keeping passengers safe.",
  },
  {
    industry: "Sports Gear",
    desc: "Common in helmets, rackets, and bicycles where strength and lightness are essential for high performance.",
  },
  {
    industry: "Construction",
    desc: "Utilized in making pipes, structural boards, and infrastructure components that need to withstand harsh conditions.",
  },
  {
    industry: "Healthcare",
    desc: "Applied in prosthetics, surgical instruments, and orthopedic products due to durability, sterilization ability, and biocompatibility.",
  },
];

const bearingTypes = [
  "Ball Bearings",
  "Roller Bearings",
  "Thrust Bearings",
  "Needle Bearings",
  "Taper Bearings",
  "Spherical Bearings",
];

/* ── Page ─────────────────────────────────────── */

export default function CompositeMaterialPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-card text-black selection:bg-accent selection:text-black" ref={container}>

      {/* ── 1. Hero ────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center py-32 overflow-hidden px-6 lg:px-16 bg-black text-white">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[350px] h-[350px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Floating particles */}
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
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">
              MATERIAL ENGINEERING
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88] mb-12"
          >
            Composite<br />
            <span className="text-white/20">Solutions.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-12 sm:items-center mt-12"
          >
            <div className="max-w-xs">
              <p className="text-white/40 text-sm font-medium leading-relaxed">
                Next-generation Thermoplastic Composites and Industrial Bearings for elite engineering demands.
              </p>
            </div>
            <div className="h-px w-24 bg-white/10 hidden sm:block" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. Thermoplastic Composites Overview ─────────────── */}
      <section className="py-24 sm:py-40 bg-black text-white">
        <div className="w-full px-6 lg:px-16">

          {/* Section header */}
          <div className="mb-20 border-b border-white/5 pb-16">
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6">INNOVATION</p>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <h2 className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88]">
                Thermoplastic<br />
                <span className="text-white/20">Composites.</span>
              </h2>
              <p className="text-white/40 text-lg font-medium leading-relaxed max-w-lg">
                Thermoplastic composites are formed by blending thermoplastic polymers with reinforcing fibers such as carbon, glass, or aramid. The plastic matrix adds flexibility and durability, while the fibers contribute to improved strength and rigidity.
              </p>
            </div>
          </div>

          {/* Hero Image + Key Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
            <div className="lg:col-span-7">
              <div className="relative rounded-[3rem] overflow-hidden aspect-[16/10] border border-white/5 shadow-2xl">
                <Image
                  src="/images/thermoplastic_composites.png"
                  alt="Thermoplastic Composite Materials"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12">
                  <p className="text-accent text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.3em] mb-2">MATERIAL ENGINEERING</p>
                  <p className="text-white text-xl sm:text-2xl font-bold uppercase tracking-tighter">Thermoplastic Composites</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <p className="text-white/40 text-sm font-medium leading-relaxed mb-6">
                These materials are becoming more popular across industries like aerospace, automotive, and construction — thanks to their low weight, long lifespan, and reusability.
              </p>
              {["Carbon Fiber Reinforced", "Glass Fiber Composites", "Aramid Fiber Structures", "OEM-Grade Quality", "Lightweight Engineering", "Fully Recyclable"].map((tag) => (
                <div key={tag} className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <CheckCircle2 size={14} className="text-accent shrink-0" />
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Characteristics Grid */}
          <div className="mb-8">
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-8">MAIN CHARACTERISTICS</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {characteristics.map((char, i) => (
              <motion.div
                key={char.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:bg-accent hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-accent group-hover:text-black mb-6 transition-colors">{char.icon}</div>
                <h3 className="text-base font-bold uppercase tracking-tighter text-white group-hover:text-black leading-tight mb-3">
                  {char.title}
                </h3>
                <p className="text-sm text-white/40 group-hover:text-black/60 leading-relaxed transition-colors">
                  {char.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Applications ─────────────────────────────────── */}
      <section className="py-24 sm:py-40 bg-[#0a0a0a] text-white">
        <div className="w-full px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10 border-b border-white/5 pb-16">
            <div>
              <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6">INDUSTRY APPLICATIONS</p>
              <h2 className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88]">
                Where Are<br />
                <span className="text-white/20">They Used?</span>
              </h2>
            </div>
            <p className="text-white/40 text-lg font-medium leading-relaxed max-w-md">
              From aviation to healthcare, thermoplastic composites are transforming how industries approach design, safety, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, i) => (
              <motion.div
                key={app.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 sm:p-10 bg-white/[0.03] border border-white/5 rounded-[2rem] sm:rounded-[2.5rem] hover:bg-accent hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <p className="text-[10px] font-bold text-accent group-hover:text-black/60 uppercase tracking-[0.3em] mb-4 transition-colors">{`0${i + 1}`}</p>
                    <h3 className="text-2xl font-bold uppercase tracking-tighter text-white group-hover:text-black leading-tight mb-6">
                      {app.industry}
                    </h3>
                    <p className="text-sm text-white/50 group-hover:text-black/70 leading-relaxed transition-colors">
                      {app.desc}
                    </p>
                  </div>
                  <div className="mt-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-black group-hover:text-black transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Bearings ──────────────────────────────────────── */}
      <section className="py-24 sm:py-40 bg-card text-black">
        <div className="w-full px-6 lg:px-16">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10 border-b border-black/5 pb-16">
            <div>
              <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6">PRECISION COMPONENTS</p>
              <h2 className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88]">
                We Do All<br />
                <span className="text-black/20">Types Of Bearings.</span>
              </h2>
            </div>
            <p className="text-black/50 text-lg font-medium leading-relaxed max-w-md">
              Bearings play a vital role in reducing friction between moving parts, enabling smooth and efficient mechanical operations across every industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left column – text */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <p className="text-black/60 text-lg font-medium leading-relaxed">
                At Dei Vox, we specialize in providing <strong className="text-black">all types of bearings</strong> to meet the diverse needs of various industries. Whether it's for automotive, industrial machinery, agriculture, aerospace, or household appliances, we offer a comprehensive range of bearing solutions tailored to your application.
              </p>
              <p className="text-black/60 text-lg font-medium leading-relaxed">
                We work with leading manufacturers to ensure every bearing we supply meets the highest standards of quality, precision, and durability. From high-speed performance to heavy-load endurance, we have the right bearing for every requirement.
              </p>
              <p className="text-black/60 text-lg font-medium leading-relaxed">
                We also provide <strong className="text-black">custom solutions and technical support</strong> to help our customers choose the most suitable bearing for their specific needs. Our team of experts ensures timely delivery and professional service for both small-scale and bulk orders.
              </p>

              {/* Bearing types grid */}
              <div>
                <p className="text-[10px] font-bold text-black/30 uppercase tracking-[0.3em] mb-6">OUR INVENTORY INCLUDES</p>
                <div className="grid grid-cols-2 gap-3">
                  {bearingTypes.map((type) => (
                    <div key={type} className="flex items-center gap-3 bg-white border border-black/5 rounded-[1.5rem] px-5 py-4">
                      <CheckCircle2 size={14} className="text-accent shrink-0" />
                      <span className="text-xs font-semibold text-black uppercase tracking-wider">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact">
                <button className="flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full group hover:bg-zinc-900 transition-all shadow-xl shadow-black/10 active:scale-95 w-fit">
                  <span className="text-[11px] font-bold uppercase tracking-widest">Request Specifications</span>
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform">
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              </Link>
            </div>

            {/* Right column – image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] border border-black/5 shadow-2xl">
                <Image
                  src="/images/bcp-liner-bearing-inspection.png"
                  alt="Industrial Bearings"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12">
                  <p className="text-accent text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.3em] mb-2">PRECISION COMPONENTS</p>
                  <p className="text-white text-xl sm:text-2xl font-bold uppercase tracking-tighter">Industrial Bearings</p>
                </div>
                {/* Badge */}
                <div className="absolute top-8 right-8 bg-accent px-6 py-3 rounded-[1.5rem] shadow-xl shadow-accent/20">
                  <p className="text-black text-[10px] font-bold uppercase tracking-widest">All Types Stocked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Backlinks ─────────────────────────────────────── */}
      <section className="py-20 bg-card text-black">
        <div className="w-full px-6 lg:px-16">
          <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-10">EXPLORE MORE</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Boiler Circulation Pump Repair", href: "/boiler-circulation-pump" },
              { label: "BCP Overhauling Services", href: "/bcp-overhauling-services" },
              { label: "All Services", href: "/services" },
              { label: "ISO Certificate", href: "/iso-certificate" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
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

      {/* ── 6. CTA ───────────────────────────────────────────── */}
      <section className="py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/12 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <h2 className="text-3xl md:text-6xl font-extrabold text-white uppercase tracking-tighter mb-12 sm:mb-20 leading-[0.9]">
            Advanced <br /><span className="text-white/20">Materials.</span>
          </h2>
          <p className="text-white/40 text-lg sm:text-xl font-medium mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
            Whether you need standard, miniature, or high-performance bearings — or advanced thermoplastic composite solutions — count on Dei Vox for reliability, competitive pricing, and top-notch support.
          </p>
          <Link href="/contact" className="inline-block">
            <button className="flex items-center gap-4 sm:gap-6 bg-accent text-black px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold uppercase tracking-[0.25em] text-[10px] sm:text-sm hover:scale-105 transition-all shadow-2xl shadow-accent/20 group">
              Get In Touch
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center text-accent group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight size={16} />
              </div>
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
