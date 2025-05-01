
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Calendar, Newspaper } from "lucide-react";

const BlogNews = () => {
  useEffect(() => {
    document.title = "Blog & News - ChargeTrux";
  }, []);

  const blogPosts = [
    {
      title: "The True Cost of EV Fleet Charging: Infrastructure vs. Mobile Solutions",
      excerpt: "This analysis compares the total cost of ownership between building fixed charging infrastructure and using on-demand mobile charging services for commercial fleets.",
      date: "May 1, 2025",
      category: "Analysis",
      image: "/lovable-uploads/8b7c269d-9b34-4e35-99ea-4e3206e0a0f0.png"
    },
    {
      title: "ChargeTrux Partners with Major Port Authority for Zero-Emission Terminal Operations",
      excerpt: "Our new partnership brings mobile Level 3 charging to one of North America's busiest ports, supporting their transition to all-electric cargo handling equipment.",
      date: "April 24, 2025",
      category: "Partnership",
      image: "/lovable-uploads/38fa875e-b28b-4716-a893-f6c0b66b7252.png"
    },
    {
      title: "Fleet Electrification Report: Challenges and Solutions for 2025-2030",
      excerpt: "Our comprehensive report examines the barriers fleet operators face when electrifying their operations and presents innovative solutions to overcome them.",
      date: "April 18, 2025",
      category: "Research",
      image: "/lovable-uploads/3f23e66c-fe5a-4a27-99d3-56c37985db91.png"
    }
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
            Industry Insights & Updates
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Expert analysis, case studies, and news about mobile EV charging innovations and sustainable fleet management.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="bg-chargetrux-darkblue/60 border border-gray-700 rounded-lg overflow-hidden hover:border-chargetrux-green transition-all"
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 bg-chargetrux-green text-white py-1 px-3 text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="text-chargetrux-green hover:text-white hover:bg-chargetrux-green/20 p-0 flex items-center">
                    Read Full Article <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16 bg-chargetrux-blue/20 border border-chargetrux-blue/30 p-8 rounded-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <Newspaper size={80} className="text-chargetrux-blue" />
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-2xl font-bold text-white mb-3">Subscribe to Our Monthly Industry Report</h3>
              <p className="text-gray-300 mb-4">
                Stay ahead with exclusive insights on EV fleet management, mobile charging innovations, 
                and sustainability trends delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-chargetrux-darkblue border border-gray-700 px-4 py-2 rounded text-white flex-grow"
                />
                <Button className="bg-chargetrux-green hover:bg-chargetrux-green/80 whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Button variant="ctaGreen" size="lg" className="px-8">
            View All Articles <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogNews;
