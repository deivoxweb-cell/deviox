"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

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
    description:
      "Today, this type of special machining is the only solution to arrest the leakage (on-site) as the casing is intact with Boiler Pipes and only skilled and experienced credential holders for doing this critical machining job are allowed on casing….",
    image: "/images/insitu_machining.png",
    bg: "from-[#111111] to-[#2a2a2a]",
  },
  {
    title: "BCP Overhauling",
    description:
      "Our pumps usually run for a longer duration of time as compared to many other companies in this industry between the repairs and maintenance works…",
    image: "/images/bcp_overhauling.png",
    bg: "from-[#111111] to-[#2a2a2a]",
  },
  {
    title: "Motor Rewinding",
    description:
      "An armature winding process will allow you to gain function of an older motor. While this might not be the most efficient solution, sometimes you may find this restores most of the motor's efficiency…",
    image: "/images/motor_rewinding.png",
    bg: "from-[#111111] to-[#2a2a2a]",
  },
  {
    title: "Spare Parts Selling",
    description:
      "The inventory cost of maintaining is becoming an increasing factor in budgeting. Inventory costs are forcing companies to either increase their pricing or reduce their inventory to compensate for this…",
    image: "/images/spare_parts_selling.png",
    bg: "from-[#111111] to-[#2a2a2a]",
  },
  {
    title: "Reverse Engineering",
    description:
      "We as DEI VOX INDIA PVT. LTD. company assured our customers by pump rebuilds all the spare parts by doing re-engineering or reverse engineering on the existing OEM parts…",
    image: "/images/reverse_engineering.png",
    bg: "from-[#111111] to-[#2a2a2a]",
  },
];

const CARD_STYLES = {
  mobile: [
    { scale: 1, opacity: 1, width: 280, height: 440, xFactor: 0, zIndex: 30 },
    { scale: 0.75, opacity: 1, width: 180, height: 380, xFactor: 140, zIndex: 20 },
    { scale: 0.6, opacity: 1, width: 180, height: 340, xFactor: 260, zIndex: 10 },
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

  const advance = useCallback(() => {
    if (!isPaused.current) setActiveIndex((p) => (p + 1) % SERVICES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 3000);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <section
      className="py-16 bg-[#f8f9fb] overflow-x-hidden"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">
          What We Do
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary uppercase">
          OUR CORE SOLUTIONS
        </h2>
        <div className="w-20 h-1.5 bg-accent mx-auto mt-5 rounded-full" />
      </motion.div>

      <div
        className="relative flex items-center justify-center"
        style={{ height: isMobile ? 480 : 560, perspective: 1200 }}
      >
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-2 md:px-8 pointer-events-none z-50">
          <button
            onClick={() => setActiveIndex((p) => (p - 1 + SERVICES.length) % SERVICES.length)}
            className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-accent hover:text-zinc-950 text-primary border border-white/5 backdrop-blur-md transition-all active:scale-90 shadow-xl group"
            aria-label="Previous slide"
          >
            <ChevronLeft size={isMobile ? 24 : 32} />
          </button>
          <button
            onClick={() => setActiveIndex((p) => (p + 1) % SERVICES.length)}
            className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-accent hover:text-zinc-950 text-accent border border-white/5 backdrop-blur-md transition-all active:scale-90 shadow-xl group"
            aria-label="Next slide"
          >
            <ChevronRight size={isMobile ? 24 : 32} />
          </button>
        </div>

        {SERVICES.map((service, cardIndex) => {
          const offset = getOffset(cardIndex, activeIndex);
          const style = getCardStyle(offset, isMobile);
          if (!style) return null;

          const isFocused = offset === 0;
          const prevOffset = prevOffsets.current[service.title];
          const isTeleport =
            prevOffset !== undefined && Math.abs(offset - prevOffset) > 2;
          prevOffsets.current[service.title] = offset;

          return (
            <motion.div
              key={service.title}
              animate={{ x: style.x, scale: style.scale, opacity: style.opacity }}
              transition={
                isTeleport
                  ? { duration: 0 }
                  : { duration: 0.45, ease: "easeInOut" }
              }
              onClick={() => !isFocused && setActiveIndex(cardIndex)}
              className="absolute cursor-pointer"
              style={{
                width: style.width,
                height: style.height,
                zIndex: style.zIndex,
              }}
            >
              {/* Card shell */}
              <div
                className={`relative w-full h-full rounded-3xl overflow-hidden flex flex-col
                  ${isFocused
                    ? "shadow-[0_30px_80px_-10px_rgba(0,0,0,0.5)] ring-2 ring-accent/40"
                    : "shadow-xl ring-1 ring-white/20"
                  }`}
              >
                {/* Top: image (55% height) */}
                <div className="relative" style={{ height: "55%" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${isFocused ? "scale-105" : "scale-100"}`}
                  />
                  {/* Dark tint on side cards */}
                  {!isFocused && (
                    <div className="absolute inset-0 bg-black/50" />
                  )}
                </div>

                {/* Bottom: text panel */}
                <div
                  className={`flex flex-col flex-1 px-5 py-4 transition-colors duration-300
                    ${isFocused ? "bg-white" : "bg-primary"}`}
                >
                  <h3
                    className={`font-black tracking-tight uppercase leading-tight mb-2 transition-colors
                      ${isMobile ? "text-base" : "text-lg"}
                      ${isFocused ? "text-primary" : "text-white/60"}`}
                  >
                    {service.title}
                  </h3>

                  <div className={`w-8 h-0.5 mb-3 rounded-full ${isFocused ? "bg-accent" : "bg-white/10"}`} />

                  {isFocused ? (
                    <>
                      <p className="text-foreground/80 text-[13px] font-semibold leading-relaxed flex-1 mb-4 line-clamp-3 md:line-clamp-none">
                        {isMobile && service.description.length > 100
                          ? service.description.substring(0, 100) + "..."
                          : service.description}
                      </p>
                      <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <button className="w-full py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-zinc-950 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-md shadow-accent/30">
                          Explore Solution
                        </button>
                      </Link>
                    </>
                  ) : (
                    <p className="text-white/70 text-[10px] uppercase tracking-widest font-bold mt-auto">Tap to view →</p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {SERVICES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-accent/50 ${i === activeIndex
              ? "w-10 h-3.5 bg-accent"
              : "w-3.5 h-3.5 bg-gray-300 hover:bg-gray-400"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
