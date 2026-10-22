"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Phone, Wrench } from "lucide-react";
import { serviceDetailPages } from "@/src/data/serviceDetailPages";

function ServiceSection({ section, index, showFaqPlus = false }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section
      className={`px-6 py-20 sm:py-28 lg:px-16 ${
        index % 2 === 0 ? "bg-white" : "bg-[#f5f5f2]"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-4xl">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
            Service Detail
          </p>
          <h2 className="text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.045em] sm:text-5xl">
            {section.heading}
          </h2>
          {section.text && (
            <p className="mt-6 text-base leading-relaxed text-black/60 sm:text-lg">
              {section.text}
            </p>
          )}
        </div>

        {section.type === "list" && (
          <ul className="grid gap-3 sm:grid-cols-2">
            {section.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-black/5 bg-white p-5 text-sm leading-relaxed text-black/70"
              >
                <Check
                  size={17}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        )}

        {section.type === "cards" && (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {section.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-black/5 bg-white p-6 sm:p-7"
              >
                <Wrench size={20} className="mb-5 text-primary" aria-hidden="true" />
                <h3 className="mb-3 text-lg font-extrabold uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-black/55">{item.text}</p>
              </article>
            ))}
          </div>
        )}

        {section.type === "steps" && (
          <ol className="grid gap-4 md:grid-cols-2">
            {section.items.map((item, stepIndex) => (
              <li
                key={item.title}
                className="flex gap-5 rounded-[1.5rem] border border-black/5 bg-white p-6 sm:p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-xs font-extrabold text-accent">
                  {String(stepIndex + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2 text-base font-extrabold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-black/55">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        )}

        {section.type === "groups" && (
          <div className="grid gap-5 md:grid-cols-2">
            {section.groups.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.5rem] border border-black/5 bg-white p-6 sm:p-8"
              >
                <h3 className="mb-5 text-lg font-extrabold uppercase tracking-tight">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-black/60"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}

        {section.type === "faq" && (
          <div className="divide-y divide-black/10 border-y border-black/10">
            {section.items.map((item, itemIndex) =>
              showFaqPlus ? (
                <div key={item.question} className="py-5">
                  <button
                    type="button"
                    aria-expanded={openFaq === itemIndex}
                    aria-controls={`faq-answer-${index}-${itemIndex}`}
                    onClick={() =>
                      setOpenFaq((current) =>
                        current === itemIndex ? null : itemIndex,
                      )
                    }
                    className="flex w-full items-center justify-between gap-6 text-left text-base font-bold"
                  >
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-2xl font-normal leading-none transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
                        openFaq === itemIndex ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}-${itemIndex}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
                      openFaq === itemIndex
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-4xl pt-3 text-sm leading-relaxed text-black/60">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold marker:hidden">
                    <span>{item.question}</span>
                  </summary>
                  <div>
                    <p className="max-w-4xl pt-3 text-sm leading-relaxed text-black/60">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ),
            )}
          </div>
        )}

        {section.type === "response" && (
          <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white">
            <div className="hidden grid-cols-[1.2fr_0.8fr_1.5fr] gap-4 bg-black px-6 py-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white sm:grid">
              <span>Stage</span>
              <span>Target</span>
              <span>Notes</span>
            </div>
            {section.items.map((item) => (
              <div
                key={item.stage}
                className="grid gap-1 border-b border-black/5 px-6 py-4 last:border-0 sm:grid-cols-[1.2fr_0.8fr_1.5fr] sm:gap-4"
              >
                <span className="text-sm font-bold">{item.stage}</span>
                <span className="text-sm font-extrabold text-primary">{item.target}</span>
                <span className="text-sm text-black/55">{item.notes}</span>
              </div>
            ))}
          </div>
        )}

        {section.contact && (
          <div className="flex flex-col gap-4 rounded-[1.5rem] bg-black p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-tight">
                WhatsApp / Phone
              </p>
              <a
                href="tel:+917428200229"
                className="mt-1 inline-block text-2xl font-extrabold tracking-tight text-accent"
              >
                +91 74282 00229
              </a>
              <p className="mt-2 text-sm text-white/55">
                sales@deivox.co.in · Monday-Saturday, 09:00-19:00 IST
              </p>
            </div>
            <a
              href="https://wa.me/917428200229"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-black"
            >
              WhatsApp us now <ArrowUpRight size={15} />
            </a>
          </div>
        )}

        {section.links && (
          <div className="mt-7 flex flex-wrap gap-3">
            {section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-primary"
              >
                {link.label} <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        )}

        {section.note && (
          <p className="mt-6 rounded-xl border-l-2 border-accent bg-white/70 px-5 py-4 text-sm leading-relaxed text-black/55">
            {section.note}
          </p>
        )}
      </div>
    </section>
  );
}

export default function ServiceDetailPage({ serviceKey }) {
  const service = serviceDetailPages[serviceKey];
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main
      ref={container}
      className="bg-card text-black selection:bg-accent selection:text-black"
    >
      <section className="relative flex min-h-[78vh] flex-col justify-center overflow-hidden bg-black px-6 py-32 text-white lg:px-16">
        <div className="industrial-grid pointer-events-none absolute inset-0 opacity-[0.03]" />
        <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[300px] w-[300px] rounded-full bg-accent/20 blur-[80px] sm:h-[600px] sm:w-[600px] sm:blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-5%] left-[-5%] h-[250px] w-[250px] rounded-full bg-primary/20 blur-[80px]" />
        {[0, 1, 2, 3, 4].map((dot) => (
          <motion.div
            key={dot}
            animate={{ y: [0, -12, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{
              duration: 4 + dot * 0.4,
              delay: dot * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute h-1 w-1 rounded-full bg-accent"
            style={{
              top: `${15 + dot * 14}%`,
              left: `${6 + dot * 12}%`,
            }}
          />
        ))}
        <motion.div
          style={{ y: yHeroText, opacity: opacityHero }}
          className="relative z-10 mx-auto w-full max-w-7xl"
        >
          <div className="mb-9 flex items-center gap-4">
            <div className="h-px w-12 bg-accent" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              {service.eyebrow}
            </p>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mb-9 max-w-5xl text-4xl font-extrabold uppercase leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-[82px]"
          >
            {service.title}
          </motion.h1>
          <p className="max-w-3xl text-base font-medium leading-relaxed text-white/55 sm:text-lg">
            {service.lead}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {service.urgentContact && (
              <a
                href="https://wa.me/917428200229"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-black"
              >
                WhatsApp us now <ArrowUpRight size={15} />
              </a>
            )}
            <Link
              href={
                serviceKey === "reverse-engineering-custom-components"
                  ? "/contact?subject=Spare%20Parts%20Request"
                  : "/contact"
              }
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white hover:border-accent hover:text-accent"
            >
              {service.urgentContact ? "Request urgent support" : "Submit an RFQ"}{" "}
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {service.introImage ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-zinc-100">
              <Image
                src={service.introImage.src}
                alt={service.introImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
            </div>
          ) : (
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              DEI VOX Service
            </p>
          )}
          <p className="text-lg font-medium leading-relaxed text-black/65 sm:text-2xl">
            {service.intro}
          </p>
        </div>
      </section>

      {service.sections.map((section, index) => (
        <ServiceSection
          key={section.heading}
          section={section}
          index={index}
          showFaqPlus={serviceKey === "pump-overhaul-refurbishment"}
        />
      ))}

      <section className="bg-black px-6 py-20 text-white sm:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                Workshop & Service Work
              </p>
              <h2 className="text-3xl font-extrabold uppercase tracking-[-0.04em] sm:text-5xl">
                Service in focus.
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.images.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-zinc-900"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-6 py-16 sm:py-20 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black/55">
              DEI VOX · Boiler Circulation Pump Services
            </p>
            <h2 className="max-w-3xl text-3xl font-extrabold uppercase leading-tight tracking-[-0.04em] sm:text-5xl">
              Discuss your equipment and service requirements.
            </h2>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/services-overview"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white"
            >
              All services <ArrowUpRight size={15} />
            </Link>
            <Link
              href={
                serviceKey === "reverse-engineering-custom-components"
                  ? "/contact?subject=Spare%20Parts%20Request"
                  : "/contact"
              }
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-black"
            >
              Contact our team <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {service.urgentContact && (
        <div className="fixed inset-x-3 bottom-3 z-40 mx-auto flex max-w-xl items-center justify-between gap-3 rounded-full border border-white/10 bg-black/95 px-4 py-3 text-white shadow-2xl backdrop-blur sm:inset-x-6 sm:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <Phone size={15} className="shrink-0 text-accent" aria-hidden="true" />
            <a href="tel:+917428200229" className="truncate text-xs font-bold sm:text-sm">
              +91 74282 00229
            </a>
          </div>
          <a
            href="https://wa.me/917428200229"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-accent px-4 py-2 text-[9px] font-bold uppercase tracking-wider text-black sm:text-[10px]"
          >
            WhatsApp urgent support
          </a>
        </div>
      )}
    </main>
  );
}
