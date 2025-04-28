
import { Circle, Zap, Truck, Battery, Globe } from "lucide-react";
import { motion } from "framer-motion";

const TrustedPartnersSection = () => {
  const partners = [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
    { name: "Hertz", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Hertz_logo.svg/2560px-Hertz_logo.svg.png" },
    { name: "FedEx", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/FedEx_logo.svg/2560px-FedEx_logo.svg.png" },
    { name: "Avis", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Avis_logo.svg/2560px-Avis_logo.svg.png" },
    { name: "Port of Long Beach", logo: "https://www.polb.com/wp-content/uploads/2019/11/logo.svg" },
    { name: "LAX Valet", logo: "https://www.laxvalet.com/wp-content/uploads/2019/03/laxvalet.png" },
  ];

  const benefits = [
    {
      title: "Mobile Level 3 Chargers",
      description: "Deploy high-powered charging wherever your fleet needs it, with no fixed infrastructure costs.",
      icon: <Truck className="h-10 w-10 text-chargetrux-green" />,
    },
    {
      title: "On-Demand Charging",
      description: "Schedule charging sessions when and where you need them, optimizing fleet operations and uptime.",
      icon: <Battery className="h-10 w-10 text-chargetrux-green" />,
    },
    {
      title: "Nationwide Coverage",
      description: "Access our charging network across the country for consistent service wherever you operate.",
      icon: <Globe className="h-10 w-10 text-chargetrux-green" />,
    },
  ];

  return (
    <div className="py-16 bg-chargetrux-darkblue">
      <div className="container mx-auto px-4">
        {/* Trusted Partners Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Our mobile charging solutions power the operations of leading companies across transportation, logistics, and service industries.
          </p>
          
          {/* Partner Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center h-24 transition-all hover:bg-white/20"
                style={{
                  boxShadow: "0 4px 15px rgba(255, 255, 255, 0.05)"
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
                  className="max-h-12 max-w-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Mobility Enabled Section */}
        <motion.div 
          className="my-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
              <Battery className="w-8 h-8 absolute -left-8 top-4 text-chargetrux-green" />
            </div>
          </motion.div>
          
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
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our expertise in mobile charging and service delivery is trusted by industry leaders. With over a million successful deliveries, we provide reliable and efficient charging solutions wherever they're needed.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Benefits Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="bg-chargetrux-darkblue/60 rounded-lg p-4 inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedPartnersSection;
