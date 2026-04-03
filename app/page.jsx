import Hero from "@/src/components/Hero";
import AboutSection from "@/src/components/AboutSection";
import ServiceGrid from "@/src/components/ServiceGrid";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import ClientSeries from "@/src/components/ClientSeries";
import SeoContentSection from "@/src/components/SeoContentSection";

export const metadata = {
  title: "DEI VOX India | BCP & Boiler Circulation Pump Specialists",
  description:
    "DEI VOX India Pvt. Ltd. — India's leading Boiler Circulation Pump (BCP) and Boiler Water Circulation Pump specialists. Expert repair, overhauling, motor rewinding, in-situ machining, reverse engineering & spare parts supply. ISO 9001:2015, 14001:2015 & 45001:2018 certified. 24/7 service support.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DEI VOX India | BCP & Boiler Circulation Pump Specialists",
    description:
      "India's leading company for Boiler Circulation Pump (BCP) & Boiler Water Circulation Pump maintenance, repair, overhauling and spare parts. ISO certified.",
    url: "https://www.deivox.co.in",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <ServiceGrid />
      <WhyChooseUs />
      <ClientSeries />
      <SeoContentSection />
    </div>
  );
}
