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
