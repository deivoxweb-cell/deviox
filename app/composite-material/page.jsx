"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Settings } from "lucide-react";
import Link from "next/link";

const thermoplasticsUse = [
  { industry: "Aviation", desc: "Employed in aircraft bodies, panels, and cabin interiors to reduce overall weight and improve fuel economy without sacrificing strength." },
  { industry: "Automobiles", desc: "Used in car bodywork, internal structures, and dashboard components to boost efficiency by cutting down on weight while keeping passengers safe." },
  { industry: "Sports Gear", desc: "Common in products like helmets, rackets, and bicycles where strength and lightness are essential for performance." },
  { industry: "Construction Sector", desc: "Utilized in making pipes, structural boards, and other infrastructure components that need to withstand harsh conditions." },
  { industry: "Healthcare", desc: "Applied in creating prosthetics, surgical instruments, and orthopedic products due to their durability, sterilization ability, and biocompatibility." },
];

export default function CompositeMaterialPage() {
  return (
    <div className="pt-24 bg-white overflow-hidden">

      {/* ── Hero Banner ──────────────────────────────────── */}
      <section className="bg-primary py-20 industrial-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/80" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full px-4 lg:px-10 relative z-10"
        >
          <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">Industries & Materials</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-tight mb-6">
            Composite<br />
            <span className="text-accent">Material</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-base leading-relaxed">
            Your One-Stop Solution for All Types of Bearings – Ball, Roller, Thrust, Needle, Tapered, and More for Industrial, Automotive, and Custom Applications!
          </p>
        </motion.div>
      </section>

      {/* ── Thermoplastics Overview ─────────────────────── */}
      <section className="py-20 w-full px-4 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Content Column */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">Innovation in Materials</p>
                <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tighter uppercase mb-6">
                  Thermoplastic Composites
                </h2>
                <div className="w-16 h-1.5 bg-accent rounded-full mb-8" />
                <div className="space-y-6 text-foreground/70 leading-relaxed font-medium text-lg">
                  <p>
                    Thermoplastic composites are formed by blending thermoplastic polymers with reinforcing fibers such as carbon, glass, or aramid.
                  </p>
                  <p>
                    These materials are becoming more popular across industries like aerospace and automotive thanks to their low weight and reusability.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-black text-primary uppercase tracking-tight mb-6">Main Characteristics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Low Weight", desc: "Significantly lighter than traditional metals." },
                    { title: "High Mechanical Performance", desc: "Reinforced fibers for durability." },
                    { title: "Impact Resistance", desc: "Highly resilient to physical stress." },
                    { title: "Eco-Friendly", desc: "Reusable and fully recyclable." },
                    { title: "Chemical Resistant", desc: "Stable in corrosive environments." },
                    { title: "Moisture Resistant", desc: "Maintains integrity over time." },
                  ].map((char, i) => (
                    <motion.div 
                      key={char.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-4 bg-[#f8f9fb] border border-border rounded-2xl hover:border-accent/40 transition-colors"
                    >
                      <div className="text-accent shrink-0"><CheckCircle2 size={16} /></div>
                      <div>
                        <p className="text-xs font-black text-primary uppercase tracking-tight">{char.title}</p>
                        <p className="text-[10px] text-foreground/50">{char.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                 <h3 className="text-xl font-black text-primary uppercase tracking-tight mb-6">Where Are They Used?</h3>
                 <div className="space-y-6">
                   {thermoplasticsUse.map((use, i) => (
                     <motion.div 
                       key={use.industry}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.5, delay: i * 0.1 }}
                       viewport={{ once: true }}
                       className="group border-l-4 border-accent/10 hover:border-accent pl-6 transition-all"
                     >
                       <h4 className="flex items-center gap-2 text-sm font-black text-accent uppercase tracking-widest mb-1">
                         <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                         {use.industry}
                       </h4>
                       <p className="text-xs text-foreground/60 leading-relaxed font-medium">
                         {use.desc}
                       </p>
                     </motion.div>
                   ))}
                 </div>
              </motion.div>
            </div>

            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-primary/10 border border-border group">
                 <img
                  src="/images/compositon.jpeg"
                  alt="Composite Materials Composition"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── We Do All Types of Bearings ───────────────── */}
      <section className="py-20 bg-[#f8f9fb] border-t border-border overflow-hidden">
        <div className="w-full px-4 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 h-[450px]">
                <img
                  src="/images/product_motor.png"
                  alt="Industrial Bearings"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 text-foreground/70 leading-relaxed"
            >
              <div className="flex items-center gap-3 mb-2 text-accent">
                <Settings size={24} />
                <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tighter uppercase">
                  We Do All Types of Bearings
                </h2>
              </div>
              <div className="w-16 h-1 bg-accent rounded-full mb-6" />

              <p>
                At our company, we specialize in providing all types of bearings to meet the diverse needs of various industries. Bearings play a vital role in reducing friction between moving parts, enabling smooth and efficient mechanical operations.
              </p>
              <p>
                Our inventory includes <strong className="text-primary">ball bearings, roller bearings, thrust bearings, needle bearings, taper bearings, spherical bearings</strong>, and more. We work with leading manufacturers to ensure every bearing we supply meets the highest standards of quality, precision, and durability. From high-speed performance to heavy-load endurance, we have the right bearing for every requirement.
              </p>
              <p>
                We also provide custom solutions and technical support to help our customers choose the most suitable bearing for their specific needs. Our team of experts ensures timely delivery and professional service for both small-scale and bulk orders.
              </p>
              <motion.p 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="font-bold text-primary italic text-lg mt-4 text-center p-6 bg-white border border-border rounded-xl shadow-sm"
              >
                "Whether you’re looking for standard, miniature, or high-performance bearings, you can count on us for reliability, competitive pricing, and top-notch support. We do all types of bearings, and we do them right."
              </motion.p>

              <div className="pt-6">
                <Link href="/contact">
                  <span className="px-10 py-4 bg-accent hover:bg-accent/90 text-white font-black rounded-xl uppercase tracking-widest text-xs shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer">
                    Enquire About Bearings
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
