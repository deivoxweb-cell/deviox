import { Inter } from "next/font/google";
import "@/src/index.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Script from "next/script";
import PageLoader from "@/src/components/PageLoader";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://deivoxbcp.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DEI VOX India | BCP Boiler Circulation Pump Specialists",
    template: "%s | DEI VOX India",
  },
  description:
    "DEI VOX India: Leading specialists in Boiler Circulation Pump (BCP) repair, maintenance & overhauling. ISO certified experts for BCP & Boiler Water pumps.",
  keywords: [
    "DEI VOX",
    "DEI VOX Company",
    "DEI VOX India",
    "BCP",
    "Boiler Circulation Pump",
    "Boiler Water Circulation Pump",
    "Boiler circulating pump repair",
    "BCP overhauling",
    "BCP maintenance",
    "motor rewinding",
    "insitu machining",
    "boiler pump specialists India",
    "boiler pump service India",
    "industrial pump repair",
    "spare parts boiler pump",
    "reverse engineering pump",
    "ISO certified pump service",
    "submersible pump repair",
    "Gurugram industrial services",
    "Bengaluru industrial services",
  ],
  authors: [{ name: "DEI VOX India Pvt. Ltd.", url: SITE_URL }],
  creator: "DEI VOX India Pvt. Ltd.",
  publisher: "DEI VOX India Pvt. Ltd.",
  icons: {
    icon: "/Logo1.png",
    apple: "/Logo1.png",
    shortcut: "/Logo1.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "DEI VOX India",
    title: "DEI VOX India | BCP Boiler Circulation Pump Specialists",
    description:
      "India's leading BCP & Boiler Water Circulation Pump experts. Repair, overhauling, motor rewinding, insitu machining & spare parts. ISO certified. Available 24/7.",
    images: [
      {
        url: `${SITE_URL}/images/hero_industrial.png`,
        width: 1200,
        height: 630,
        alt: "DEI VOX India — Boiler Circulation Pump Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEI VOX India | BCP Boiler Circulation Pump Specialists",
    description:
      "Boiler Circulation Pump repair, overhauling, motor rewinding & more. ISO certified. 24/7 support across India.",
    images: [`${SITE_URL}/images/hero_industrial.png`],
  },
  verification: {
    google: "google9da641003b5f6c70",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "DEI VOX India Pvt. Ltd.",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/Logo.png`,
      },
      description:
        "DEI VOX India Pvt. Ltd. is India's leading Boiler Circulation Pump (BCP) specialist providing repair, overhauling, motor rewinding, insitu machining, spare parts supply and BCP consultancy services.",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9886424770",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-7428200229",
          contactType: "customer service",
          areaServed: "IN",
        },
      ],
      email: "sales@deivoxbcp.com",
      sameAs: ["https://deivoxbcp.com"],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "DEI VOX India Pvt. Ltd.",
      image: `${SITE_URL}/images/hero_industrial.png`,
      url: SITE_URL,
      telephone: "+91-9886424770",
      email: "sales@deivoxbcp.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "002/T S1, Vatika Town Square, Sector 83",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122004",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      openingHours: "Mo-Sa 09:00-18:00",
      geo: {
        "@type": "GeoCoordinates",
        "latitude": "28.3973",
        "longitude": "76.9691"
      },
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, Cheque",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "DEI VOX India",
      description: "India's BCP & Boiler Water Circulation Pump specialists",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        "target": `${SITE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      },
      sameAs: [
        "https://www.facebook.com/deivoxbcp",
        "https://www.linkedin.com/company/deivoxbcp"
      ]
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className={`${inter.className} min-h-screen flex flex-col bg-white`}
        suppressHydrationWarning
      >
        <div className="grain-overlay"></div>
        <PageLoader />
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
