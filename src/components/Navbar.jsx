"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "ISO Certificate", href: "/iso-certificate" },
  { name: "Reach Us", href: "/contact" },
];

// SEO-priority pump expertise pages — linked from navbar for indexing signal
const pumpLinks = [
  { name: "Boiler Circulation Pump", href: "/boiler-circulation-pump" },
  { name: "Boiler Water Circulation Pump", href: "/boiler-water-circulation-pump" },
  { name: "BCP Pump", href: "/bcp-pump" },
  { name: "Submersible Pump Repair", href: "/submersible-pump-repair" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pumpOpen, setPumpOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled
        ? "bg-white/80 backdrop-blur-2xl shadow-[0_4px_30px_rgb(0,0,0,0.05)] py-2 border-b border-white/20"
        : "bg-transparent py-6"
        }`}
    >
      <div className="w-full px-4 lg:px-10">
        <div className="flex flex-col">
          {/* Main Navbar Row */}
          <div className="flex justify-between items-center">
            <div className="shrink-0">
              <Link href="/" className="flex items-center group">
                <div className={`relative transition-all duration-500 group-hover:scale-105 ${!scrolled ? "brightness-0 invert" : ""}`}>
                  <Image
                    src="/images/Logo.png"
                    alt="Deivox Logo"
                    width={110}
                    height={120}
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-12">
              <div className="flex items-center gap-8">
                {navLinks.slice(0, 2).map((link) => (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`text-[11px] font-black transition-all duration-500 uppercase tracking-widest flex items-center gap-1.5 ${scrolled ? "text-primary hover:text-accent" : "text-white/80 hover:text-white"
                        }`}
                    >
                      {link.name}
                    </Link>
                    <div className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full ease-out" />
                  </div>
                ))}

                {/* Pump Expertise Dropdown - Placed after 'About Us' for SEO focus */}
                <div className="relative group">
                  <button
                    className={`text-[11px] font-black transition-all duration-500 uppercase tracking-widest flex items-center gap-1.5 ${scrolled ? "text-primary hover:text-accent" : "text-white/80 hover:text-white"}`}
                    aria-haspopup="true"
                    aria-label="Pump Expertise pages"
                  >
                    Pump Expertise
                    <ChevronDown size={10} className="transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full ease-out" />
                  {/* Dropdown panel */}
                  <div className="absolute top-full left-0 mt-3 w-64 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {pumpLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-3 text-[10px] font-black uppercase tracking-widest text-primary hover:bg-accent hover:text-zinc-950 transition-colors border-b border-gray-50 last:border-b-0"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {navLinks.slice(2).map((link) => (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`text-[11px] font-black transition-all duration-500 uppercase tracking-widest flex items-center gap-1.5 ${scrolled ? "text-primary hover:text-accent" : "text-white/80 hover:text-white"
                        }`}
                    >
                      {link.name}
                    </Link>
                    <div className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full ease-out" />
                  </div>
                ))}
              </div>

              {/* Utility Section */}
              <div className="flex items-center gap-4 pl-8 border-l border-white/10 relative p-2">
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/20 transition-all duration-300" />
                <div className="flex flex-col items-end">
                  <span className={`text-[8px] font-black text-accent uppercase tracking-[0.4em] mb-1 font-mono ${scrolled ? "text-primary hover:text-accent" : "text-white/80 hover:text-white"}`}
                  >
                    SYS.COMMS
                  </span>
                  <p className={`text-[12px] font-black tracking-widest text-green-500 font-mono leading-none ${scrolled ? "text-primary hover:text-accent" : "text-white hover:text-accent"}`}>
                    +917428200229
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => { setIsOpen(!isOpen); if (isOpen) setPumpOpen(false); }}
                className={`relative z-60 transition-colors p-2 ${scrolled ? "text-primary" : "text-white"}`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={32} className="text-white" /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Cinematic Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 w-full h-dvh bg-primary z-50 flex flex-col overflow-hidden"
          >
            {/* Background Grain for Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

            <div className="flex-1 flex flex-col justify-center px-8 relative z-10 w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                  hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
                className="flex flex-col gap-6 pt-10"
              >
                {navLinks.slice(0, 2).map((link, i) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { y: 40, opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="overflow-hidden"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="inline-block text-4xl sm:text-5xl font-black text-white hover:text-accent uppercase tracking-tighter"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Pump expertise links — collapsible */}
                <motion.div
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }
                  }}
                  className="overflow-hidden pt-2 border-t border-white/10"
                >
                  <button
                    onClick={() => setPumpOpen((p) => !p)}
                    className="flex items-center gap-3 text-4xl sm:text-5xl font-black text-white hover:text-accent uppercase tracking-tighter w-full text-left mb-3 transition-colors"
                  >
                    Pump Expertise
                    <ChevronDown
                      size={22}
                      className={`transition-transform duration-300 text-accent shrink-0 ${pumpOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {pumpOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-2 pb-2">
                          {pumpLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => { setIsOpen(false); setPumpOpen(false); }}
                              className="inline-block text-base font-bold text-white/60 hover:text-accent uppercase tracking-widest transition-colors"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {navLinks.slice(2).map((link, i) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { y: 40, opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="overflow-hidden"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="inline-block text-4xl sm:text-5xl font-black text-white hover:text-accent uppercase tracking-tighter"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-16 pt-8 border-t border-white/10"
              >
                <p className="text-[10px] font-black text-accent uppercase mb-3 tracking-[0.3em]">Direct Conact</p>
                <p className="text-xl font-black text-white tracking-widest">+91-9886424770</p>
                <p className="text-xl font-black text-white/60 tracking-widest mt-1">+91-7428200229</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
