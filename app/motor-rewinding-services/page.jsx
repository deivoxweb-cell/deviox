import ServiceDetailPage from "@/src/components/ServiceDetailPage";

export const metadata = {
  title: "BCP Motor Repair & Rewinding | Wet-Stator Motor Specialists | DEI VOX",
  description:
    "Specialist inspection, repair and rewinding for wet-stator Boiler Circulation Pump motors, with testing and repair documentation.",
  keywords: [
    "BCP motor repair",
    "BCP motor rewinding",
    "wet-stator motor",
    "boiler circulation pump motor",
    "DEI VOX",
  ],
  alternates: { canonical: "/motor-rewinding-services" },
  openGraph: {
    title: "BCP Motor Repair & Rewinding | DEI VOX",
    description:
      "Specialist repair and rewind support for wet-stator Boiler Circulation Pump motors.",
    url: "https://deivoxbcp.com/motor-rewinding-services",
    images: [
      {
        url: "https://deivoxbcp.com/images/motor-repair-rewinding-1.png",
        width: 1200,
        height: 630,
        alt: "BCP motor repair and rewinding at DEI VOX",
      },
    ],
  },
};

export default function Page() {
  return <ServiceDetailPage serviceKey="motor-repair-rewinding" />;
}
