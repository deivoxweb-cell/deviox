"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "BCP Rotor Deflection",
    customer: "Private independent power station",
    unit: "Sub-critical · 600 MW",
    year: "2021",
    make: "German make",
    rating: "11 kV",
    problem: [
      "Shaft deflection following an operational failure",
      "Mechanical rotor damage",
      "Material erosion at critical areas, with clearances beyond limits",
    ],
    solution: [
      "Repaired the rotor using root-cause analysis and advanced technology.",
    ],
    images: ["/images/case-1.jpeg"],
  },
  {
    title: "BCP Motor Thrust Disc Material Issue",
    customer: "Private independent power station",
    unit: "Super-critical · 660 MW",
    year: "2022",
    make: "UK make",
    rating: "6.6 kV",
    problem: [
      "Thrust disc wearing out frequently",
      "Soft-part quality issue",
      "Poor-quality hard-chrome plating",
    ],
    solution: [
      "Used an advanced material to help prevent frequent wear.",
    ],
    images: [3, 4],
    fillPhotoArea: true,
  },
  {
    title: "Casing Leakage Arrest",
    customer: "Private independent power station",
    unit: "Super-critical · 660 MW",
    year: "2023",
    make: "Japanese make",
    rating: "6.6 kV",
    problem: [
      "Improper motor-to-casing assembly",
      "Gasket fitment issue",
      "Manufacturing material quality",
    ],
    solution: [
      "Performed in-situ machining of the casing.",
      "Performed in-situ machining of the motor.",
      "Specified quality gasket fitment.",
    ],
    images: [5, 2, 6],
  },
  {
    title: "Cable Gland Leakage",
    customer: "Private independent power station",
    unit: "Sub-critical · 600 MW",
    year: "2025",
    make: "UK make",
    rating: "6.6 kV",
    problem: [
      "Incorrect fitment",
      "Backup ring quality",
      "TGM assembly not performed skillfully",
    ],
    solution: [
      "Fixed the terminal leakage at the location.",
    ],
    images: [7, 8],
  },
  {
    title: "BCP Motor Cavity Temperature Rise",
    customer: "Private independent power station",
    unit: "Sub-critical · 600 MW",
    year: "2024",
    make: "Japanese make",
    rating: "11 kV",
    problem: [
      "Filter choke",
      "Insufficient flow in the HP line",
    ],
    rootCause: "Poor quality of daily maintenance checks.",
    solution: [
      "Replaced the filter online.",
      "Implemented a double-filter configuration.",
    ],
    images: [9],
  },
  {
    title: "BCP Motor Heating",
    customer: "Private independent power station",
    unit: "Super-critical · 660 MW",
    year: "2024",
    make: "German make",
    rating: "6.6 kV",
    problem: [
      "Mud on mechanical parts",
      "Design clearance not maintained during assembly",
    ],
    rootCause: "Poor quality of daily maintenance checks.",
    solution: [
      "Refurbished the existing parts.",
      "Replaced parts to restore the new design clearance.",
    ],
    images: [10],
  },
  {
    title: "BCP Crackling Sound",
    customer: "Private independent power station",
    unit: "Sub-critical · 585 MW",
    year: "2025",
    make: "UK make",
    rating: "6.6 kV",
    problem: [
      "Soft FRP and metal material issue",
      "BCPs had been used for an extended period without overhaul",
    ],
    solution: [
      "Refurbished the assembly by replacing the soft material and bonding it to the metal part using an advanced process.",
    ],
    images: [11],
  },
];

const photoPath = (image) =>
  typeof image === "number"
    ? `/images/case-study-${String(image).padStart(2, "0")}.png`
    : image;

function CaseCard({ study, index }) {
  const isMultiPhoto = study.images.length > 1;

  return (
    <motion.article
      id={`case-${index + 1}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
      viewport={{ once: true, amount: 0.1 }}
      className="grid scroll-mt-32 overflow-hidden rounded-[2rem] border-2 border-black/15 bg-white shadow-xl shadow-black/5 lg:grid-cols-12"
    >
      <div
        className={`grid gap-1 bg-black/5 p-1 ${
          isMultiPhoto ? "grid-cols-2 lg:col-span-5" : "grid-cols-1 lg:col-span-5"
        }`}
      >
        {study.images.map((image, imageIndex) => (
          <div
            key={image}
            className={`relative overflow-hidden bg-black/10 ${
              study.fillPhotoArea
                ? "aspect-auto min-h-[30rem]"
                : study.images.length === 3 && imageIndex === 0
                ? "col-span-2 aspect-[16/10] lg:col-span-1 lg:row-span-2 lg:aspect-auto"
                : isMultiPhoto
                  ? "aspect-[4/3]"
                  : "aspect-[4/3] lg:aspect-auto lg:min-h-[30rem]"
            }`}
          >
            <Image
              src={photoPath(image)}
              alt={`${study.title} — service photo ${imageIndex + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col p-6 sm:p-9 lg:col-span-7 lg:p-10">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-950">
            Case {String(index + 1).padStart(2, "0")}
          </span>
          {[study.year, study.make, study.rating].map((detail) => (
            <span
              key={detail}
              className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black/50"
            >
              {detail}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-black sm:text-3xl">
          {study.title}
        </h2>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-black/40">
          {study.customer} <span className="px-1 text-accent">·</span> {study.unit}
        </p>

        <div className="mt-8 grid gap-7 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40">
              Root Cause / Reason
            </h3>
            <ul className="space-y-2.5">
              {study.problem.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-black/65">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            {study.rootCause && (
              <p className="mt-4 border-l-2 border-accent pl-3 text-sm leading-relaxed text-black/55">
                <strong className="text-black">Root cause:</strong> {study.rootCause}
              </p>
            )}
          </div>

          <div>
            <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40">
              Work Carried Out
            </h3>
            <ul className="space-y-2.5">
              {study.solution.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-black/65">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudiesPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0px", "120px"]);
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
              FIELD EXPERIENCE
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12 text-4xl font-extrabold uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl md:text-[72px]"
          >
            Every Pump<br />
            <span className="text-white/20">Has a Story.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-xl text-sm font-medium leading-relaxed text-white/45 sm:text-base"
          >
            Real Boiler Circulation Pump jobs, the challenges we found, and the
            engineering work carried out to address them.
          </motion.p>
        </motion.div>

        <div className="absolute bottom-12 right-12 flex items-center gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            Scroll Down
          </span>
          <div className="h-px w-12 bg-white/20" />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-14 grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                DEI VOX: CASE STUDIES OVER THE YEARS
              </p>
              <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-tighter sm:text-5xl">
                Evidence from<br />the field.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-black/55 lg:col-span-5">
              Every boiler circulation pump tells a different story, and so does
              every repair. These case studies share BCP jobs from service
              companies, plant operators and partners: what inspection found,
              how the unit was repaired or rebuilt, and the methods used.
            </p>
          </div>

          <p className="mb-12 max-w-4xl text-sm leading-relaxed text-black/45">
            Each case explains the work and supporting details so you can assess
            it on evidence. Customer and equipment details are anonymised unless
            approved; we share only what customers have agreed we can.
          </p>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <CaseCard key={study.title} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[90rem]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] px-8 py-12 sm:rounded-[3rem] sm:px-16 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-[90px]" />
            <div className="relative z-10 max-w-4xl">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                HAVE A SIMILAR CHALLENGE?
              </p>
              <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-tighter sm:text-5xl">
                Let&apos;s review your BCP requirement.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/50 sm:text-lg">
                Send us the nameplate and fault history. We&apos;ll review your
                situation and tell you honestly what we can do.
              </p>
              <Link
                href="/contact?subject=Submit%20an%20RFQ"
                className="mt-9 inline-flex items-center gap-8 rounded-full bg-accent px-6 py-4 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:-translate-y-1"
              >
                Submit an RFQ <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
