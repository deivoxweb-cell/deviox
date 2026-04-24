import Hero from "@/src/components/Hero";
import AboutSection from "@/src/components/AboutSection";
import ServiceGrid from "@/src/components/ServiceGrid";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import ClientSeries from "@/src/components/ClientSeries";
import SeoContentSection from "@/src/components/SeoContentSection";

export const metadata = {
  title: "DEI VOX India | BCP & Boiler Circulation Pump Specialists",
  description:
    "India's leading specialists in Boiler Circulation Pump (BCP) & Boiler Water Circulation Pump repair, overhauling and spare parts. ISO certified experts.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DEI VOX India | BCP & Boiler Circulation Pump Specialists",
    description:
      "India's leading company for Boiler Circulation Pump (BCP) & Boiler Water Circulation Pump maintenance, repair, overhauling and spare parts. ISO certified.",
    url: "https://deivoxbcp.com",
    images: [
      {
        url: "https://deivoxbcp.com/images/hero_industrial.png",
        width: 1200,
        height: 630,
        alt: "DEI VOX India — Boiler Circulation Pump Specialists",
      },
    ],
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Boiler Circulation Pump (BCP) Repair & Overhauling",
  "provider": {
    "@type": "Organization",
    "name": "DEI VOX India Pvt. Ltd.",
    "url": "https://deivoxbcp.com"
  },
  "areaServed": "India",
  "description": "Specialized engineering services for BCP, BWCP, and industrial pumps including rewinding, overhauling, and in-situ machining.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pump Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "BCP Overhauling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Motor Rewinding"
        }
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Boiler Circulation Pump (BCP)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Boiler Circulation Pump (BCP) is a high-pressure, high-temperature pump used in thermal power plants to circulate water through boiler tubes to ensure uniform heat transfer."
      }
    },
    {
      "@type": "Question",
      "name": "Does DEI VOX provide on-site pump repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, DEI VOX specializes in in-situ machining and on-site BCP maintenance to reduce downtime for power plants."
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="flex flex-col bg-primary selection:bg-accent selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <AboutSection />
      <ServiceGrid />
      <WhyChooseUs />
      <ClientSeries />
      <SeoContentSection />
    </div>
  );
}
