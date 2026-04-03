import SeoPageLayout from "@/src/components/SeoPageLayout";

export const metadata = {
  title: "Submersible Pump Repair, Upgrading & Motor Rewinding — DEI VOX India",
  description:
    "DEI VOX India provides specialist repair, upgrading, motor rewinding, and maintenance services for industrial submersible pumping motor units. ISO 9001:2015 certified. Pan-India service.",
  keywords: [
    "submersible pump repair India",
    "submersible pumping motor unit",
    "submersible motor rewinding",
    "submersible pump overhauling",
    "industrial submersible pump service",
    "DEI VOX submersible pump",
  ],
  alternates: { canonical: "/submersible-pump-repair" },
  openGraph: {
    title: "Submersible Pump Repair, Upgrading & Motor Rewinding — DEI VOX India",
    description:
      "Specialist repair, upgrading and motor rewinding of industrial submersible pumping motor units by DEI VOX India. ISO certified. 24/7 emergency response.",
    url: "https://www.deivox.co.in/submersible-pump-repair",
  },
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Submersible Pump Repair" },
];

const relatedLinks = [
  { label: "Boiler Circulation Pump Overhauling", href: "/boiler-circulation-pump" },
  { label: "Boiler Water Circulation Pump Repair", href: "/boiler-water-circulation-pump" },
  { label: "BCP Pump Services", href: "/bcp-pump" },
  { label: "All Services", href: "/services" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Submersible Pump Repair, Upgrading & Motor Rewinding",
      provider: {
        "@type": "Organization",
        name: "DEI VOX India Pvt. Ltd.",
        url: "https://www.deivox.co.in",
      },
      serviceType: "Submersible Pump Motor Service",
      areaServed: "India",
      description:
        "Complete repair, upgrading, and motor rewinding services for industrial submersible pumping motor units. ISO 9001:2015 certified. Pan-India service coverage.",
      url: "https://www.deivox.co.in/submersible-pump-repair",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of submersible pumps does DEI VOX repair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DEI VOX India repairs and overhauls industrial submersible pumping motor units used in dewatering, process water supply, cooling water intake, condensate extraction, and boiler/turbine auxiliary systems. We work on units from all major manufacturers and can reverse-engineer obsolete components.",
          },
        },
        {
          "@type": "Question",
          name: "Can submersible pump motors be rewound economically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Motor rewinding is typically more economical than replacement for large submersible motors, especially when the pump casing and hydraulic components are in serviceable condition. DEI VOX evaluates the cost-benefit of rewinding versus replacement for each unit and provides transparent recommendations based on motor condition assessment.",
          },
        },
        {
          "@type": "Question",
          name: "What does upgrading a submersible pump involve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Submersible pump upgrading typically involves hydraulic re-rating (impeller diameter trimming or replacement to match revised duty conditions), motor power upgrade using modern winding designs, conversion to improved bearing and seal configurations, and integration of monitoring systems such as PT100 winding temperature sensors.",
          },
        },
      ],
    },
  ],
};

export default function SubmersiblePumpRepairPage() {
  return (
    <>
      <script
        id="submersible-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoPageLayout
        breadcrumb={breadcrumb}
        relatedLinks={relatedLinks}
        heroImage="/images/motor_rewinding.png"
      >
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-primary uppercase mb-4 leading-tight">
          Submersible Pump Repair, Upgrading &amp; Motor Rewinding — DEI VOX India
        </h1>
        <div className="w-12 h-1 bg-accent mb-8 rounded-full" />

        <p className="text-foreground/80 text-base font-medium leading-relaxed mb-6">
          DEI VOX India Pvt. Ltd. provides comprehensive repair, upgrading, and motor rewinding
          services for industrial <strong>submersible pumping motor units</strong> across India.
          Combining BCP-grade engineering discipline with a dedicated submersible pump service
          capability, DEI VOX delivers reliable, ISO-certified solutions for plant operators who
          cannot afford unplanned pump downtime.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          What is a Submersible Pumping Motor Unit?
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          A <strong>submersible pumping motor unit</strong> integrates a close-coupled motor and pump
          into a single waterproof assembly designed to operate fully immersed in the pumped fluid.
          This configuration eliminates the need for priming, reduces installation footprint, and is
          inherently silent — advantages that make submersible units the preferred choice for many
          industrial dewatering, cooling water, process water, and auxiliary applications.
        </p>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Industrial submersible pumps range from small drainage units to high-power deep-well
          turbine pumps handling thousands of cubic metres per hour. In power plant applications,
          submersible units are often used in cooling water intake sumps, boiler make-up water
          systems, and emergency condensate pumping — where reliability is safety-critical.
        </p>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Unlike standard surface pumps, submersible motor units require specialised repair
          expertise because the motor and hydraulic components are intimately integrated, moisture
          sealing is critical, and field disassembly is constrained by the unit's geometry. DEI VOX
          engineers are trained in the complete repair workflow for submersible pump motor units of
          all major manufacturers.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          How Submersible Pumps Work
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          In a typical submersible pumping motor unit, the electric motor is positioned at the
          bottom of the assembly (or at top, depending on design), driving the pump impeller(s)
          through a close-coupled shaft arrangement. The motor is hermetically sealed against
          ingress of the pumped fluid, either by a water-filled design (where internal water
          provides bearing lubrication and cooling) or by an oil-filled design with mechanical
          shaft seals.
        </p>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Centrifugal impellers — single-stage for lower heads, multi-stage for deep borehole or
          high-head applications — convert motor shaft power into fluid pressure and flow. In
          deep-well turbine configurations, the pump bowl assembly contains multiple impeller stages
          stacked on a common shaft, capable of generating heads of several hundred metres.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          Applications of Industrial Submersible Pumps
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-6">
          <li>Power plant cooling water intake sumps and condensate systems</li>
          <li>Industrial process water supply from open sumps and reservoirs</li>
          <li>Mine and tunnel dewatering in construction and mining industries</li>
          <li>Municipal water supply and sewage pumping</li>
          <li>Agricultural deep borehole irrigation</li>
          <li>Offshore platform and marine bilge pumping</li>
          <li>Emergency flood water removal from basements and industrial pits</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          Common Failure Modes in Submersible Pumps
        </h2>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-5 mb-2">
          Mechanical Seal Failure
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Mechanical shaft seals are the most frequent failure point in oil-filled submersible motors.
          Seal face wear, spring fatigue, or secondary seal (O-ring) degradation allows water to
          enter the motor housing, leading to rapid winding insulation failure. DEI VOX replaces
          seals with equivalent or upgraded seal face material pairings (silicon carbide, tungsten
          carbide, carbon) to match the specific fluid and duty conditions.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-5 mb-2">
          Winding Insulation Failure
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Motor winding insulation degrades over time due to thermal cycling, moisture ingress, and
          voltage transients. DEI VOX performs complete stator rewinding using new insulation
          materials rated to the motor's original class (typically F or H), verified by insulation
          resistance, hi-pot, and surge comparison testing.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-5 mb-2">
          Bearing Failure
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Radial and thrust bearings in submersible motors are subject to accelerated wear when
          abrasive particles are present in the pumped fluid, or when the pump operates at low
          flow rates (low-flow cavitation). DEI VOX replaces bearings with OEM-equivalent or
          superior-specification units and addresses root causes such as worn impellers that
          increase hydraulic radial loads.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-5 mb-2">
          Impeller Wear and Cavitation Damage
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          High-velocity flow and sand abrasion erode impeller vane profiles, reducing pump head and
          efficiency. Cavitation — vapour bubble collapse on impeller surfaces — causes pitting damage
          that accelerates wear and generates severe vibration. DEI VOX restores impeller geometry
          using hard-facing and precision grinding, or manufactures replacement impellers where
          damage is beyond economic repair.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          DEI VOX Submersible Pump Services
        </h2>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-5 mb-2">
          Complete Overhaul
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Full strip-down, component inspection, and restoration of pump and motor to original
          or improved specification. Includes impeller, wear ring, bearing, seal, and winding
          assessment with component replacement as required.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-5 mb-2">
          Pump Upgrading
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          When plant conditions change — flow demand increases, head requirements are revised, or
          energy efficiency targets are imposed — DEI VOX engineers assess and execute submersible
          pump upgrades. This may include hydraulic re-rating, impeller replacement with a
          modified design, motor power upgrade, or conversion to improved seal technology.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-5 mb-2">
          Motor Rewinding
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          Rewinding is often the most cost-effective intervention when motor winding insulation
          has failed. DEI VOX completes rewinds using certified magnet wire and insulation systems,
          with final testing to IEC 60034 standards.
        </p>

        <h3 className="text-base font-black text-primary uppercase tracking-wide mt-5 mb-2">
          Spare Parts &amp; Reverse Engineering
        </h3>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          For older submersible pump models where OEM spare parts are unavailable, DEI VOX
          produces precision-dimensioned replacement components through reverse engineering —
          from impellers and wear rings to bearing housings and seal carriers.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          Maintenance Best Practices for Submersible Pumps
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-6">
          <li>Periodic insulation resistance checks without removing the pump from service</li>
          <li>Monitoring motor current draw for gradual increases indicating hydraulic or mechanical issues</li>
          <li>Vibration analysis at pump column flange (for accessible installations)</li>
          <li>Oil sampling (oil-filled motors) to detect water ingress before winding damage occurs</li>
          <li>Scheduled annual or biannual pulling and inspection for critical-duty units</li>
          <li>Plant water quality control to reduce abrasive and scale-forming tendencies</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mt-10 mb-3">
          Why Choose DEI VOX for Submersible Pump Repair
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-4">
          <li>ISO 9001:2015, 14001:2015 &amp; 45001:2018 certified service quality</li>
          <li>In-house motor rewinding, machining, and hydraulic testing facilities</li>
          <li>Multi-OEM repair experience — Grundfos, KSB, Xylem, Kirloskar, BHEL and others</li>
          <li>Reverse engineering for discontinued and hard-to-source components</li>
          <li>24/7 emergency mobilisation across India</li>
          <li>Transparent condition reporting with photographic documentation at each repair stage</li>
        </ul>
      </SeoPageLayout>
    </>
  );
}
