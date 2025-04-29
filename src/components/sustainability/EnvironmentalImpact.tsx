
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TreeDeciduous } from "lucide-react";

const EnvironmentalImpact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-chargetrux-lightgray rounded-xl p-8 mb-16"
    >
      <h4 className="text-xl font-bold text-center mb-8 text-chargetrux-darkblue">Environmental Impact Comparison</h4>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="text-lg font-semibold text-center mb-4 text-gray-700">Traditional Fleet</div>
          <div className="h-40 mb-6 bg-gray-700 rounded flex items-center justify-center">
            <TrendingUp className="w-16 h-16 text-red-500" />
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-red-500"></span>
              <span>High direct emissions (Scope 1)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-red-500"></span>
              <span>Fossil fuel dependency</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-red-500"></span>
              <span>Local air quality impacts</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <div className="text-lg font-semibold text-center mb-4 text-gray-700">EV Fleet with Grid Charging</div>
          <div className="h-40 mb-6 bg-gray-200 rounded flex items-center justify-center">
            <TrendingUp className="w-16 h-16 text-yellow-500" />
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></span>
              <span>Zero direct emissions (Scope 1)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-yellow-500"></span>
              <span>Variable Scope 2 emissions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-yellow-500"></span>
              <span>Grid-dependent carbon impact</span>
            </li>
          </ul>
        </div>

        <div className="bg-chargetrux-green/10 p-5 rounded-lg shadow-md border-2 border-chargetrux-green">
          <div className="text-lg font-semibold text-center mb-4 text-chargetrux-darkblue">EV Fleet with ChargeTrux</div>
          <div className="h-40 mb-6 bg-chargetrux-green/20 rounded flex items-center justify-center">
            <TreeDeciduous className="w-16 h-16 text-chargetrux-green" />
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></span>
              <span>Zero direct emissions (Scope 1)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></span>
              <span>Zero indirect emissions (Scope 2)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></span>
              <span>Verified renewable energy sourcing</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default EnvironmentalImpact;
