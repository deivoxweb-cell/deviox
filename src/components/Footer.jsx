"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Mail, Phone, ArrowUpRight, ShieldCheck } from "lucide-react";

const NAV_LINKS = {
  Solutions: [
    { label: "About Deivox", href: "/about" },
    { label: "ISO Excellence", href: "/iso-certificate" },
    { label: "Engineering Blog", href: "/blog" },
    { label: "Contact Hub", href: "/contact" },
  ],
  Core: [
    { label: "Insitu Machining", href: "/services#insitu-machining" },
    { label: "BCP Overhauling", href: "/boiler-circulation-pump" },
    { label: "BCP Repair India", href: "/boiler-circulation-pump" },
    { label: "Motor Rewinding", href: "/services#motor-rewinding" },
    { label: "Reverse Engineering", href: "/services#reverse-engineering" },
    { label: "Submersible Repair", href: "/submersible-pump-repair" },
  ],
  Infrastructure: [
    { label: "Boiler Circulation Pump", href: "/boiler-circulation-pump" },
    { label: "Boiler Water Circulation Pump", href: "/boiler-circulation-pump" },
    { label: "Submersible Pump", href: "/submersible-pump-repair" },
  ],
};

const Footer = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  return (
    <footer ref={footerRef} className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] industrial-grid pointer-events-none" />

      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        style={{ y: watermarkY }}
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 text-[15vw] font-extrabold tracking-[-0.08em] text-white/[0.03] select-none pointer-events-none uppercase whitespace-nowrap leading-none z-0"
      >
        INDUSTRIAL
      </motion.div>

      <div className="relative z-10 pt-32 pb-16 px-6 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-5">
              <Image
                src="/images/Logo.png"
                alt="DEI VOX PVT. LTD. logo"
                width={120}
                height={48}
                className="mb-12"
              />

              <h3 className="text-3xl font-extrabold uppercase tracking-tighter mb-6 leading-tight">
                Engineering Reliability
                <br />
                <span className="text-white/20">For Power Infrastructure.</span>
              </h3>

              <p className="text-sm text-white/45 max-w-md leading-relaxed mb-10">
                Deivox is the brand identity of DEI VOX PVT. LTD., specializing
                in Boiler Circulation Pump (BCP) repair, Boiler Water Circulation
                Pump maintenance, and industrial pump solutions across India.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-accent group-hover:bg-accent/15 group-hover:ring-1 group-hover:ring-accent/30 transition-all duration-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                      Headquarters
                    </p>
                    <p className="text-sm font-bold uppercase group-hover:text-accent/80 transition-colors">
                      Bengaluru, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-accent group-hover:bg-accent/15 group-hover:ring-1 group-hover:ring-accent/30 transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                      Business & Support
                    </p>
                    <p className="text-sm font-bold">sales@deivox.co.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-accent group-hover:bg-accent/15 group-hover:ring-1 group-hover:ring-accent/30 transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                      Technical Support
                    </p>
                    <p className="text-sm font-bold group-hover:text-accent/80 transition-colors">
                      +91-74282-00229
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
              {Object.entries(NAV_LINKS).map(([title, links]) => (
                <div key={title}>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-10">
                    {title}
                  </h4>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all flex items-center gap-2 group"
                        >
                          {link.label}
                          <ArrowUpRight
                            size={14}
                            className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
                © 2026 DEI VOX PVT. LTD. ALL RIGHTS RESERVED.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent">
                  <ShieldCheck size={14} /> ISO 9001:2015
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">
                  GSTIN: 29AAKCD5641B1ZQ
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 text-white/40 grayscale opacity-50">
                <Image
                  src="/images/make_India.png"
                  alt="Make in India"
                  width={80}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.15em] text-white/20">
                <Link href="/" className="hover:text-white transition-all">
                  Privacy
                </Link>
                <Link href="/" className="hover:text-white transition-all">
                  Legal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
