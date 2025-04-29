
import React from "react";
import { motion } from "framer-motion";

const SustainabilityHero = () => {
  return (
    <div className="bg-gradient-to-br from-chargetrux-darkblue to-chargetrux-blue py-24 md:py-32 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6">ESG & Sustainability</h1>
          <div className="w-20 h-1 bg-chargetrux-green mx-auto mb-8"></div>
          <p className="text-lg md:text-xl mb-8 font-light">Powering the Transition to Carbon-Free Fleet Operations</p>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            ChargeTrux is committed to accelerating the adoption of sustainable transportation solutions through our mobile Level 3 charging infrastructure. Our innovative approach not only eliminates the need for permanent charging installations but also delivers tangible environmental benefits that support your organization's sustainability goals.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SustainabilityHero;
