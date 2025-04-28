
import { motion } from "framer-motion";
import { Wrench, Zap, Truck } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "No Construction Required",
      description: "Deploy high-power charging without expensive infrastructure, permitting, or grid upgrades. Start charging in hours, not months.",
      icon: <Wrench size={36} className="text-chargetrux-blue" />,
    },
    {
      title: "Up to 440kW Charging Power",
      description: "Charge up to 4 vehicles simultaneously with our high-capacity mobile units, getting your fleet back on the road quickly.",
      icon: <Zap size={36} className="text-chargetrux-green" />,
    },
    {
      title: "Fully Mobile — Any Lot, Any Time",
      description: "Our charging units come to you, providing flexibility for seasonal demand, temporary locations, or emergency backup needs.",
      icon: <Truck size={36} className="text-chargetrux-blue" />,
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-chargetrux-darkblue">
            The ChargeTrux Advantage
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mobile charging solutions eliminate infrastructure barriers and deliver 
            power where and when you need it most.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-chargetrux-darkblue">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
              <a href="#" className="inline-block mt-4 text-chargetrux-blue font-medium hover:text-chargetrux-blue/80">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
