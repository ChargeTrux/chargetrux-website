
import { motion } from "framer-motion";

const ClientsSection = () => {
  const clients = [
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" 
    },
    { 
      name: "Hertz", 
      logo: "/lovable-uploads/7352ddc9-7057-4db1-8f1e-97b0188b38b4.png" 
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
      logo: "/lovable-uploads/2a733f58-c400-4a2e-883d-12ed7d7219ca.png" 
    },
    { 
      name: "LAX VALET", 
      logo: "/lovable-uploads/40d8cd55-add8-494c-9a4d-dfa1ad64949a.png" 
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Removed heading and description text */}
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              className="w-32 md:w-40 h-24 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-16 max-w-full object-contain hover:scale-110 transition-transform duration-300"
                style={{ maxWidth: "100%" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
