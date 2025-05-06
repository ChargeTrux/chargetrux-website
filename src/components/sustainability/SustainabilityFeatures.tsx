
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Shield } from "lucide-react";

const SustainabilityFeatures = () => {
  return (
    <div className="flex justify-center mb-16">
      <motion.div 
        initial={{
          opacity: 0,
          y: 20
        }} 
        whileInView={{
          opacity: 1,
          y: 0
        }} 
        transition={{
          duration: 0.5,
          delay: 0.2
        }} 
        viewport={{
          once: true
        }} 
        className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto"
      >
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-chargetrux-green/10 flex items-center justify-center">
          <Leaf className="w-8 h-8 text-chargetrux-green" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-chargetrux-darkblue mb-4">Certified Renewable Energy Sources</h4>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Every kilowatt-hour delivered through our mobile charging units is sourced from 100% certified renewable energy, including wind, solar, and hydroelectric power. This ensures that your electric fleet truly operates with zero emissions from well to wheel.
          </p>
          <div className="bg-chargetrux-green/10 rounded-lg p-4 inline-flex items-center gap-3">
            <span className="text-3xl font-bold text-chargetrux-green">100%</span>
            <span className="text-sm font-medium text-chargetrux-darkblue">Renewable Energy</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SustainabilityFeatures;
