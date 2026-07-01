"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { MapPin, CheckCircle2, Phone, Award, Zap, ArrowUpRight } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/src/components/ScrollReveal";

const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 18);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * -18);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: mouseYSpring, rotateY: mouseXSpring, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(40px)" }} className="w-full h-full">{children}</div>
    </motion.div>
  );
};

const BIG_STATS = [
  { value: "20+", label: "Years of BCP Expertise", icon: <Award size={16} /> },
  { value: "500+", label: "Pumps Overhauled", icon: <Zap size={16} /> },
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
  const logoCardY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

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
          <motion.div
            style={{ y: logoCardY }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <ScrollReveal variant="scale-up" delay={0.05}>
              <TiltCard className="w-full rounded-[3rem] cursor-crosshair shadow-2xl shadow-black/25 overflow-hidden group">
                <div className="relative bg-[#0a0a0a] rounded-[3rem] p-10 flex flex-col gap-8 min-h-[300px] overflow-hidden">

                  {/* Green glow orb top-right */}
                  <div className="absolute -top-10 -right-10 w-52 h-52 bg-accent/20 rounded-full blur-[70px] pointer-events-none group-hover:bg-accent/35 transition-all duration-700" />
                  {/* Blue glow orb bottom-left */}
                  <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-primary/15 rounded-full blur-[60px] pointer-events-none" />

                  {/* Circuit dot grid */}
                  <div className="absolute top-7 right-7 grid grid-cols-4 gap-1.5 opacity-25">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className={`w-1 h-1 rounded-full ${i % 3 === 0 ? "bg-accent" : "bg-white/30"}`} />
                    ))}
                  </div>

                  {/* Thin green shimmer top line */}
                  <div className="absolute top-0 left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

                  {/* Logo + divider + text */}
                  <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl scale-150" />
                      <Image
                        src="/images/Logo.png"
                        alt="DEI VOX Logo"
                        width={155}
                        height={155}
                        className="object-contain relative z-10 drop-shadow-[0_0_18px_rgba(103,172,67,0.28)]"
                        loading="lazy"
                      />
                    </div>

                    <div className="h-16 w-px bg-white/10 hidden sm:block" />

                    <div className="flex flex-col gap-3 text-center sm:text-left">
                      <div>
                        <p className="text-white text-sm font-bold uppercase tracking-[0.35em] leading-tight">BCP Specialists</p>
                        <p className="text-white/30 text-[9px] font-bold uppercase tracking-[0.25em] mt-1">100% Make in India</p>
                      </div>
                      {/* ISO badge chip */}
                      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 self-center sm:self-start backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[8px] font-bold text-accent/80 uppercase tracking-widest">ISO 9001:2015</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom metrics strip */}
                  <div className="relative z-10 flex items-center gap-5 pt-5 border-t border-white/[0.06]">
                    <div>
                      <p className="text-2xl font-extrabold text-white tracking-tighter leading-none">20+</p>
                      <p className="text-[8px] text-white/30 uppercase tracking-widest mt-0.5">Yrs Expert</p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <p className="text-2xl font-extrabold text-white tracking-tighter leading-none">500+</p>
                      <p className="text-[8px] text-white/30 uppercase tracking-widest mt-0.5">Pumps Done</p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <p className="text-2xl font-extrabold text-accent tracking-tighter leading-none">24/7</p>
                      <p className="text-[8px] text-white/30 uppercase tracking-widest mt-0.5">Support</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Stat bento cards */}
            <ScrollReveal stagger className="grid grid-cols-2 gap-4">
              {BIG_STATS.map((s, i) => (
                <ScrollRevealItem key={s.value} variant="scale-up">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white border border-black/5 rounded-[2rem] p-8 flex flex-col justify-between text-black min-h-[160px] group transition-all cursor-default"
                  >
                    <div className="text-accent group-hover:scale-110 transition-transform">{s.icon}</div>
                    <div>
                      <p className="text-4xl font-bold text-black leading-none tracking-tighter">{s.value}</p>
                      <p className="text-[10px] text-black/40 uppercase tracking-widest font-semibold mt-2">{s.label}</p>
                    </div>
                  </motion.div>
                </ScrollRevealItem>
              ))}
            </ScrollReveal>

            {/* Office cards */}
            <ScrollReveal stagger className="space-y-3">
              {[
                { label: "Sales Office", location: "Gurugram, Haryana, India" },
                { label: "Service Facility", location: "Bengaluru Karnataka India" },
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
          </motion.div>

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
                <><span className="font-bold text-black uppercase tracking-tighter">DEI VOX INDIA</span> is recognized as the <strong className="text-black">BCP Doctors</strong> — India's premier engineering firm specialized in the maintenance of <strong className="text-black">Boiler Circulation Pumps (BCP) & Boiler Water Circulation Pump (BWCP) </strong>.</>,
                <>We deliver <strong className="text-black uppercase">OEM-standard quality</strong> at cost-efficient pricing. Our specialized workflows guarantee system reliability and maximum uptime for global power utilities.</>,
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
