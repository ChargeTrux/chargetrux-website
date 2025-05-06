
import { motion } from "framer-motion";
import { Globe, Truck, Battery, Zap, Building, ShoppingBag } from "lucide-react";

const ClientsSection = () => {
  const industries = [
    { 
      name: "Online Retailers", 
      icon: <ShoppingBag className="h-8 w-8 text-chargetrux-green" />
    },
    { 
      name: "Shipping Companies", 
      icon: <Truck className="h-8 w-8 text-chargetrux-green" />
    },
    { 
      name: "Fleet Operators", 
      icon: <Battery className="h-8 w-8 text-chargetrux-green" />
    },
    { 
      name: "Airport Services", 
      icon: <Zap className="h-8 w-8 text-chargetrux-green" />
    },
    { 
      name: "Port Authorities", 
      icon: <Globe className="h-8 w-8 text-chargetrux-green" />
    },
    { 
      name: "Logistics Providers", 
      icon: <Building className="h-8 w-8 text-chargetrux-green" />
    },
  ];

  return (
    <div className="py-12 bg-chargetrux-darkblue">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our mobile charging solutions power operations across diverse industries
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              className="w-40 md:w-48 h-32 flex flex-col items-center justify-center bg-white/10 p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="bg-chargetrux-darkblue/60 p-3 rounded-full mb-3">
                {industry.icon}
              </div>
              <h3 className="text-white font-medium text-center">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
