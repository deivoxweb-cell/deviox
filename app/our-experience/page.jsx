"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "200+", label: "BCPs Overhauled" },
  { value: "65+", label: "BCPs Troubleshot" },
  { value: "250+", label: "BCP Motors Rewound" },
  { value: "1000 MW", label: "Unit Capacity" },
  { value: "Multiple", label: "BCP Designs & Configurations" },
  { value: "Worldwide", label: "Service Capability" },
];

const capabilityRows = [
  {
    title: "BCP Pump Overhaul",
    description: "Complete dismantling, inspection, refurbishment, reassembly and testing.",
  },
  {
    title: "BCP Motor Services",
    description: "Inspection, rewinding, restoration and on-site/plant motor service.",
  },
  {
    title: "Spare Parts & Reconditioning",
    description: "Critical BCP component supply, restoration and re-engineering.",
  },
  {
    title: "Installation & Commissioning",
    description: "BCP installation, alignment, inspection and commissioning support.",
  },
  {
    title: "Troubleshooting & Site Support",
    description: "Specialist diagnosis and corrective action for BCP operating issues.",
  },
];

export default function OurExperiencePage() {
  return (
    <div className="bg-[#f5f5f0] text-black selection:bg-accent selection:text-black">
      <section className="relative overflow-hidden bg-black text-white pt-32 pb-24 md:pt-36 md:pb-28">
        <div className="absolute inset-0 opacity-[0.04] industrial-grid" />
        <div className="absolute -top-20 right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/25 blur-[120px]" />
        <div className="absolute bottom-[-15%] left-[-8%] h-[350px] w-[350px] rounded-full bg-primary/25 blur-[120px]" />

        {[{ top: "15%", left: "6%", size: 5, dur: 4 }, { top: "42%", left: "2%", size: 3, dur: 5 }, { top: "74%", left: "10%", size: 4, dur: 5.8 }, { top: "26%", left: "58%", size: 3, dur: 4.5 }, { top: "82%", left: "60%", size: 5, dur: 5.5 }].map((dot, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -12, 0], opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: dot.dur, delay: index * 0.35, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full bg-accent pointer-events-none"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
          />
        ))}

        <div className="relative mx-auto max-w-7xl px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-accent" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              Proven Site Experience
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-4xl font-extrabold uppercase leading-[0.88] tracking-[-0.05em] sm:text-5xl lg:text-7xl"
          >
            Our
            <span className="text-white/25"> Experience</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl text-base font-medium leading-relaxed text-white/70 md:text-xl"
          >
            DEI VOX has successfully executed all-makes of BCP till date
            (Japanese, German and China-make BCPs).
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-16">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-black/45">
            Built on real power-plant execution
          </p>
          <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-[-0.05em] text-black sm:text-5xl">
            Proven BCP expertise across multiple power generation sites
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-4 h-1 w-14 bg-accent" />
              <p className="text-3xl font-extrabold tracking-[-0.05em] text-primary sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black/45">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-16">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-black/45">
              Multi-make. Multi-design.
            </p>
            <h3 className="text-3xl font-extrabold uppercase leading-tight tracking-[-0.05em] text-black sm:text-5xl">
              One specialist team.
            </h3>
          </div>

          <div className="space-y-6">
            <p className="text-lg font-medium leading-relaxed text-black/65">
              From BCP inspection and troubleshooting to complete pump overhaul, motor rewinding,
              reconditioning, spare manufacturing and installation, DEI VOX provides an integrated
              specialist solution.
            </p>
            <div className="h-px w-full bg-black/10" />
            <p className="text-base font-medium leading-relaxed text-black/65">
              Our experience covers multiple BCP designs, configurations and equipment generations,
              including unit capacities up to 1000 MW, with capability extending from
              individual component supply to complete BCP overhaul and installation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-16">
        <div className="mb-12">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-black/45">
            Service capability
          </p>
          <h3 className="text-3xl font-extrabold uppercase leading-tight tracking-[-0.05em] text-black sm:text-5xl">
            Specialist solutions for critical BCP assets
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilityRows.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-black/5 bg-[#f7f7f5] p-7 transition-transform duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_50px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-black">
                0{index + 1}
              </div>
              <h4 className="mb-3 text-xl font-extrabold uppercase tracking-[-0.04em] text-black">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-black/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-16">
        <div className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_25px_60px_rgba(0,0,0,0.05)] sm:p-12">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-black/45">
            Track record
          </p>
          <blockquote className="max-w-4xl text-2xl font-extrabold uppercase leading-tight tracking-[-0.05em] text-black sm:text-4xl">
            “Different BCP designs. Different operating conditions. Different challenges. One specialist team.”
          </blockquote>
          <div className="mt-6 h-px w-28 bg-accent" />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-black/60">
            DEI VOX — BCP Repair, Overhaul & Service Specialists
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left lg:px-16">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-black/45">
              Ready to discuss your BCP requirement?
            </p>
            <h3 className="text-3xl font-extrabold uppercase leading-tight tracking-[-0.05em] text-black sm:text-5xl">
              Partner with a team that works on real plant conditions.
            </h3>
          </div>

          <Link href="/contact" className="inline-flex items-center gap-4 rounded-full bg-black px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:scale-[1.02]">
            Get In Touch
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-base font-bold text-black">
              →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
