import Hero from "@/src/components/Hero";
import AboutSection from "@/src/components/AboutSection";
import ServiceGrid from "@/src/components/ServiceGrid";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import ClientSeries from "@/src/components/ClientSeries";

export const metadata = {
  title: "DEI VOX India | BCP & Boiler Circulation Pump Specialists",
  description:
    "DEI VOX India Pvt. Ltd. — India's #1 Boiler Circulation Pump (BCP) and Boiler Water Circulation Pump company. Expert repair, overhauling, motor rewinding, insitu machining, reverse engineering & spare parts supply. ISO 9001:2015, 14001:2015 & 45001:2018 certified. 24/7 service support.",
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
    </div>
  );
}
