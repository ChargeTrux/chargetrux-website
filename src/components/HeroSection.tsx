
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Battery, Zap, MapPin, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-chargetrux-darkblue py-24 overflow-hidden">
      {/* Background with subtle patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern">
          <div className="absolute inset-0 bg-gradient-to-br from-chargetrux-darkblue/90 to-chargetrux-darkblue/70"></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          {/* Animated elements */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 rounded-full bg-chargetrux-green/20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-chargetrux-blue/20 animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full bg-chargetrux-blue/10 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          <motion.div 
            className="w-full md:w-1/2 text-white space-y-6 md:pr-6 mb-6 md:mb-0"
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
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Mobile Level 3 Charging.
              <span className="text-chargetrux-green"> Delivered.</span>
            </h1>
            
            <p className="text-base text-gray-300 max-w-2xl">
              Fleet charging when and where you need it. Up to 450 kWh per session. 
              4 vehicles at once. No infrastructure investment required.
            </p>
            
            <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
              <div className="flex items-center gap-2 text-white/80 bg-white/5 p-2 rounded-lg backdrop-blur-sm">
                <Battery className="text-chargetrux-green h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Zero installation costs</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 bg-white/5 p-2 rounded-lg backdrop-blur-sm">
                <Zap className="text-chargetrux-green h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Rapid deployment</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 bg-white/5 p-2 rounded-lg backdrop-blur-sm">
                <MapPin className="text-chargetrux-green h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Multiple locations</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 bg-white/5 p-2 rounded-lg backdrop-blur-sm">
                <TrendingUp className="text-chargetrux-green h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Scale with demand</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-chargetrux-blue hover:bg-chargetrux-blue/80 text-white px-6 rounded-md" asChild>
                <Link to="/contact">
                  Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 rounded-md">
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
            {/* ChargeTrux Truck Image with Modern Design */}
            <div className="relative w-full max-w-lg">
              {/* Glow effect behind the truck */}
              <div className="absolute -inset-4 rounded-2xl bg-chargetrux-blue/30 blur-xl animate-pulse"></div>
              
              {/* The truck image */}
              <motion.div 
                className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/lovable-uploads/1ff94a4b-5ae5-46ba-a96a-9574796883ad.png" 
                  alt="ChargeTrux Mobile Charging Truck" 
                  className="w-full h-auto rounded-xl"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-chargetrux-darkblue/60 to-transparent"></div>
                
                {/* Modern info badge */}
                <div className="absolute bottom-4 right-4 bg-chargetrux-darkblue/70 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-chargetrux-green/30 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="text-chargetrux-green h-4 w-4" />
                    <span>Mobile Level 3 Charging</span>
                  </div>
                </div>
                
                {/* Featured specification badge */}
                <div className="absolute top-4 left-4 bg-chargetrux-green/90 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  <div className="flex items-center gap-1">
                    <span>440kW Max Power</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Connector to stats section */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
