
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SustainabilityCta = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-chargetrux-darkblue to-chargetrux-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Fleet Operations?</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg mb-8">
            Discover how ChargeTrux's mobile Level 3 charging solutions can support your organization's operational efficiency and sustainability goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-chargetrux-green hover:bg-chargetrux-green/80 text-white px-8">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
              Download Sustainability Guide
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilityCta;
