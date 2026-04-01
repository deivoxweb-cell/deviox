"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowDown } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/src/components/Magnetic";

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-primary" ref={container}>
      <section className="relative h-screen flex flex-col justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 z-0 h-[120%]"
          style={{ y: yBackground, top: "-10%" }}
        >
          <Image
            src="/images/hero_industrial.png"
            alt="Industrial Boiler Circulation Pump Background"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
          />
          <motion.div className="absolute inset-0 bg-primary/80" />
          <motion.div className="absolute inset-0 bg-linear-to-b from-primary/30 via-primary/80 to-primary" />
        </motion.div>

        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="w-full px-4 lg:px-10 relative z-20 flex flex-col items-center text-center mt-20"
        >
          <div className="max-w-5xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center items-center gap-4 mb-4"
            >
              <div className="h-px w-12 bg-accent/60" />
              <span className="text-accent-light text-[10px] md:text-sm font-black uppercase tracking-[0.4em]">
                BCP Specialists — India
              </span>
              <div className="h-px w-12 bg-accent/60" />
            </motion.div>

            {/* Giant Heading */}
            <div className="overflow-hidden mb-8 perspective-1000">
              <motion.h1
                initial={{ opacity: 0, rotateX: 20, y: 40 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-black tracking-[-0.04em] text-white leading-[0.9] uppercase mix-blend-plus-lighter"
              >
                Beyond<br />
                <span className="text-transparent bg-clip-text bg-linear-to-br from-accent-light via-accent to-orange-800 tracking-[-0.05em]">
                  Maintenance
                </span>
              </motion.h1>
            </div>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-lg text-white/70 font-medium mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              We don’t just service Boiler Circulation Pumps. We engineer reliability.
              From rewinding to reverse engineering — <strong className="text-white">DEI VOX powers the core.</strong>
            </motion.p>

            {/* Magnetic CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Magnetic intensity={0.4}>
                <Link href="/services">
                  <button className="relative overflow-hidden group w-64 h-16 bg-accent text-zinc-950 font-black rounded-full transition-all shadow-xl hover:shadow-2xl uppercase tracking-[0.2em] text-[11px] active:scale-95">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <span className="absolute transition-transform duration-500 group-hover:-translate-y-16">Explore Solutions</span>
                      <span className="absolute translate-y-16 transition-transform duration-500 group-hover:translate-y-0">Discover More</span>
                    </div>
                    <div className="absolute inset-0 bg-white transition-transform duration-500 ease-out origin-bottom scale-y-0 group-hover:scale-y-100 opacity-20 z-0" />
                  </button>
                </Link>
              </Magnetic>

              <Magnetic intensity={0.3}>
                <Link href="/contact">
                  <button className="flex items-center gap-4 px-10 h-16 text-white/90 hover:text-white font-black rounded-full transition-all uppercase tracking-[0.2em] text-[11px] hover:bg-white/5 border border-white/5 hover:border-white/20">
                    <Phone size={16} className="text-accent" />
                    Free Consultation
                  </button>
                </Link>
              </Magnetic>
            </motion.div>

            {/* Sub-data bottom strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute bottom-4 md:bottom-8 left-0 right-0 w-full px-4 lg:px-10 flex justify-center md:justify-between items-end pointer-events-none"
            >
              <div className="hidden md:flex flex-col gap-2 font-black text-[9px] uppercase tracking-[0.2em] text-white/30">
                <p>ISO 9001:2015</p>
                <p>24/7 SUPPORT</p>
              </div>

              {/* Scroll Indicator */}
              {/* <div className="flex flex-col items-center justify-center">
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-6 h-10 md:w-8 md:h-12 rounded-full border border-white/10 flex items-start justify-center p-1.5 md:p-2 backdrop-blur-md"
                >
                  <motion.div className="w-1 h-2.5 md:h-3 bg-accent rounded-full" />
                </motion.div>
              </div> */}

              <div className="hidden md:block text-right font-black text-[9px] uppercase tracking-[0.2em] text-white/30">
                <p>INDIA'S #1</p>
                <p>BCP PIONEERS</p>
              </div>
            </motion.div>

          </div>
        </motion.div>


      </section>
    </div>

  );
};

export default Hero;
