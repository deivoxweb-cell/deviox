"use client";
import React, { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ListFilter, Search, X } from "lucide-react";

const parts = [
  { id: "DV-PE-001", category: "Pump end", name: "Impeller", function: "Moves water through the pump.", replace: "Erosion, cavitation damage or cracks.", route: "Reverse-engineered or new", priority: "High" },
  { id: "DV-PE-002", category: "Pump end", name: "Diffuser", function: "Converts water velocity into pressure.", replace: "Erosion or wear at flow passages.", route: "Reverse-engineered or new", priority: "Medium" },
  { id: "DV-PE-003", category: "Pump end", name: "Wear rings (impeller and casing)", function: "Control running clearance between rotating and stationary parts.", replace: "Clearance growth or lost efficiency.", route: "New", priority: "High" },
  { id: "DV-PE-004", category: "Pump end", name: "Pump shaft", function: "Carries torque and joins pump end to motor.", replace: "Journal wear, bending or cracks.", route: "New or reverse-engineered", priority: "Medium" },
  { id: "DV-PE-005", category: "Pump end", name: "Casing cover / casing parts", function: "Form the pressure boundary and flow path.", replace: "Erosion or gasket-seat damage.", route: "Repair, or new on request", priority: "Low" },
  { id: "DV-BR-001", category: "Bearings and rotating parts", name: "Journal (radial) bearings", function: "Support the rotor radially.", replace: "Wear or growth in running clearance.", route: "New or reverse-engineered", priority: "High" },
  { id: "DV-BR-002", category: "Bearings and rotating parts", name: "Bearing sleeves", function: "Provide the mating surface for journal bearings.", replace: "Scoring or wear.", route: "New", priority: "High" },
  { id: "DV-BR-003", category: "Bearings and rotating parts", name: "Thrust bearing set (pads and runner / collar)", function: "Carries axial load.", replace: "Wear, overload or poor lubrication.", route: "New or reverse-engineered", priority: "High" },
  { id: "DV-BR-004", category: "Bearings and rotating parts", name: "Auxiliary / cooling impeller", function: "Circulates motor cooling water.", replace: "Wear or blockage.", route: "New or reverse-engineered", priority: "Medium" },
  { id: "DV-MO-001", category: "Motor", name: "Stator winding", function: "Produces the magnetic field.", replace: "Insulation failure.", route: "Rewinding service", priority: "High" },
  { id: "DV-MO-002", category: "Motor", name: "Stator can", function: "Protects the winding from water.", replace: "Pitting, leaks or damage.", route: "Repair or new", priority: "Medium" },
  { id: "DV-MO-003", category: "Motor", name: "Rotor can", function: "Protects the rotor.", replace: "Damage or corrosion.", route: "Repair or new", priority: "Medium" },
  { id: "DV-MO-004", category: "Motor", name: "Rotor assembly", function: "Turns the shaft.", replace: "Bar damage, can damage or imbalance.", route: "Repair or exchange", priority: "Low" },
  { id: "DV-MO-005", category: "Motor", name: "End covers and bearing housings", function: "Support bearings and close the motor.", replace: "Wear, damage or cracks.", route: "New or reverse-engineered", priority: "Low" },
  { id: "DV-MO-006", category: "Motor", name: "Terminal gland and cable parts", function: "Carry power into the pressure boundary.", replace: "Leakage or insulation damage.", route: "New", priority: "Medium" },
  { id: "DV-SJ-001", category: "Sealing and joints", name: "Main flange gaskets", function: "Seal the pressure boundary.", replace: "Replaced at every overhaul.", route: "New", priority: "High" },
  { id: "DV-SJ-002", category: "Sealing and joints", name: "Studs, nuts and special fasteners", function: "Hold pressure joints together.", replace: "Stretch, damage or single-use requirements.", route: "New", priority: "High" },
  { id: "DV-SJ-003", category: "Sealing and joints", name: "Sealing rings and small gaskets", function: "Seal auxiliary and cooling joints.", replace: "Hardening or damage.", route: "New", priority: "High" },
  { id: "DV-CC-001", category: "Cooling circuit", name: "Heat exchanger / cooler parts", function: "Help keep the motor cavity cool.", replace: "Fouling or leaks.", route: "New or repair", priority: "Medium" },
  { id: "DV-CC-002", category: "Cooling circuit", name: "Cooling lines and fittings", function: "Carry cooling water.", replace: "Corrosion or leaks.", route: "New", priority: "Low" },
  { id: "DV-CC-003", category: "Cooling circuit", name: "Auxiliary valves and instruments", function: "Control and monitor the cooling circuit.", replace: "Wear or failure.", route: "Sourced", priority: "Low" },
  { id: "DV-KT-001", category: "Kits", name: "Pump overhaul kit", function: "Combines wear rings, gaskets, fasteners and bearings for a standard pump overhaul.", replace: "Planned overhaul.", route: "Assembled kit", priority: "High" },
  { id: "DV-KT-002", category: "Kits", name: "Motor overhaul kit", function: "Combines bearings, gaskets and small parts for a motor overhaul.", replace: "Planned overhaul.", route: "Assembled kit", priority: "Medium" },
];

const categories = [
  "Pump end",
  "Bearings and rotating parts",
  "Motor",
  "Sealing and joints",
  "Cooling circuit",
  "Kits",
];

export default function PartsCataloguePage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");
  const [supplyRoute, setSupplyRoute] = useState("All supply routes");
  const [quoteList, setQuoteList] = useState([]);

  const supplyRoutes = useMemo(
    () => [...new Set(parts.map((part) => part.route))].sort(),
    [],
  );

  const filteredParts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    return parts.filter((part) => {
      const matchesCategory = category === "All categories" || part.category === category;
      const matchesRoute = supplyRoute === "All supply routes" || part.route === supplyRoute;
      const matchesSearch =
        !normalizedSearch ||
        [
          part.id,
          part.category,
          part.name,
          part.function,
          part.replace,
          part.route,
        ].some((value) => value.toLowerCase().includes(normalizedSearch));
      return matchesCategory && matchesRoute && matchesSearch;
    });
  }, [category, search, supplyRoute]);

  const requestHref = `/contact?subject=Spare%20Parts%20Request&message=${encodeURIComponent(
    quoteList.length
      ? `Please evaluate and quote the following parts:\n${quoteList
          .map((part) => `- ${part.id}: ${part.name}`)
          .join("\n")}\n\nI will provide the applicable pump/motor nameplate and any available drawings or photos.`
      : "Please evaluate this part for supply. I will provide the part list, pump/motor nameplate, drawing or photo.",
  )}`;

  const togglePart = (part) => {
    setQuoteList((current) =>
      current.some((item) => item.id === part.id)
        ? current.filter((item) => item.id !== part.id)
        : [...current, part],
    );
  };

  return (
    <div ref={container} className="bg-card text-black selection:bg-accent selection:text-black">
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
            transition={{ duration: dot.duration, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute rounded-full bg-accent"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
          />
        ))}
        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-accent" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              SPARE PARTS CATALOGUE
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-10 text-4xl font-extrabold uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl md:text-[72px]"
          >
            Find the BCP Part<br />
            <span className="text-white/20">You Need.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="max-w-2xl text-base font-medium leading-relaxed text-white/60 sm:text-xl"
          >
            Browse by category, part name or function, add items to your quote list
            and send one request. No account, no payment, just a quotation.
          </motion.p>
          <Link
            href="#catalogue"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:-translate-y-1"
          >
            Browse Parts <ArrowDown size={15} />
          </Link>
        </motion.div>
        <div className="absolute bottom-12 right-12 flex items-center gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Scroll Down</span>
          <div className="h-px w-12 bg-white/20" />
        </div>
      </section>

      <section className="px-4 pt-12 sm:px-8 sm:pt-16 lg:px-16">
        <div className="mx-auto max-w-[90rem]">
          <div
            id="quote-list"
            className="scroll-mt-28 rounded-[1.75rem] bg-black p-6 text-white sm:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent">
                  Your request
                </p>
                <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight">
                  Quote list <span className="text-white/35">({quoteList.length})</span>
                </h2>
              </div>
              <Link
                href={requestHref}
                className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-xs font-bold uppercase tracking-wider transition-colors ${
                  quoteList.length
                    ? "bg-accent text-black hover:bg-accent/80"
                    : "border border-white/20 text-white hover:border-accent hover:text-accent"
                }`}
              >
                {quoteList.length
                  ? "Submit Parts for Evaluation"
                  : "Submit a Part for Evaluation"}
                <ArrowUpRight size={15} />
              </Link>
            </div>
            {quoteList.length ? (
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {quoteList.map((part) => (
                  <li
                    key={part.id}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.06] px-4 py-3"
                  >
                    <span className="text-sm text-white/75">
                      <span className="mr-2 text-xs text-white/35">{part.id}</span>
                      {part.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => togglePart(part)}
                      aria-label={`Remove ${part.name} from quote list`}
                      className="rounded-full p-2 text-white/40 hover:bg-white/10 hover:text-white"
                    >
                      <X size={15} />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-white/45">
                Add one or more parts to send a combined request, or submit a
                single part for evaluation.
              </p>
            )}
          </div>
        </div>
      </section>

      <section
        id="catalogue"
        className="scroll-mt-28 px-4 pb-20 pt-10 sm:px-8 lg:px-16"
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                PARTS CATALOGUE
              </p>
              <h2 className="text-3xl font-extrabold uppercase tracking-tighter sm:text-5xl">
                Filter the catalogue.
              </h2>
            </div>
            <p className="text-sm font-semibold text-black/45">
              Showing {filteredParts.length} of {parts.length} suggested parts
            </p>
          </div>

          <div className="mb-7 grid gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-lg shadow-black/5 md:grid-cols-12">
            <label className="relative md:col-span-6">
              <span className="sr-only">Search parts</span>
              <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-black/35" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name, ID, use or replacement reason"
                className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f8f5] pl-11 pr-4 text-sm outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="md:col-span-3">
              <span className="sr-only">Filter by category</span>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f8f5] px-4 text-sm outline-none focus:border-accent"
              >
                <option>All categories</option>
                {categories.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="md:col-span-3">
              <span className="sr-only">Filter by suggested supply route</span>
              <select
                value={supplyRoute}
                onChange={(event) => setSupplyRoute(event.target.value)}
                className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f8f5] px-4 text-sm outline-none focus:border-accent"
              >
                <option>All supply routes</option>
                {supplyRoutes.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>

          {filteredParts.length ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredParts.map((part, index) => {
                const isSelected = quoteList.some((item) => item.id === part.id);
                return (
                  <motion.article
                    key={part.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.35, delay: (index % 3) * 0.05 }}
                    className="flex h-full flex-col rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-lg shadow-black/5 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full bg-accent/20 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-green-950">
                        {part.category}
                      </span>
                      <span className="text-[10px] font-semibold text-black/35">{part.id}</span>
                    </div>
                    <h3 className="mt-5 text-xl font-extrabold uppercase leading-tight tracking-tight">
                      {part.name}
                    </h3>
                    <div className="mt-4 space-y-3">
                      <p className="text-sm leading-relaxed text-black/65">
                        <strong className="text-black">Function:</strong> {part.function}
                      </p>
                      <p className="text-sm leading-relaxed text-black/55">
                        <strong className="text-black/75">Typically replaced for:</strong> {part.replace}
                      </p>
                    </div>
                    <div className="mt-5 border-t border-black/5 pt-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/35">
                        Suggested supply route — confirm on evaluation
                      </p>
                      <p className="mt-1 text-xs font-semibold text-black/65">{part.route}</p>
                      <p className="mt-3 inline-flex rounded-full border border-black/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-black/45">
                        {part.priority} suggested launch priority
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => togglePart(part)}
                      aria-pressed={isSelected}
                      className={`mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-wider transition-colors ${
                        isSelected
                          ? "bg-black text-white hover:bg-black/80"
                          : "bg-accent text-black hover:bg-accent/80"
                      }`}
                    >
                      {isSelected ? "Remove from Quote List" : "Add to Quote List"}
                      {isSelected && <X size={14} />}
                    </button>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-black/20 bg-white p-10 text-center">
              <ListFilter className="mx-auto text-black/30" size={28} />
              <p className="mt-4 font-semibold text-black/65">No parts match those filters.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All categories");
                  setSupplyRoute("All supply routes");
                }}
                className="mt-4 text-xs font-bold uppercase tracking-wider text-green-900 underline underline-offset-4"
              >
                Clear filters
              </button>
            </div>
          )}

        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              QUALITY &amp; DOCUMENTATION
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
              Inspection before dispatch.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-black/55">
              Documents supplied depend on the part and confirmed scope. They may include an inspection report, material certificate and certificate of conformity. Our processes operate under ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018.
            </p>
            <Link href="/iso-certificate" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-green-900">
              Testing and Quality Assurance <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
            {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"].map((standard) => (
              <div key={standard} className="rounded-2xl border border-black/5 bg-white p-5 text-center shadow-lg shadow-black/5">
                <p className="text-sm font-extrabold uppercase tracking-tight">{standard}</p>
                <p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-black/40">Certified management system</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white sm:py-24 lg:px-16">
        <div className="mx-auto max-w-[90rem]">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="mb-8 text-3xl font-extrabold uppercase tracking-tighter sm:text-5xl">Catalogue questions.</h2>
          <div className="grid gap-3 lg:grid-cols-3">
            {[
              ["Why don’t you show prices?", "BCP parts vary by make, material, quantity and documentation, so we quote each request. This helps keep pricing accurate and lets our engineers confirm that the part is suitable for your unit."],
              ["How do I know which part I need?", "Send the pump and motor nameplate, a photo of the part and its application. Our engineers will help identify it."],
              ["What warranty do you give on parts?", "Warranty terms are confirmed for the quoted part and scope. The source document states the same basis as the OEM warranty."],
            ].map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <summary className="flex cursor-pointer list-none items-start gap-3 text-sm font-bold leading-relaxed marker:hidden">
                  <span className="text-accent">+</span><span>{question}</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-white/55">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-[90rem] rounded-[2rem] bg-[#0a0a0a] px-8 py-12 text-white sm:rounded-[3rem] sm:px-14 sm:py-16">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">PARTS EVALUATION</p>
          <h2 className="max-w-4xl text-3xl font-extrabold uppercase leading-tight tracking-tighter sm:text-5xl">
            Ready to request a quotation?
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/55 sm:text-base">
            Send us a part list, drawing or nameplate. We aim to respond within
            24 business hours and can sign your NDA on request.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?subject=Spare%20Parts%20Request&message=Please%20evaluate%20this%20part%20for%20supply.%20I%20will%20provide%20a%20part%20list%2C%20drawing%20or%20nameplate." className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-accent hover:text-accent">
              Submit a Part for Evaluation <ArrowUpRight size={15} />
            </Link>
            <a href="https://wa.me/917428200229?text=Hello%21%20I%27m%20interested%20in%20BCP%20spare%20parts." className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-accent hover:text-accent">
              WhatsApp Us <ArrowUpRight size={15} />
            </a>
            <a href="mailto:sales@deivox.co.in" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-accent hover:text-accent">
              Email sales@deivox.co.in <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">Related pages</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {[
                ["Spare Parts Overview", "/spare-parts"],
                ["Reverse Engineering & Custom Components", "/reverse-engineering-custom-components"],
                ["BCP Pump Overhaul", "/bcp-overhauling-services"],
                ["BCP Motor Repair & Rewinding", "/motor-rewinding-services"],
                ["Multi-Make Capability", "/make-models-supported"],
                ["Testing & Quality Assurance", "/testing-quality-assurance"],
                ["Partner With Us", "/contact?subject=Service%20Partnership"],
              ].map(([label, href]) => (
                <Link key={label} href={href} className="text-[10px] font-semibold text-white/45 hover:text-accent">
                  {label} <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
