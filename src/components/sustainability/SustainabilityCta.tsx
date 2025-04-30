
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Merge } from "lucide-react";

const SustainabilityCta = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-chargetrux-darkblue via-[#0954c5] to-chargetrux-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/931c0528-b8cb-40c5-b71e-22a3e25ebecf.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Fleet Operations?</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg mb-6 leading-relaxed text-white">
            Discover how ChargeTrux's mobile Level 3 charging solutions can support your organization's operational efficiency and sustainability goals.
          </p>
          <p className="text-lg mb-10 leading-relaxed text-white">
            Get mobile Level 3 charging where and when you need it, without the infrastructure headaches.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button size="lg" className="bg-chargetrux-green hover:bg-chargetrux-green/80 text-white px-8 py-6 text-lg flex items-center gap-2">
              Request Custom Quote
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Book Intro Call
            </Button>
          </div>
          <div className="flex items-center justify-center mt-10 text-white/80">
            <Merge className="h-5 w-5 mr-2" />
            <span>Streamlined solutions for sustainable fleet operations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilityCta;
