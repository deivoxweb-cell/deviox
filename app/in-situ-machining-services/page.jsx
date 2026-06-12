import SeoPageLayout from "@/src/components/SeoPageLayout";

export const metadata = {
  title: "In-situ Machining Services India | DEI VOX",
  description: "Precision in-situ casing machining services for BCPs and industrial pumps. Reduce downtime with on-site flange and casing repair.",
  keywords: [
    "In-situ Machining Services",
    "DEI VOX India",
    "BCP",
    "pump repair"
  ],
  alternates: { canonical: "/in-situ-machining-services" },
  openGraph: {
    title: "In-situ Machining Services India | DEI VOX",
    description: "Precision in-situ casing machining services for BCPs and industrial pumps. Reduce downtime with on-site flange and casing repair.",
    url: "https://deivoxbcp.com/in-situ-machining-services",
    images: [
      {
        url: "https://deivoxbcp.com/images/bcp_overhauling.png",
        width: 1200,
        height: 630,
        alt: "In-situ Machining Services - DEI VOX India",
      },
    ],
  },
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "In-situ Machining Services" },
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
      name: "In-situ Machining Services",
      provider: {
        "@type": "Organization",
        name: "DEI VOX PVT. LTD.",
        url: "https://deivoxbcp.com",
      },
      serviceType: "In-situ Machining Services",
      areaServed: "India",
      description: "Precision in-situ casing machining services for BCPs and industrial pumps. Reduce downtime with on-site flange and casing repair.",
      url: "https://deivoxbcp.com/in-situ-machining-services",
    }
  ],
};

export default function Page() {
  return (
    <>
      <script
        id="schema-in-situ-machining-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoPageLayout
        breadcrumb={breadcrumb}
        relatedLinks={relatedLinks}
        heroImage="/images/bcp_overhauling.png"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-black uppercase mb-6 leading-tight">
          In-situ Machining Services
        </h1>
        <div className="w-20 h-2 bg-accent mb-12" />

        <p className="text-foreground/80 text-base font-medium leading-relaxed mb-6">
          DEI VOX India is a recognized leader in <strong>In-situ Machining Services</strong>. Our certified engineers provide unmatched expertise for thermal power plants and industrial facilities across India.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-primary uppercase tracking-tight mt-10 mb-3">
          Comprehensive In-situ Machining Services Solutions
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          We understand the critical role your equipment plays. That's why our In-situ Machining Services process strictly adheres to OEM guidelines, utilizing advanced diagnostic tools and precision machining to restore performance and extend lifecycle.
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
