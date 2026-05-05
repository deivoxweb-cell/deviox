"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle2, Wrench, Zap, Settings, Package, Cog, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Magnetic from "@/src/components/Magnetic";

const services = [
  {
    icon: <Wrench size={32} />,
    title: "Insitu Machining",
    tagline: "Direct Operational Support",
    image: "/images/insitu_machining.png",
    description: "Insitu Machining is the definitive solution for on-site leakage containment. We deploy specialized mobile machining units to your facility, eliminating critical downtime with surgical engineering precision.",
    points: ["On-site bore machining", "Flange facing restoration", "Minimized pull-out downtime", "Certified technical specialists"],
  },
  {
    icon: <Cog size={32} />,
    title: "BCP Overhauling",
    tagline: "System Rehabilitation",
    image: "/images/bcp_overhauling.png",
    description: "Our comprehensive overhauling protocols restore Boiler Circulation Pumps to precise OEM specifications. We manage the entire lifecycle from diagnostic inspection to dynamic balancing and commissioning.",
    points: ["Full strip-down assessment", "Precision shaft restoration", "Advanced dynamic balancing", "Operational commissioning"],
  },
  {
    icon: <Zap size={32} />,
    title: "Motor Rewinding",
    tagline: "Efficiency Optimization",
    image: "/images/motor_rewinding.png",
    description: "Restore operational efficiency to legacy motor systems at a fraction of capital expenditure. We provide specialized HT/LT motor diagnostics and precision rewinding services.",
    points: ["HT & LT motor rewinding", "Dielectric insulation testing", "Winding architecture upgrades", "Comprehensive diagnostics"],
  },
  {
    icon: <Package size={32} />,
    title: "Components Procurement",
    tagline: "OEM & Compatible Solutions",
    image: "/images/spare_parts_selling.png",
    description: "Reducing budgetary pressure through strategic sourcing of genuine OEM components and high-quality compatible alternatives for all BCP configurations.",
    points: ["All BCP makes supported", "OEM procurement options", "Precision seals & impellers", "Optimized lead times"],
  },
  {
    icon: <Settings size={32} />,
    title: "Reverse Engineering",
    tagline: "Legacy Asset Restoration",
    image: "/images/reverse_engineering.png",
    description: "Rehabilitating obsolete components through advanced CAD modeling and metallurgical replication, adhering to the most stringent engineering standards.",
    points: ["Dimensional CAD modeling", "3D laser scanning", "Metallurgical replication", "Legacy component revival"],
  },
];

const ServiceScrollItem = ({ service, index, itemRef, isActive }) => {
  return (
    <div
      ref={itemRef}
      className={`min-h-[80vh] flex flex-col justify-center py-24 transition-all duration-700 ${isActive ? "opacity-100" : "opacity-20 grayscale"}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-8 mb-16">
            <span className="text-7xl md:text-9xl font-extrabold text-black/5 tracking-tighter">
              0{index + 1}
            </span>
            <div className="w-24 h-px bg-black/10" />
          </div>

          <div className="flex items-center gap-6 mb-10">
            <div className="w-16 h-16 bg-black rounded-[1.5rem] flex items-center justify-center text-accent">
              {service.icon}
            </div>
            <div>
              <p className="text-[11px] font-bold text-black/30 uppercase tracking-[0.3em] mb-1">
                {service.tagline}
              </p>
              <h2 className="text-4xl md:text-6xl font-extrabold text-black tracking-[-0.04em] uppercase leading-none">
                {service.title}
              </h2>
            </div>
          </div>

          <p className="text-xl font-medium text-black/50 leading-relaxed mb-12 max-w-xl">
            {service.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {service.points.map((pt) => (
              <div key={pt} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-accent transition-transform group-hover:scale-110">
                   <CheckCircle2 size={16} />
                </div>
                <span className="text-[11px] font-semibold text-black uppercase tracking-widest">
                  {pt}
                </span>
              </div>
            ))}
          </div>

          <Link href="/contact" className="inline-block">
             <button className="flex items-center gap-4 bg-black text-white px-10 py-4 rounded-full group hover:bg-zinc-900 transition-all shadow-xl shadow-black/10 active:scale-95">
                <span className="text-[11px] font-bold uppercase tracking-widest">Technical Consultation</span>
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={18} />
                </div>
             </button>
          </Link>
        </div>

        {/* Image Content */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden border border-black/5 shadow-2xl"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={750}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            {/* Green shimmer bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
               <p className="text-accent text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.3em] mb-2">{service.tagline}</p>
               <p className="text-white text-xl sm:text-2xl font-bold uppercase tracking-tighter">{service.title}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const container = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef(services.map(() => React.createRef()));

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (!window) return;
      const viewportMid = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDist = Infinity;

      itemRefs.current.forEach((ref, i) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const itemMid = rect.top + rect.height / 2;
        const dist = Math.abs(itemMid - viewportMid);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-card text-black selection:bg-accent selection:text-black" ref={container}>

      {/* ── 1. Neo-Brutalist Hero ────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center py-24 sm:py-32 overflow-hidden px-6 lg:px-16 bg-black text-white">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent/15 sm:bg-accent/25 rounded-full blur-[80px] sm:blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[250px] h-[250px] bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
        {/* Floating dot particles */}
        {[
          { top: "18%", left: "7%", size: 5, delay: 0, dur: 4.2 },
          { top: "45%", left: "2%", size: 3, delay: 1.2, dur: 5.1 },
          { top: "72%", left: "10%", size: 4, delay: 0.6, dur: 6.3 },
          { top: "30%", left: "50%", size: 3, delay: 1.8, dur: 4.8 },
          { top: "78%", left: "58%", size: 4, delay: 0.4, dur: 5.6 },
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-8 sm:mb-10"
          >
            ENGINEERING SOLUTIONS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88] mb-12"
          >
            Mission<br />
            <span className="text-white/20">Critical.</span>
          </motion.h1>

          <div className="flex items-center gap-6 sm:gap-8 mt-12">
             <div className="h-px w-16 sm:w-24 bg-white/10" />
             <p className="text-white/40 text-base sm:text-lg max-w-sm font-medium leading-relaxed">
               Advanced technical services for critical power systems and boiler infrastructure.
             </p>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Services Section ───────────────────────────────────── */}
      <section className="relative w-full px-6 lg:px-16 max-w-[1600px] mx-auto py-32">
        <div className="flex flex-col gap-12 relative items-start">

          {/* Sticky Nav */}
          <div className="sticky top-0 lg:top-24 z-40 bg-card/80 backdrop-blur-xl py-6 sm:py-10 border-b border-black/5 w-full flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center gap-4">
              <div className="w-8 sm:w-12 h-px bg-black" />
              <h2 className="text-black text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.4em]">DOMAINS OF EXPERTISE</h2>
            </div>
            <div className="hidden md:flex items-center gap-10">
              {services.map((item, i) => (
                <button
                  key={item.title}
                  onClick={() => itemRefs.current[i].current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                  className={`text-[10px] font-bold uppercase tracking-widest transition-all ${activeIndex === i ? "text-black border-b-2 border-accent pb-1" : "text-black/20 hover:text-black/50"}`}
                >
                  {item.title.split(' ')[0]}
                </button>
              ))}
            </div>
            {/* Mobile Domain Indicator */}
            <div className="md:hidden flex overflow-x-auto w-full scrollbar-hide gap-6 pb-2 px-2">
                {services.map((item, i) => (
                    <button
                        key={item.title}
                        onClick={() => itemRefs.current[i].current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                        className={`whitespace-nowrap text-[9px] font-bold uppercase tracking-widest transition-all ${activeIndex === i ? "text-black border-b-2 border-accent pb-1" : "text-black/20"}`}
                    >
                        {item.title.split(' ')[0]}
                    </button>
                ))}
            </div>
          </div>

          <div className="w-full relative z-20">
            {services.map((service, i) => (
              <ServiceScrollItem
                key={service.title}
                service={service}
                index={i}
                itemRef={itemRefs.current[i]}
                isActive={activeIndex === i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Massive CTA ───────────────────────────────── */}
      <section className="py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/12 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <h2 className="text-3xl md:text-6xl font-extrabold text-white uppercase tracking-tighter mb-12 sm:mb-20 leading-[0.9]">
            Industrial <br /><span className="text-white/20">Capabilities.</span>
          </h2>
          <p className="text-white/40 text-lg sm:text-xl font-medium mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
            Partner with our specialized engineering team for rapid reverse engineering and mission-critical BCP maintenance.
          </p>

          <Link href="/contact" className="inline-block">
            <button className="flex items-center gap-4 sm:gap-6 bg-accent text-black px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold uppercase tracking-[0.25em] text-[10px] sm:text-sm hover:scale-105 transition-all shadow-2xl shadow-accent/20 group">
               Initiate Technical Engagement
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
