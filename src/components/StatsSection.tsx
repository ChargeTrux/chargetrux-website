
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart4, Zap, MapPin, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}

const Counter = ({ end, suffix = "", duration = 2000, delay = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Don't start counting until component is in view
    const timer = setTimeout(() => {
      let start = 0;
      const increment = end / (duration / 16); // 16ms is approx one frame at 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [end, duration, delay]);
  
  return <>{count.toLocaleString()}{suffix}</>;
};

const StatsSection = () => {
  // Updated service areas to match the comprehensive list from the first image
  const serviceAreas = [
    "West Coast",
    "Gulf Coast & Southwest", 
    "East Coast & Southeast"
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-12 text-chargetrux-darkblue"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Delivering Results Across <span className="text-chargetrux-blue">Major Metro Areas</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-chargetrux-blue/10 text-chargetrux-blue">
                <BarChart4 size={32} />
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-2 text-chargetrux-darkblue">
              <Counter end={1000000} suffix="+" />
            </h3>
            <p className="text-lg text-gray-600 mb-1">kWh delivered to date</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex justify-center text-xs text-gray-500 italic mt-2">
                    <Info className="h-4 w-4 mr-1" /> Auto-updated weekly
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Our energy delivery statistics are updated every Monday</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-chargetrux-green/10 text-chargetrux-green">
                <Zap size={32} />
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-2 text-chargetrux-darkblue">
              <Counter end={100} suffix="%" />
            </h3>
            <p className="text-lg text-gray-600">Renewable Energy Used</p>
            <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-chargetrux-green rounded-full" style={{ width: "100%" }}></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-chargetrux-blue/10 text-chargetrux-blue">
                <MapPin size={32} />
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-2 text-chargetrux-darkblue">
              <Counter end={3} />
            </h3>
            <p className="text-lg text-gray-600 mb-2">Major Regions Served</p>
            <div className="text-sm text-gray-500 flex flex-wrap justify-center gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="px-2 py-1 bg-gray-100 rounded-full">{area}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
