import React from "react";
import { motion } from "framer-motion";
import { Shield, TrendingUp } from "lucide-react";
const SustainabilityReporting = () => {
  return <section className="bg-gradient-to-br from-[#f8fafc] to-[#f0f9ff] relative py-[54px]">
      <div className="container mx-auto px-4 relative z-10">
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
      }} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-chargetrux-darkblue">Data-Backed Sustainability Reporting</h2>
          <div className="w-20 h-1 bg-chargetrux-green mx-auto mb-4"></div>
          <p className="text-lg text-chargetrux-green font-medium">We help clients align their energy usage with ESG reporting requirements related to renewable electricity.</p>
        </motion.div>

        {/* Reporting Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="bg-white rounded-lg shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-chargetrux-blue" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-chargetrux-darkblue mb-3">Comprehensive ESG Data Collection</h4>
              <p className="text-gray-700">
                Our advanced monitoring systems collect detailed operational data from every charging session, creating a comprehensive dataset that supports your ESG reporting requirements. This data includes energy consumed, carbon emissions avoided, and renewable energy certification tracking.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="bg-white rounded-lg shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-chargetrux-green/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-chargetrux-green" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-chargetrux-darkblue mb-3">Regulatory Compliance Framework</h4>
              <p className="text-gray-700">
                ChargeTrux's reporting systems are designed to align with major ESG reporting frameworks, helping your organization meet sustainability reporting requirements and regulatory standards.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Monthly Reports */}
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
      }} className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-chargetrux-darkblue">Monthly Energy + Carbon Offset Information</h3>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-6 bg-chargetrux-blue text-white flex flex-col justify-center">
                <h4 className="text-xl font-bold mb-4">ChargeTrux Sustainability Information</h4>
                <p className="mb-4">We provide insights on your fleet's environmental impact to support your ESG initiatives and align with renewable energy goals.</p>
                <p className="text-sm opacity-80">Information is customized to match your specific reporting needs.</p>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-chargetrux-darkblue mb-4">Energy Information Includes:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                    <span className="text-gray-700"><strong>Energy Consumption Analysis:</strong> Detailed breakdown of energy usage by vehicle, location, and time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                    <span className="text-gray-700"><strong>Carbon Emission Avoidance:</strong> Calculated emissions avoided compared to fossil fuel alternatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                    <span className="text-gray-700"><strong>Renewable Energy Certificates:</strong> Documentation of the renewable energy used for charging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                    <span className="text-gray-700"><strong>Operational Efficiency Metrics:</strong> Insights to optimize your fleet's energy usage and sustainability performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                    <span className="text-gray-700"><strong>Customizable Data Integration:</strong> Export options compatible with major sustainability reporting platforms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default SustainabilityReporting;