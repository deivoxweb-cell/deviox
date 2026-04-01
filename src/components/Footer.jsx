"use client";
import React from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { MapPin, MessageSquare, Globe, Share2, Award, CheckCircle2 } from "lucide-react";

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
    <footer className="text-white relative overflow-hidden bg-primary">
      {/* Massive Brutalist Background Typography */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-[120px] sm:text-[200px] md:text-[300px] lg:text-[450px] font-black tracking-[-0.05em] text-white/20 select-none pointer-events-none uppercase whitespace-nowrap leading-none mix-blend-overlay z-0">
        DEIVOX
      </div>

      {/* ── Main body ──────────────────────────────────────────────── */}
      <div className="relative z-10 py-24 md:py-32 border-t border-white/5">
        <div className="w-full px-4 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">

            {/* Brand block */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full">
              <div className="mb-12">
                <img
                  src="/images/Logo.png"
                  alt="DEI VOX Logo"
                  width={140}
                  height={56}
                  className="object-contain brightness-0 invert opacity-80"
                />
              </div>
              <p className="text-sm md:text-base text-white/50 leading-relaxed font-medium mb-12 max-w-sm">
                Pioneers of Boiler Circulation Pump (BCP) services in India.
                Engineering reliability through precision overhauling and reverse engineering.
              </p>

              {/* Offices */}
              <div className="space-y-8">
                {[
                  { tag: "Sales HQ", loc: "Gurugram, Haryana" },
                  { tag: "Service Center", loc: "Bengaluru, Karnataka" },
                ].map((o) => (
                  <div key={o.tag} className="flex items-start gap-4 grow group">
                    <div className="mt-1 text-accent opacity-50 group-hover:opacity-100 transition-opacity">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-1.5">{o.tag}</p>
                      <p className="text-sm text-white/80 font-black uppercase tracking-tight">{o.loc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {Object.entries(NAV_LINKS).map(([section, links]) => (
              <div key={section} className="lg:col-span-2">
                <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-accent-light mb-6 border-b border-white/10 pb-3">
                  {section}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-white/80 hover:text-white font-bold uppercase tracking-wide transition-colors"
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
              <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-accent-light mb-6 border-b border-white/10 pb-3">
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
                      <p className="text-[9px] text-white/70 uppercase">{q.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────────── */}
      <div className="relative z-10 bg-black/20 py-8 border-t border-white/10 backdrop-blur-xl">
        <div className="w-full px-4 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <p className="text-[10px] font-black text-white/70 tracking-[0.25em] uppercase">
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
                <button
                  key={i}
                  type="button"
                  onClick={item.onClick}
                  title={item.isFun ? "Share some context!" : ""}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 ${item.isFun
                    ? "bg-accent text-zinc-950 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:-translate-y-1"
                    : "bg-white/5 text-white/70 hover:bg-white hover:text-primary hover:-translate-y-1"
                    }`}
                  aria-label={item.isFun ? "Share some context" : "Social link"}
                >
                  <item.Icon size={18} strokeWidth={2.5} />
                </button>
              ))}
            </div>

            <div className="flex gap-4 text-[10px] font-black text-white/70 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/" className="hover:text-white transition-colors">Terms</Link>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
