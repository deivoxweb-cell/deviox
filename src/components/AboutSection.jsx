"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
  Phone,
  History,
  Cog,
  BadgeCheck,
  Factory,
  Wrench,
} from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/src/components/ScrollReveal";

const BCP_SPECIALTIES = [
  { value: "20+", label: "Years of BCP expertise", icon: History },
  { value: "200+", label: "Pumps overhauled", icon: Cog },
  { value: "3 ISO", label: "Quality, environment, safety", icon: BadgeCheck },
  { value: "Make in India", label: "Engineered at our own facility", icon: Factory },
  { value: "In-situ", label: "Casing machining on site", icon: Wrench },
];

const AboutSection = () => {
  const sectionRef = useRef(null);

  /* ── Parallax transforms ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-60px", "60px"]);
  const blobX = useTransform(scrollYProgress, [0, 1], ["0px", "-30px"]);

  return (
    <section ref={sectionRef} className="py-28 bg-card relative overflow-hidden">

      {/* ── Parallax ambient blob ── */}
      <motion.div
        style={{ y: blobY, x: blobX }}
        className="absolute top-0 right-0 w-[650px] h-[650px] bg-accent/10 rounded-full blur-[130px] pointer-events-none opacity-55"
      />

      <div className="w-full px-4 lg:px-16 relative z-10">

        {/* ── Eyebrow ── */}
        <ScrollReveal variant="fade-right" className="flex items-center gap-4 mb-12">
          <div className="h-px w-12 bg-black/20" />
          <p className="text-black/40 text-[10px] font-bold uppercase tracking-[0.3em]">Corporate Profile</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── Left bento column ── */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <ScrollReveal variant="scale-up" delay={0.05}>
              <div className="block w-full overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-black/5 bg-white shadow-xl shadow-black/5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-black/10">
                  {BCP_SPECIALTIES.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex min-h-44 flex-col items-center justify-start bg-white px-3 py-6 text-center sm:px-4"
                      >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-black">
                          <Icon size={22} aria-hidden="true" />
                        </div>
                        <p className="text-2xl font-medium leading-tight tracking-tight text-black sm:text-3xl">
                          {item.value}
                        </p>
                        <p className="mt-2 max-w-[12rem] text-xs leading-snug text-black/65 sm:text-sm">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col items-center gap-3 border-t border-black/10 px-4 py-5 sm:flex-row sm:flex-wrap sm:justify-center">
                  <span className="text-sm font-medium text-black/70">Certified to</span>
                  {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"].map((certification) => (
                    <span
                      key={certification}
                      className="inline-flex items-center gap-2 rounded-full bg-accent/25 px-4 py-2 text-xs font-semibold text-green-900"
                    >
                      <CheckCircle2 size={14} aria-hidden="true" />
                      {certification}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Office cards */}
            <ScrollReveal stagger className="space-y-3">
              {[
                { label: "Sales Office", location: "Gurugram, Haryana, India" },
                { label: "Service Facility", location: "Bengaluru, Karnataka, India" },
              ].map((office) => (
                <ScrollRevealItem key={office.label} variant="fade-left">
                  <div className="flex items-center gap-4 bg-white border border-black/5 rounded-[2rem] px-6 py-5 hover:border-accent transition-all group">
                    <div className="p-3 bg-black/5 rounded-full text-black group-hover:bg-accent transition-all shrink-0">
                      <MapPin size={14} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-black/30 uppercase tracking-widest">{office.label}</p>
                      <p className="text-sm font-semibold text-black mt-0.5">{office.location}</p>
                    </div>
                  </div>
                </ScrollRevealItem>
              ))}
            </ScrollReveal>
          </div>

          {/* ── Right content ── */}
          <div className="lg:col-span-7 pl-0 lg:pl-10">

            <ScrollReveal variant="fade-up" duration={0.9} className="mb-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black tracking-[-0.04em] leading-[0.88] uppercase">
                The Trusted<br />
                <span className="text-black/20">
                  BCP Doctors
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal stagger className="space-y-6 text-black/60 leading-relaxed text-lg mb-12 font-medium">
              {[
                <><span className="font-bold text-black uppercase tracking-tighter">DEI VOX</span> is recognized as the <strong className="text-black">BCP Doctors</strong> — India's premier engineering trusted specialized in the maintenance of <strong className="text-black">Boiler Circulation Pumps (BCP)</strong>.</>,
                <>We deliver <strong className="text-black uppercase">OEM-equivalent quality</strong> & guarantee at cost-efficient pricing. Our specialized expertise and proven processes ensure reliable performance, system integrity, and maximum uptime for power utilities worldwide.</>,
              ].map((text, i) => (
                <ScrollRevealItem key={i} variant="fade-up">
                  <p>{text}</p>
                </ScrollRevealItem>
              ))}
            </ScrollReveal>

            {/* Feature cards */}
            <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <CheckCircle2 size={18} />,
                  title: "Strategic BCP Advisory",
                  body: "Technical consultation for BCP systems globally, supported by comprehensive component management.",
                },
                {
                  icon: <Phone size={18} />,
                  title: "24/7 Service Support",
                  body: "Round-the-clock technical assistance and expert consultation anywhere in the industrial sector.",
                },
              ].map((item) => (
                <ScrollRevealItem key={item.title} variant="fade-up">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white border border-black/5 rounded-[2.5rem] p-8 transition-all group cursor-default"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-accent rounded-full text-black transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-black">{item.title}</span>
                    </div>
                    <p className="text-sm text-black/50 font-medium leading-relaxed">{item.body}</p>
                  </motion.div>
                </ScrollRevealItem>
              ))}
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
