
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
      className="bg-white rounded-xl p-8 shadow-lg"
    >
      <h4 className="text-2xl font-bold text-center mb-8 text-chargetrux-darkblue">Environmental Impact Comparison</h4>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-lg font-semibold text-center mb-4 text-gray-800">Traditional Fleet</div>
          <div className="h-40 mb-6 bg-gray-700 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-16 h-16 text-red-500" />
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-red-500"></span>
              <span className="text-gray-700">High direct emissions (Scope 1)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-red-500"></span>
              <span className="text-gray-700">Fossil fuel dependency</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-red-500"></span>
              <span className="text-gray-700">Local air quality impacts</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-lg font-semibold text-center mb-4 text-gray-800">EV Fleet with Grid Charging</div>
          <div className="h-40 mb-6 bg-gray-200 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-16 h-16 text-yellow-500" />
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></span>
              <span className="text-gray-700">Zero direct emissions (Scope 1)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-yellow-500"></span>
              <span className="text-gray-700">Variable Scope 2 emissions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-yellow-500"></span>
              <span className="text-gray-700">Grid-dependent carbon impact</span>
            </li>
          </ul>
        </div>

        <div className="bg-chargetrux-green/5 p-6 rounded-xl shadow-lg border-2 border-chargetrux-green">
          <div className="text-lg font-semibold text-center mb-4 text-chargetrux-darkblue">EV Fleet with ChargeTrux</div>
          <div className="h-40 mb-6 bg-chargetrux-green/10 rounded-lg flex items-center justify-center">
            <TreeDeciduous className="w-16 h-16 text-chargetrux-green" />
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></span>
              <span className="text-gray-700">Zero direct emissions (Scope 1)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></span>
              <span className="text-gray-700">Zero indirect emissions (Scope 2)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></span>
              <span className="text-gray-700">Verified renewable energy sourcing</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default EnvironmentalImpact;
