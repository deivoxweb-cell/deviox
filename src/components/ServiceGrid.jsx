"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/src/components/ScrollReveal";
import Link from "next/link";

const TiltActiveCard = ({ children, isActive }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set((mouseX / width - 0.5) * 15);
    y.set((mouseY / height - 0.5) * -15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: mouseYSpring, rotateY: mouseXSpring, transformStyle: "preserve-3d" }}
      className="w-full h-full"
    >
      <div style={{ transform: isActive ? "translateZ(30px)" : "none" }} className="w-full h-full transition-transform duration-500">
        {children}
      </div>
    </motion.div>
  );
};

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

const SERVICES = [
  {
    title: "Insitu Machining",
    description: "Precision on-site leakage arrest solutions using skilled technicians on live casing boiler pipes.",
    image: "/images/insitu_machining.png",
  },
  {
    title: "BCP Overhauling",
    description: "Industry-leading pump maintenance ensuring maximum uptime between service cycles.",
    image: "/images/bcp_overhauling.png",
  },
  {
    title: "Motor Rewinding",
    description: "Expert armature winding process restoring efficiency to older critical power systems.",
    image: "/images/motor_rewinding.png",
  },
  {
    title: "Components Procurement",
    description: "Strategic inventory management of OEM-standard industrial components to minimize operational downtime.",
    image: "/images/spare_parts_selling.png",
  },
  {
    title: "Reverse Engineering",
    description: "OEM-standard pump rebuilds through advanced re-engineering of existing components.",
    image: "/images/reverse_engineering.png",
  },
];

const CARD_STYLES = {
  mobile: [
    { scale: 1, opacity: 1, width: 260, height: 440, xFactor: 0, zIndex: 30 },
    { scale: 0.8, opacity: 1, width: 180, height: 380, xFactor: 100, zIndex: 20 },
    { scale: 0.65, opacity: 1, width: 140, height: 320, xFactor: 180, zIndex: 10 },
  ],
  desktop: [
    { scale: 1, opacity: 1, width: 380, height: 560, xFactor: 0, zIndex: 30 },
    { scale: 0.85, opacity: 1, width: 320, height: 480, xFactor: 240, zIndex: 20 },
    { scale: 0.7, opacity: 1, width: 260, height: 420, xFactor: 450, zIndex: 10 },
  ],
};

function getCardStyle(offset, isMobile) {
  const absOffset = Math.abs(offset);
  if (absOffset > 2) return null;

  const styles = isMobile ? CARD_STYLES.mobile[absOffset] : CARD_STYLES.desktop[absOffset];
  const { xFactor, ...rest } = styles;

  return { ...rest, x: offset < 0 ? -xFactor : xFactor };
}

function getOffset(cardIndex, activeIndex) {
  const total = SERVICES.length;
  let offset = cardIndex - activeIndex;
  if (offset > Math.floor(total / 2)) offset -= total;
  if (offset < -Math.floor(total / 2)) offset += total;
  return offset;
}

export default function ServiceGrid() {
  const [activeIndex, setActiveIndex] = useState(2);
  const isPaused = useRef(false);
  const prevOffsets = useRef({});
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  const advance = useCallback(() => {
    if (!isPaused.current) setActiveIndex((p) => (p + 1) % SERVICES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 4000);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-card overflow-x-hidden relative"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      {/* Decorative accent */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 lg:px-16 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-12"
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-black/20" />
            <p className="text-black/40 text-[11px] font-black uppercase tracking-[0.4em]">Operational Competencies</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.05em] text-black uppercase leading-[0.88]">
            Precision<br />
            <span className="text-black/20">Solutions</span>
          </h2>
        </div>
        <p className="text-black/40 text-lg max-w-sm leading-relaxed font-medium">
          Advancing industrial reliability through specialized engineering for critical boiler systems.
        </p>
      </motion.div>

      <div
        className="relative flex items-center justify-center"
        style={{ height: isMobile ? 460 : 580, perspective: 1200 }}
      >
        {/* Navigation Arrows */}
        <div className={`absolute inset-0 flex items-center justify-between pointer-events-none z-50 ${isMobile ? "px-4" : "px-16"}`}>
          <button
            onClick={() => setActiveIndex((p) => (p - 1 + SERVICES.length) % SERVICES.length)}
            className={`pointer-events-auto rounded-full bg-black text-white hover:bg-accent hover:text-black transition-all active:scale-90 shadow-2xl ${isMobile ? "p-3 translate-y-10" : "p-4"}`}
          >
            <ChevronLeft size={isMobile ? 20 : 32} />
          </button>
          <button
            onClick={() => setActiveIndex((p) => (p + 1) % SERVICES.length)}
            className={`pointer-events-auto rounded-full bg-black text-white hover:bg-accent hover:text-black transition-all active:scale-90 shadow-2xl ${isMobile ? "p-3 translate-y-10" : "p-4"}`}
          >
            <ChevronRight size={isMobile ? 20 : 32} />
          </button>
        </div>

        {SERVICES.map((service, cardIndex) => {
          const offset = getOffset(cardIndex, activeIndex);
          const style = getCardStyle(offset, isMobile);
          if (!style) return null;

          const isFocused = offset === 0;
          const prevOffset = prevOffsets.current[service.title];
          const isTeleport = prevOffset !== undefined && Math.abs(offset - prevOffset) > 2;
          prevOffsets.current[service.title] = offset;

          return (
            <motion.div
              key={service.title}
              animate={{ x: style.x, scale: style.scale, opacity: style.opacity }}
              transition={isTeleport ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => !isFocused && setActiveIndex(cardIndex)}
              className="absolute cursor-pointer"
              style={{
                width: style.width,
                height: style.height,
                zIndex: style.zIndex,
              }}
            >
              <TiltActiveCard isActive={isFocused}>
                <div
                  className={`relative w-full h-full rounded-[3rem] overflow-hidden flex flex-col transition-all duration-700
                    ${isFocused
                      ? "shadow-[0_40px_100px_-10px_rgba(0,0,0,0.25)] ring-1 ring-black/5"
                      : "shadow-xl grayscale"
                    }`}
                >
                  <div className="relative" style={{ height: "50%" }}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className={`w-full h-full object-cover transition-all duration-700 ${isFocused ? "scale-105" : "scale-100"}`}
                      loading="lazy"
                    />
                  </div>

                  <div
                    className={`flex flex-col flex-1 transition-colors duration-700
                      ${isFocused ? "bg-white text-black" : "bg-black text-white"}
                      ${isMobile ? "p-6" : "p-8"}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className={`font-black uppercase leading-none tracking-tighter ${isMobile ? "text-xl" : "text-3xl"}`}>
                        {service.title}
                      </h3>
                      {isFocused && <ArrowUpRight className="text-accent" size={24} />}
                    </div>

                    {isFocused ? (
                      <>
                        <p className={`text-black/60 text-sm font-medium leading-relaxed flex-1 mb-6 ${isMobile ? "line-clamp-2" : ""}`}>
                          {service.description}
                        </p>
                        <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          <button className="w-full py-4 rounded-2xl bg-black text-white text-[11px] font-black uppercase tracking-widest transition-all hover:bg-zinc-800">
                            Technical Analysis
                          </button>
                        </Link>
                      </>
                    ) : (
                      <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mt-auto">Technical Scope →</p>
                    )}
                  </div>
                </div>
              </TiltActiveCard>
            </motion.div>
          );
        })}
      </div>

      <div className="flex flex-col items-center justify-center gap-6 mt-16 max-w-[240px] mx-auto">
        <div className="w-full h-1 bg-black/5 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-accent"
            animate={{ width: `${((activeIndex + 1) / SERVICES.length) * 100}%` }}
            transition={{ duration: 0.6, ease: "anticipate" }}
          />
        </div>
        <div className="text-[11px] font-black tracking-[0.4em] uppercase text-black/20">
          SEC {activeIndex + 1} // 0{SERVICES.length}
        </div>
      </div>
    </section>
  );
}
