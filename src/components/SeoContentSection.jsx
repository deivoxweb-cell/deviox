import React from "react";
import Link from "next/link";
import { ArrowUpRight, Settings } from "lucide-react";

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
      className="bg-[#F5F5F5] py-32 px-6 lg:px-16 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section label (Eyebrow) */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center p-2">
            <Settings className="text-accent" size={18} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Company Overview</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Main content block */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.05em] text-black uppercase mb-10 leading-[0.9]">
              Pioneers in Boiler<br />
              <span className="text-black/20">Circulation Pump</span><br />
              Engineering
            </h2>
            
            <div className="space-y-6 text-black/60 text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="text-black font-black uppercase tracking-tight">DEI VOX India Pvt. Ltd.</strong> is one of India's foremost
                engineering companies specialising exclusively in{" "}
                <strong className="text-black">Boiler Circulation Pump (BCP)</strong> and{" "}
                <strong className="text-black">Boiler Water Circulation Pump (BWCP)</strong> services.
              </p>
              <p>
                Operating at extreme temperatures and differential pressures, these pumps circulate water through boiler circuits to maintain
                uniform heat transfer and prevent tube damage. Reliable maintenance and timely overhauling are essential for plant availability.
              </p>
              <p>
                Our in-situ machining capability allows casing repairs without dismantling boiler piping — a technically demanding procedure
                that very few companies in India can execute safely and to specification.
              </p>
              <p>
                We also specialise in the repair and upgrading of submersible pumping motor units,
                reverse engineering of obsolete spare parts, and motor rewinding, all under ISO certified processes.
              </p>
            </div>
          </div>

          {/* Service keyword list sidebar */}
          <aside className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-black text-white p-10 rounded-[3.5rem] relative overflow-hidden group shadow-2xl shadow-black/20 transition-all hover:bg-zinc-950">
              {/* Inner Glow */}
              <div className="absolute bottom-[-20%] right-[-10%] w-32 h-32 bg-accent rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              
              <div className="relative z-10">
                <p className="text-[11px] font-black text-accent uppercase tracking-[0.4em] mb-10 border-b border-white/5 pb-4">
                  Core Services
                </p>
                <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-accent">
                  {[
                    { label: "BCP Overhauling", href: "/boiler-circulation-pump" },
                    { label: "BWCP Repair", href: "/boiler-water-circulation-pump" },
                    { label: "Pump Maintenance", href: "/bcp-pump" },
                    { label: "Submersible Repair", href: "/submersible-pump-repair" },
                    { label: "In-Situ Machining", href: "/services#insitu-machining" },
                    { label: "Motor Rewinding", href: "/services#motor-rewinding" },
                    { label: "Reverse Engineering", href: "/services#reverse-engineering" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 hover:text-white transition-all group/item"
                      >
                        <span className="text-white/20 group-hover/item:text-accent transition-colors">▸</span>
                        <span className="group-hover/item:translate-x-1 transition-transform">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-white/5">
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] mb-4">
                    Industrial Certifications
                  </p>
                  <ul className="flex flex-wrap gap-4 text-[9px] font-black text-accent/60 uppercase tracking-widest">
                    <li>ISO 9001:2015</li>
                    <li className="text-white/10">•</li>
                    <li>ISO 14001:2015</li>
                    <li className="text-white/10">•</li>
                    <li>ISO 45001:2018</li>
                  </ul>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="group flex items-center justify-between bg-black text-white px-8 py-5 rounded-full hover:bg-zinc-800 transition-all duration-300 shadow-xl shadow-black/10"
            >
              <span className="text-[11px] font-black uppercase tracking-widest">Request Quote</span>
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default SeoContentSection;
