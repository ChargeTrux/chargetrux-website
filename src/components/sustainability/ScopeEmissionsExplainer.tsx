
import React from "react";
import { motion } from "framer-motion";

const ScopeEmissionsExplainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h3 className="text-xl font-bold text-center mb-8 text-chargetrux-darkblue">Helping Meet Scope 2 Emission Goals for Fleet Operators</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
          <h4 className="text-lg font-semibold text-chargetrux-darkblue mb-3">What are Scope 2 Emissions?</h4>
          <p className="text-gray-700">
            Scope 2 emissions are indirect greenhouse gas emissions associated with the purchase of electricity, steam, heat, or cooling for your operations. For electric vehicle fleets, charging represents the primary source of Scope 2 emissions.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
          <h4 className="text-lg font-semibold text-chargetrux-darkblue mb-3">How ChargeTrux Eliminates Scope 2 Emissions</h4>
          <p className="text-gray-700">
            By using 100% renewable energy for all charging operations, ChargeTrux helps your organization achieve zero Scope 2 emissions from your electric fleet operations. This is particularly valuable for organizations with formal carbon reduction targets or ESG reporting requirements.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ScopeEmissionsExplainer;
