"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle2, Wrench, Zap, Settings, Package, Cog, ArrowRight } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/src/components/Magnetic";

const services = [
  {
    icon: <Wrench size={32} />,
    title: "Insitu Machining",
    tagline: "On-Site Precision",
    image: "/images/insitu_machining.png",
    description: "Insitu Machining is the only solution to arrest leakage on-site when the casing is intact with Boiler Pipes. Only skilled credential holders perform this critical machining job on the casing. We bring the machine shop to your plant, eliminating costly downtime.",
    points: ["On-site bore machining", "Flange facing repairs", "No pull-out downtime", "Certified specialists"],
  },
  {
    icon: <Cog size={32} />,
    title: "BCP Overhauling",
    tagline: "Total Rehabilitation",
    image: "/images/bcp_overhauling.png",
    description: "Our pumps run for a longer duration compared to many others between maintenance works. We offer comprehensive overhauling that restores a Boiler Circulation Pump to its original OEM specifications or better, covering inspection, replacement, balancing, and commissioning.",
    points: ["Full strip-down assessment", "Shaft restoration", "Dynamic balancing", "On-site commissioning"],
  },
  {
    icon: <Zap size={32} />,
    title: "Motor Rewinding",
    tagline: "Restore Efficiency",
    image: "/images/motor_rewinding.png",
    description: "An armature winding process restores function to older motors. While not always the most efficient solution, it restores most of the motor's performance at a fraction of the replacement cost. We have over 20 years of experience rewinding HT/LT motors.",
    points: ["HT & LT motor rewinding", "Insulation testing", "Winding upgrades", "Full diagnostics"],
  },
  {
    icon: <Package size={32} />,
    title: "Spare Parts Selling",
    tagline: "OEM & Compatible",
    image: "/images/spare_parts_selling.png",
    description: "Inventory costs of maintaining BCP spare parts are becoming a severe factor in plant budgeting. DEI VOX bridges this gap by providing genuine OEM parts and compatible equivalents sourced from our extensive vendor network, covering all BCP makes in the market.",
    points: ["All BCP makes covered", "OEM part options", "Bearings, seals, impellers", "Fast stock dispatch"],
  },
  {
    icon: <Settings size={32} />,
    title: "Reverse Engineering",
    tagline: "Replicate Legacy Parts",
    image: "/images/reverse_engineering.png",
    description: "DEI VOX assures customers by rebuilding all spare parts through re-engineering or reverse engineering of existing OEM parts. When original parts are obsolete, our engineering team recreates them from scratch maintaining strict metallurgical standards.",
    points: ["Dimensional CAD modeling", "3D scanning", "Metallurgical replication", "Legacy part revival"],
  },
];

const ServiceScrollItem = ({ service, index, activeIndex, setActiveIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    if (isInView) setActiveIndex(index);
  }, [isInView, index, setActiveIndex]);

  const isActive = activeIndex === index;

  return (
    <div ref={ref} className="min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center py-10 md:py-20">
      <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? "opacity-100 translate-x-0" : "opacity-20 -translate-x-8"}`}>

        <div className="flex items-center gap-6 mb-12">
          <span className="text-6xl md:text-8xl font-black text-white/5 tracking-tighter">
            0{index + 1}
          </span>
          <div className="w-20 h-px bg-white/20" />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-accent backdrop-blur-md">
            {service.icon}
          </div>
          <div>
            <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-1">{service.tagline}</p>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">{service.title}</h2>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 0.5, y: 0 } : { opacity: 0.2, y: 10 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl font-medium text-white leading-relaxed mb-10 max-w-xl"
        >
          {service.description}
        </motion.p>

        <ul className="space-y-4">
          {service.points.map((pt) => (
            <li key={pt} className="flex items-start gap-4">
              <CheckCircle2 size={18} className="text-accent mt-1 shrink-0 bg-accent/10 rounded-full" />
              <span className="text-[13px] md:text-sm font-black text-white/80 uppercase tracking-widest">{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const container = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div className="bg-primary text-white selection:bg-accent selection:text-white pb-32" ref={container}>

      {/* ── 1. Brutalist Hero with 3D Entrance ────────────────────── */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-24 pb-24 overflow-hidden px-4 lg:px-10 border-b border-white/5 perspective-1000">
        {/* Massive Background Typography Mask with Parallax */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]), opacity: useTransform(scrollYProgress, [0, 0.5], [0.1, 0]) }}
          className="absolute top-1/2 left-0 -translate-y-1/2 text-[180px] sm:text-[300px] md:text-[400px] font-black tracking-tighter text-white select-none pointer-events-none uppercase whitespace-nowrap leading-none z-0 translate-x-1/4 opacity-10 blur-sm"
        >
          SERVICES
        </motion.div>

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-accent text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-4"
          >
            Core Solutions
          </motion.p>
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ opacity: 0, rotateX: 20, y: 40 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-[-0.04em] uppercase leading-[0.9] mb-8"
            >
              Precision<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-orange-600">Engineering</span>.
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Dual-Pane Sticky Interactive Scroll ───────── */}
      <section className="relative w-full px-4 lg:px-10 max-w-[1600px] mx-auto pt-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 relative items-start">

          {/* Left Text Scroller */}
          <div className="w-full lg:w-5/12 relative z-20">
            {services.map((service, i) => (
              <ServiceScrollItem
                key={service.title}
                service={service}
                index={i}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          {/* Right Sticky Image Pane (Desktop Only) */}
          <div className="hidden lg:block w-7/12 sticky top-[15vh] h-[70vh] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-primary/80 via-transparent to-transparent mix-blend-multiply" />

                {/* Overlay Graphic Element */}
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-accent mb-1">Active View</p>
                    <p className="text-xl font-black uppercase tracking-tight text-white">{services[activeIndex].title}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                    <ArrowRight className="text-white -rotate-45" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ── 3. Massive CTA ───────────────────────────────── */}
      <section className="py-32 w-full px-4 lg:px-10 mt-32 relative overflow-hidden bg-black/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 leading-[0.9]">
            Require a Custom<br />
            <span className="text-accent">Solution?</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
            Our team of experts is ready to assist you with specialized BCP maintenance, overhauling, and rapid reverse engineering.
          </p>

          <Magnetic intensity={0.4}>
            <Link href="/contact" className="inline-block">
              <button className="relative overflow-hidden group w-72 h-20 bg-accent text-zinc-950 font-black rounded-full transition-all shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)] hover:shadow-[0_0_80px_-10px_rgba(249,115,22,0.5)] uppercase tracking-[0.2em] text-[12px] active:scale-95">
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <span className="absolute transition-transform duration-500 group-hover:-translate-y-16">Talk to an Expert</span>
                  <span className="absolute translate-y-16 transition-transform duration-500 group-hover:translate-y-0">Request Consult</span>
                </div>
                <div className="absolute inset-0 bg-white transition-transform duration-500 ease-out origin-bottom scale-y-0 group-hover:scale-y-100 opacity-20 z-0" />
              </button>
            </Link>
          </Magnetic>

        </div>
      </section>

    </div>
  );
}
