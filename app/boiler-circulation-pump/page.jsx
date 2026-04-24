import SeoPageLayout from "@/src/components/SeoPageLayout";

export const metadata = {
  title: "Boiler Circulation Pump (BCP) Specialists — DEI VOX India",
  description:
    "DEI VOX India is India's leading Boiler Circulation Pump (BCP) specialist. Expert overhauling, repair, motor rewinding, in-situ machining and spare parts for BCPs in thermal power plants. ISO 9001:2015 certified.",
  keywords: [
    "Boiler Circulation Pump",
    "BCP pump India",
    "boiler circulation pump repair",
    "boiler circulation pump overhauling",
    "BCP specialist India",
    "DEI VOX boiler pump",
  ],
  alternates: { canonical: "/boiler-circulation-pump" },
  openGraph: {
    title: "Boiler Circulation Pump (BCP) Specialists — DEI VOX India",
    description:
      "India's most trusted Boiler Circulation Pump specialists. Overhauling, repair, in-situ machining & spare parts. ISO certified. 24/7 support.",
    url: "https://deivoxbcp.com/boiler-circulation-pump",
    images: [
      {
        url: "https://deivoxbcp.com/images/bcp_overhauling.png",
        width: 1200,
        height: 630,
        alt: "Boiler Circulation Pump (BCP) Specialists — DEI VOX India",
      },
    ],
  },
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Boiler Circulation Pump" },
];

const relatedLinks = [
  { label: "Boiler Water Circulation Pump Repair", href: "/boiler-water-circulation-pump" },
  { label: "BCP Pump Overhauling", href: "/bcp-pump" },
  { label: "Submersible Pump Repair", href: "/submersible-pump-repair" },
  { label: "All Services", href: "/services" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Boiler Circulation Pump Overhauling & Repair",
      provider: {
        "@type": "Organization",
        name: "DEI VOX India Pvt. Ltd.",
        url: "https://deivoxbcp.com",
      },
      serviceType: "Boiler Circulation Pump Maintenance",
      areaServed: "India",
      description:
        "Complete Boiler Circulation Pump (BCP) overhauling, repair, motor rewinding, in-situ casing machining, spare parts supply and reverse engineering. ISO 9001:2015 certified.",
      url: "https://deivoxbcp.com/boiler-circulation-pump",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a Boiler Circulation Pump (BCP)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Boiler Circulation Pump (BCP) is a specialised centrifugal pump used to circulate water through the boiler drum and evaporator tubes of a high-pressure steam boiler. It maintains controlled water flow rates to ensure uniform heat transfer, prevent tube overheating, and protect the boiler structure from thermal stress.",
          },
        },
        {
          "@type": "Question",
          name: "How often should a Boiler Circulation Pump be overhauled?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical overhaul intervals for BCPs in power plants range from 12,000 to 24,000 operating hours depending on water chemistry, operating pressures, manufacturer recommendations, and inspection findings. DEI VOX recommends a condition-based maintenance approach with regular vibration monitoring and seal inspections.",
          },
        },
        {
          "@type": "Question",
          name: "Can DEI VOX repair BCPs from all major manufacturers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. DEI VOX India has extensive experience overhauling BCPs from all major OEM manufacturers including KSB, Sulzer, Weir, BHEL, and imported units. Our reverse engineering capability also enables us to produce hard-to-source spare parts for legacy pump models.",
          },
        },
      ],
    },
  ],
};

export default function BoilerCirculationPumpPage() {
  return (
    <>
      <script
        id="bcp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoPageLayout
        breadcrumb={breadcrumb}
        relatedLinks={relatedLinks}
        heroImage="/images/bcp_overhauling.png"
      >
        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-primary uppercase mb-4 leading-tight">
          Boiler Circulation Pump (BCP): Engineering, Maintenance &amp; Repair in India
        </h1>
        <div className="w-12 h-1 bg-accent mb-8 rounded-full" />

        {/* Intro */}
        <p className="text-foreground/80 text-base font-medium leading-relaxed mb-6">
          DEI VOX India Pvt. Ltd. is one of India's foremost specialists in{" "}
          <strong>Boiler Circulation Pump (BCP)</strong> maintenance, overhauling, and repair. With a
          dedicated engineering team and ISO-certified processes, we deliver solutions for thermal power
          plants, co-generation facilities, process industries, and captive power installations across
          the country.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          What is a Boiler Circulation Pump?
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          A <strong>Boiler Circulation Pump</strong> is a high-pressure centrifugal pump installed
          within the boiler circuit of a steam power plant or industrial boiler system. Its primary
          function is to maintain forced circulation of water through the evaporator tubes and boiler
          drum, ensuring consistent heat absorption and preventing local overheating.
        </p>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          BCPs typically operate under extreme conditions: system pressures ranging from 100 to 200+ bar,
          water temperatures approaching saturation point, and continuous duty cycles with minimal
          planned downtime. These demanding operating parameters place extraordinary mechanical and
          thermal loads on pump internals, seals, and motor windings.
        </p>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Most modern BCPs are of the <em>canned motor</em> or <em>wet motor</em> design, where the
          motor rotor operates submerged in process fluid, eliminating mechanical shaft seals and the
          associated leak risk at high pressures. This design makes them highly reliable when properly
          maintained but technically complex to repair.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          How Does a BCP Work?
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          The BCP draws water from the boiler drum outlet at near-saturation temperature and forces it
          at elevated velocity through the evaporator circuit. Heat from the furnace is absorbed
          uniformly across all evaporator tubes, converting part of the water into steam-water mixture
          that rises back to the drum for separation.
        </p>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          The hydraulic design of a BCP — impeller diameter, passage geometry, specific speed — is
          precisely matched to the boiler's rated heat absorption and required circulation ratio.
          Deviation from design flow rates causes thermal imbalance, tube hot spots, and potential
          boiler damage. This is why correct impeller geometry must be restored to exact tolerances
          during any overhauling operation.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          Applications of Boiler Circulation Pumps
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-6">
          <li>Thermal and supercritical steam power stations</li>
          <li>Combined cycle and co-generation power plants</li>
          <li>Captive power plants in steel, cement, and chemical industries</li>
          <li>Process steam generators in petrochemical and refinery applications</li>
          <li>Waste heat recovery boilers (WHRBs) and heat-recovery steam generators (HRSGs)</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          DEI VOX India: BCP Specialist Capabilities
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          DEI VOX India has developed a comprehensive suite of services around the Boiler Circulation
          Pump lifecycle. Our capability is built on direct field experience across multiple plant
          types and pump configurations, combined with a precision engineering workshop for component
          restoration.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-6 mb-2">
          BCP Overhauling
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Complete strip-down, component inspection, dimensional measurement, and restoration to
          original tolerances. Includes impeller reconditioning, bearing replacement, can liner
          inspection, and full-load performance testing before return to service.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-6 mb-2">
          In-Situ Casing Machining
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          When BCP casings develop leaks at flange faces or body joints, conventional repair requires
          plant shutdown and casing removal — a time-consuming and costly procedure. DEI VOX performs
          precision <strong>in-situ machining</strong> of pump casings without removing them from the
          boiler piping, minimising plant outage time and risk.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-6 mb-2">
          Motor Rewinding
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Rewind of canned motor stators using high-temperature insulation systems rated for
          continuous immersion in hot process water. All rewinds are tested to IEC standards with
          insulation resistance, hi-pot, and surge comparison testing.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-6 mb-2">
          Spare Parts &amp; Reverse Engineering
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          OEM spare parts for older BCP models are frequently discontinued. DEI VOX uses reverse
          engineering to recreate precise dimensional replicas of impellers, wear rings, bearing
          housings, and can liners from appropriate base materials — ensuring continued plant
          operation without dependence on long lead-time OEM procurement.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          BCP Maintenance Best Practices
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          A well-maintained Boiler Circulation Pump can operate reliably for 18,000–25,000 hours
          between major overhauls. DEI VOX recommends the following maintenance framework:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-4">
          <li>
            <strong>Continuous condition monitoring</strong>: vibration, temperature, and differential
            pressure trending to detect bearing degradation or flow disturbances early.
          </li>
          <li>
            <strong>Water chemistry control</strong>: maintain oxygen levels, pH, and conductivity
            within boiler water quality standards to minimise corrosion of motor internals.
          </li>
          <li>
            <strong>Planned overhauls</strong> at OEM-recommended intervals or based on condition
            trigger points.
          </li>
          <li>
            <strong>Replacement of wear components</strong> (wear rings, thrust bearings, can liner
            integrity checks) at each planned outage.
          </li>
          <li>
            <strong>Emergency response</strong>: contract DEI VOX for 24/7 on-site support when
            pump trips or abnormal performance is detected.
          </li>
        </ul>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Our certified engineers can be mobilised to any plant location in India within 24–48 hours
          for emergency assessment and repair work.
        </p>

        {/* Summary */}
        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          Why Choose DEI VOX for Boiler Circulation Pump Services?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-6">
          <li>ISO 9001:2015, 14001:2015 &amp; 45001:2018 certified processes</li>
          <li>Over a decade of dedicated BCP field experience</li>
          <li>In-house precision engineering workshop for component restoration</li>
          <li>Multi-OEM capability: KSB, Sulzer, Weir, BHEL, and others</li>
          <li>Pan-India service reach with 24/7 emergency response</li>
          <li>Reverse engineering capability for obsolete and hard-to-source parts</li>
        </ul>
      </SeoPageLayout>
    </>
  );
}
