"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Power Generation", href: "/power-generation" },
  { name: "Composite Material", href: "/composite-material" },
  { name: "Services", href: "/services" },
  { name: "ISO Certificate", href: "/iso-certificate" },
  { name: "Reach Us", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
                  <img
                    src="/images/Logo.png"
                    alt="Deivox Logo"
                    width={110}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-12">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
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
              <div className={`flex items-center pl-8 border-l ${scrolled ? "border-primary/10" : "border-white/10"}`}>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-accent uppercase tracking-widest leading-none mb-1">
                    Call Us Anyway
                  </span>
                  <p className={`text-[13px] font-black tracking-tighter ${scrolled ? "text-primary" : "text-white"}`}>
                    +91-9886424770 / +91-7428200229
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
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
                {navLinks.map((link, i) => (
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
