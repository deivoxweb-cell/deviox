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
    tagline: "On-Site Precision",
    image: "/images/insitu_machining.png",
    description: "Insitu Machining is the ultimate solution to arrest leakage on-site. We bring the machine shop to your plant, eliminating costly downtime with surgical precision.",
    points: ["On-site bore machining", "Flange facing repairs", "No pull-out downtime", "Certified specialists"],
  },
  {
    icon: <Cog size={32} />,
    title: "BCP Overhauling",
    tagline: "Total Rehabilitation",
    image: "/images/bcp_overhauling.png",
    description: "Our comprehensive overhauling restores Boiler Circulation Pumps to OEM specifications. Covering inspection, dynamic balancing, and expert commissioning.",
    points: ["Full strip-down assessment", "Shaft restoration", "Dynamic balancing", "On-site commissioning"],
  },
  {
    icon: <Zap size={32} />,
    title: "Motor Rewinding",
    tagline: "Restore Efficiency",
    image: "/images/motor_rewinding.png",
    description: "Restore function to older motors at a fraction of the replacement cost. We provide specialized HT/LT motor diagnostics and precision rewinding.",
    points: ["HT & LT motor rewinding", "Insulation testing", "Winding upgrades", "Full diagnostics"],
  },
  {
    icon: <Package size={32} />,
    title: "Spare Parts Selling",
    tagline: "OEM & Compatible",
    image: "/images/spare_parts_selling.png",
    description: "Reducing budgeting pressure through strategic sourcing of genuine OEM parts and high-quality compatible equivalents for all BCP makes.",
    points: ["All BCP makes covered", "OEM part options", "Bearings, seals, impellers", "Fast stock dispatch"],
  },
  {
    icon: <Settings size={32} />,
    title: "Reverse Engineering",
    tagline: "Legacy Restoration",
    image: "/images/reverse_engineering.png",
    description: "Rebuilding obsolete components through advanced CAD modeling and metallurgical replication, maintaining the strictest engineering standards.",
    points: ["Dimensional CAD modeling", "3D scanning", "Metallurgical replication", "Legacy part revival"],
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
            <span className="text-7xl md:text-9xl font-black text-black/5 tracking-tighter">
              0{index + 1}
            </span>
            <div className="w-24 h-px bg-black/10" />
          </div>

          <div className="flex items-center gap-6 mb-10">
            <div className="w-16 h-16 bg-black rounded-[1.5rem] flex items-center justify-center text-accent">
              {service.icon}
            </div>
            <div>
              <p className="text-[11px] font-black text-black/30 uppercase tracking-[0.4em] mb-1">
                {service.tagline}
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-black tracking-[-0.05em] uppercase leading-none">
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
                <span className="text-[11px] font-black text-black uppercase tracking-widest">
                  {pt}
                </span>
              </div>
            ))}
          </div>

          <Link href="/contact" className="inline-block">
             <button className="flex items-center gap-4 bg-black text-white px-10 py-4 rounded-full group hover:bg-zinc-900 transition-all shadow-xl shadow-black/10 active:scale-95">
                <span className="text-[11px] font-black uppercase tracking-widest">Consult on Service</span>
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
            className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-black/5 shadow-2xl"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={750}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
               <p className="text-accent text-[11px] font-black uppercase tracking-[0.4em] mb-2">{service.tagline}</p>
               <p className="text-white text-2xl font-black uppercase tracking-tighter">{service.title}</p>
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
    <div className="bg-[#F5F5F5] text-black selection:bg-accent selection:text-black" ref={container}>

      {/* ── 1. Neo-Brutalist Hero ────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center py-32 overflow-hidden px-6 lg:px-16 bg-black text-white">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        
        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent text-[11px] font-black uppercase tracking-[0.5em] mb-10"
          >
            ENGINEERING SOLUTIONS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] mb-12"
          >
            Mission<br />
            <span className="text-white/20">Critical.</span>
          </motion.h1>

          <div className="flex items-center gap-8 mt-12">
             <div className="h-px w-24 bg-white/10" />
             <p className="text-white/40 text-lg max-w-sm font-medium leading-relaxed">
               Advanced technical services for critical power systems and boiler infrastructure.
             </p>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Services Section ───────────────────────────────────── */}
      <section className="relative w-full px-6 lg:px-16 max-w-[1600px] mx-auto py-32">
        <div className="flex flex-col gap-12 relative items-start">

          {/* Sticky Nav */}
          <div className="sticky top-0 lg:top-24 z-40 bg-[#F5F5F5]/80 backdrop-blur-xl py-10 border-b border-black/5 w-full flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-black" />
              <h2 className="text-black text-[11px] font-black uppercase tracking-[0.5em]">DOMAINS OF EXPERTISE</h2>
            </div>
            <div className="hidden md:flex items-center gap-10">
              {services.map((item, i) => (
                <button
                  key={item.title}
                  onClick={() => itemRefs.current[i].current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                  className={`text-[10px] font-black uppercase tracking-widest transition-all ${activeIndex === i ? "text-black border-b-2 border-accent pb-1" : "text-black/20 hover:text-black/50"}`}
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
        
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-20 leading-[0.9]">
            Industrial <br /><span className="text-white/20">Capabilities.</span>
          </h2>
          <p className="text-white/40 text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            Partner with our specialized engineering team for rapid reverse engineering and mission-critical BCP maintenance.
          </p>

          <Link href="/contact" className="inline-block">
            <button className="flex items-center gap-6 bg-accent text-black px-12 py-5 rounded-full font-black uppercase tracking-[0.3em] text-sm hover:scale-105 transition-all shadow-2xl">
               Talk to an Expert
               <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                 <ArrowUpRight size={20} />
               </div>
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
