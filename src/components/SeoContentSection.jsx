import React from "react";
import Link from "next/link";

/**
 * SeoContentSection — Homepage SEO content injection.
 * Placed below existing homepage sections.
 * Does NOT change any existing layout or component.
 * Provides crawlable, keyword-rich technical content.
 */
const SeoContentSection = () => {
  return (
    <section
      id="about-deivox-bcp"
      aria-label="About DEI VOX India — Boiler Circulation Pump Specialists"
      className="bg-white border-t border-gray-100 py-20 px-4 lg:px-10"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">
          Company Overview
        </p>

        {/* Primary H2 (H1 is in page metadata / Hero h1) */}
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary uppercase mb-6 leading-tight">
          DEI VOX India — Pioneers in Boiler Circulation Pump (BCP) Engineering
        </h2>
        <div className="w-16 h-1 bg-accent mb-10 rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main content block */}
          <div className="lg:col-span-2 space-y-5 text-foreground/80 text-sm md:text-base leading-relaxed font-medium">
            <p>
              <strong className="text-primary">DEI VOX India Pvt. Ltd.</strong> is one of India's foremost
              engineering companies specialising exclusively in{" "}
              <strong>Boiler Circulation Pump (BCP)</strong> and{" "}
              <strong>Boiler Water Circulation Pump (BWCP)</strong> services. With operations spanning
              thermal power plants, co-generation facilities, and process industries across the country,
              DEI VOX brings OEM-level technical capability to every service engagement.
            </p>
            <p>
              BCPs are critical assets in high-pressure boiler systems. Operating at extreme temperatures
              and differential pressures, these pumps circulate water through boiler circuits to maintain
              uniform heat transfer and prevent tube damage. Any failure in a boiler circulation pump
              results in immediate plant shutdown, making reliable maintenance and timely overhauling
              essential for plant availability.
            </p>
            <p>
              DEI VOX engineers are credentialed specialists trained to work on sealed, canned-motor
              pump configurations typical of high-pressure boilers. Our in-situ machining capability
              allows casing repairs without dismantling boiler piping — a technically demanding procedure
              that very few companies in India can execute safely and to specification.
            </p>
            <p>
              We also specialise in the <strong>repair and upgrading of submersible pumping motor units</strong>,
              reverse engineering of obsolete spare parts, motor rewinding, hydraulic balancing, and
              complete BCP overhauling under ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018
              certified processes.
            </p>
            <p>
              Headquartered in Gurugram, Haryana, with a service centre in Bengaluru, Karnataka, DEI VOX
              maintains pan-India service coverage and 24/7 emergency response capability for power
              sector clients.
            </p>
          </div>

          {/* Service keyword list */}
          <aside className="lg:col-span-1">
            <div className="bg-[#f8f9fb] border border-gray-100 rounded-2xl p-6">
              <p className="text-[11px] font-black text-accent uppercase tracking-[0.25em] mb-5">
                Core Services
              </p>
              <ul className="space-y-3 text-sm font-bold text-primary/80">
                {[
                  { label: "Boiler Circulation Pump Overhauling", href: "/boiler-circulation-pump" },
                  { label: "Boiler Water Circulation Pump Repair", href: "/boiler-water-circulation-pump" },
                  { label: "BCP (BCP Pump) Maintenance", href: "/bcp-pump" },
                  { label: "Submersible Pump Repair & Upgrading", href: "/submersible-pump-repair" },
                  { label: "In-Situ Machining", href: "/services#insitu-machining" },
                  { label: "Motor Rewinding", href: "/services#motor-rewinding" },
                  { label: "Reverse Engineering & Spare Parts", href: "/services#reverse-engineering" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">▸</span>
                    <Link
                      href={item.href}
                      className="hover:text-accent transition-colors leading-snug"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-3">
                  Certifications
                </p>
                <ul className="space-y-1 text-[11px] font-bold text-primary/60 uppercase tracking-wide">
                  <li>ISO 9001:2015</li>
                  <li>ISO 14001:2015</li>
                  <li>ISO 45001:2018</li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <Link
                href="/contact"
                className="block w-full py-4 bg-accent text-zinc-950 text-center font-black text-[11px] uppercase tracking-widest rounded-xl hover:bg-orange-500 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]"
              >
                Request a Service Quote
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default SeoContentSection;
