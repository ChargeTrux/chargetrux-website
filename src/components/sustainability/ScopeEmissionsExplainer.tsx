
import React from "react";
import { motion } from "framer-motion";

const ScopeEmissionsExplainer = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} viewport={{
    once: true
  }} className="mb-16">
      <h3 className="text-2xl font-bold text-center mb-8 text-chargetrux-darkblue">How ChargeTrux Supports ESG Initiatives</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition-shadow duration-300">
          <h4 className="text-xl font-semibold text-chargetrux-darkblue mb-4">What are Scope 2 Emissions?</h4>
          <p className="text-gray-700 leading-relaxed">
            Scope 2 emissions are indirect greenhouse gas emissions associated with the purchase of electricity, steam, heat, or cooling for your operations. For electric vehicle fleets, charging represents the primary source of Scope 2 emissions.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition-shadow duration-300">
          <h4 className="text-xl font-semibold text-chargetrux-darkblue mb-4">How ChargeTrux Supports ESG Initiatives</h4>
          <p className="text-gray-700 leading-relaxed">
            ChargeTrux supports ESG initiatives by delivering 100% renewable energy, helping reduce Scope 2 emissions from grid charging. This renewable energy approach is particularly valuable for organizations with formal carbon reduction targets or ESG reporting requirements.
          </p>
        </div>
      </div>
    </motion.div>;
};

export default ScopeEmissionsExplainer;
