
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-chargetrux-darkblue to-black">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            About ChargeTrux
          </h1>
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              ChargeTrux is revolutionizing the way commercial fleets approach EV charging. Our mission is to accelerate the adoption of electric vehicles by providing flexible, reliable, and efficient mobile charging solutions.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We believe in a future where electric vehicles are the norm, not the exception. Our mobile charging solutions are designed to remove the barriers to EV adoption by bringing the charging infrastructure directly to our customers.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Values</h2>
            <ul className="text-gray-300 space-y-4 mb-8">
              <li>• Innovation: Constantly pushing the boundaries of what's possible in mobile charging</li>
              <li>• Reliability: Providing dependable charging solutions when and where they're needed</li>
              <li>• Sustainability: Contributing to a cleaner, greener future</li>
              <li>• Customer Focus: Putting our clients' needs at the center of everything we do</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Impact</h2>
            <p className="text-gray-300 leading-relaxed">
              Since our founding, we've helped numerous fleets transition to electric vehicles by providing reliable mobile charging solutions. Our services have contributed to significant reductions in carbon emissions while helping our clients optimize their operations.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
