
import { Circle, Zap, Truck, Battery, Globe } from "lucide-react";
import { motion } from "framer-motion";

const TrustedPartnersSection = () => {
  const partners = [
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" 
    },
    { 
      name: "Hertz", 
      logo: "/lovable-uploads/931c0528-b8cb-40c5-b71e-22a3e25ebecf.png" 
    },
    { 
      name: "FedEx", 
      logo: "/lovable-uploads/126233b7-39b3-4074-8fdc-b68f01db7303.png" 
    },
    { 
      name: "Avis", 
      logo: "https://www.logo.wine/a/logo/Avis_Car_Rental/Avis_Car_Rental-Logo.wine.svg" 
    },
    { 
      name: "Port of Long Beach", 
      logo: "/lovable-uploads/38fa875e-b28b-4716-a893-f6c0b66b7252.png" 
    },
    { 
      name: "Los Angeles World Airports", 
      logo: "/lovable-uploads/3f23e66c-fe5a-4a27-99d3-56c37985db91.png" 
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
          src="/lovable-uploads/0086d727-a12f-4882-96eb-437b6649527f.png" 
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center h-32 transition-all hover:bg-white/20"
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
                  className="max-h-16 max-w-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-all"
                  style={{ maxWidth: "100%" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="my-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-xl overflow-hidden border-2 border-chargetrux-green/30 shadow-[0_0_30px_rgba(0,204,102,0.15)]">
            <img 
              src="/lovable-uploads/0086d727-a12f-4882-96eb-437b6649527f.png" 
              alt="ChargeTrux Network" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chargetrux-darkblue via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-chargetrux-darkblue to-transparent">
              <div className="backdrop-blur-sm bg-chargetrux-darkblue/50 p-4 rounded-lg inline-block">
                <h3 className="text-chargetrux-green text-xl md:text-2xl font-bold">Mobile Fleet Charging Network</h3>
                <p className="text-white text-sm md:text-base">ChargeTrux vehicles delivering power where and when it's needed</p>
              </div>
            </div>
          </div>
        </motion.div>
        
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
