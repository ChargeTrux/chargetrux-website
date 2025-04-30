import { motion } from "framer-motion";
import { Battery, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import CtaSection from "@/components/CtaSection";
import TechnologyFeature from "@/components/TechnologyFeature";
import ChargeTruxAPI from "@/components/ChargeTruxAPI";

const Technology = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-chargetrux-darkblue to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto pt-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Cutting-Edge Mobile EV Charging Technology
          </h1>
          <div className="w-20 h-1 bg-chargetrux-green mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Power Platform: Industry-Leading Mobile Charging Solutions
          </p>
        </motion.div>
      </div>

      {/* Current Power Platform */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-8">
                ChargeTrux delivers unmatched mobile charging capabilities through our advanced power platform, designed specifically for commercial fleet operations that demand reliability, efficiency, and flexibility.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-chargetrux-green">
                  450 kWh Per Session Capacity
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Our current R-Series mobile charging units provide an industry-leading 450 kWh of energy per charging session – enough to fully charge multiple fleet vehicles or 4 heavy-duty commercial EVs in a single deployment.
                </p>
                <TechnologyFeature 
                  icon="⚡"
                  title="Power When You Need It"
                  description="A single ChargeTrux unit can fully charge up to 8 standard delivery vehicles or 4 heavy-duty commercial EVs in a single deployment."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-chargetrux-blue/20 animate-pulse"></div>
                  <Battery className="w-48 h-48 text-chargetrux-green" />
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-br from-chargetrux-blue to-chargetrux-green rounded-lg p-8 shadow-lg">
                    <div className="text-6xl font-bold">440kW</div>
                    <div className="text-xl mt-2">Maximum Output</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-chargetrux-green">
                  440kW Output Capability
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Our charging units feature advanced power distribution technology that delivers up to 440kW of output power, enabling ultra-fast charging for compatible vehicles. This high-power capability means your fleet vehicles spend less time charging and more time on the road generating revenue.
                </p>
                <TechnologyFeature 
                  icon="🔋"
                  title="Rapid Power Delivery"
                  description="Charge compatible commercial EVs at speeds up to 220kW per cable – adding up to 200 miles of range in just 30 minutes."
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-chargetrux-green">
                  NACS + CCS1 Compatibility
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  ChargeTrux mobile charging units support both North American Charging Standard (NACS) and Combined Charging System (CCS1) connectors, ensuring compatibility with virtually all electric fleet vehicles on the market today. This universal compatibility means your entire mixed fleet can be serviced with a single charging solution.
                </p>
                <TechnologyFeature 
                  icon="🔌"
                  title="Universal Fleet Compatibility"
                  description="Whether your fleet includes Tesla, Ford, GM, Rivian, or any other major EV manufacturer, our technology ensures seamless charging across your entire fleet."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 w-full">
                  <div className="flex justify-between mb-4">
                    <div className="font-semibold">Compatibility</div>
                    <div className="text-chargetrux-green">100%</div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full mb-6">
                    <div className="h-2 bg-chargetrux-green rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700 rounded-lg p-3 text-center">
                      <div className="font-medium">NACS</div>
                      <div className="text-xs text-gray-400">(Tesla Standard)</div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 text-center">
                      <div className="font-medium">CCS1</div>
                      <div className="text-xs text-gray-400">(SAE Standard)</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Roadmap */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-chargetrux-darkblue">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Roadmap</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The Future of Mobile EV Charging
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <p className="text-gray-300 mb-10 text-lg">
              At ChargeTrux, we're continuously advancing our technology to meet the evolving needs of electric fleet operators. Our research and development roadmap focuses on increasing energy capacity, reducing charging times, and integrating renewable energy sources.
            </p>

            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-chargetrux-green">
                Future Units Up to 750 kWh
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Our next-generation mobile charging units will feature significantly increased energy capacity, with models offering up to 750 kWh per session. These advanced units will extend operational range and support more vehicles per deployment, improving efficiency and reducing operational costs for fleet managers.
              </p>

              <div className="relative border-l-4 border-chargetrux-blue pl-8 ml-4 space-y-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-12 -top-2 w-8 h-8 bg-chargetrux-blue rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-800/60 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                    <div className="text-chargetrux-blue font-semibold mb-2">Q4 2025</div>
                    <h4 className="text-xl font-medium mb-2">R-Series 600</h4>
                    <p className="text-gray-300">600 kWh capacity units with enhanced battery density and improved thermal management</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-12 -top-2 w-8 h-8 bg-chargetrux-green rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-800/60 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                    <div className="text-chargetrux-green font-semibold mb-2">Q2 2026</div>
                    <h4 className="text-xl font-medium mb-2">R-Series 750</h4>
                    <p className="text-gray-300">750 kWh high-capacity units capable of supporting up to 6 vehicles simultaneously</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-chargetrux-green">
                  Solar Charging Integration
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Solar-powered EV charging represents a significant advancement in sustainable transportation, combining renewable energy with electric mobility to create a truly emissions-free charging solution. ChargeTrux is developing integrated solar technology for our mobile charging units, allowing them to generate power from the sun while deployed in the field.
                </p>

                <div className="relative border-l-4 border-chargetrux-blue pl-8 ml-4">
                  <div className="absolute -left-12 -top-2 w-8 h-8 bg-chargetrux-blue rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-800/60 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                    <div className="text-chargetrux-blue font-semibold mb-2">Q1 2026</div>
                    <h4 className="text-xl font-medium mb-2">Solar-Augmented Charging</h4>
                    <p className="text-gray-300">Deployable solar arrays that extend operational duration by up to 25% through renewable energy harvesting</p>
                  </div>
                </div>
                
                <p className="mt-6 text-gray-300">
                  This solar integration will reduce total energy costs, extend operational duration between base recharges, and further enhance the environmental benefits of electric fleet operations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-chargetrux-green">
                  Battery Swapping Development
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Battery swapping technology represents an innovative approach to EV charging, allowing depleted batteries to be quickly replaced with fully charged ones, significantly reducing downtime and extending operational range. Our development team is actively working on revolutionary battery swapping capabilities for the next generation of ChargeTrux units.
                </p>
                
                <div className="relative border-l-4 border-chargetrux-green pl-8 ml-4">
                  <div className="absolute -left-12 -top-2 w-8 h-8 bg-chargetrux-green rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-800/60 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                    <div className="text-chargetrux-green font-semibold mb-2">Q3 2026</div>
                    <h4 className="text-xl font-medium mb-2">Modular Battery Swapping</h4>
                    <p className="text-gray-300">Field-swappable battery modules enabling continuous operations without returning to base</p>
                  </div>
                </div>
                
                <p className="mt-6 text-gray-300">
                  This technology will allow ChargeTrux units to remain in the field indefinitely through periodic battery module replacements, creating a virtually unlimited operational range for mobile charging operations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability & Efficiency Section */}
      <section className="py-16 bg-gradient-to-b from-chargetrux-darkblue to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reliability & Efficiency</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engineered for Fleet Operations
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <p className="text-gray-300 mb-10 text-lg">
              Commercial fleet operations demand uncompromising reliability and efficiency. ChargeTrux's technology is specifically engineered to meet these demanding requirements through advanced diagnostics, thermal management, and battery chemistry.
            </p>

            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-chargetrux-green">
                Built-in Diagnostics & Thermal Safety
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TechnologyFeature 
                  icon="📊"
                  title="Advanced Diagnostic Systems"
                  description="Real-time monitoring with over 200 diagnostic parameters constantly tracked to ensure optimal performance and early issue detection"
                  variant="large"
                />
                
                <TechnologyFeature 
                  icon="🌡️"
                  title="Precision Thermal Management"
                  description="Active liquid cooling and heating systems maintain optimal battery temperature in all weather conditions from -20°F to 120°F"
                  variant="large"
                />
              </div>

              <p className="mt-8 text-gray-300">
                Effective thermal management is crucial for safe and efficient operation of lithium-ion batteries, particularly during fast charging operations where significant heat is generated. Our proprietary thermal management system ensures consistent charging performance regardless of ambient conditions while maximizing battery lifespan and safety.
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-chargetrux-green">
                LFP Chemistry for Long Life Cycles
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                LFP (Lithium Iron Phosphate) battery chemistry provides exceptional safety characteristics and longevity, with significantly reduced risk of thermal runaway even during fast charging operations. ChargeTrux units utilize advanced LFP battery technology for maximum safety, reliability, and operational lifespan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <TechnologyFeature 
                  icon="♻️"
                  title="Extended Lifecycle Performance"
                  description="Over 6,000 charge cycles with minimal degradation – up to 3x longer than conventional lithium-ion technologies"
                  variant="large"
                />
                
                <TechnologyFeature 
                  icon="🛡️"
                  title="Enhanced Safety Profile"
                  description="LFP chemistry provides superior thermal stability with flashpoint temperatures over 500°F – significantly higher than alternative battery technologies"
                  variant="large"
                />
                
                <TechnologyFeature 
                  icon="🌿"
                  title="Environmentally Responsible"
                  description="Cobalt-free battery chemistry reduces environmental impact and avoids ethical concerns associated with traditional lithium-ion batteries"
                  variant="large"
                />
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-white">API Integration Example</h3>
              <ChargeTruxAPI />
            </div>
          </div>
        </div>
      </section>

      {/* Combined Final CTA Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technology That Drives Your Fleet Forward
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              ChargeTrux's cutting-edge mobile charging technology eliminates the traditional barriers to fleet electrification, providing a flexible, reliable, and future-proof solution for commercial EV operations. By combining advanced battery technology, innovative power delivery systems, and comprehensive fleet integration capabilities, we're enabling the next generation of electric fleet operations.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Button size="lg" variant="ctaGreen" className="h-14 px-6 text-lg">
                Schedule a Technology Demonstration
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 h-14 px-6 text-lg">
                <ExternalLink className="mr-2 h-4 w-4" />
                Download Technical Specifications
              </Button>
            </div>

            <div className="mt-16 py-12 px-8 bg-gradient-to-r from-chargetrux-blue to-blue-800 rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Electrify Your Fleet Operations?
              </h2>
              <p className="text-xl text-gray-200 mb-10">
                Get mobile Level 3 charging where and when you need it, without the infrastructure headaches.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="ctaGreen" className="h-14 px-6 text-lg">
                  Request Custom Quote
                </Button>
                <Button variant="ctaBlue" className="h-14 px-6 text-lg">
                  Book Intro Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
