import SeoPageLayout from "@/src/components/SeoPageLayout";

export const metadata = {
  title: "BCP Pump — Boiler Circulation Pump Services | DEI VOX India",
  description:
    "DEI VOX India is a dedicated BCP (Boiler Circulation Pump) specialist. Overhauling, repair, motor rewinding, reverse engineering and spare parts for BCPs across India. ISO certified.",
  keywords: [
    "BCP",
    "BCP pump",
    "BCP pump India",
    "BCP overhauling",
    "BCP repair",
    "BCP maintenance",
    "boiler circulation pump BCP",
    "DEI VOX BCP",
  ],
  alternates: { canonical: "/bcp-pump" },
  openGraph: {
    title: "BCP Pump — Boiler Circulation Pump Services | DEI VOX India",
    description:
      "India's leading BCP pump specialists. Expert overhauling, repair, rewinding, reverse engineering and 24/7 emergency service. ISO 9001:2015 certified.",
    url: "https://www.deivox.co.in/bcp-pump",
  },
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "BCP Pump" },
];

const relatedLinks = [
  { label: "Boiler Circulation Pump Overhauling", href: "/boiler-circulation-pump" },
  { label: "Boiler Water Circulation Pump Repair", href: "/boiler-water-circulation-pump" },
  { label: "Submersible Pump Repair", href: "/submersible-pump-repair" },
  { label: "All Services", href: "/services" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "BCP Pump Overhauling, Repair & Maintenance",
      provider: {
        "@type": "Organization",
        name: "DEI VOX India Pvt. Ltd.",
        url: "https://www.deivox.co.in",
      },
      serviceType: "BCP Boiler Circulation Pump Service",
      areaServed: "India",
      description:
        "Comprehensive BCP (Boiler Circulation Pump) overhauling, repair, motor rewinding, in-situ machining, reverse engineering and spare parts. ISO 9001:2015 certified. Pan-India service coverage.",
      url: "https://www.deivox.co.in/bcp-pump",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does BCP stand for in industrial engineering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BCP stands for Boiler Circulation Pump. It is the high-pressure pump used in forced-circulation boiler systems to circulate water through evaporator tube circuits. BCPs are critical to boiler safety and efficiency in thermal power plants and industrial steam generation facilities.",
          },
        },
        {
          "@type": "Question",
          name: "What is involved in a BCP pump overhaul?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A complete BCP overhaul involves: pump and motor strip-down; dimensional inspection of all components; impeller and wear ring restoration to OEM tolerances; bearing replacement; can liner inspection and replacement if required; motor stator rewinding and electrical testing; reassembly, alignment, and hydraulic performance testing.",
          },
        },
        {
          "@type": "Question",
          name: "Can DEI VOX supply BCP spare parts without doing a full overhaul?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. DEI VOX India maintains a stock of common BCP spare parts and can also manufacture custom components through reverse engineering for obsolete or hard-to-source pump models. We supply impellers, wear rings, bearings, can liners, and mechanical seal components as stand-alone supply.",
          },
        },
      ],
    },
  ],
};

export default function BcpPumpPage() {
  return (
    <>
      <script
        id="bcp-pump-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoPageLayout
        breadcrumb={breadcrumb}
        relatedLinks={relatedLinks}
        heroImage="/images/pump_rebuild.png"
      >
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-primary uppercase mb-4 leading-tight">
          BCP Pump: Boiler Circulation Pump Services by DEI VOX India
        </h1>
        <div className="w-12 h-1 bg-accent mb-8 rounded-full" />

        <p className="text-foreground/80 text-base font-medium leading-relaxed mb-6">
          The acronym <strong>BCP</strong> — Boiler Circulation Pump — represents one of the most
          demanding engineering challenges in the power generation industry. DEI VOX India Pvt. Ltd.
          has built its entire engineering identity around BCP expertise: from precision overhauling
          to emergency field repairs, reverse engineering of obsolete spare parts, and motor rewinding
          for canned motor units.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          What is a BCP Pump?
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          A <strong>BCP pump</strong> (Boiler Circulation Pump) is a specialised centrifugal pump
          installed within the primary water circuit of a forced-circulation boiler. Its role is to
          deliver precisely controlled water flow through the evaporator tube array, maintaining
          uniform heat absorption and preventing localised tube temperature spikes that could cause
          metallurgical failure.
        </p>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Unlike standard industrial centrifugal pumps, BCPs operate with near-zero NPSH margins,
          at extreme pressures (typically 100 to 220 bar), and under near-saturation temperature
          conditions. The engineering tolerances, materials, and test standards applied to BCPs are
          therefore significantly more stringent than those for conventional process pumps.
        </p>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          In India, BCPs are widely deployed in coal-based thermal power stations, gas-based combined
          cycle units, co-generation plants, and captive power facilities in the steel, cement, and
          chemical sectors. Every large boiler plant in India — totalling several thousand installed
          units — requires regular BCP maintenance by qualified specialists.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          How a BCP Pump Works
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          The BCP draws water from the boiler drum via downcomer pipes and circulates it through
          distribution headers into the evaporator tube panels. Inside each tube, heat from the
          furnace converts part of the water to vapour, creating a steam-water mixture that rises
          to the drum. The drum separates steam (delivered to the turbine) from residual water
          (recirculated by the BCP).
        </p>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          The BCP's hydraulic duty is precisely defined by the boiler designer. Flow rate, pump
          head, and impeller diameter are matched to the boiler's heat input and tube circuit
          geometry. Any significant deviation — caused by impeller wear, cavitation, or system
          resistance changes — affects heat transfer uniformity and boiler safety.
        </p>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Most modern BCP designs use a canned motor configuration — a hermetically sealed
          motor where the rotor runs immersed in process fluid — to eliminate the mechanical
          shaft seals that would fail at such extreme pressures. This design is highly reliable
          but demands specialised overhaul expertise.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          BCP Applications in Indian Power &amp; Industry
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-6">
          <li>NTPC and state utility sub-critical thermal power stations (200–800 MW units)</li>
          <li>Supercritical boiler units in newer NTPC and private sector plants</li>
          <li>CCGT plants using heat-recovery steam generators</li>
          <li>Captive power: Steel plants, cement kilns, chemical and petrochemical facilities</li>
          <li>Co-generation in paper, textile, and sugar industries</li>
          <li>Process steam generation in refineries and fertiliser plants</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          DEI VOX BCP Services
        </h2>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-6 mb-2">
          BCP Overhauling
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Our standard overhaul procedure covers complete pump and motor strip-down, dimensional
          inspection of all rotating and static components, impeller and wear ring reconditioning
          to OEM dimension limits, bearing replacement, can liner inspection and fabrication,
          stator rewinding where required, and hydraulic performance verification on a calibrated
          test rig before despatch.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-6 mb-2">
          In-Situ BCP Casing Repair
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          BCP casings that develop leaks at joint faces can frequently be repaired with the casing
          remaining connected to boiler piping. DEI VOX's in-situ machining team uses portable
          precision equipment to resurface flange faces and restore sealing surfaces to specification.
          This dramatically reduces outage time compared to full casing removal and return to workshop.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-6 mb-2">
          Motor Rewinding for Canned BCPs
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Rewinding of canned motor BCP stators requires high-temperature insulation systems rated
          for continuous immersion in hot pressurised water. DEI VOX uses only certified insulation
          materials and verifies each rewind with IEC-standard electrical testing, including
          insulation resistance, dielectric strength (hi-pot), and partial discharge measurement.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-6 mb-2">
          Reverse Engineering &amp; BCP Spare Parts
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          A significant portion of India's installed BCP fleet consists of older imported units
          for which OEM support has been discontinued. DEI VOX's reverse engineering capability
          addresses this challenge: we measure, model, and manufacture replacement impellers,
          wear rings, can liners, bearing housings, and other components from appropriate base
          materials to defined dimensional and material specifications.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          BCP Maintenance &amp; Reliability Engineering
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Improving BCP availability requires a structured reliability programme, not reactive
          maintenance. DEI VOX works with plant maintenance teams to develop:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-4">
          <li>Condition monitoring protocols (vibration, temperature, motor current signature)</li>
          <li>Criticality-ranked overhaul schedules aligned with planned plant outages</li>
          <li>Minimum spares holding lists to support rapid turnaround during emergencies</li>
          <li>Failure mode and effect analysis (FMEA) to prioritise maintenance interventions</li>
          <li>Post-overhaul performance benchmarking to track hydraulic efficiency trends</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          Why Clients Choose DEI VOX for BCP Work
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-4">
          <li>India's dedicated BCP specialist — this is our primary engineering focus</li>
          <li>ISO 9001:2015, 14001:2015 &amp; 45001:2018 certified operations</li>
          <li>In-house machining, winding shop, and performance test facilities</li>
          <li>24/7 emergency response with mobilisation to any Indian power plant</li>
          <li>Multi-OEM BCP repair experience across KSB, Sulzer, Weir, BHEL, and others</li>
          <li>Reverse engineering capability for discontinued and obsolete BCP models</li>
        </ul>
      </SeoPageLayout>
    </>
  );
}
