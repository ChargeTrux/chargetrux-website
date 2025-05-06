import React from "react";
import { motion } from "framer-motion";
import SustainabilityFeatures from "./SustainabilityFeatures";
import ScopeEmissionsExplainer from "./ScopeEmissionsExplainer";
import EnvironmentalImpact from "./EnvironmentalImpact";
const CarbonFreeChargingSection = () => {
  return <section className="bg-gradient-to-br from-white to-gray-100 py-[50px]">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-chargetrux-darkblue">Carbon-Free Charging for Electric Vehicle Fleets</h2>
          <div className="w-20 h-1 bg-chargetrux-green mx-auto mb-6"></div>
          <p className="text-lg text-chargetrux-green font-medium">100% Renewable Electricity Used in All Units</p>
        </motion.div>

        {/* Sustainability Features */}
        <SustainabilityFeatures />

        {/* Scope Emissions Explainer */}
        <ScopeEmissionsExplainer />
      </div>
    </section>;
};
export default CarbonFreeChargingSection;