import SeoPageLayout from "@/src/components/SeoPageLayout";

export const metadata = {
  title: "Industrial Pump Maintenance India | DEI VOX",
  description: "Professional industrial pump maintenance services. We offer condition monitoring, repair, and overhauling for heavy-duty industrial pumps.",
  keywords: [
    "Industrial Pump Maintenance",
    "DEI VOX India",
    "BCP",
    "pump repair"
  ],
  alternates: { canonical: "/industrial-pump-maintenance" },
  openGraph: {
    title: "Industrial Pump Maintenance India | DEI VOX",
    description: "Professional industrial pump maintenance services. We offer condition monitoring, repair, and overhauling for heavy-duty industrial pumps.",
    url: "https://deivoxbcp.com/industrial-pump-maintenance",
    images: [
      {
        url: "https://deivoxbcp.com/images/bcp_overhauling.png",
        width: 1200,
        height: 630,
        alt: "Industrial Pump Maintenance - DEI VOX India",
      },
    ],
  },
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industrial Pump Maintenance" },
];

const relatedLinks = [
  { label: "All Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Industrial Pump Maintenance",
      provider: {
        "@type": "Organization",
        name: "DEI VOX PVT. LTD.",
        url: "https://deivoxbcp.com",
      },
      serviceType: "Industrial Pump Maintenance",
      areaServed: "India",
      description: "Professional industrial pump maintenance services. We offer condition monitoring, repair, and overhauling for heavy-duty industrial pumps.",
      url: "https://deivoxbcp.com/industrial-pump-maintenance",
    }
  ],
};

export default function Page() {
  return (
    <>
      <script
        id="schema-industrial-pump-maintenance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoPageLayout
        breadcrumb={breadcrumb}
        relatedLinks={relatedLinks}
        heroImage="/images/bcp_overhauling.png"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-black uppercase mb-6 leading-tight">
          Industrial Pump Maintenance
        </h1>
        <div className="w-20 h-2 bg-accent mb-12" />

        <p className="text-foreground/80 text-base font-medium leading-relaxed mb-6">
          DEI VOX India is a recognized leader in <strong>Industrial Pump Maintenance</strong>. Our certified engineers provide unmatched expertise for thermal power plants and industrial facilities across India.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-primary uppercase tracking-tight mt-10 mb-3">
          Comprehensive Industrial Pump Maintenance Solutions
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          We understand the critical role your equipment plays. That's why our Industrial Pump Maintenance process strictly adheres to OEM guidelines, utilizing advanced diagnostic tools and precision machining to restore performance and extend lifecycle.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-primary uppercase tracking-tight mt-10 mb-3">
          Why Choose DEI VOX India?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80 font-medium mb-6">
          <li>ISO Certified execution for highest reliability</li>
          <li>Pan-India 24/7 emergency response availability</li>
          <li>Highly experienced technical engineering team</li>
          <li>Full capability from component reverse engineering to final testing</li>
        </ul>
      </SeoPageLayout>
    </>
  );
}
