
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const IndustriesSection = () => {
  const industries = [
    {
      title: "Rental Fleet Operators",
      description: "Keep your rental EVs charged and ready for customers without expensive infrastructure.",
      image: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png",
    },
    {
      title: "Last-Mile Delivery",
      description: "Ensure your delivery fleet returns to service quickly with on-site charging solutions.",
      image: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png",
    },
    {
      title: "Ports & Industrial Zones",
      description: "Power heavy-duty electric equipment and vehicles without fixed charging infrastructure.",
      image: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png",
    },
    {
      title: "Valet, Hospitality & Events",
      description: "Provide premium charging services at hotels, venues, and special events.",
      image: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-chargetrux-darkblue">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mobile charging solutions adapt to the unique needs of various industries, 
            providing flexibility where traditional infrastructure falls short.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              className="industry-tile aspect-square rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={industry.image} 
                alt={industry.title} 
                className="w-full h-full object-cover"
              />
              <div className="industry-overlay text-white text-center p-6">
                <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                <p>{industry.description}</p>
                <a href="#" className="mt-4 inline-block text-white underline">
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-chargetrux-blue text-white hover:bg-chargetrux-blue/80">
            See All Industries
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
