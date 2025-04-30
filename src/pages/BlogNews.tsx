
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Calendar } from "lucide-react";

const BlogNews = () => {
  useEffect(() => {
    document.title = "Blog & News - ChargeTrux";
  }, []);

  const blogPosts = [
    {
      title: "The Future of Mobile Level 3 Charging",
      excerpt: "Explore how mobile Level 3 charging solutions are revolutionizing fleet operations and enabling more flexible EV adoption strategies.",
      date: "April 25, 2025",
      category: "Technology",
      image: "/lovable-uploads/25613ad2-bdd8-4eeb-ade8-914ca3da1d9d.png"
    },
    {
      title: "Case Study: How Delivery Fleets Save 35% with On-Demand Charging",
      excerpt: "Learn how major delivery companies are cutting operational costs while meeting sustainability goals with flexible charging solutions.",
      date: "April 18, 2025",
      category: "Case Study",
      image: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png"
    },
    {
      title: "ESG Reporting: Measuring the Impact of Mobile Charging",
      excerpt: "Discover how accurate ESG reporting with ChargeTrux data helps companies demonstrate their commitment to sustainable operations.",
      date: "April 10, 2025",
      category: "Sustainability",
      image: "/lovable-uploads/40d8cd55-add8-494c-9a4d-dfa1ad64949a.png"
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
            Blog & News
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Stay informed with the latest insights, innovations, and updates in mobile EV charging and sustainable fleet operations.
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
                <div className="relative h-48 overflow-hidden">
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
                  <Button variant="ghost" className="text-chargetrux-green hover:text-white hover:bg-chargetrux-green/20 p-0">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Button variant="ctaGreen" size="lg">
            View All Articles <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogNews;
