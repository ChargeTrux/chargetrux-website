
import { Circle, Zap, Truck, Battery, Globe } from "lucide-react";
import { motion } from "framer-motion";

const TrustedPartnersSection = () => {
  // Updated with general industry categories instead of specific company logos
  const industries = [
    { 
      name: "Online Retailers", 
      icon: <Globe className="h-8 w-8 text-chargetrux-green" />
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
      icon: <Truck className="h-8 w-8 text-chargetrux-green" />
    },
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
    <div className="py-16 bg-chargetrux-darkblue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-screen">
        <img 
          src="/lovable-uploads/aa71866f-8fa3-4af5-a549-d0781144adf5.png" 
          alt="ChargeTrux Network" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center h-32 transition-all hover:bg-white/20"
                style={{
                  boxShadow: "0 4px 15px rgba(255, 255, 255, 0.05)"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {industry.icon}
                <h3 className="mt-4 text-lg font-medium text-white">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Mobility Enabled Section - Moved to the top before the truck image */}
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
              <Circle className="w-16 h-16 mx-auto text-chargetrux-blue opacity-80" strokeWidth={1} />
              <Circle className="w-16 h-16 mx-auto absolute top-0 text-chargetrux-blue opacity-50" strokeWidth={1} style={{ transform: 'scale(1.2)' }} />
              <Circle className="w-16 h-16 mx-auto absolute top-0 text-chargetrux-blue opacity-30" strokeWidth={1} style={{ transform: 'scale(1.4)' }} />
              
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
        
        {/* Truck Network Image - Now after the Mobility Enabled section */}
        <motion.div 
          className="my-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-xl overflow-hidden border-2 border-chargetrux-green/30 shadow-[0_0_30px_rgba(0,204,102,0.15)]">
            <img 
              src="/lovable-uploads/aa71866f-8fa3-4af5-a549-d0781144adf5.png" 
              alt="ChargeTrux Network" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
        
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
