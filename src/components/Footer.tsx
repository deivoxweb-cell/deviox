"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, MessageSquare, Globe, Share2, Award, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

const NAV_LINKS = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "ISO Certificate", href: "/iso-certificate" },
    { label: "Reach Us", href: "/contact" },
  ],
  Services: [
    { label: "Insitu Machining", href: "/services#insitu-machining" },
    { label: "BCP Overhauling", href: "/services#bcp-overhauling" },
    { label: "Motor Rewinding", href: "/services#motor-rewinding" },
    { label: "Spare Parts Selling", href: "/services#spare-parts-selling" },
    { label: "Reverse Engineering", href: "/services#reverse-engineering" },
  ],
  Industries: [
    { label: "Power Generation", href: "/power-generation" },
    { label: "Composite Material", href: "/composite-material" },
  ],
};

const Footer = () => {
  return (
    <footer className="text-white">

      {/* ── Main body ──────────────────────────────────────────────── */}
      <div className="bg-primary py-16">
        <div className="w-full px-4 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">

            {/* Brand block */}
            <div className="lg:col-span-4">
              <div className="mb-8">
                <Image
                  src="/images/logo.png"
                  alt="DEI VOX Logo"
                  width={140}
                  height={56}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="text-xs text-white/60 leading-relaxed font-medium mb-8 max-w-xs">
                Pioneers of Boiler Circulation Pump (BCP) services in India.
                Business Consultant, Service Support &amp; Spare Parts for all BCP makes.
              </p>

              {/* Offices */}
              <div className="space-y-5">
                {[
                  { tag: "Sales Office", loc: "Gurugram, Haryana, India" },
                  { tag: "Service Support", loc: "Bengaluru, Karnataka, India" },
                ].map((o) => (
                  <div key={o.tag} className="flex items-start gap-3">
                    <div className="mt-0.5 text-accent">
                      <MapPin size={15} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-0.5">{o.tag}</p>
                      <p className="text-xs text-white/70 font-bold uppercase">{o.loc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {Object.entries(NAV_LINKS).map(([section, links]) => (
              <div key={section} className="lg:col-span-2">
                <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-accent mb-6 border-b border-white/10 pb-3">
                  {section}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-white/50 hover:text-white font-bold uppercase tracking-wide transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Quality assurance */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-accent mb-6 border-b border-white/10 pb-3">
                Quality
              </h4>
              <div className="space-y-4">
                {[
                  { icon: <Award size={16} />, title: "ISO 9001:2015", sub: "Certified" },
                  { icon: <CheckCircle2 size={16} />, title: "Certified Services", sub: "Excellence" },
                ].map((q) => (
                  <div key={q.title} className="flex items-center gap-3 group">
                    <div className="p-1.5 bg-accent/20 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      {q.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-white tracking-wider">{q.title}</p>
                      <p className="text-[9px] text-white/40 uppercase">{q.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────────── */}
      <div className="bg-[#001f4d] py-6 border-t border-white/5">
        <div className="w-full px-4 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <p className="text-[10px] font-black text-white/30 tracking-[0.25em] uppercase">
              © 2026 DEI VOX INDIA PVT. LTD. — All Rights Reserved
            </p>

            <div className="flex gap-3">
              {[
                { Icon: MessageSquare, onClick: () => window.location.href = "mailto:info@deivox.com" },
                { Icon: Globe, onClick: () => window.open("https://maps.google.com", "_blank") },
                { 
                  Icon: Share2, 
                  isFun: true, 
                  onClick: () => {
                    confetti({
                      particleCount: 150,
                      spread: 80,
                      origin: { y: 0.9 },
                      colors: ['#003366', '#f97316', '#ffffff'],
                      zIndex: 9999
                    });
                  }
                }
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={item.onClick}
                  title={item.isFun ? "Share some context!" : ""}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer hover:-translate-y-0.5 ${
                    item.isFun 
                      ? "bg-accent text-white shadow-lg shadow-accent/30" 
                      : "bg-white/5 text-white/30 hover:bg-accent hover:text-white"
                  }`}
                >
                  <item.Icon size={16} />
                </div>
              ))}
            </div>

            <div className="flex gap-4 text-[10px] font-black text-white/30 uppercase tracking-widest">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
