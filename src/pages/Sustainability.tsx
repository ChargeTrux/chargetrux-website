import React from "react";
import { motion } from "framer-motion";
import { Leaf, TreeDeciduous, Shield, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Button } from "@/components/ui/button";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-chargetrux-darkblue to-chargetrux-blue pt-28 pb-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">ESG & Sustainability</h1>
            <div className="w-20 h-1 bg-chargetrux-green mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl mb-6 font-light">Powering the Transition to Carbon-Free Fleet Operations</p>
            <p className="text-base md:text-lg text-gray-100 max-w-3xl mx-auto">
              ChargeTrux is committed to accelerating the adoption of sustainable transportation solutions through our mobile Level 3 charging infrastructure. Our innovative approach not only eliminates the need for permanent charging installations but also delivers tangible environmental benefits that support your organization's sustainability goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Carbon-Free Charging Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-chargetrux-darkblue">Carbon-Free Charging for Electric Vehicle Fleets</h2>
            <div className="w-20 h-1 bg-chargetrux-green mx-auto mb-4"></div>
            <p className="text-lg text-chargetrux-green font-medium">100% Renewable Electricity Used in All Units</p>
          </motion.div>

          {/* Sustainability Features */}
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

          {/* Scope Emissions Explainer */}
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

          {/* Environmental Impact Comparison */}
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
        </div>
      </section>

      {/* Sustainability Reporting Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-chargetrux-darkblue">Data-Backed Sustainability Reporting</h2>
            <div className="w-20 h-1 bg-chargetrux-green mx-auto mb-4"></div>
            <p className="text-lg text-chargetrux-green font-medium">ESG Compliance Support for Corporate Sustainability Goals</p>
          </motion.div>

          {/* Reporting Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300"
            >
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-chargetrux-green/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-chargetrux-green" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-chargetrux-darkblue mb-3">Regulatory Compliance Framework</h4>
                <p className="text-gray-700">
                  ChargeTrux's reporting systems are designed to align with major ESG reporting frameworks, including GRI, SASB, and TCFD. This ensures that the data we provide seamlessly integrates with your existing sustainability reporting processes and meets stringent regulatory requirements.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Monthly Reports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-xl font-bold text-center mb-8 text-chargetrux-darkblue">Monthly Energy + Carbon Offset Reports for All Clients</h3>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-chargetrux-blue h-64 md:h-auto flex items-center justify-center p-6">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg w-full h-56 flex items-center justify-center">
                    <p className="text-white text-lg font-medium">Sample ChargeTrux Sustainability Report</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-chargetrux-darkblue mb-4">Monthly Sustainability Reports Include:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Energy Consumption Analysis:</strong> Detailed breakdown of energy usage by vehicle, location, and time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Carbon Emission Avoidance:</strong> Calculated emissions avoided compared to fossil fuel alternatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Renewable Energy Certificates:</strong> Documentation of the renewable energy used for charging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Operational Efficiency Metrics:</strong> Insights to optimize your fleet's energy usage and sustainability performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Customizable Data Integration:</strong> Export options compatible with major sustainability reporting platforms</span>
                    </li>
                  </ul>
                  <Button className="bg-chargetrux-green hover:bg-chargetrux-green/90">View Sample Report</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-chargetrux-darkblue">Case Studies</h2>
            <div className="w-20 h-1 bg-chargetrux-green mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Real-World Impact of Mobile EV Charging Solutions</p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our mobile Level 3 charging infrastructure has helped organizations across various industries achieve significant operational and sustainability improvements. The following case studies demonstrate the tangible benefits of the ChargeTrux solution in real-world applications.
            </p>
          </motion.div>

          {/* Case Study Cards - Using consistent styling with the rest of the site */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-chargetrux-darkblue">Logistics Hub: Mid-Route Charging Optimization</h3>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-chargetrux-darkblue to-chargetrux-blue p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                    <p className="text-chargetrux-darkblue">Logistics Hub Electric Vehicle Charging</p>
                  </div>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-4">National Distribution Center Optimizes EV Fleet Operations</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <span className="block text-2xl font-bold">12%</span>
                        <span className="text-xs text-gray-200">Daily Uptime Recovery</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <span className="block text-2xl font-bold">27%</span>
                        <span className="text-xs text-gray-200">Reduction in Charging Costs</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <span className="block text-2xl font-bold">142</span>
                        <span className="text-xs text-gray-200">Tons CO₂ Avoided Annually</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <h4 className="font-bold text-lg text-chargetrux-darkblue mb-2">Challenge</h4>
                  <p className="text-gray-700">
                    A major logistics provider operating a fleet of 50+ electric delivery vehicles faced significant operational challenges with their fixed charging infrastructure. Limited charging capacity at their distribution center created bottlenecks during peak periods, while routing constraints and battery range limitations reduced daily delivery capacity.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-lg text-chargetrux-darkblue mb-2">Solution</h4>
                  <p className="text-gray-700">
                    ChargeTrux implemented a strategic mid-route charging solution with mobile Level 3 chargers deployed at two satellite locations along common delivery routes. This allowed vehicles to receive a rapid mid-shift charge without returning to the main distribution center.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-lg text-chargetrux-darkblue mb-2">Results</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Recovered 12% daily uptime</strong> by eliminating return trips to the central depot for charging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Increased delivery capacity</strong> by extending effective range of each vehicle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Reduced charging infrastructure costs</strong> by avoiding installation of permanent charging stations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Eliminated charging bottlenecks</strong> during peak operational periods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Improved driver satisfaction</strong> with more predictable schedules and reduced range anxiety</span>
                    </li>
                  </ul>
                </div>
                <blockquote className="border-l-4 border-chargetrux-blue pl-4 italic text-gray-700">
                  "The mobile charging solution from ChargeTrux has transformed our electric fleet operations. We've been able to recover valuable delivery time while ensuring our vehicles always have sufficient charge to complete their routes. This has been a game-changer for our organization's electrification strategy."
                  <cite className="block mt-2 text-sm font-medium">— Operations Director, National Logistics Provider</cite>
                </blockquote>
              </div>
            </div>
          </motion.div>

          {/* Case Study 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-chargetrux-darkblue">Airport Rental Operations: EV Processing Optimization</h3>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-chargetrux-blue to-chargetrux-green p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                    <p className="text-chargetrux-darkblue">Airport Rental Car EV Charging</p>
                  </div>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-4">Major Airport Rental Location Streamlines EV Turnaround</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <span className="block text-2xl font-bold">18%</span>
                        <span className="text-xs text-gray-200">Reduction in Processing Bottlenecks</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <span className="block text-2xl font-bold">45</span>
                        <span className="text-xs text-gray-200">Minutes Average Time Saved Per Vehicle</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <span className="block text-2xl font-bold">32%</span>
                        <span className="text-xs text-gray-200">Increase in EV Availability</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <h4 className="font-bold text-lg text-chargetrux-darkblue mb-2">Challenge</h4>
                  <p className="text-gray-700">
                    A leading rental car company at a major international airport was expanding their electric vehicle fleet but faced significant operational challenges. Limited fixed charging infrastructure created processing bottlenecks, while the time required to charge returned vehicles reduced fleet availability and impacted customer satisfaction.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-lg text-chargetrux-darkblue mb-2">Solution</h4>
                  <p className="text-gray-700">
                    ChargeTrux deployed mobile Level 3 charging units to supplement the existing fixed charging infrastructure. These mobile units were strategically positioned in the vehicle processing area, providing flexible charging capacity that could be adjusted based on demand patterns.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-lg text-chargetrux-darkblue mb-2">Results</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Reduced EV processing bottlenecks by 18%</strong> through additional charging capacity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Decreased average turnaround time</strong> for returned electric vehicles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Improved fleet utilization</strong> with faster processing of returned vehicles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Enhanced customer satisfaction</strong> due to increased availability of fully-charged EVs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Achieved sustainability goals</strong> with 100% renewable energy charging</span>
                    </li>
                  </ul>
                </div>
                <blockquote className="border-l-4 border-chargetrux-green pl-4 italic text-gray-700">
                  "The flexibility of ChargeTrux's mobile charging solution has been instrumental in optimizing our EV rental operations. We've significantly reduced processing times and improved vehicle availability, all while advancing our sustainability initiatives with zero-emission charging."
                  <cite className="block mt-2 text-sm font-medium">— Operations Manager, International Airport Rental Location</cite>
                </blockquote>
              </div>
            </div>
          </motion.div>

          {/* Case Study 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-chargetrux-darkblue">Port Operations: Clean Truck Compliance Solution</h3>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-chargetrux-green to-chargetrux-darkblue p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                    <p className="text-chargetrux-darkblue">Port Operations Electric Truck Charging</p>
                  </div>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-4">Major Port Authority Maintains Operations During Infrastructure Upgrade</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <span className="block text-2xl font-bold">24/7</span>
                        <span className="text-xs text-gray-200">Clean Truck Compliance</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <span className="block text-2xl font-bold">100%</span>
                        <span className="text-xs text-gray-200">Operational Continuity</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <span className="block text-2xl font-bold">0</span>
                        <span className="text-xs text-gray-200">Emissions During Construction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <h4 className="font-bold text-lg text-chargetrux-darkblue mb-2">Challenge</h4>
                  <p className="text-gray-700">
                    A major port authority implementing a clean truck program faced a critical challenge during the construction of their permanent charging infrastructure. The port needed to maintain 24/7 operations for electric drayage trucks while their fixed charging stations were being installed, a process expected to take 8-12 months.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-lg text-chargetrux-darkblue mb-2">Solution</h4>
                  <p className="text-gray-700">
                    ChargeTrux provided a comprehensive mobile charging solution to bridge the gap during construction. Multiple high-capacity mobile units were deployed at strategic locations throughout the port, ensuring continuous charging availability for the growing electric truck fleet.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-lg text-chargetrux-darkblue mb-2">Results</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Enabled 24/7 clean truck compliance</strong> during fixed-station construction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Maintained operational continuity</strong> throughout infrastructure transition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Provided flexible charging capacity</strong> that scaled with growing fleet needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Eliminated construction delays</strong> related to charging availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                      <span><strong>Supported emissions reduction targets</strong> with 100% renewable energy</span>
                    </li>
                  </ul>
                </div>
                <blockquote className="border-l-4 border-chargetrux-darkblue pl-4 italic text-gray-700">
                  "ChargeTrux's mobile charging solution was critical to the success of our clean truck program. We were able to maintain full operations during the construction of our permanent charging infrastructure, ensuring compliance with emissions regulations without disrupting the vital flow of goods through our port."
                  <cite className="block mt-2 text-sm font-medium">— Sustainability Director, Major West Coast Port Authority</cite>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-chargetrux-darkblue to-chargetrux-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Fleet Operations?</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg mb-8">
              Discover how ChargeTrux's mobile Level 3 charging solutions can support your organization's operational efficiency and sustainability goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-chargetrux-green hover:bg-chargetrux-green/80 text-white px-8">
                Schedule a Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                Download Sustainability Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
};

export default Sustainability;
