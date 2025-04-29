
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TrustedPartnersSection from "@/components/TrustedPartnersSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "ChargeTrux - Mobile Level 3 Charging Delivered";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="bg-white relative -mt-1">
        <StatsSection />
        <TrustedPartnersSection />
        <IndustriesSection />
        <TestimonialsSection />
        <CtaSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
