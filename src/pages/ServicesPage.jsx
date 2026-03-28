import React from "react";
import { CheckCircle2, Wrench, Zap, Settings, Package, Cog, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Wrench size={32} />,
    title: "Insitu Machining",
    tagline: "On-Site Precision Machining",
    image: "/images/insitu_machining.png",
    description:
      "Today, Insitu Machining is the only solution to arrest leakage on-site when the casing is intact with Boiler Pipes. Only skilled and experienced credential holders are allowed to perform this critical machining job on the casing. Our certified technicians bring the machine shop to your plant, eliminating costly downtime from dismantling.",
    points: [
      "On-site bore machining without removal",
      "Flange facing and sealing repairs",
      "Eliminates complete pull-out downtime",
      "Performed by certified specialists only",
    ],
  },
  {
    icon: <Cog size={32} />,
    title: "BCP Overhauling",
    tagline: "Complete Pump Rehabilitation",
    image: "/images/bcp_overhauling.png",
    description:
      "Our pumps usually run for a longer duration as compared to many other companies between repairs and maintenance works. We offer comprehensive overhauling that restores a Boiler Circulation Pump to its original OEM specifications — or better. Our structured process covers inspection, component replacement, balancing, and commissioning.",
    points: [
      "Full strip-down inspection & assessment",
      "Shaft restoration and alignment",
      "Impeller dynamic balancing",
      "Hydro-testing post overhaul",
      "On-site commissioning & handover",
    ],
  },
  {
    icon: <Zap size={32} />,
    title: "Motor Rewinding",
    tagline: "Restore Motor Efficiency",
    image: "/images/motor_rewinding.png",
    description:
      "An armature winding process restores function to older motors. While not always the most efficient solution, it often restores most of the motor's performance at a fraction of the replacement cost. Our team has over 20 years of experience rewinding HT/LT motors for industrial applications including BCPs.",
    points: [
      "HT & LT motor rewinding",
      "Insulation resistance testing",
      "Winding insulation upgrades",
      "Testing & commissioning",
      "Complete electrical diagnostics",
    ],
  },
  {
    icon: <Package size={32} />,
    title: "Spare Parts Selling",
    tagline: "OEM & Compatible Parts Supply",
    image: "/images/spare_parts_selling.png",
    description:
      "Inventory costs of maintaining BCP spare parts are becoming an increasing factor in plant budgeting. DEI VOX bridges this gap by providing genuine OEM parts and compatible equivalents sourced from our extensive vendor network — covering all BCP makes in the market.",
    points: [
      "All BCP makes and models covered",
      "OEM and compatible part options",
      "Bearings, seals, impellers & shafts",
      "Fast dispatch from stock",
      "Online and on-site ordering",
    ],
  },
  {
    icon: <Settings size={32} />,
    title: "Reverse Engineering",
    tagline: "Replicate & Improve Legacy Parts",
    image: "/images/reverse_engineering.png",
    description:
      "DEI VOX INDIA PVT. LTD. assures customers by rebuilding all spare parts through re-engineering or reverse engineering of existing OEM parts. When original parts are obsolete or unavailable, our engineering team recreates them from scratch — maintaining dimensional accuracy and metallurgical standards.",
    points: [
      "Dimensional reverse engineering of OEM parts",
      "3D scanning & CAD modeling",
      "Metallurgical analysis & replication",
      "Prototype testing before bulk supply",
      "Legacy pump parts revival",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 bg-white">

      {/* ── Hero Banner ──────────────────────────────────── */}
      <section className="bg-primary py-20 industrial-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="w-full px-4 lg:px-10 relative z-10">
          <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-tight mb-6">
            Our Core<br />
            <span className="text-accent">Services</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-base leading-relaxed">
            From Insitu Machining to Reverse Engineering — comprehensive BCP solutions for Power Plants across India.
          </p>
        </div>
      </section>

      {/* ── Services List ────────────────────────────────── */}
      <section className="py-20 w-full px-4 lg:px-10">
        <div className="space-y-24">
          {services.map((service, i) => {
            const sectionId = service.title.toLowerCase().replace(/\s+/g, "-");
            return (
              <div
                key={service.title}
                id={sectionId}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image block — alternates left/right */}
              <div className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                style={{ height: 360 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Number overlay */}
                <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {String(i + 1).padStart(2, "0")} — {service.tagline}
                </div>
              </div>

              {/* Text block */}
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent">{service.icon}</div>
                  <div>
                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">{service.tagline}</p>
                    <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tighter uppercase">{service.title}</h2>
                  </div>
                </div>
                <div className="w-12 h-1 bg-accent rounded-full mb-5" />
                <p className="text-foreground/70 leading-relaxed mb-7 text-sm">{service.description}</p>
                <ul className="space-y-3">
                  {service.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-accent mt-0.5 shrink-0" />
                      <span className="text-sm font-bold text-primary uppercase tracking-wide">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-primary">
        <div className="w-full px-4 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-4">
            Need a Custom Engineering Solution?
          </h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Our team of experts is ready to assist you with specialized BCP maintenance, overhauling, and consultancy requirements.
          </p>
          <Link to="/contact">
            <button className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-white font-black rounded-2xl tracking-widest uppercase shadow-xl shadow-accent/30 hover:-translate-y-0.5 transition-all active:scale-95">
              Get Technical Consultation <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
