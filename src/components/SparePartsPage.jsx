"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const parts = [
  {
    name: "Stator Coil",
    category: "Motor",
    src: "/images/spares-overview-image1.png",
    alt: "Packaged DEI VOX stator coil spare part",
  },
  {
    name: "Bearing Sleeves",
    category: "Pump end",
    src: "/images/spares-overview-image2.png",
    alt: "Packaged bearing sleeves for boiler circulation pumps",
  },
  {
    name: "Thrust Pads",
    category: "Pump end",
    src: "/images/spares-overview-image3.png",
    alt: "Packaged thrust pads for boiler circulation pump bearings",
  },
  {
    name: "Thrust Collar",
    category: "Pump end",
    src: "/images/spares-overview-image4.jpeg",
    alt: "Packaged DEI VOX thrust collar",
  },
  {
    name: "Winding Terminals",
    category: "Motor",
    src: "/images/spares-overview-image5.jpeg",
    alt: "Packaged winding terminals for BCP motors",
  },
  {
    name: "Plain Bearings",
    category: "Pump end",
    src: "/images/spares-overview-image6.jpeg",
    alt: "Packaged plain bearings for boiler circulation pumps",
  },
  {
    name: "Impeller",
    category: "Pump end",
    src: "/images/spares-overview-image7.png",
    alt: "Packaged DEI VOX boiler circulation pump impeller",
  },
  {
    name: "Metal Bearing Thrust Pads",
    category: "Pump end",
    src: "/images/spares-overview-image8.jpeg",
    alt: "Packaged metal bearing thrust pads",
  },
  {
    name: "Tilting Pads",
    category: "Pump end",
    src: "/images/spares-overview-image9.png",
    alt: "Packaged tilting pads for boiler circulation pump bearings",
  },
];

const componentGroups = [
  {
    title: "Pump End",
    description: "Pump components for repair, refurbishment and replacement.",
    components: [
      "Impellers",
      "Diffusers and wear rings",
      "Shafts and sleeves",
      "Thrust and journal bearing components",
      "Casing components and flange parts",
      "Studs, nuts and special fasteners",
    ],
  },
  {
    title: "Motor",
    description: "Components for glandless BCP motor service and restoration.",
    components: [
      "Bearing housings and end covers",
      "Winding coils",
      "Stators and stampings",
      "Rotor and stator components",
      "Terminal and auxiliary parts",
    ],
  },
  {
    title: "Other",
    description: "Purpose-made items that support specialist repair work.",
    components: ["Gaskets and sealing parts", "Custom tooling and fixtures for repair work"],
  },
];

const faqs = [
  {
    question: "Which parts do you supply?",
    answer:
      "See the categories above. If you don’t see your part, send us a photo or drawing and we’ll confirm whether we can supply it.",
  },
  {
    question: "Are your parts OEM parts?",
    answer:
      "Our parts are reverse-engineered and designed for the same fitment as the corresponding OEM parts. DEI VOX is an independent supplier; parts are not represented as OEM-supplied.",
  },
  {
    question: "Do you supply parts only for specific makes?",
    answer: "We support all makes. Send us the nameplate and we’ll confirm feasibility.",
  },
  {
    question: "Can you make a part that is no longer available?",
    answer:
      "Often, yes. We can assess the part for reverse engineering. Feasibility depends on the component, its condition and the technical information available.",
  },
  {
    question: "What documents come with the parts?",
    answer:
      "Depending on the part and scope, documentation can include test certificates, material compliance certificates, and fitment and interchangeability certificates.",
  },
  {
    question: "What warranty do you offer on parts?",
    answer:
      "Warranty is provided on the same basis as OEM, as stated in the source material. Applicable terms for a specific part are confirmed with its quotation.",
  },
];

export default function SparePartsPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={container}
      className="bg-card text-black selection:bg-accent selection:text-black"
    >
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 py-32 text-white lg:px-16">
        <div className="industrial-grid pointer-events-none absolute inset-0 opacity-[0.03]" />
        <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[300px] w-[300px] rounded-full bg-accent/20 blur-[80px] sm:h-[600px] sm:w-[600px] sm:blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-5%] left-[-5%] h-[250px] w-[250px] rounded-full bg-primary/20 blur-[80px]" />
        {[
          { top: "15%", left: "6%", size: 5, delay: 0, duration: 4 },
          { top: "40%", left: "2%", size: 3, delay: 1.5, duration: 5 },
          { top: "70%", left: "12%", size: 4, delay: 0.8, duration: 6 },
          { top: "25%", left: "55%", size: 3, delay: 2, duration: 4.5 },
          { top: "80%", left: "60%", size: 5, delay: 0.3, duration: 5.5 },
        ].map((dot, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -12, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute rounded-full bg-accent"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
          />
        ))}
        <motion.div
          style={{ y: yHeroText, opacity: opacityHero }}
          className="relative z-10 mx-auto w-full max-w-7xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-accent" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              BCP SPARE PARTS
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-10 text-4xl font-extrabold uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl md:text-[72px]"
          >
            Critical Spares.<br />
            <span className="text-white/20">Ready for Outages.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-2xl text-base font-medium leading-relaxed text-white/60 sm:text-xl">
              DEI VOX supplies boiler circulation pump components to power
              plant companies: sourced, manufactured or reverse-engineered,
              inspected and documented.
            </p>
            <Link
              href="/contact?subject=Parts%20Quote"
              className="inline-flex shrink-0 items-center justify-between gap-6 rounded-full bg-accent px-6 py-4 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:-translate-y-1"
            >
              Request a Parts Quote <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-12 right-12 flex items-center gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            Scroll Down
          </span>
          <div className="h-px w-12 bg-white/20" />
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-black/10 lg:col-span-5">
            <Image
              src="/images/spares-overview-image7.png"
              alt="DEI VOX packaged boiler circulation pump impeller"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              PARTS FOR CRITICAL EQUIPMENT
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-tighter sm:text-5xl">
              Keep your fleet moving.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-black/60">
              <p>
                A boiler circulation pump is only as dependable as its spares.
                Long OEM lead times, obsolete designs and mixed fleets make
                parts supply one of the biggest pain points for service
                companies and plant operators.
              </p>
              <p>
                DEI VOX supports both sides of that problem. We repair and
                overhaul BCPs every day, so we know which parts fail, which are
                hard to find and what a good replacement must achieve. We turn
                that experience into a reliable supply of components, for your
                own jobs or for resale in your market.
              </p>
            </div>
            <p className="mt-6 text-sm font-semibold text-black/45">
              Send a part list, drawing or nameplate. We aim to reply within 7
              business hours.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              COMPONENTS WE CAN REVERSE ENGINEER &amp; MANUFACTURE
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              Parts for pump, motor and repair.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {componentGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-8"
              >
                <div className="mb-5 h-1 w-12 bg-accent" />
                <h3 className="text-2xl font-extrabold uppercase tracking-tight">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  {group.description}
                </p>
                <ul className="mt-7 space-y-3">
                  {group.components.map((component) => (
                    <li
                      key={component}
                      className="flex gap-3 text-sm leading-relaxed text-white/70"
                    >
                      <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={16} />
                      {component}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-7">
            {[
              { label: "Partner with us", href: "/contact?subject=Service%20Partnership" },
              { label: "BCP Pump Overhaul", href: "/services#bcp-overhauling" },
              { label: "BCP Motor Repair & Rewinding", href: "/services#motor-rewinding" },
              { label: "Reverse Engineering", href: "/services#reverse-engineering" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/55 transition-colors hover:text-accent"
              >
                {item.label} <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
              SELECTED COMPONENTS
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              Supplied, protected and documented.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {parts.map((part, index) => (
              <motion.article
                key={part.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
                className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-lg shadow-black/5 sm:rounded-[1.75rem]"
              >
                <div className="relative aspect-square overflow-hidden bg-black/5">
                  <Image
                    src={part.src}
                    alt={part.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-5">
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-black/35 sm:text-[9px]">
                    {part.category}
                  </p>
                  <h3 className="mt-1 text-xs font-bold uppercase leading-snug tracking-tight text-black sm:text-base">
                    {part.name}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f0] px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              Spare parts, clearly answered.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-black/55">
              Have a component that is not listed? Send a photo, drawing or
              nameplate and our team can assess the request.
            </p>
          </div>
          <div className="space-y-3 lg:col-span-7">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-black/5 bg-white p-5 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-start gap-4 text-sm font-bold leading-relaxed text-black marker:hidden">
                  <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{faq.question}</span>
                  <span className="text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="ml-8 mt-4 text-sm leading-relaxed text-black/55">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[90rem]">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0a0a0a] px-8 py-12 text-white sm:rounded-[3rem] sm:px-14 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-[90px]" />
            <div className="relative z-10 max-w-4xl">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                PARTS SUPPORT &amp; DISTRIBUTION
              </p>
              <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-tighter sm:text-5xl">
                Tell us what you need.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/55 sm:text-lg">
                Send a part list, drawing or nameplate. We aim to respond
                within 7 business hours and can sign your NDA on request.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact?subject=Parts%20Quote"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:-translate-y-1"
                >
                  Request a Parts Quote <ArrowUpRight size={15} />
                </Link>
                <Link
                  href="/contact?subject=Become%20a%20Distributor"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-accent hover:text-accent"
                >
                  Become a Distributor <ArrowUpRight size={15} />
                </Link>
                <a
                  href="https://wa.me/917428200229?text=Hello%21%20I%27m%20interested%20in%20BCP%20spare%20parts."
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-accent hover:text-accent"
                >
                  WhatsApp Us <ArrowUpRight size={15} />
                </a>
                <a
                  href="mailto:sales@deivox.co.in"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-accent hover:text-accent"
                >
                  Email sales@deivox.co.in <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="mt-9 border-t border-white/10 pt-5">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                  Related pages
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {[
                    { label: "Reverse Engineering & Custom Components", href: "/services#reverse-engineering" },
                    { label: "BCP Pump Overhaul", href: "/services#bcp-overhauling" },
                    { label: "BCP Motor Repair & Rewinding", href: "/services#motor-rewinding" },
                    { label: "Multi-Make Capability", href: "/make-models-supported" },
                    { label: "Testing & Quality Assurance", href: "/iso-certificate" },
                    { label: "Emergency & Outage Support", href: "/contact" },
                    { label: "Partner With Us", href: "/contact?subject=Service%20Partnership" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-[10px] font-semibold text-white/45 transition-colors hover:text-accent"
                    >
                      {item.label} <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
