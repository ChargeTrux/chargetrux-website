
import { motion } from "framer-motion";

const ClientsSection = () => {
  const clients = [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
    { name: "Hertz", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Hertz_logo.svg/2560px-Hertz_logo.svg.png" },
    { name: "FedEx", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/FedEx_logo.svg/2560px-FedEx_logo.svg.png" },
    { name: "Avis", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Avis_logo.svg/2560px-Avis_logo.svg.png" },
    { name: "Port of Long Beach", logo: "https://www.polb.com/wp-content/uploads/2019/11/logo.svg" },
    { name: "LAX Valet", logo: "https://www.laxvalet.com/wp-content/uploads/2019/03/laxvalet.png" },
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
          <p className="text-gray-600 mt-2 text-lg">
            Amazon | Hertz | FedEx | Avis | Port of Long Beach | LAX Valet
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              className="client-logo w-32 md:w-40 h-20 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-14 max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
