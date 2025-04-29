
import { Circle, Zap, Truck, Menu } from "lucide-react";
import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" 
    },
    { 
      name: "Hertz", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hertz_Car_Rental_logo.svg/1280px-Hertz_Car_Rental_logo.svg.png" 
    },
    { 
      name: "FedEx", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/FedEx_Corporation_-_2016_Logo.svg/1280px-FedEx_Corporation_-_2016_Logo.svg.png" 
    },
    { 
      name: "Avis", 
      logo: "https://www.logo.wine/a/logo/Avis_Car_Rental/Avis_Car_Rental-Logo.wine.svg" 
    },
    { 
      name: "Port of Long Beach", 
      logo: "https://www.cleanpng.com/png-port-of-long-beach-logo-brand-product-design-port-o-6454851/download-png.html" 
    },
    { 
      name: "LAX Valet", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Los_Angeles_World_Airports_%28logo%29.svg/1280px-Los_Angeles_World_Airports_%28logo%29.svg.png" 
    },
  ];

  return (
    <div className="py-16 bg-[#0c2340]">
      <div className="container mx-auto px-4">
        {/* Icon Section */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Central circle with concentric circles */}
            <Circle className="w-16 h-16 mx-auto text-chargetrux-blue opacity-80" strokeWidth={1} />
            <Circle className="w-16 h-16 mx-auto absolute top-0 text-chargetrux-blue opacity-50" strokeWidth={1} style={{ transform: 'scale(1.2)' }} />
            <Circle className="w-16 h-16 mx-auto absolute top-0 text-chargetrux-blue opacity-30" strokeWidth={1} style={{ transform: 'scale(1.4)' }} />
            
            {/* Accent icons */}
            <Zap className="w-8 h-8 absolute -top-4 -right-4 text-chargetrux-green" />
            <Truck className="w-8 h-8 absolute bottom-0 -right-8 text-chargetrux-green" />
            <Menu className="w-8 h-8 absolute -left-8 top-4 text-chargetrux-green" />
          </div>
        </motion.div>
        
        {/* Main Heading and Text */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            MOBILITY ENABLED
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
