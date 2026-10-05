import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import GlobalPresence from "./components/GlobalPresence";
import EngagementModels from "./components/EngagementModels";
import TalentNetwork from "./components/TalentNetwork";
import HiringProcess from "./components/HiringProcess";
import ProductProcess from "./components/ProductProcess";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050b08] text-white">
      {/* Exact Header matching Firnas.tech */}
      <Header />

      <main>
        {/* Exact Hero Section matching Firnas.tech */}
        <Hero />

        {/* Exact About Us Section matching Firnas.tech */}
        <AboutUs />

        {/* Exact Services Section matching Firnas.tech */}
        <Services />

        {/* Exact Case Studies / Our success stories Section matching Firnas.tech */}
        <CaseStudies />

        {/* Exact Global Presence Section matching Firnas.tech */}
        <GlobalPresence />

        {/* Exact Engagement Models Section matching Firnas.tech */}
        <EngagementModels />

        {/* Exact Meet Our Talent Network Section matching Firnas.tech */}
        <TalentNetwork />

        {/* Exact Hiring Process Section matching Firnas.tech */}
        <HiringProcess />

        {/* Exact Our Product Development Process Section matching Firnas.tech */}
        <ProductProcess />
      </main>
    </div>
  );
}
