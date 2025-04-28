
import { motion } from "framer-motion";

const ClientsSection = () => {
  const clients = [
    { name: "Amazon", logo: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png" },
    { name: "Hertz", logo: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png" },
    { name: "FedEx", logo: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png" },
    { name: "Avis", logo: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png" },
    { name: "Port of Long Beach", logo: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png" },
    { name: "LAX Valet", logo: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png" },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-chargetrux-darkblue">
            Trusted by Industry Leaders
          </h2>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              className="client-logo w-24 md:w-32 h-16 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-12 max-w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
