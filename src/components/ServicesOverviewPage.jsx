"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Cog,
  Compass,
  Settings,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "BCP Repair & Overhauling",
    description:
      "Inspection, dismantling, component assessment, repair and refurbishment of eligible pump assemblies.",
    href: "/bcp-overhauling-services",
    icon: Cog,
  },
  {
    number: "02",
    title: "Glandless BCP Motor Services",
    description:
      "Technical assessment, stator inspection and rewinding support, subject to equipment design and service requirements.",
    href: "/motor-rewinding-services",
    icon: Zap,
  },
  {
    number: "03",
    title: "Spare Parts & Reverse Engineering",
    description:
      "Engineering assessment and development of replacement components for supported equipment, including parts that may be difficult to source.",
    href: "/spare-parts",
    icon: Boxes,
  },
  {
    number: "04",
    title: "Technical Troubleshooting",
    description:
      "Investigation of reported equipment issues and recommendations for appropriate corrective action.",
    href: "/emergency-outage-support",
    icon: Compass,
  },
  {
    number: "05",
    title: "Engineering & Alternative Solutions",
    description:
      "Evaluation of technically suitable repair, restoration and replacement options to support equipment reliability and lifecycle value.",
    href: "/make-models-supported",
    icon: Settings,
  },
  {
    number: "06",
    title: "Quality Assured BCP Servicing",
    description:
      "Precision-driven servicing with rigorous inspection, dimensional checks, and quality-controlled reassembly to ensure reliable performance, operational safety, and extended pump life.",
    href: "/quality-compliance-confidentiality",
    icon: Wrench,
  },
];

export default function ServicesOverviewPage() {
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
      <section className="relative flex min-h-[82vh] flex-col justify-center overflow-hidden bg-black px-6 py-32 text-white lg:px-16">
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
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
            }}
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
              Dedicated to Boiler Circulation Pumps
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mb-10 text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-[96px]"
          >
            Services
            <br />
            <span className="text-white/25">Overview.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl text-base font-medium leading-relaxed text-white/55 sm:text-lg"
          >
            Structured inspection, repair and restoration support for
            Boiler Circulation Pumps operating in demanding power-generation
            environments.
          </motion.p>

          <Link
            href="#service-capabilities"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition-transform hover:scale-[1.03]"
          >
            Explore our services <ArrowDown size={15} />
          </Link>
        </motion.div>

        <div className="absolute bottom-10 right-8 hidden items-center gap-5 sm:flex lg:right-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
            Service Overview
          </span>
          <div className="h-px w-12 bg-white/20" />
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Boiler Circulation Pump Specialists
            </p>
            <h2 className="mb-8 text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              Dependable support
              <br />
              <span className="text-black/30">for critical equipment.</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-black/60 sm:text-lg">
              Boiler Circulation Pumps operate in demanding power-generation
              environments where equipment reliability, correct assembly and
              dependable maintenance are essential. We understand the
              importance of a structured approach to inspection, repair and
              restoration.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition-colors hover:text-primary"
            >
              Discuss a project <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-zinc-100">
            <Image
              src="/images/pump-overhaul-refurbishment-2.png"
              alt="DEI VOX technicians inspecting a boiler circulation pump assembly"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-full bg-black/75 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
              Inspection & repair support
            </div>
          </div>
        </div>
      </section>

      <section
        id="service-capabilities"
        className="scroll-mt-28 bg-[#f5f5f2] px-6 py-24 sm:py-32 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-8 border-b border-black/10 pb-10 sm:mb-16 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Areas of Support
              </p>
              <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.045em] sm:text-6xl">
                Practical expertise.
                <br />
                <span className="text-black/30">Project by project.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-black/55">
              Service scope is assessed against equipment design, project
              requirements and site conditions.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.number}
                  href={service.href}
                  className="group flex min-h-[280px] flex-col rounded-[1.75rem] border border-black/5 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl sm:p-9"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-[0.2em] text-black/30">
                      {service.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-accent transition-colors group-hover:bg-accent group-hover:text-black">
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-extrabold uppercase leading-tight tracking-tight sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-black/55">
                    {service.description}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-black/60 group-hover:text-primary">
                    Learn more <ArrowUpRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-[2rem] bg-zinc-900 lg:order-1">
            <Image
              src="/images/services-overview-image2.png"
              alt="Technician working on a pump assembly in a service workshop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              Supporting Customers & Service Partners
            </p>
            <h2 className="mb-8 text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              A technical resource
              <br />
              <span className="text-white/30">for your project.</span>
            </h2>
            <p className="mb-5 text-base leading-relaxed text-white/60">
              DEI VOX works with power-sector customers and welcomes
              project-based collaboration with international service companies
              and engineering organisations seeking specialist BCP aftermarket
              support and other agreed markets.
            </p>
            <p className="mb-5 text-base leading-relaxed text-white/60">
              We understand that service partners need a dependable technical
              resource that can complement their customer relationships,
              support project execution and help address equipment-specific
              challenges.
            </p>
            <p className="text-base leading-relaxed text-white/60">
              Depending on the project, DEI VOX can discuss repair and overhaul
              support, motor-related services, engineered spare parts,
              technical assessments and coordinated execution arrangements.
              Each collaboration is defined by its agreed scope,
              responsibilities and commercial terms.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-accent px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-black/55">
              DEI VOX
            </p>
            <h2 className="max-w-3xl text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              Your partner in BCP repair, engineering & aftermarket solutions.
            </h2>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/make-models-supported"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-black px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-transform hover:scale-[1.03]"
            >
              Explore our services <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/contact?subject=Spare%20Parts%20Request"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-black/20 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-black/5"
            >
              Submit an RFQ <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
