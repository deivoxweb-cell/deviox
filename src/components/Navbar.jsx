import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-2xl py-2" : "bg-white/95 backdrop-blur-md py-4"
        }`}
    >
      <div className="w-full px-4 lg:px-6">
        <div className="flex flex-col">
          {/* Main Navbar Row */}
          <div className="flex justify-between items-center">
            <div className="shrink-0">
              <Link to="/" className="flex items-center group">
                <div className="relative transition-transform duration-300 group-hover:scale-110">
                  <img
                    src="/images/Logo.png"
                    alt="Deivox Logo"
                    width={100}
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
                      to={link.href}
                      className="text-sm font-black text-primary hover:text-accent transition-all uppercase tracking-tighter flex items-center gap-1.5"
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                    <div className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                  </div>
                ))}
              </div>

              {/* Utility Section */}
              <div className="flex items-center pl-8 border-l border-primary/10">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-accent uppercase tracking-widest leading-none mb-1">
                    Call Us Anyway
                  </span>
                  <p className="text-[13px] font-black text-primary tracking-tighter">
                    +91-9886424770 / +91-7428200229
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary hover:text-accent transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.95, y: -20 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-primary/5 shadow-2xl overflow-hidden origin-top"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-xl font-black text-primary hover:text-accent uppercase tracking-tighter border-b border-primary/5 pb-4 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6">
                <p className="text-xs font-black text-accent uppercase mb-2 tracking-widest">Connect with us</p>
                <div className="bg-primary/5 p-6 rounded-2xl">
                  <p className="text-lg font-black text-primary tracking-tighter transition-all">
                    +91-9886424770
                  </p>
                  <p className="text-lg font-black text-primary tracking-tighter mt-1">
                    +91-7428200229
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
