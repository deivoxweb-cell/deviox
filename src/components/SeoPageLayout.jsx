/**
 * SeoPageLayout — shared layout wrapper for keyword-targeted SEO pages.
 * Uses site design tokens (bg-primary, accent, etc.) with refined industrial aesthetics.
 */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, Mail, Shield, Clock, Wrench, Award, ArrowUpRight } from "lucide-react";

const stats = [
  { value: "10+", label: "Years BCP Experience" },
  { value: "24/7", label: "Emergency Response" },
  { value: "ISO", label: "Certified Ops" },
  { value: "500+", label: "Overhauls Done" },
];

export default function SeoPageLayout({ breadcrumb, children, relatedLinks, heroImage }) {
  return (
    <div className="bg-[#F5F5F5] selection:bg-accent selection:text-black">

      {/* ─── Hero Banner ─────────────────────────────────────────────── */}
      <div className="bg-black pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-12">
            {breadcrumb.map((crumb, i) => (
              <React.Fragment key={crumb.href || crumb.label}>
                {i > 0 && <ChevronRight size={14} className="text-white/20" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-[11px] font-semibold uppercase tracking-wider text-white/40 hover:text-accent transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-accent/20 pl-6 py-2">
                <p className="text-3xl font-extrabold text-white leading-none tracking-tighter">{s.value}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mt-2">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Hero image - Brutalist Frame */}
          {heroImage && (
            <div className="relative w-full aspect-[21/9] rounded-[3rem] overflow-hidden border-2 border-white/5 shadow-2xl">
              <Image
                src={heroImage}
                alt="DEI VOX Industrial"
                fill
                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
            </div>
          )}
        </div>
      </div>

      {/* ─── Main content ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* Article */}
          <article className="lg:col-span-8 seo-prose">
            {children}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 self-start">

            {/* CTA card - Neo-Brutalist */}
            <div className="relative rounded-[3rem] bg-black text-white p-10 overflow-hidden shadow-2xl group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent opacity-10 blur-3xl pointer-events-none" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-6">
                CONSULTATION
              </p>
              <p className="text-xl font-semibold text-white leading-tight mb-10">
                Technical assessment for mission-critical systems.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-between w-full p-4 bg-black text-white rounded-full font-semibold uppercase tracking-wider text-[11px] group hover:bg-zinc-900 transition-all shadow-xl shadow-black/20"
              >
                <span className="ml-4">Get Response</span>
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={18} />
                </div>
              </Link>

              <div className="mt-10 space-y-4 pt-10 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent"><Phone size={14} /></div>
                  <p className="text-sm font-semibold">+91-74282-00229</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent"><Mail size={14} /></div>
                  <p className="text-sm font-semibold">sales@deivox.co.in</p>
                </div>
              </div>
            </div>

            {/* Trust Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "ISO Cert", sub: "9001/14001" },
                { icon: Clock, label: "24/7 Support", sub: "Emergency" },
                { icon: Wrench, label: "In-House", sub: "Full Shop" },
                { icon: Award, label: "Multi-OEM", sub: "All Brands" },
              ].map((b) => (
                <div key={b.label} className="bg-white rounded-3xl p-6 border border-black/5 flex flex-col gap-3">
                  <b.icon size={20} className="text-accent" />
                  <div>
                    <p className="text-[11px] font-semibold text-black uppercase tracking-wider leading-tight">{b.label}</p>
                    <p className="text-[10px] text-black/30 font-semibold mt-1">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Related Services */}
            {relatedLinks && relatedLinks.length > 0 && (
              <div className="bg-black rounded-[3rem] p-10 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-10">
                  Related Nodes
                </p>
                <ul className="space-y-6">
                  {relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between text-sm font-semibold text-white/50 hover:text-white transition-all group"
                      >
                        {link.label}
                        <ChevronRight size={14} className="text-accent group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </aside>
        </div>
      </div>

      {/* ─── Engineering In Action ──────────────────────────────── */}
      <section className="py-32 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <p className="text-accent text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">FIELD DATA</p>
              <h2 className="text-4xl md:text-6xl font-extrabold text-black uppercase tracking-tighter leading-[0.9]">
                Engineering <br /><span className="text-black/20">In Action.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: "/images/bcp_overhauling.png", label: "BCP Systems" },
              { src: "/images/insitu_machining.png", label: "Precision Machining" },
              { src: "/images/motor_rewinding.png", label: "Rewinding Ops" },
              { src: "/images/reverse_engineering.png", label: "Material Engineering" },
            ].map((img) => (
              <div key={img.label} className="relative rounded-[2rem] overflow-hidden group aspect-square shadow-xl">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ────────────────────────────────────────── */}
      <section className="bg-black py-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-2xl">
            <h3 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Resolve your <br /><span className="text-accent">Industrial Challenge.</span>
            </h3>
            <p className="text-white/30 text-lg font-medium leading-relaxed">
              24/7 expert mobilization for thermal power plants and industrial facilities across India.
            </p>
          </div>
          <div className="flex gap-6 flex-wrap">
            <Link
              href="/contact"
              className="flex items-center gap-6 bg-black border border-white/10 text-white px-10 py-4 rounded-full group hover:bg-zinc-900 transition-all shadow-2xl"
            >
              <span className="text-[13px] font-semibold uppercase tracking-wider">Contact Specialist</span>
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
