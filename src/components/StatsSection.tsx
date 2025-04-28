
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart4, Zap, MapPin } from "lucide-react";

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
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
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
            <p className="text-lg text-gray-600">kWh delivered to date</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
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
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
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
              <Counter end={5} />
            </h3>
            <p className="text-lg text-gray-600">Major Metro Areas Served</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
