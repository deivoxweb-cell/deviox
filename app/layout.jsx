import { Inter } from "next/font/google";
import "@/src/index.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Script from "next/script";
import PageLoader from "@/src/components/PageLoader";
import WhatsAppChat from "@/src/components/WhatsAppChat";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://deivoxbcp.com";

const BRAND_ALTERNATES = [
  "Deivox",
  "deivox",
  "DEI VOX",
  "DEI VOX India",
  "DEI VOX BCP",
  "DEI VOX Company",
  "DEI VOX PVT. LTD.",
];

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BCP Repair & Overhauling Specialists | DEI VOX",
    template: "%s | DEI VOX BCP Specialists",
  },
  description:
    "DEI VOX (Deivox) is India's leading BCP specialist offering Boiler Circulation Pump repair, overhauling, motor rewinding & insitu machining services.",
  keywords: [
    "deivox",
    "DEI VOX PVT. LTD.",
    "Boiler Circulation Pump repair India",
    "BCP overhauling",
    "Boiler Water Circulation Pump service",
    "motor rewinding",
    "insitu machining",
    "industrial pump repair Bengaluru",
  ],
  authors: [{ name: "DEI VOX PVT. LTD.", url: SITE_URL }],
  creator: "DEI VOX PVT. LTD.",
  publisher: "DEI VOX PVT. LTD.",
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
    siteName: "DEI VOX PVT. LTD.",
    title: "DEI VOX Company | BCP Boiler Circulation Pump Specialists",
    description:
      "Deivox, officially known as DEI VOX PVT. LTD., provides BCP repair, Boiler Water Circulation Pump overhauling, motor rewinding, insitu machining and industrial pump services across India.",
    images: [
      {
        url: `${SITE_URL}/images/hero_industrial.png`,
        width: 1200,
        height: 630,
        alt: "DEI VOX PVT. LTD. — Boiler Circulation Pump Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEI VOX Company | BCP Boiler Circulation Pump Specialists",
    description:
      "Deivox provides Boiler Circulation Pump repair, BCP overhauling, motor rewinding and industrial pump services across India.",
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
      name: "DEI VOX PVT. LTD.",
      alternateName: BRAND_ALTERNATES,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/Logo.png`,
      },
      description:
        "Deivox, officially known as DEI VOX PVT. LTD., is India's leading Boiler Circulation Pump (BCP) specialist providing repair, overhauling, motor rewinding, insitu machining, spare parts supply and BCP consultancy services.",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9886424770",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      email: "sales@deivoxbcp.com",
      sameAs: [
        "https://www.facebook.com/deivoxbcp",
        "https://www.linkedin.com/company/deivoxbcp",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "DEI VOX PVT. LTD.",
      alternateName: BRAND_ALTERNATES,
      image: `${SITE_URL}/images/hero_industrial.png`,
      url: SITE_URL,
      telephone: "+91-9886424770",
      email: "sales@deivoxbcp.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bommasandra Industrial Area",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560099",
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
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, Cheque",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "DEI VOX PVT. LTD.",
      alternateName: BRAND_ALTERNATES,
      description:
        "Deivox, officially known as DEI VOX PVT. LTD., is India's BCP, Boiler Circulation Pump and Boiler Water Circulation Pump specialist.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
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

        <main className="grow">{children}</main>

        <Footer />
        <WhatsAppChat />

        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
