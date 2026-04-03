/**
 * SeoPageLayout — shared layout wrapper for keyword-targeted SEO pages.
 * Uses site design tokens (bg-primary, accent, etc.) with enhanced visuals.
 */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, Mail, Shield, Clock, Wrench, Award } from "lucide-react";

const stats = [
  { value: "10+", label: "Years BCP Experience" },
  { value: "24/7", label: "Emergency Response" },
  { value: "ISO", label: "9001:2015 Certified" },
  { value: "500+", label: "Pumps Overhauled" },
];

export default function SeoPageLayout({ breadcrumb, children, relatedLinks, heroImage }) {
  return (
    <div className="bg-white">

      {/* ─── Hero Banner ─────────────────────────────────────────────── */}
      <div className="bg-primary pt-36 pb-0 relative overflow-hidden">
        {/* Brutalist watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[200px] font-black tracking-[-0.06em] text-white/3 uppercase whitespace-nowrap leading-none">
            DEIVOX
          </span>
        </div>

        {/* Diagonal accent stripe */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 60%, rgba(249,115,22,0.06) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
            {breadcrumb.map((crumb, i) => (
              <React.Fragment key={crumb.href || crumb.label}>
                {i > 0 && <ChevronRight size={12} className="text-white/30" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-accent transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mb-0">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/3 px-6 py-5 text-center">
                <p className="text-2xl md:text-3xl font-black text-accent leading-none">{s.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image strip — full bleed, clipped to a slanted bottom */}
        {heroImage && (
          <div
            className="relative w-full mt-10 overflow-hidden"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
          >
            <Image
              src={heroImage}
              alt="DEI VOX — industrial pump engineering"
              width={1600}
              height={480}
              className="w-full h-[260px] md:h-[360px] object-cover object-center opacity-80"
              priority
            />
            {/* dark overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/30 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-primary/60 to-transparent" />
          </div>
        )}

        {/* Bottom wave divider */}
        <div
          className="h-10 bg-white"
          style={{
            clipPath: "ellipse(55% 100% at 50% 100%)",
            marginTop: heroImage ? "-40px" : "0",
          }}
        />
      </div>

      {/* ─── Main content ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Article */}
          <article className="lg:col-span-8 seo-prose">
            {children}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">

            {/* CTA card */}
            <div className="relative rounded-2xl overflow-hidden bg-primary text-white p-6 shadow-xl">
              {/* decorative corner glow */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-accent mb-2">
                Need Expert Help?
              </p>
              <p className="text-sm font-bold text-white/70 mb-5 leading-relaxed">
                Contact DEI VOX India for a technical assessment, service quote, or emergency support.
              </p>
              <Link
                href="/contact"
                className="block w-full py-3 bg-accent text-zinc-950 text-center font-black text-[11px] uppercase tracking-widest rounded-xl hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(249,115,22,0.35)]"
              >
                Get in Touch →
              </Link>
              <div className="mt-5 pt-5 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-accent shrink-0" />
                  <p className="text-[11px] text-white/60 font-bold">+91-9886424770</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-accent shrink-0" />
                  <p className="text-[11px] text-white/60 font-bold">+91-7428200229</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-accent shrink-0" />
                  <p className="text-[11px] text-white/60 font-bold">sales@deivox.co.in</p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Shield, label: "ISO Certified", sub: "9001 · 14001 · 45001" },
                { icon: Clock, label: "24/7 Support", sub: "Emergency response" },
                { icon: Wrench, label: "In-House Shop", sub: "Machining & winding" },
                { icon: Award, label: "Multi-OEM", sub: "KSB · Sulzer · BHEL" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="bg-[#f8f9fb] border border-gray-100 rounded-xl p-4 flex flex-col gap-1"
                >
                  <b.icon size={16} className="text-accent" />
                  <p className="text-[11px] font-black text-primary uppercase tracking-wide leading-tight mt-1">{b.label}</p>
                  <p className="text-[10px] text-foreground/50 font-medium">{b.sub}</p>
                </div>
              ))}
            </div>

            {/* Related Services */}
            {relatedLinks && relatedLinks.length > 0 && (
              <div className="bg-[#f8f9fb] border border-gray-100 rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-accent mb-4">
                  Related Services
                </p>
                <ul className="space-y-3">
                  {relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-xs font-bold text-primary/70 hover:text-accent transition-colors group"
                      >
                        <ChevronRight
                          size={12}
                          className="text-accent group-hover:translate-x-0.5 transition-transform shrink-0"
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </aside>
        </div>
      </div>

      {/* ─── Service image gallery strip ──────────────────────────────── */}
      <div className="bg-[#f8f9fb] border-t border-gray-100 py-14 px-4 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">Our Work</p>
          <p className="text-xl font-black text-primary uppercase tracking-tight mb-8">Engineering In Action</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/bcp_overhauling.png", label: "BCP Overhauling" },
              { src: "/images/insitu_machining.png", label: "In-Situ Machining" },
              { src: "/images/motor_rewinding.png", label: "Motor Rewinding" },
              { src: "/images/reverse_engineering.png", label: "Reverse Engineering" },
            ].map((img) => (
              <div key={img.label} className="relative rounded-xl overflow-hidden group aspect-4/3">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/10 to-transparent" />
                <p className="absolute bottom-3 left-3 text-[10px] font-black uppercase tracking-widest text-white/90">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Bottom CTA strip ────────────────────────────────────────── */}
      <div className="bg-primary py-14 px-4 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-end overflow-hidden">
          <span className="text-[140px] font-black tracking-[-0.06em] text-white/4 uppercase whitespace-nowrap leading-none pr-10">
            DEIVOX
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-black text-white text-2xl uppercase tracking-tight leading-tight">
              Ready to resolve your<br />pump challenge?
            </p>
            <p className="text-sm text-white/50 font-medium mt-2">
              DEI VOX engineers are available 24/7 for emergency and planned service.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-accent text-zinc-950 font-black text-[11px] uppercase tracking-widest rounded-xl hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(249,115,22,0.3)]"
            >
              Contact Us →
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 border-2 border-white/20 text-white font-black text-[11px] uppercase tracking-widest rounded-xl hover:border-accent hover:text-accent transition-all"
            >
              All Services
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
