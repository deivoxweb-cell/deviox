"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
];

const pumpLinks = [
  { name: "Boiler Feed Pump", href: "/boiler-circulation-pump" },
  { name: "CW Pump", href: "/boiler-water-circulation-pump" },
  { name: "CEP Pump", href: "/bcp-pump" },
  { name: "Submersible Pump", href: "/submersible-pump-repair" },
];

const otherLinks = [
  { name: "Services", href: "/services" },
  { name: "ISO Certificate", href: "/iso-certificate" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-7xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-full px-6 py-2 flex items-center justify-between"
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-3">
            <Image
              src="/Logo1.png"
              alt="Logo"
              width={45}
              height={45}
            // className="brightness-0 invert object-contain"
            />
          </div>
          <span className="font-black text-accent uppercase tracking-tighter text-2xl hidden sm:block">DEI <span className="text-primary">VOX</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${isActive
                  ? "bg-accent text-black shadow-lg shadow-accent/20"
                  : "text-black/60 hover:text-black hover:bg-black/5"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Products Dropdown */}
          <div className="relative group px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-black/60 hover:text-black hover:bg-black/5 cursor-pointer transition-all">
            Products
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white shadow-2xl rounded-3xl border border-black/5 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">
              {pumpLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-[10px] font-black uppercase tracking-widest text-black/60 hover:bg-accent hover:text-black transition-all rounded-2xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {otherLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${isActive
                  ? "bg-accent text-black shadow-lg shadow-accent/20"
                  : "text-black/60 hover:text-black hover:bg-black/5"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="flex items-center gap-3">
          <Link href="/contact">
            <button className="hidden sm:flex items-center gap-4 bg-black text-white px-8 py-3 rounded-full group hover:bg-zinc-900 transition-all shadow-xl shadow-black/10 active:scale-95">
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Get Quote</span>
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={16} />
              </div>
            </button>
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-black hover:bg-black/5 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-white shadow-2xl rounded-[2.5rem] p-8 border border-black/5 lg:hidden z-40"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-black hover:text-accent uppercase tracking-tighter py-2 border-b border-black/5"
                >
                  {link.name}
                </Link>
              ))}

              {/* Products Accordion for Mobile */}
              <div className="border-b border-black/5">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="w-full flex items-center justify-between text-2xl font-black text-black uppercase tracking-tighter py-2"
                >
                  Products
                  <motion.span
                    animate={{ rotate: productsOpen ? 45 : 0 }}
                    className="text-accent"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-2 pb-4 pl-4"
                    >
                      {pumpLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => {
                            setIsOpen(false);
                            setProductsOpen(false);
                          }}
                          className="text-lg font-bold text-black/60 hover:text-black uppercase tracking-tighter"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {otherLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-black hover:text-accent uppercase tracking-tighter py-2 border-b border-black/5 last:border-b-0"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
