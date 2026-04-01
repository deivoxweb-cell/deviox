"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Settings, Headset, Timer } from "lucide-react";

const features = [
  {
    title: "CERTIFIED EXPERTS",
    icon: <ShieldCheck size={40} className="text-secondary opacity-40 group-hover:text-primary group-hover:opacity-100 transition-all duration-300" />,
  },
  {
    title: "OEM QUALITY PARTS",
    icon: <Settings size={40} className="text-secondary opacity-40 group-hover:text-primary group-hover:opacity-100 transition-all duration-300" />,
  },
  {
    title: "24/7 SUPPORT",
    icon: <Headset size={40} className="text-secondary opacity-40 group-hover:text-primary group-hover:opacity-100 transition-all duration-300" />,
  },
  {
    title: "FAST TURNAROUND",
    icon: <Timer size={40} className="text-secondary opacity-40 group-hover:text-primary group-hover:opacity-100 transition-all duration-300" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="w-full px-4 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary uppercase">
            WHY CHOOSE DEIVOX?
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 flex flex-col items-center text-center shadow-sm border border-border group hover:shadow-md transition-all rounded-sm"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xs md:text-sm font-black tracking-widest text-foreground uppercase">
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
