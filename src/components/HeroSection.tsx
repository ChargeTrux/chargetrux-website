
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Battery, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] bg-chargetrux-darkblue flex items-center overflow-hidden">
      {/* Modern Background with Electric Vehicle Imagery */}
      <div className="absolute inset-0 z-0">
        <div className="bg-california-road absolute inset-0 bg-fixed">
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-chargetrux-darkblue/90 to-chargetrux-darkblue/70"></div>
          
          {/* Background texture overlay */}
          <div className="absolute inset-0 opacity-15 mix-blend-overlay">
            <img 
              src="/lovable-uploads/0086d727-a12f-4882-96eb-437b6649527f.png" 
              alt="ChargeTrux Network Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Modern animated elements */}
          <div className="absolute top-1/4 left-1/3 w-24 h-24 rounded-full bg-chargetrux-green/10 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-chargetrux-blue/10 animate-pulse" style={{ animationDelay: "1s" }}></div>
          
          {/* Charging indicator */}
          <div className="absolute bottom-8 right-8 backdrop-blur-lg bg-black/30 text-white p-4 rounded-xl shadow-lg border border-white/10 z-20">
            <div className="flex items-center gap-3">
              <Zap className="text-chargetrux-green h-6 w-6" />
              <div>
                <p className="font-bold text-lg">Up to 440kW</p>
                <p className="text-sm text-gray-200">Charging Power</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="w-full md:w-3/5 text-white space-y-6 md:pr-12 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block bg-chargetrux-green/20 backdrop-blur-sm px-4 py-1 rounded-full text-chargetrux-green text-sm font-medium mb-1"
            >
              Next Generation EV Fleet Charging
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Mobile Level 3 Charging.
              <span className="text-chargetrux-green"> Delivered.</span>
            </h1>
            
            {/* Added subtitle with Opal City */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-2 mt-1 mb-3"
            >
              <div className="h-0.5 w-8 bg-chargetrux-green"></div>
              <p className="text-lg text-chargetrux-green font-medium">Opal City • Powering the Future</p>
            </motion.div>
            
            <p className="text-xl text-gray-300 max-w-2xl">
              Fleet charging when and where you need it. Up to 450 kWh per session. 
              4 vehicles at once. No infrastructure investment required.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
              <div className="flex items-center gap-2 text-white/80">
                <Battery className="text-chargetrux-green h-5 w-5" />
                <span>Zero installation costs</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Zap className="text-chargetrux-green h-5 w-5" />
                <span>Rapid deployment</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="bg-chargetrux-blue hover:bg-chargetrux-blue/80 text-white px-6 rounded-md">
                Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 rounded-md">
                Fleet Overview PDF
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/5 hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-chargetrux-blue/20 blur-xl animate-pulse"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
                <h3 className="text-chargetrux-green font-bold text-xl mb-4">Fast Charging Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="bg-chargetrux-green/20 p-1.5 rounded-md">
                      <Zap className="h-4 w-4 text-chargetrux-green" />
                    </div>
                    <span className="text-white">Level 3 DC Fast Charging</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-chargetrux-green/20 p-1.5 rounded-md">
                      <Zap className="h-4 w-4 text-chargetrux-green" />
                    </div>
                    <span className="text-white">Multi-vehicle support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-chargetrux-green/20 p-1.5 rounded-md">
                      <Zap className="h-4 w-4 text-chargetrux-green" />
                    </div>
                    <span className="text-white">24/7 mobile availability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-chargetrux-green/20 p-1.5 rounded-md">
                      <Zap className="h-4 w-4 text-chargetrux-green" />
                    </div>
                    <span className="text-white">Fleet management software</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
