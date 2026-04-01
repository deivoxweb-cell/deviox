"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Settings, Headset, Timer } from "lucide-react";

const features = [
  {
    title: "CERTIFIED EXPERTS",
    icon: <ShieldCheck size={40} className="text-white/20 group-hover:text-accent transition-all duration-500" />,
  },
  {
    title: "OEM QUALITY PARTS",
    icon: <Settings size={40} className="text-white/20 group-hover:text-accent transition-all duration-500" />,
  },
  {
    title: "24/7 SUPPORT",
    icon: <Headset size={40} className="text-white/20 group-hover:text-accent transition-all duration-500" />,
  },
  {
    title: "FAST TURNAROUND",
    icon: <Timer size={40} className="text-white/20 group-hover:text-accent transition-all duration-500" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-primary relative overflow-hidden text-white">
      {/* Background dark grain/glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,133,51,0.05)_0%,rgba(0,51,102,1)_100%)] pointer-events-none" />

      <div className="w-full px-4 lg:px-10 relative z-10 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-accent text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] mb-4">The Standard of Excellence</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-[-0.04em] uppercase">
            WHY CHOOSE <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">DEIVOX?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 p-px rounded-[2rem] overflow-hidden">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-primary/90 backdrop-blur-3xl p-10 md:p-14 flex flex-col items-center text-center group hover:bg-white/5 transition-all duration-500 rounded-none relative overflow-hidden"
            >
              {/* Massive Background Number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] md:text-[180px] font-black leading-none text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.03)" }}>
                0{index + 1}
              </div>

              {/* Glowing Hover Orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/0 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700 pointer-events-none" />

              <div className="mb-8 transform transition-transform group-hover:scale-110 duration-500 group-hover:-translate-y-2 relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-xs md:text-sm font-black tracking-[0.2em] text-white/80 uppercase group-hover:text-white transition-colors duration-500 relative z-10">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default WhyChooseUs;
