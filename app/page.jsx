import Hero from "@/src/components/Hero";
import AboutSection from "@/src/components/AboutSection";
import ServiceGrid from "@/src/components/ServiceGrid";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import ClientSeries from "@/src/components/ClientSeries";
import SeoContentSection from "@/src/components/SeoContentSection";

export const metadata = {
  title: "BCP Boiler Circulation Pump Repair & Overhauling | DEI VOX",
  description:
    "DEI VOX (Deivox) is India's leading BCP specialist for Boiler Circulation Pump repair, overhauling, motor rewinding & insitu machining services.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DEI VOX PVT. LTD. | Boiler Circulation Pump Repair & BCP Specialists",
    description:
      "DEI VOX PVT. LTD. is a leading Boiler Circulation Pump (BCP) repair, overhauling, motor rewinding and industrial pump maintenance company serving power plants across India.",
    url: "https://deivoxbcp.com",
    images: [
      {
        url: "https://deivoxbcp.com/images/hero_industrial.png",
        width: 1200,
        height: 630,
        alt: "DEI VOX PVT. LTD. — Boiler Circulation Pump Specialists",
      },
    ],
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://deivoxbcp.com/#localbusiness",
  name: "DEI VOX PVT. LTD.",
  alternateName: ["DEI VOX India", "DEI VOX", "DEI VOX BCP"],
  url: "https://deivoxbcp.com",
  logo: "https://deivoxbcp.com/images/Logo.png",
  image: "https://deivoxbcp.com/images/hero_industrial.png",
  description:
    "DEI VOX PVT. LTD. specializes in Boiler Circulation Pump repair, BCP overhauling, boiler water circulation pump maintenance, motor rewinding, and industrial pump services.",
  telephone: "+91-74282-00229",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bengaluru, Karnataka, India",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560099",
    addressCountry: "IN",
  },
  areaServed: "India",
  sameAs: ["https://www.indiamart.com/dei-vox-expert-services/"],
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Boiler Circulation Pump (BCP) Repair & Overhauling",
  provider: {
    "@type": "Organization",
    name: "DEI VOX PVT. LTD.",
    url: "https://deivoxbcp.com",
  },
  areaServed: "India",
  description:
    "Specialized engineering services for BCP, BWCP, and industrial pumps including rewinding, overhauling, and in-situ machining.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pump Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BCP Overhauling",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Motor Rewinding",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Boiler Circulation Pump (BCP)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Boiler Circulation Pump (BCP) is a high-pressure, high-temperature pump used in thermal power plants to circulate water through boiler tubes to ensure uniform heat transfer.",
      },
    },
    {
      "@type": "Question",
      name: "Does DEI VOX provide on-site pump repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, DEI VOX specializes in in-situ machining and on-site BCP maintenance to reduce downtime for power plants.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col bg-primary selection:bg-accent selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([businessSchema, homepageSchema, faqSchema]),
        }}
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
