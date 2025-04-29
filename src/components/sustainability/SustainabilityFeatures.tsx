
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Shield } from "lucide-react";

const SustainabilityFeatures = () => {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-chargetrux-green/10 flex items-center justify-center">
          <Leaf className="w-8 h-8 text-chargetrux-green" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-chargetrux-darkblue mb-3">Certified Renewable Energy Sources</h4>
          <p className="text-gray-700 mb-5">
            Every kilowatt-hour delivered through our mobile charging units is sourced from 100% certified renewable energy, including wind, solar, and hydroelectric power. This ensures that your electric fleet truly operates with zero emissions from well to wheel.
          </p>
          <div className="bg-chargetrux-green/10 rounded-lg p-4 inline-flex items-center gap-3">
            <span className="text-3xl font-bold text-chargetrux-green">100%</span>
            <span className="text-sm font-medium text-chargetrux-darkblue">Renewable Energy</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
          <Shield className="w-8 h-8 text-chargetrux-blue" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-chargetrux-darkblue mb-3">Blockchain-Verified Energy Tracking</h4>
          <p className="text-gray-700 mb-5">
            Our proprietary energy tracking system utilizes blockchain technology to create an immutable record of the renewable energy certificates (RECs) associated with your charging sessions. This provides verifiable proof of your carbon-free energy consumption for auditing and reporting purposes.
          </p>
          <div className="bg-chargetrux-blue/10 rounded-lg p-4 inline-flex items-center gap-3">
            <span className="text-3xl font-bold text-chargetrux-blue">0</span>
            <span className="text-sm font-medium text-chargetrux-darkblue">Carbon Emissions</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SustainabilityFeatures;
