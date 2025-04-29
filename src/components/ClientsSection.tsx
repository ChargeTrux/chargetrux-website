
import { motion } from "framer-motion";

const ClientsSection = () => {
  const clients = [
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" 
    },
    { 
      name: "Hertz", 
      logo: "https://1000logos.net/wp-content/uploads/2017/08/Hertz-Logo.png" 
    },
    { 
      name: "FedEx", 
      logo: "https://1000logos.net/wp-content/uploads/2017/05/FedEx-Logo.png" 
    },
    { 
      name: "Avis", 
      logo: "https://www.logo.wine/a/logo/Avis_Car_Rental/Avis_Car_Rental-Logo.wine.svg" 
    },
    { 
      name: "Port of Long Beach", 
      logo: "https://polb.com/wp-content/uploads/2019/11/logo.svg" 
    },
    { 
      name: "Los Angeles World Airports", 
      logo: "https://www.lawa.org/-/media/lawa-web/style-guide/logo/lawa-logo-notag-new-blue.ashx" 
    },
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
            Amazon | Hertz | FedEx | Avis | Port of Long Beach | Los Angeles World Airports
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              className="client-logo w-32 md:w-40 h-24 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-16 max-w-full object-contain"
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
