
import { motion } from "framer-motion";
import { Battery, Zap, Power, Cable, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Solutions = () => {
  const solutions = [
    {
      title: "Mobile Charging",
      description: "On-demand Level 3 charging delivered to your fleet's location",
      icon: Battery,
      link: "/industries?industry=rental"
    },
    {
      title: "FSaaS",
      description: "Fleet Support as a Service - Complete charging infrastructure management",
      icon: Zap,
      link: "/fsaas"
    },
    {
      title: "On-Demand",
      description: "Flexible charging solutions for temporary or emergency needs",
      icon: Power,
      link: "/industries?industry=delivery"
    },
    {
      title: "Site Backup",
      description: "Reliable backup charging for your existing infrastructure",
      icon: Cable,
      link: "/industries?industry=developers"
    },
    {
      title: "ESG Reporting",
      description: "Comprehensive sustainability reporting for your electric fleet operations",
      icon: FileText,
      link: "/sustainability"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-chargetrux-darkblue to-black">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Charging Solutions for Every Fleet
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of mobile charging solutions designed to keep your fleet moving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-8 hover:bg-white/20 transition-all"
            >
              <solution.icon className="w-12 h-12 text-chargetrux-green mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <Button className="bg-chargetrux-green hover:bg-chargetrux-green/80" asChild>
                <Link to={solution.link}>Learn More</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;
