import ServiceDetailPage from "@/src/components/ServiceDetailPage";

export const metadata = {
  title: "BCP Pump Overhaul & Refurbishment | DEI VOX",
  description:
    "Specialist Boiler Circulation Pump overhaul, inspection, component refurbishment and testing support from DEI VOX.",
  keywords: [
    "BCP pump overhaul",
    "boiler circulation pump refurbishment",
    "boiler circulation pump repair",
    "pump overhaul process",
    "DEI VOX",
  ],
  alternates: { canonical: "/bcp-overhauling-services" },
  openGraph: {
    title: "BCP Pump Overhaul & Refurbishment | DEI VOX",
    description:
      "Plan pump inspection, repair and refurbishment with documented measurements and testing.",
    url: "https://deivoxbcp.com/bcp-overhauling-services",
    images: [
      {
        url: "https://deivoxbcp.com/images/pump-overhaul-refurbishment-1.png",
        width: 1200,
        height: 630,
        alt: "BCP pump overhaul and refurbishment at DEI VOX",
      },
    ],
  },
};

export default function Page() {
  return <ServiceDetailPage serviceKey="pump-overhaul-refurbishment" />;
}
