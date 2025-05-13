
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";

const Careers = () => {
  useEffect(() => {
    document.title = "Careers - ChargeTrux";
  }, []);

  // Positions organized by region
  const westCoastPositions = [
    {
      title: "EV Charging Technician",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    {
      title: "Fleet Support Specialist",
      location: "Los Angeles, CA",
      type: "Full-time",
    },
  ];

  const gulfCoastPositions = [
    {
      title: "Field Operations Manager",
      location: "Houston, TX",
      type: "Full-time",
    },
    {
      title: "Charging Infrastructure Specialist",
      location: "Dallas, TX",
      type: "Full-time",
    },
  ];

  const eastCoastPositions = [
    {
      title: "Software Engineer - Mobile Apps",
      location: "New York, NY",
      type: "Remote",
    },
    {
      title: "Sustainability Analyst",
      location: "Boston, MA",
      type: "Full-time",
    },
  ];

  // Service areas with cities
  const serviceAreas = {
    "West Coast": ["Seattle", "Portland", "San Francisco", "Oakland", "San Jose", "Los Angeles", "Orange County", "San Diego"],
    "Gulf Coast & Southwest": ["Phoenix", "Albuquerque", "Dallas", "Houston", "Austin", "San Antonio", "New Orleans", "Tampa", "Orlando", "Fort Lauderdale", "Miami"],
    "East Coast & Southeast": ["Atlanta", "Charlotte", "Raleigh-Durham", "Norfolk/Virginia Beach", "Washington D.C.", "Baltimore", "Philadelphia", "Newark", "New York City", "Boston"]
  };

  // Combined positions for initial display
  const positions = [
    ...westCoastPositions,
    ...gulfCoastPositions,
    ...eastCoastPositions
  ].map(pos => ({
    ...pos,
    department: pos.location.includes("Remote") ? "Technology" : "Operations"
  }));

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
        
        {/* Service Areas Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <MapPin size={24} className="mr-2 text-chargetrux-green" />
            Service Areas
          </h2>
          <p className="text-gray-300 mb-8">
            ChargeTrux currently services major metropolitan areas across the United States, with rapid expansion plans underway.
          </p>

          {/* West Coast Region */}
          <div className="mb-10">
            <div className="mb-4 flex items-center">
              <div className="h-6 w-6 rounded-full bg-chargetrux-green flex items-center justify-center mr-2">
                <svg className="h-4 w-4 text-chargetrux-darkblue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-chargetrux-green">West Coast</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 bg-chargetrux-darkblue/40 p-6 rounded-lg border border-gray-700">
              {serviceAreas["West Coast"].map((city, index) => (
                <div key={`west-${index}`} className="p-3 bg-chargetrux-darkblue/60 rounded-md text-gray-300">
                  {city}
                </div>
              ))}
              {westCoastPositions.length > 0 && (
                <div className="col-span-2 mt-4">
                  <p className="text-chargetrux-green font-medium mb-2">Available Positions:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {westCoastPositions.map((position, index) => (
                      <div key={`west-pos-${index}`} className="p-3 bg-chargetrux-blue/20 rounded-md">
                        <p className="text-white font-medium">{position.title}</p>
                        <p className="text-sm text-gray-300">{position.location}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Gulf Coast & Southwest Region */}
          <div className="mb-10">
            <div className="mb-4 flex items-center">
              <div className="h-6 w-6 rounded-full bg-chargetrux-green flex items-center justify-center mr-2">
                <svg className="h-4 w-4 text-chargetrux-darkblue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-chargetrux-green">Gulf Coast & Southwest</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 bg-chargetrux-darkblue/40 p-6 rounded-lg border border-gray-700">
              {serviceAreas["Gulf Coast & Southwest"].map((city, index) => (
                <div key={`gulf-${index}`} className="p-3 bg-chargetrux-darkblue/60 rounded-md text-gray-300">
                  {city}
                </div>
              ))}
              {gulfCoastPositions.length > 0 && (
                <div className="col-span-2 mt-4">
                  <p className="text-chargetrux-green font-medium mb-2">Available Positions:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {gulfCoastPositions.map((position, index) => (
                      <div key={`gulf-pos-${index}`} className="p-3 bg-chargetrux-blue/20 rounded-md">
                        <p className="text-white font-medium">{position.title}</p>
                        <p className="text-sm text-gray-300">{position.location}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* East Coast & Southeast Region */}
          <div className="mb-10">
            <div className="mb-4 flex items-center">
              <div className="h-6 w-6 rounded-full bg-chargetrux-green flex items-center justify-center mr-2">
                <svg className="h-4 w-4 text-chargetrux-darkblue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-chargetrux-green">East Coast & Southeast</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 bg-chargetrux-darkblue/40 p-6 rounded-lg border border-gray-700">
              {serviceAreas["East Coast & Southeast"].map((city, index) => (
                <div key={`east-${index}`} className="p-3 bg-chargetrux-darkblue/60 rounded-md text-gray-300">
                  {city}
                </div>
              ))}
              {eastCoastPositions.length > 0 && (
                <div className="col-span-2 mt-4">
                  <p className="text-chargetrux-green font-medium mb-2">Available Positions:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {eastCoastPositions.map((position, index) => (
                      <div key={`east-pos-${index}`} className="p-3 bg-chargetrux-blue/20 rounded-md">
                        <p className="text-white font-medium">{position.title}</p>
                        <p className="text-sm text-gray-300">{position.location}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
