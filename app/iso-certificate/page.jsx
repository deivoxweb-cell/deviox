"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Download, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ISOCertificatePage() {
  const certificates = [
    {
      id: "iso-9001",
      title: "ISO 9001:2015",
      tagline: "Quality Management System",
      image: "/images/cert1.png",
      pdf: "/images/cert-1.pdf",
      icon: <Award size={32} />,
      description: "The primary standard for quality management systems (QMS), ensuring we consistently provide products and services that meet customer and regulatory requirements.",
      points: [
        "Repair & Refurbishment Excellence",
        "Mechanical & Electrical Spares",
        "HT/LT Motor Services",
        "All Rotating Equipment Support",
      ],
    },
    {
      id: "iso-14001",
      title: "ISO 14001:2015",
      tagline: "Environmental Management",
      image: "/images/cert2.png",
      pdf: "/images/cert-2.pdf",
      icon: <ShieldCheck size={32} />,
      description: "Outlines the requirements for an effective environmental management system (EMS), emphasizing our commitment to reducing our environmental footprint.",
      points: [
        "Sustainable Industrial Practices",
        "Resource Efficiency Optimization",
        "Environmental Compliance Assurance",
        "Reduced Operational Impact",
      ],
    },
    {
      id: "iso-45001",
      title: "ISO 45001:2018",
      tagline: "Occupational Health & Safety",
      image: "/images/cert3.png",
      pdf: "/images/cert-3.pdf",
      icon: <CheckCircle2 size={32} />,
      description: "The international standard for occupational health and safety (OH&S), designed to protect workers and visitors from work-related accidents and diseases.",
      points: [
        "Zero-Accident Safety Protocol",
        "Worker Wellbeing Priority",
        "Risk Mitigation & Management",
        "Certified Safety Compliance",
      ],
    },
  ];

  return (
    <div className="pt-24 bg-white overflow-hidden">

      {/* ── Hero Banner ──────────────────────────────────── */}
      <section className="bg-primary py-20 industrial-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/95 to-primary/80" />
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="w-full px-4 lg:px-10 relative z-10"
        >
          <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">Commitment to Quality</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-tight mb-6">
            ISO<br />
            <span className="text-accent">Certificates</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-base leading-relaxed">
            The Significance of ISO Certification in Ensuring Quality and Global Competitiveness!
          </p>
        </motion.div>
      </section>

      {/* ── Certificates Gallery ────────────────────────── */}
      <section className="py-24 w-full px-4 lg:px-10">
        <div className="space-y-24 max-w-7xl mx-auto">
          {certificates.map((cert, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={cert.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border group ${!isEven ? "lg:order-last" : ""
                    }`}
                  style={{ height: 480 }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Number/Tag Overlay */}
                  <div className="absolute top-6 left-6 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/10">
                    {String(i + 1).padStart(2, "0")} — {cert.tagline}
                  </div>
                </motion.div>

                {/* Text Block */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={!isEven ? "lg:order-first" : ""}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-xl text-accent">
                      {cert.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">{cert.tagline}</p>
                      <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tighter uppercase">{cert.title}</h2>
                    </div>
                  </div>
                  <div className="w-16 h-1.5 bg-accent rounded-full mb-6" />
                  <p className="text-foreground/70 leading-relaxed mb-8 text-sm font-medium">{cert.description}</p>

                  <ul className="space-y-4 mb-10">
                    {cert.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                        <span className="text-sm font-bold text-primary uppercase tracking-wide">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black rounded-2xl uppercase tracking-widest text-xs hover:bg-accent hover:shadow-xl hover:shadow-accent/20 transition-all active:scale-95 group"
                  >
                    <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                    Download Certificate
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
