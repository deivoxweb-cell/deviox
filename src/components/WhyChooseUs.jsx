"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Settings, Headset, Timer, ArrowRight } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/src/components/ScrollReveal";

const features = [
  {
    title: "Technical Certification",
    desc: "ISO 9001:2015 certified engineering workflows with extensive BCP field experience.",
    icon: ShieldCheck,
    number: "01",
  },
  {
    title: "OEM Quality Parts",
    desc: "OEM-level components and reverse-engineered spares for all major pump brands.",
    icon: Settings,
    number: "02",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock emergency response and planned maintenance across India.",
    icon: Headset,
    number: "03",
  },
  {
    title: "Optimized Lead Times",
    desc: "Minimizing plant downtime through rapid mobilization and specialized in-situ machining.",
    icon: Timer,
    number: "04",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-primary relative overflow-hidden text-white">

      {/* ── Background Grid ── */}
      <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
      
      {/* ── Decorative Circles ── */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-6 lg:px-16 relative z-10">

        {/* ── Header ── */}
        <motion.div
          style={{ y: headingY }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-24"
        >
          <div className="max-w-2xl">
            <ScrollReveal variant="fade-right" className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <p className="text-accent text-[11px] font-bold uppercase tracking-[0.3em]">The Standard of Excellence</p>
            </ScrollReveal>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.04em] uppercase leading-[0.9]"
            >    Value<br />
                <span className="text-white/20">
                  Propositions
                </span>
              </motion.h2>
          </div>

          <ScrollReveal variant="fade-left" delay={0.2} className="lg:mb-4">
            <p className="text-white/40 text-base md:text-lg max-w-sm leading-relaxed font-medium">
              Trusted by India's leading thermal power plants and industrial facilities to power the core.
            </p>
          </ScrollReveal>
        </motion.div>

        {/* ── Bento Cards ── */}
        <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollRevealItem key={feature.title} variant="fade-up">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative group bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between transition-all duration-500 overflow-hidden cursor-default hover:shadow-2xl hover:shadow-black/10"
                >
                  {/* Background Number */}
                  <div className="absolute top-[-10%] right-[-10%] text-[100px] sm:text-[120px] lg:text-[140px] font-extrabold text-black/[0.03] pointer-events-none leading-none tracking-tighter">
                    {feature.number}
                  </div>
                  {/* Shimmer top on hover */}
                  <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black flex items-center justify-center text-accent mb-6 sm:mb-8 lg:mb-10 group-hover:scale-110 group-hover:bg-black group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tighter text-black leading-tight mb-3 sm:mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-black/50 text-xs sm:text-sm font-medium leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  <div className="mt-8 sm:mt-10 lg:mt-12 relative z-10">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-black/10 flex items-center justify-center text-black group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                       <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </motion.div>
              </ScrollRevealItem>
            );
          })}
        </ScrollReveal>

      </div>
    </section>
  );
};

export default WhyChooseUs;
