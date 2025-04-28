
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background container with the California road image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 25, 48, 0.65), rgba(10, 25, 48, 0.75)), url('/lovable-uploads/d34d3758-1bd6-4d7b-ac65-e8520521bd43.png')`,
            backgroundAttachment: 'fixed'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 text-white space-y-6 md:pr-12 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Mobile Level 3 Charging.
              <span className="text-chargetrux-green"> Delivered.</span>
            </h1>
            <p className="text-xl text-gray-300">
              Fleet charging where and when you need it. Up to 450 kWh per session. 
              4 vehicles at once.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-chargetrux-blue hover:bg-chargetrux-blue/80 text-white px-8">
                Schedule a Demo
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                Fleet Overview PDF
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/dfd350d4-2c2c-4203-9ef6-db635efcfa6c.png" 
                alt="ChargeTrux mobile charging unit" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-chargetrux-green text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">Up to 440kW</p>
                <p className="text-sm">Charging Power</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
