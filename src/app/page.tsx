import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServiceGrid from "@/components/ServiceGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientSeries from "@/components/ClientSeries";

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
