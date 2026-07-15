"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/src/components/ScrollReveal";

const LOGOS = [
  { name: "JINDAL POWER" },
  { name: "TATA POWER" },
  { name: "ESSAR POWER" },
  { name: "ADANI POWER" },
  { name: "TSGENCO" },
  { name: "NTPC" },
  { name: "BHEL" },
  { name: "APRAAVA ENERGY" },
  { name: "POWERMECH" },
  { name: "STEAG" },
  { name: "SULZER" },
];

const LOGO_IMAGES = {
  "JINDAL POWER": "/logo-brand/jindal-steel-and-power_thumb.png",
  "TATA POWER": "/logo-brand/tata-power-logo-png_seeklogo-247891.png",
  "ESSAR POWER": "/logo-brand/611-6112632_essar-logo-essar-petrol-pump-logo.png",
  "ADANI POWER": "/logo-brand/adani-power-logo-png_seeklogo-376105.png",
  "TSGENCO": "/logo-brand/ts.png",
  "NTPC": "/logo-brand/NTPC.NS-2417ca8e.png",
  "BHEL": "/logo-brand/bhel-logo-png_seeklogo-305066.png",
  "APRAAVA ENERGY": "/logo-brand/Apraava-Energy_Logo_Transparent-1200x484.png",
  "POWERMECH": "/logo-brand/POWERMECH.NS-f4b44a59.png",
  "STEAG": "/logo-brand/steag-logo-png_seeklogo-559287.png",
  "SULZER": "/logo-brand/sulzer-logo-png-transparent.png",
};

const CompanyLogo = ({ name }) => {
  const src = LOGO_IMAGES[name];
  if (!src) return <span className="font-bold text-xl text-black/80">{name}</span>;

  let sizeClass = "max-h-[75%] max-w-[85%]";
  let scaleClass = "";

  if (name === "TSGENCO" || name === "BHEL" || name === "NTPC" || name === "POWERMECH") {
    sizeClass = "max-h-[90%] max-w-[90%]";
  } else if (name === "JINDAL POWER" || name === "TATA POWER" || name === "SULZER" || name === "STEAG" || name === "APRAAVA ENERGY" || name === "ESSAR POWER") {
    sizeClass = "max-h-[100%] max-w-[95%]";
  }

  if (name === "TATA POWER" || name === "SULZER" || name === "POWERMECH" || name === "BHEL" || name === "STEAG" || name === "JINDAL POWER" || name === "ADANI POWER" || name === "TSGENCO") {
    scaleClass = "scale-[1.45]";
  }

  return (
    <div className="w-40 h-16 flex items-center justify-center p-2 bg-[#F9F9F9] border border-black/[0.04] rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:bg-white hover:border-black/[0.08] hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition-all duration-500 overflow-hidden">
      <img
        src={src}
        alt={name}
        className={`${sizeClass} ${scaleClass} w-auto h-auto object-contain grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 select-none pointer-events-none`}
      />
    </div>
  );
};

const ClientSeries = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  /* Ticker drifts slightly on parallax for depth */
  const tickerY = useTransform(scrollYProgress, [0, 1], ["12px", "-12px"]);
  const ticker = (
    <div className="flex items-center gap-12 pr-12">
      {LOGOS.map((logo, index) => (
        <div key={`${logo.name}-${index}`} className="relative group flex items-center justify-center shrink-0">
          <CompanyLogo name={logo.name} />
        </div>
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} className="py-12 md:py-24 bg-white border-y border-black/[0.04] overflow-hidden relative">
      <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mb-10 md:mb-20"
        >
          <div className="flex items-center gap-3 sm:gap-6 max-w-full px-4 justify-center">
            <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-black/20 shrink-0" />
            <p className="text-[9px] sm:text-[10px] font-bold text-black/40 tracking-[0.3em] sm:tracking-[0.4em] uppercase whitespace-nowrap">Trusted By Indian Leaders</p>
            <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-black/20 shrink-0" />
          </div>
        </motion.div>

        {/* Ticker */}
        <div className="relative">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <motion.div style={{ y: tickerY }} className="flex overflow-hidden w-full py-4 group">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex items-center w-max group-hover:[animation-play-state:paused]"
            >
              {ticker}{ticker}
            </motion.div>
          </motion.div>
        </div>

        {/* GST tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10 md:mt-20 px-4"
        >
          <div className="flex items-center gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-black/10 bg-white hover:border-accent/30 hover:bg-[#f8f6ff] transition-all duration-500 group cursor-default shadow-sm text-center">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-accent animate-pulse shrink-0" />
            <span className="text-[9px] sm:text-[10px] font-bold text-black/50 group-hover:text-black uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-colors leading-tight">GST Compliant — GSTIN 29AAKCD5641B1ZQ</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSeries;
