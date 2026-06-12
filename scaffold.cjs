const fs = require('fs');
const path = require('path');

const pages = [
  {
    path: 'app/boiler-circulation-pump-repair/page.jsx',
    title: 'Boiler Circulation Pump Repair Services | DEI VOX India',
    desc: 'Expert Boiler Circulation Pump repair services across India by DEI VOX. Specializing in overhauling, maintenance, and emergency repair for power plants.',
    h1: 'Boiler Circulation Pump Repair Services',
    keyword: 'Boiler Circulation Pump Repair'
  },
  {
    path: 'app/bcp-overhauling-services/page.jsx',
    title: 'BCP Overhauling Services | DEI VOX India',
    desc: 'Comprehensive BCP overhauling services in India. We restore boiler circulation pumps to OEM specifications with precision engineering.',
    h1: 'BCP Overhauling Services',
    keyword: 'BCP Overhauling Services'
  },
  {
    path: 'app/boiler-water-circulation-pump-repair/page.jsx',
    title: 'Boiler Water Circulation Pump Repair | DEI VOX India',
    desc: 'Specialized Boiler Water Circulation Pump repair and maintenance. ISO certified experts for thermal power plant pump solutions.',
    h1: 'Boiler Water Circulation Pump Repair',
    keyword: 'Boiler Water Circulation Pump Repair'
  },
  {
    path: 'app/industrial-pump-maintenance/page.jsx',
    title: 'Industrial Pump Maintenance India | DEI VOX',
    desc: 'Professional industrial pump maintenance services. We offer condition monitoring, repair, and overhauling for heavy-duty industrial pumps.',
    h1: 'Industrial Pump Maintenance',
    keyword: 'Industrial Pump Maintenance'
  },
  {
    path: 'app/motor-rewinding-services/page.jsx',
    title: 'Motor Rewinding Services for BCP | DEI VOX India',
    desc: 'High-temperature motor rewinding services for Boiler Circulation Pumps. IEC standard testing and guaranteed reliability.',
    h1: 'Motor Rewinding Services',
    keyword: 'Motor Rewinding Services'
  },
  {
    path: 'app/in-situ-machining-services/page.jsx',
    title: 'In-situ Machining Services India | DEI VOX',
    desc: 'Precision in-situ casing machining services for BCPs and industrial pumps. Reduce downtime with on-site flange and casing repair.',
    h1: 'In-situ Machining Services',
    keyword: 'In-situ Machining Services'
  }
];

const template = `import SeoPageLayout from "@/src/components/SeoPageLayout";

export const metadata = {
  title: "{{TITLE}}",
  description: "{{DESC}}",
  keywords: [
    "{{KEYWORD}}",
    "DEI VOX India",
    "BCP",
    "pump repair"
  ],
  alternates: { canonical: "/{{SLUG}}" },
  openGraph: {
    title: "{{TITLE}}",
    description: "{{DESC}}",
    url: "https://deivoxbcp.com/{{SLUG}}",
    images: [
      {
        url: "https://deivoxbcp.com/images/bcp_overhauling.png",
        width: 1200,
        height: 630,
        alt: "{{KEYWORD}} - DEI VOX India",
      },
    ],
  },
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "{{KEYWORD}}" },
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
      name: "{{KEYWORD}}",
      provider: {
        "@type": "Organization",
        name: "DEI VOX PVT. LTD.",
        url: "https://deivoxbcp.com",
      },
      serviceType: "{{KEYWORD}}",
      areaServed: "India",
      description: "{{DESC}}",
      url: "https://deivoxbcp.com/{{SLUG}}",
    }
  ],
};

export default function Page() {
  return (
    <>
      <script
        id="schema-{{SLUG}}"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoPageLayout
        breadcrumb={breadcrumb}
        relatedLinks={relatedLinks}
        heroImage="/images/bcp_overhauling.png"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-black uppercase mb-6 leading-tight">
          {{H1}}
        </h1>
        <div className="w-20 h-2 bg-accent mb-12" />

        <p className="text-foreground/80 text-base font-medium leading-relaxed mb-6">
          DEI VOX India is a recognized leader in <strong>{{KEYWORD}}</strong>. Our certified engineers provide unmatched expertise for thermal power plants and industrial facilities across India.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-primary uppercase tracking-tight mt-10 mb-3">
          Comprehensive {{KEYWORD}} Solutions
        </h2>
        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
          We understand the critical role your equipment plays. That's why our {{KEYWORD}} process strictly adheres to OEM guidelines, utilizing advanced diagnostic tools and precision machining to restore performance and extend lifecycle.
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
`;

pages.forEach(page => {
  const slug = page.path.split('/')[1];
  const dir = path.dirname(page.path);
  
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  let fileContent = template
    .replace(/{{TITLE}}/g, page.title)
    .replace(/{{DESC}}/g, page.desc)
    .replace(/{{KEYWORD}}/g, page.keyword)
    .replace(/{{SLUG}}/g, slug)
    .replace(/{{H1}}/g, page.h1);

  fs.writeFileSync(page.path, fileContent, 'utf8');
  console.log('Created: ' + page.path);
});
