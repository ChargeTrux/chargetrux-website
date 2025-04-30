
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IndustriesSection = () => {
  const industries = [
    {
      title: "Rental Fleet Operators",
      description: "Keep your rental EVs charged and ready for customers without expensive infrastructure.",
      image: "/lovable-uploads/6f9386c8-ac09-4dc9-88ba-31ecf9859f75.png",
      link: "/industries?industry=rental",
    },
    {
      title: "Last-Mile Delivery",
      description: "Ensure your delivery fleet returns to service quickly with on-site charging solutions.",
      image: "/lovable-uploads/6b116e21-a7b2-44e4-a38a-d056e7c61fce.png",
      link: "/industries?industry=delivery",
    },
    {
      title: "Ports & Industrial Zones",
      description: "Power heavy-duty electric equipment and vehicles without fixed charging infrastructure.",
      image: "/lovable-uploads/32a2004b-2356-4605-9883-432a282117a5.png",
      link: "/industries?industry=ports",
    },
    {
      title: "Valet, Hospitality & Events",
      description: "Provide premium charging services at hotels, venues, and special events.",
      image: "/lovable-uploads/184a1e78-89e7-4a15-b547-3968236836ec.png",
      link: "/industries?industry=hospitality",
    },
    {
      title: "Charging Infrastructure",
      description: "Bridge the gap with temporary charging solutions during fixed asset construction.",
      image: "/lovable-uploads/6f9386c8-ac09-4dc9-88ba-31ecf9859f75.png",
      link: "/industries?industry=developers",
    },
  ];

  return (
    <section className="py-20 bg-chargetrux-darkblue">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            Industries We Serve
          </h2>
          <div className="w-20 h-1 bg-chargetrux-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our mobile charging solutions adapt to the unique needs of various industries, 
            providing flexibility where traditional infrastructure falls short.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48">
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chargetrux-darkblue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-sm md:text-base font-bold mb-2 text-white truncate">{industry.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-4 line-clamp-3">{industry.description}</p>
                <Link 
                  to={industry.link}
                  className="inline-flex items-center text-chargetrux-green text-xs md:text-sm font-medium transition-colors hover:text-chargetrux-green/80"
                >
                  Learn More 
                  <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-chargetrux-blue text-white hover:bg-chargetrux-blue/80" asChild>
            <Link to="/industries">See All Industries</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
