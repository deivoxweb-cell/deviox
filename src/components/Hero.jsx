"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  Settings, 
  Activity, 
  Zap, 
  ShieldCheck, 
  ChevronRight, 
  Play, 
  ArrowUpRight, 
  Mail, 
  MapPin 
} from "lucide-react";
import Link from "next/link";

const SPEC_DATA = {
  Mechanical: {
    title: "Precision BCP Mechanical Engineering",
    desc: "Advanced dynamic balancing and hydraulic testing to OEM tolerances.",
    stats: [
      { label: "Tolerance", value: "±0.01mm", icon: Zap },
      { label: "Hydraulic Test", value: "100%", icon: Activity }
    ]
  },
  Contact: {
    title: "Direct Engineering Consultation",
    desc: "Connect with our specialists for rapid mobilization and technical diagnostics.",
    stats: [
      { label: "Email", value: "sales@deivox.co.in", icon: Mail },
      { label: "Location", value: "Gurugram, IN", icon: MapPin }
    ]
  },
  Materials: {
    title: "Metallurgical Reverse Engineering",
    desc: "OEM-grade spare parts replication using advanced 3D scanning and CAD.",
    stats: [
      { label: "Accuracy", value: "99.9%", icon: Zap },
      { label: "Material", value: "SS/Inconel", icon: Activity }
    ]
  },
  Support: {
    title: "24/7 Emergency Technical Support",
    desc: "Rapid mobilization for critical thermal power plant shutdowns across India.",
    stats: [
      { label: "Response", value: "Instant", icon: Zap },
      { label: "Mobilization", value: "24h", icon: Activity }
    ]
  }
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Mechanical");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#F5F5F5] overflow-hidden pt-32 pb-20">

      {/* ── Background Elements ── */}
      <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none">
        {/* The Lime Accent Block */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 right-0 w-full h-[70%] bg-accent rounded-tl-[10rem]"
        />

        {/* Subtle grid pattern over lime */}
        <div className="absolute bottom-0 right-0 w-full h-[70%] opacity-20 industrial-grid" />
      </div>

      <div className="w-full px-6 lg:px-16 max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* ── Left Content ── */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center p-2">
              <Settings className="text-accent animate-spin-slow" size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Industrial Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-[72px] font-black tracking-[-0.05em] text-black leading-[0.88] uppercase mb-10"
          >
            The Greatest<br />
            <span className="text-black/20">Pump Reliability</span><br />
            Ever Created
          </motion.h1>

          <div className="flex items-start gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-4xl font-black text-black">10K+</p>
              <p className="text-[9px] font-bold text-black/40 uppercase tracking-widest mt-1">Global Clients<br />Trusted Us</p>
              <div className="flex -space-x-3 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F5F5F5] bg-zinc-200 overflow-hidden relative">
                    <img src={`/images/user_${i}.png`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/contact" className="group flex items-center gap-4 bg-black text-white px-8 py-5 rounded-full hover:bg-zinc-800 transition-all duration-300">
                <span className="text-[11px] font-black uppercase tracking-widest">Book Inspection</span>
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowRight size={16} className="text-black" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Evolution Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-black/5 backdrop-blur-xl border border-black/5 p-8 rounded-[3rem] max-w-sm relative overflow-hidden group hover:bg-black/10 transition-colors"
          >
            <div className="relative z-10">
              <h4 className="text-[10px] font-black text-black/40 uppercase tracking-[0.3em] mb-4">Evolution of BCP</h4>
              <p className="text-xl font-bold text-black leading-tight mb-6">Efficiency Redefined<br />for Critical Systems</p>
              <Link href="/about" className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                Learn More <ArrowRight size={12} />
              </Link>
            </div>
            <div className="absolute bottom-[-20%] right-[-10%] w-32 h-32 bg-accent rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
          </motion.div>
        </div>

        {/* ── Right Content (Image & Floating Cards) ── */}
        <div className="lg:col-span-6 relative h-full min-h-[700px] flex items-center justify-end pr-4 lg:pr-12">

          {/* Main Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: isFocused ? 1.05 : 1,
              x: isFocused ? -50 : 0,
              rotate: isFocused ? -2 : 0
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setIsFocused(!isFocused)}
            className="relative z-20 w-full max-w-[500px] aspect-[4/5] rounded-[4rem] overflow-hidden bg-white border-2 border-black/5 shadow-2xl mr-12 flex items-center justify-center p-8 cursor-pointer group"
          >
            <Image
              src="/images/hero_industrial.png"
              alt="Industrial Pump"
              width={600}
              height={600}
              className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
            />
            {/* Click Indicator */}
            <div className="absolute top-8 right-8 w-12 h-12 bg-black/5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={20} className={isFocused ? "rotate-180" : ""} />
            </div>
          </motion.div>

          {/* Floating Spec Card (Overlapping Top) */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -50 }}
            animate={{ 
              opacity: 1, 
              x: isFocused ? 120 : 0, 
              y: isFocused ? -20 : 0,
              scale: isFocused ? 0.95 : 1
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-10 right-0 bg-white shadow-2xl rounded-[3.5rem] p-10 w-full max-w-[420px] z-30 border border-black/5 pointer-events-none lg:pointer-events-auto"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center pb-4 border-b border-black/5">
                <span className="text-[10px] font-black text-black/30 uppercase tracking-widest">Technical Specifications</span>
                <div className="flex gap-2">
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      const container = document.getElementById('spec-tabs-container');
                      if (container) container.scrollBy({ left: -200, behavior: 'smooth' });
                    }}
                    className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center text-black/30 hover:text-black cursor-pointer transition-colors"
                  >
                    <ChevronRight size={14} className="rotate-180" />
                  </div>
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      const container = document.getElementById('spec-tabs-container');
                      if (container) container.scrollBy({ left: 200, behavior: 'smooth' });
                    }}
                    className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center text-black/30 hover:text-black cursor-pointer transition-colors"
                  >
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div 
                id="spec-tabs-container"
                className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
              >
                {Object.keys(SPEC_DATA).map((tab) => (
                  <button
                    key={tab}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab(tab);
                    }}
                    className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                      activeTab === tab ? "bg-accent text-black shadow-lg shadow-accent/20" : "bg-black/5 text-black/40 hover:bg-black/10"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h5 className="text-2xl font-black text-black tracking-tighter leading-none">{SPEC_DATA[activeTab].title}</h5>
                  <p className="text-[12px] font-medium text-black/40 leading-relaxed">{SPEC_DATA[activeTab].desc}</p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {SPEC_DATA[activeTab].stats.map((stat, idx) => (
                      <div key={idx} className="p-5 bg-black/5 rounded-3xl">
                        <stat.icon className="text-accent mb-2" size={20} />
                        <p className="text-[9px] font-black text-black/30 uppercase mb-1">{stat.label}</p>
                        <p className="text-base font-black text-black tracking-tight">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Floating User Review Card (Overlapping Bottom) */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{
              opacity: 1,
              x: isFocused ? 100 : 0,
              y: isFocused ? 20 : 0
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-10 right-4 bg-white shadow-2xl rounded-[3rem] p-8 z-30 border border-black/5 flex items-center gap-6 max-w-[340px]"
          >
            <div className="w-16 h-16 rounded-full bg-zinc-100 overflow-hidden border-2 border-[#F5F5F5] flex-shrink-0 relative">
              <img src="/images/user_1.png" alt="reviewer" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-black text-black uppercase tracking-tighter">Kunal Joshi</p>
              <p className="text-[10px] font-medium text-black/50 leading-snug mt-1 italic">Excellent service for critical boiler circulation systems.</p>
              <div className="flex gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Zap key={s} size={12} className="fill-accent text-accent" />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
