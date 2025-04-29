
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Battery, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-chargetrux-lightgray to-gray-100 flex items-center overflow-hidden py-12 md:py-20">
      {/* Modern Background with Animated Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pattern-bg">
        <div className="absolute inset-0">
          {/* Background texture overlay */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
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
          <div className="absolute bottom-8 right-8 backdrop-blur-lg bg-chargetrux-blue/30 text-white p-4 rounded-xl shadow-lg border border-white/10 z-20 hidden md:flex">
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
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <motion.div 
            className="w-full md:w-1/2 text-chargetrux-darkblue space-y-5 md:pr-8 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block bg-chargetrux-green/20 backdrop-blur-sm px-4 py-1 rounded-full text-chargetrux-green text-sm font-medium"
            >
              Next Generation EV Fleet Charging
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Mobile Level 3 Charging.
              <span className="text-chargetrux-green"> Delivered.</span>
            </h1>
            
            {/* Added subtitle with Opal City */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-2 mt-1"
            >
              <div className="h-0.5 w-8 bg-chargetrux-green"></div>
              <p className="text-lg text-chargetrux-green font-medium">Opal City • Powering the Future</p>
            </motion.div>
            
            <p className="text-lg text-gray-600 max-w-2xl">
              Fleet charging when and where you need it. Up to 450 kWh per session. 
              4 vehicles at once. No infrastructure investment required.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
              <div className="flex items-center gap-2 text-gray-600">
                <Battery className="text-chargetrux-green h-5 w-5" />
                <span>Zero installation costs</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Zap className="text-chargetrux-green h-5 w-5" />
                <span>Rapid deployment</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-chargetrux-blue hover:bg-chargetrux-blue/80 text-white px-6 rounded-md">
                Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-chargetrux-blue text-chargetrux-blue hover:bg-chargetrux-blue/10 rounded-md">
                Fleet Overview PDF
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* ChargeTrux Truck Image */}
            <div className="relative w-full max-w-md">
              {/* Glow effect behind the truck */}
              <div className="absolute -inset-4 rounded-2xl bg-chargetrux-blue/20 blur-xl animate-pulse"></div>
              
              {/* The truck image */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/lovable-uploads/1ff94a4b-5ae5-46ba-a96a-9574796883ad.png" 
                  alt="ChargeTrux Mobile Charging Truck" 
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Info badge */}
                <div className="absolute bottom-4 right-4 bg-chargetrux-blue/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-chargetrux-green/30 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="text-chargetrux-green h-4 w-4" />
                    <span>Mobile Level 3 Charging</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Add decorative elements for modern look */}
              <div className="absolute -bottom-3 -left-6 w-16 h-16 bg-chargetrux-green/20 rounded-full blur-md"></div>
              <div className="absolute -top-4 right-10 w-20 h-20 bg-chargetrux-blue/10 rounded-full blur-lg"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Add connecting design element to reduce visual space to stats section */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C240,10 480,74 720,50 C960,30 1200,10 1440,50 L1440,74 L0,74 Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
