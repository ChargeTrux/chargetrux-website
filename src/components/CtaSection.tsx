
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-chargetrux-blue to-chargetrux-darkblue text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Electrify Your Fleet Operations?
          </h2>
          <p className="text-xl mb-10 text-gray-200">
            Get mobile Level 3 charging where and when you need it, without the infrastructure headaches.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-[#00cc66] hover:bg-[#00cc66]/90 text-white font-medium h-14 px-6 text-lg rounded-md"
            >
              Request Custom Quote
            </Button>
            <Button 
              variant="outline" 
              className="bg-[#002c77] border-2 border-white text-white hover:bg-[#002c77]/90 h-14 px-6 text-lg rounded-md"
            >
              Book Intro Call
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CtaSection;
