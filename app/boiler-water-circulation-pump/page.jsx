import SeoPageLayout from "@/src/components/SeoPageLayout";

export const metadata = {
  title: "Boiler Water Circulation Pump Repair & Maintenance — DEI VOX India",
  description:
    "Specialised repair, overhauling, and maintenance of Boiler Water Circulation Pumps (BWCP) by DEI VOX India. Serving thermal power plants and industrial boilers across India. ISO 9001:2015 certified.",
  keywords: [
    "Boiler Water Circulation Pump",
    "BWCP repair India",
    "boiler water pump overhauling",
    "boiler feed pump specialists",
    "boiler pump service India",
    "DEI VOX BWCP",
  ],
  alternates: { canonical: "/boiler-water-circulation-pump" },
  openGraph: {
    title: "Boiler Water Circulation Pump Repair & Maintenance — DEI VOX India",
    description:
      "India's trusted Boiler Water Circulation Pump specialists. Expert repair, overhauling, rewinding and spare parts. ISO certified. 24/7 support across India.",
    url: "https://deivoxbcp.com/boiler-water-circulation-pump",
  },
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Boiler Water Circulation Pump" },
];

const relatedLinks = [
  { label: "Boiler Circulation Pump (BCP) Overhauling", href: "/boiler-circulation-pump" },
  { label: "BCP Pump Services", href: "/bcp-pump" },
  { label: "Submersible Pump Repair", href: "/submersible-pump-repair" },
  { label: "All Services", href: "/services" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Boiler Water Circulation Pump Repair & Overhauling",
      provider: {
        "@type": "Organization",
        name: "DEI VOX India Pvt. Ltd.",
        url: "https://deivoxbcp.com",
      },
      serviceType: "Boiler Water Circulation Pump Maintenance",
      areaServed: "India",
      description:
        "Complete Boiler Water Circulation Pump (BWCP) repair, overhauling, motor rewinding, hydraulic balancing and spare parts supply. ISO 9001:2015 certified.",
      url: "https://deivoxbcp.com/boiler-water-circulation-pump",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between a Boiler Circulation Pump and a Boiler Water Circulation Pump?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In common industrial usage, 'Boiler Circulation Pump' (BCP) and 'Boiler Water Circulation Pump' (BWCP) refer to the same type of equipment — a high-pressure pump that circulates water through forced-circulation boiler circuits. Some manufacturers and plant operators use BCP while others use BWCP; the terms are interchangeable in the power industry.",
          },
        },
        {
          "@type": "Question",
          name: "What are the common failure modes of a Boiler Water Circulation Pump?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common failure modes include bearing wear, impeller erosion due to high-velocity flow, motor winding insulation degradation from temperature cycling, can liner perforation, and shaft fretting. Early detection through vibration analysis and motor current monitoring can prevent catastrophic failures.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can DEI VOX respond to a BWCP emergency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DEI VOX India maintains 24/7 emergency response capability. Our engineers can be mobilised and on-site within 24 to 48 hours for most locations in India. We maintain a stock of critical spare components for common BCP/BWCP configurations to minimise plant downtime.",
          },
        },
      ],
    },
  ],
};

export default function BoilerWaterCirculationPumpPage() {
  return (
    <>
      <script
        id="bwcp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoPageLayout
        breadcrumb={breadcrumb}
        relatedLinks={relatedLinks}
        heroImage="/images/insitu_machining.png"
      >
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-primary uppercase mb-4 leading-tight">
          Boiler Water Circulation Pump: Repair, Overhauling &amp; Maintenance
        </h1>
        <div className="w-12 h-1 bg-accent mb-8 rounded-full" />

        <p className="text-foreground/80 text-base font-medium leading-relaxed mb-6">
          DEI VOX India Pvt. Ltd. provides specialist repair, overhauling, and maintenance services for{" "}
          <strong>Boiler Water Circulation Pumps (BWCP)</strong> across India's power generation
          and industrial sectors. Our engineering team combines deep field experience with
          ISO-certified workshop processes to restore pump performance to OEM specification.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          Understanding the Boiler Water Circulation Pump
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          A <strong>Boiler Water Circulation Pump</strong> (commonly abbreviated as BWCP or BCP) is a
          critical component in forced-circulation boiler systems. Unlike natural-circulation boilers,
          forced-circulation designs rely entirely on these pumps to maintain the required water flow
          rate through evaporator tube circuits — making pump reliability a direct determinant of
          boiler availability.
        </p>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          BWCPs must handle one of the most demanding fluid services in industrial engineering:
          near-saturation water at pressures of 100 to 220 bar, temperatures approaching 350°C,
          and flow velocities designed to prevent nucleate boiling within individual evaporator tubes.
          The mechanical design, material selection, and manufacturing tolerances of these pumps
          must all satisfy codes such as EN 733, ISO 5199, and applicable ASME requirements.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          How the Boiler Water Circulation Pump Works
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          The BWCP draws boiler drum water from the downcomer piping and delivers it to the inlet
          headers of the evaporator tube bundles. The pump head must overcome the friction and
          fittings losses in the circuit and maintain the required minimum flow margin above the onset
          of departure from nucleate boiling (DNB) in any individual tube.
        </p>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          In canned motor pump designs — the most common configuration for high-pressure BWCPs —
          there is no mechanical shaft seal between the motor space and process fluid. The motor
          rotor rotates in the process water, which also lubricates the sleeve bearings. This
          eliminates seal leakage risk at high pressure but requires specialised expertise to
          repair, as bearing clearances, can liner integrity, and motor insulation all become
          interdependent parameters.
        </p>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          The pump performance curve — head vs. flow — must be matched precisely to the boiler
          system resistance curve at design, part-load, and transient conditions. DEI VOX engineers
          verify hydraulic performance after every overhaul using calibrated test instrumentation.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          Applications
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-6">
          <li>Sub-critical and supercritical thermal power stations (coal, gas, oil)</li>
          <li>Co-generation plants supplying process steam and power</li>
          <li>Captive power plants in manufacturing industries</li>
          <li>Waste heat recovery steam generators</li>
          <li>Solar thermal power plants with boiler circuits</li>
          <li>Marine boiler systems</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          Common Failure Modes &amp; Consequences
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-3">
          Failure of a Boiler Water Circulation Pump results in forced plant shutdown and, in severe
          cases, boiler tube overheating and rupture. Understanding failure modes enables predictive
          maintenance strategies:
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-5 mb-2">
          Bearing Wear
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Process-lubricated sleeve bearings are subject to accelerated wear when water quality
          deviates from specification, or when particulates enter the bearing clearance. Vibration
          monitoring detects early-stage bearing degradation before shaft contact occurs.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-5 mb-2">
          Impeller Erosion
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          High-velocity water flow and flash vapour at impeller vane tips progressively erodes
          impeller material, reducing hydraulic efficiency and pump head. DEI VOX restores impeller
          geometry using hard-facing weld deposition and precision grinding to re-establish
          original vane profiles.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-5 mb-2">
          Motor Winding Insulation Degradation
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Thermal cycling and oxygen ingress degrade winding insulation in canned motor BWCPs.
          DEI VOX performs comprehensive stator rewinding using Class H or F insulation systems rated
          for continuous immersion, restoring the motor to its original electrical performance.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-5 mb-2">
          Can Liner Perforation
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          The thin stainless steel can separating the motor from the pump fluid is vulnerable to
          corrosion and mechanical damage. Can liner replacement requires precise manufacturing to
          the original dimensions and surface finish. DEI VOX manufactures replacement can liners
          in-house using certified materials.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          DEI VOX's Boiler Water Circulation Pump Services
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-6">
          <li><strong>Complete BWCP Overhauling</strong> — strip-down, inspection, restoration, and performance testing</li>
          <li><strong>Emergency On-Site Repair</strong> — 24/7 response within 24–48 hours across India</li>
          <li><strong>In-Situ Casing Machining</strong> — casing flange and bore repair without piping disconnection</li>
          <li><strong>Stator Rewinding</strong> — canned motor rewind with certified insulation materials</li>
          <li><strong>Impeller Restoration</strong> — hard-facing, grinding, and hydraulic profiling</li>
          <li><strong>Spare Parts Supply</strong> — OEM and reverse-engineered components</li>
          <li><strong>Hydraulic Performance Testing</strong> — post-overhaul pump curve verification</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          Maintenance Schedule Recommendations
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          DEI VOX recommends the following maintenance approach for Boiler Water Circulation Pumps:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-6">
          <li>Continuous online vibration and temperature monitoring via plant DCS</li>
          <li>Minor inspection (bearing clearance check, visual inspection) every 4,000–6,000 hours</li>
          <li>Major overhaul every 12,000–20,000 hours or on condition</li>
          <li>Water chemistry compliance measurement quarterly</li>
          <li>Electrical insulation resistance testing at each plant outage</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          Why DEI VOX India
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-4">
          <li>ISO 9001:2015, 14001:2015 &amp; 45001:2018 certified quality management</li>
          <li>Multi-OEM repair capability across all major BWCP manufacturers</li>
          <li>In-house machining, winding, and testing facilities</li>
          <li>Experienced engineers with safety-critical site credentials</li>
          <li>Emergency response capability covering all major power clusters in India</li>
        </ul>
      </SeoPageLayout>
    </>
  );
}
