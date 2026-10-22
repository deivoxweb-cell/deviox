"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const images = [
  {
    src: "/images/multi-make-capability-01.png",
    alt: "DEI VOX engineers carrying out on-site boiler circulation pump work",
  },
  {
    src: "/images/multi-make-capability-02.png",
    alt: "DEI VOX technicians overhauling a large industrial pump",
  },
  {
    src: "/images/multi-make-capability-03.png",
    alt: "Technicians inspecting a boiler circulation pump motor",
  },
  {
    src: "/images/multi-make-capability-04.png",
    alt: "DEI VOX team inspecting a pump assembly at an industrial site",
  },
];

const pumpTypes = [
  "High-pressure, high-temperature boiler circulation pumps (BCP / BWCP)",
  "Glandless pump and motor units with a shared shaft inside one pressure boundary",
  "Pumps for subcritical and supercritical boilers",
  "Related units such as submersible and other sealless pumps",
];

const services = [
  { title: "BCP Pump Overhaul & Refurbishment", href: "/services#bcp-overhauling" },
  { title: "BCP Motor Repair & Rewinding", href: "/services#motor-rewinding" },
  { title: "In-Situ Machining", href: "/services#insitu-machining" },
  { title: "Reverse Engineering & Custom Components", href: "/services#reverse-engineering" },
  { title: "Spare Parts Supply", href: "/services#components-procurement" },
  { title: "Upgrades & Reliability Improvements", href: "/contact?subject=BCP%20Reliability%20Improvements" },
];

const feasibilityItems = [
  "Photos of the pump and motor nameplates",
  "Make, model and serial number",
  "Operating conditions, such as pressure, temperature and flow",
  "Fault history or reason for repair",
  "Drawings, previous repair reports or test records",
];

const faqs = [
  {
    question: "Which pump makes do you service?",
    answer:
      "We service almost all makes around the world. Send us the nameplate and we’ll confirm feasibility for your equipment.",
  },
  {
    question: "Are you affiliated with any manufacturer?",
    answer:
      "No. DEI VOX is an independent service provider. OEM names on this site are used only to identify the equipment we service.",
  },
  {
    question: "Can you service older or discontinued pumps?",
    answer:
      "Often, yes. We can reverse engineer components that are no longer available. Feasibility depends on the condition of the unit and the data available.",
  },
  {
    question: "Will independent servicing affect my OEM warranty?",
    answer:
      "That depends on your warranty terms and contract. We recommend checking with your OEM or reviewing your contract before using a third-party service on a pump still under warranty.",
  },
  {
    question: "Can you work behind our brand?",
    answer:
      "Yes. We regularly support service companies on subcontract and white-label basis and never approach their customers.",
  },
];

export default function MakeModelsPage() {
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
              MAKE &amp; MODELS SUPPORTED
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-10 text-4xl font-extrabold uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl md:text-[72px]"
          >
            One BCP Specialist<br />
            <span className="text-white/20">Many Pump Designs.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="max-w-2xl text-base font-medium leading-relaxed text-white/60 sm:text-xl"
          >
            DEI VOX is an independent workshop that repairs, rewinds and
            overhauls boiler circulation pumps across manufacturers, so you
            don&apos;t need a separate partner for each one.
          </motion.p>
        </motion.div>
        <div className="absolute bottom-12 right-12 flex items-center gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            Scroll Down
          </span>
          <div className="h-px w-12 bg-white/20" />
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                INDEPENDENT MULTI-MAKE CAPABILITY
              </p>
              <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-tighter sm:text-5xl">
                Engineering beyond a single OEM.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-black/55 lg:col-span-5">
              Most service companies and plant owners run more than one BCP
              design across their fleet. Returning to each OEM for every job
              can mean longer lead times, higher cost and limited flexibility.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <p className="text-base leading-relaxed text-black/65">
              DEI VOX takes a different approach. Independent of any
              manufacturer, we work from measurements and engineering. That
              lets us support mixed fleets, older units and designs that can be
              hard to service elsewhere.
            </p>
            <p className="text-base leading-relaxed text-black/65">
              We have hands-on experience working on Japanese-, German-, UK-
              and China-make BCP units.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Japanese Make", "German Make", "UK Make", "China Make"].map((make, index) => (
              <motion.div
                key={make}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-black/5 bg-white px-4 py-6 text-center shadow-lg shadow-black/5 sm:px-6"
              >
                <span className="text-sm font-bold uppercase tracking-wider text-black sm:text-base">
                  {make}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {images.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className={`relative overflow-hidden rounded-2xl bg-black/10 ${
                  index === 0 ? "col-span-2 aspect-[16/10] lg:col-span-1 lg:aspect-[4/5]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          <p className="mt-7 border-l-2 border-accent pl-4 text-xs leading-relaxed text-black/45">
            DEI VOX is an independent service provider and is not affiliated
            with, endorsed by or sponsored by any BCP manufacturer.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              PUMP TYPES &amp; CONFIGURATIONS
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-tighter sm:text-5xl">
              Built for demanding service.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/50">
              We work on sealless, wet-stator boiler circulation pumps used in
              thermal power plants, as well as related equipment.
            </p>
            <div className="mt-8 inline-flex rounded-full bg-accent px-5 py-3 text-xs font-bold uppercase tracking-wider text-black">
              3.3 kV <span className="px-3">·</span> 6.6 kV <span className="px-3">·</span> 11 kV
            </div>
          </div>
          <div className="space-y-3 lg:col-span-7">
            {pumpTypes.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={19} />
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">{item}</p>
              </motion.div>
            ))}
            <p className="pt-3 text-sm text-white/40">
              Don&apos;t see your pump?{" "}
              <Link href="/contact?subject=Pump%20Feasibility" className="font-semibold text-accent hover:underline">
                Send us the nameplate <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
              SERVICES AVAILABLE ACROSS MAKES
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              One team. Integrated BCP support.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Link
                  href={service.href}
                  className="group flex min-h-32 h-full items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-lg shadow-black/5 transition-all hover:-translate-y-1 hover:border-accent/50 hover:bg-accent"
                >
                  <span className="text-base font-bold uppercase leading-snug tracking-tight text-black">
                    {service.title}
                  </span>
                  <ArrowUpRight className="shrink-0 text-black/45 transition-transform group-hover:rotate-45 group-hover:text-black" size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              FIELD CASE STUDY
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              Wet-stator motor rewinding.
            </h2>
          </div>
          <div className="rounded-[2rem] bg-[#f5f5f0] p-7 sm:p-10 lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { label: "Make & series", value: "V-FLO make · LUV model" },
                { label: "Challenge", value: "Zero Megger reading" },
                { label: "Approach", value: "Root-cause investigation and data analysis" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-black/75">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 border-t border-black/10 pt-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">Result</p>
              <p className="mt-2 text-sm leading-relaxed text-black/65">
                The BCP motor was rewound and Megger readings returned to acceptable limits.
              </p>
            </div>
            <Link href="/case-studies" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-green-900">
              View all case studies <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              FEASIBILITY CHECK
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              Send us your nameplate.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-black/55">
              Not sure we can support your pump? Share the details below and
              we&apos;ll confirm feasibility within 7 business days.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="rounded-full bg-black px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-accent hover:text-black">
                Explore Our Services
              </Link>
              <Link href="/contact?subject=Submit%20an%20RFQ" className="rounded-full bg-accent px-5 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-accent/80">
                Submit an RFQ
              </Link>
            </div>
          </div>
          <div className="space-y-3 lg:col-span-7">
            {feasibilityItems.map((item, index) => (
              <div key={item} className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/20 text-[10px] font-bold text-green-950">
                  0{index + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-black/65">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[90rem]">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="mb-10 text-3xl font-extrabold uppercase tracking-tighter sm:text-5xl">
            Multi-make BCP support.
          </h2>
          <div className="grid gap-3 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-start gap-4 text-sm font-bold leading-relaxed text-white marker:hidden">
                  <span className="text-accent">0{index + 1}</span>
                  <span className="flex-1">{faq.question}</span>
                  <span className="text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="ml-9 mt-4 text-sm leading-relaxed text-white/55">{faq.answer}</p>
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
                INDEPENDENT MULTI-MAKE EXPERTISE
              </p>
              <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-tighter sm:text-5xl">
                Have a pump we should look at?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/55 sm:text-lg">
                Send the nameplate, photos and fault history. We respond within
                7 business hours and can sign your NDA on request.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact?subject=Send%20Your%20Nameplate" className="inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-accent/80">
                  Send Your Nameplate <ArrowUpRight size={15} />
                </Link>
                <Link href="/contact?subject=Request%20a%20Quote" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-accent hover:text-accent">
                  Request a Quote <ArrowUpRight size={15} />
                </Link>
                <a href="https://wa.me/917428200229?text=Hello%21%20I%27m%20interested%20in%20your%20Boiler%20Circulation%20Pump%20services." className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-accent hover:text-accent">
                  WhatsApp Us <ArrowUpRight size={15} />
                </a>
                <a href="mailto:sales@deivox.co.in" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-accent hover:text-accent">
                  Email sales@deivox.co.in <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                  Related pages
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {[
                    { label: "BCP Pump Overhaul", href: "/services#bcp-overhauling" },
                    { label: "Motor Repair & Rewinding", href: "/services#motor-rewinding" },
                    { label: "Reverse Engineering", href: "/services#reverse-engineering" },
                    { label: "Spare Parts", href: "/services#components-procurement" },
                    { label: "Quality & Compliance", href: "/iso-certificate" },
                    { label: "Partner With Us", href: "/contact?subject=Service%20Partnership" },
                    { label: "Case Studies", href: "/case-studies" },
                  ].map((page) => (
                    <Link
                      key={page.label}
                      href={page.href}
                      className="text-[10px] font-semibold text-white/45 transition-colors hover:text-accent"
                    >
                      {page.label} <span aria-hidden="true">→</span>
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
