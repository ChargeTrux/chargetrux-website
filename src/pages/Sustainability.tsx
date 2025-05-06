
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SustainabilityHero from "@/components/sustainability/SustainabilityHero";
import CarbonFreeChargingSection from "@/components/sustainability/CarbonFreeChargingSection";
import SustainabilityReporting from "@/components/sustainability/SustainabilityReporting";
import CaseStudies from "@/components/sustainability/CaseStudies";
import SustainabilityCta from "@/components/sustainability/SustainabilityCta";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <SustainabilityHero />

      {/* Carbon-Free Charging Section */}
      <CarbonFreeChargingSection />
      
      {/* Sustainability Reporting Section */}
      <SustainabilityReporting />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Final CTA Section */}
      <SustainabilityCta />

      <Footer />
    </div>
  );
};

export default Sustainability;
