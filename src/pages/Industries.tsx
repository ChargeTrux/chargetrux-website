
import { motion } from "framer-motion";

const Industries = () => {
  const industries = [
    {
      title: "Rental Fleet",
      description: "Keep your rental EVs charged and ready for customers",
      image: "/lovable-uploads/6f9386c8-ac09-4dc9-88ba-31ecf9859f75.png"
    },
    {
      title: "Last-Mile Delivery",
      description: "Support your delivery fleet with mobile charging solutions",
      image: "/lovable-uploads/6b116e21-a7b2-44e4-a38a-d056e7c61fce.png"
    },
    {
      title: "Ports & Industrial",
      description: "Power heavy-duty electric vehicles and equipment",
      image: "/lovable-uploads/32a2004b-2356-4605-9883-432a282117a5.png"
    },
    {
      title: "Valet & Events",
      description: "Mobile charging for special events and valet services",
      image: "/lovable-uploads/e5ac1642-8f41-494a-907e-69f657a9cb21.png"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-chargetrux-darkblue to-black">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Specialized charging solutions for diverse industry needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-200">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
