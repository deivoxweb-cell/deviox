"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { MapPin, CheckCircle2, Phone, Award, Zap } from "lucide-react";
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
  { value: "10+", label: "Years of BCP Expertise", icon: <Award size={16} /> },
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
              <TiltCard className="w-full bg-black rounded-[3rem] p-10 flex flex-col sm:flex-row items-center justify-center gap-10 shadow-2xl shadow-black/10 cursor-crosshair min-h-[240px]">
                <Image
                  src="/images/Logo.png"
                  alt="DEI VOX Logo"
                  width={180}
                  height={180}
                  className="object-contain brightness-0 invert"
                  loading="lazy"
                />
                <div className="h-20 w-px bg-white/20 hidden sm:block" />
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <p className="text-white text-xs font-bold uppercase tracking-[0.35em]">BCP Specialists</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.25em]">100% Make in India</p>
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
                { label: "Solution Provider", location: "Bommasandra Industrial Area, Bangalore" },
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
                <><span className="font-bold text-black uppercase tracking-tighter">DEI VOX INDIA</span> is recognized as the <strong className="text-black">BCP Doctors</strong> — India's premier engineering firm specialized in the maintenance of <strong className="text-black">Boiler Circulation Pumps (BCP/CCP)</strong>.</>,
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
