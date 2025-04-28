
import { motion } from "framer-motion";
import { Battery, Zap } from "lucide-react";

const Technology = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-chargetrux-darkblue to-black">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Technology
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Advanced mobile charging solutions powered by cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Battery className="w-16 h-16 text-chargetrux-green mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Level 3 DC Fast Charging
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mobile charging units deliver up to 440kW of power, enabling rapid charging for your entire fleet. With advanced power management systems, we ensure optimal charging efficiency while maintaining battery health.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Zap className="w-8 h-8 text-chargetrux-green" />
                <div>
                  <h3 className="text-xl font-bold text-white">440kW Power Output</h3>
                  <p className="text-gray-300">Maximum charging capacity</p>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-chargetrux-green h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
