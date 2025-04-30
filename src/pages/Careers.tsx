
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";

const Careers = () => {
  useEffect(() => {
    document.title = "Careers - ChargeTrux";
  }, []);

  const positions = [
    {
      title: "EV Charging Technician",
      department: "Operations",
      location: "Remote / Various Locations",
      type: "Full-time",
    },
    {
      title: "Fleet Support Specialist",
      department: "Customer Service",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    {
      title: "Software Engineer - Mobile Apps",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Sustainability Analyst",
      department: "ESG",
      location: "Chicago, IL",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-chargetrux-darkblue to-black">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Help us shape the future of electric vehicle charging infrastructure and make a real impact on the transition to sustainable transportation.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Current Openings</h2>
          
          <div className="grid gap-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="bg-chargetrux-darkblue/60 border border-gray-700 rounded-lg p-6 hover:border-chargetrux-blue transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                      <Briefcase size={20} className="mr-2 text-chargetrux-green" />
                      {position.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-300">
                      <span>{position.department}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{position.location}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <Button variant="viewDetails" className="mt-2 md:mt-0">
                    View Details <ArrowRight size={16} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-chargetrux-blue/20 to-chargetrux-green/20 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Don't see a position that fits?</h2>
          <p className="text-gray-300 mb-6">
            We're always looking for talented individuals passionate about sustainable transportation and mobile charging solutions.
          </p>
          <Button variant="ctaGreen" size="lg">
            Submit Your Resume <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
