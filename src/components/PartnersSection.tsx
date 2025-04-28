
import { Circle, Truck } from "lucide-react";
import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
    { name: "Hertz", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Hertz_logo.svg/2560px-Hertz_logo.svg.png" },
    { name: "FedEx", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/FedEx_logo.svg/2560px-FedEx_logo.svg.png" },
    { name: "Avis", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Avis_logo.svg/2560px-Avis_logo.svg.png" },
    { name: "Port of Long Beach", logo: "https://www.polb.com/wp-content/uploads/2019/11/logo.svg" },
    { name: "LAX Valet", logo: "https://www.laxvalet.com/wp-content/uploads/2019/03/laxvalet.png" },
  ];

  return (
    <div className="py-16 bg-[#0c2340]">
      <div className="container mx-auto px-4">
        {/* Icon Section - Now using the truck icon as the primary icon */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* We'll use the truck as the main icon with a glowing effect */}
            <div className="relative">
              <img 
                src="/lovable-uploads/1b8e6e18-42ba-4a33-907e-e3dbcf43bf82.png" 
                alt="Electric delivery truck" 
                className="w-32 h-32 mx-auto object-contain"
              />
              <div className="absolute inset-0 bg-chargetrux-green opacity-20 rounded-full blur-md"></div>
            </div>
            
            {/* Keep the circle styling for consistency */}
            <Circle className="w-24 h-24 mx-auto absolute top-4 left-1/2 -translate-x-1/2 text-chargetrux-blue opacity-30" strokeWidth={1} />
            <Circle className="w-28 h-28 mx-auto absolute top-2 left-1/2 -translate-x-1/2 text-chargetrux-blue opacity-20" strokeWidth={1} />
          </div>
        </motion.div>
        
        {/* Main Heading and Text - Updated heading text format */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Our expertise in mobile charging and service delivery is trusted by industry leaders. With over a million successful deliveries, we provide reliable and efficient charging solutions wherever they're needed.
          </p>
          <p className="text-gray-300 text-lg">
            Our partners include:
          </p>
        </motion.div>
        
        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center h-24 transition-all hover:shadow-xl"
              style={{
                boxShadow: "0 4px 15px rgba(255, 255, 255, 0.1)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="max-h-12 max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
