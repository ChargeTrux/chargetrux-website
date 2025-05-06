
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SustainabilityHero from "@/components/sustainability/SustainabilityHero";
import CarbonFreeChargingSection from "@/components/sustainability/CarbonFreeChargingSection";
import ScopeEmissionsExplainer from "@/components/sustainability/ScopeEmissionsExplainer";
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
      
      {/* Scope Emissions Explainer Section */}
      <ScopeEmissionsExplainer />

      {/* Sustainability Reporting Section */}
      <SustainabilityReporting />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Final CTA Section - Combined from both previous CTAs */}
      <SustainabilityCta />

      <Footer />
    </div>
  );
};

export default Sustainability;
