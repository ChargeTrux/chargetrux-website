
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Car, BatteryCharging, Plug, CarFront, Zap, Cable, Power, Battery } from "lucide-react";

const FloatingIcon = ({ children, initialX, initialY, duration, scale = 1 }: { 
  children: React.ReactNode; 
  initialX: number; 
  initialY: number;
  duration: number;
  scale?: number;
}) => (
  <motion.div
    initial={{ x: initialX, y: initialY, opacity: 0, scale }}
    animate={{ 
      x: [initialX, initialX + 30, initialX - 20, initialX],
      y: [initialY, initialY - 30, initialY + 20, initialY],
      opacity: 1,
      scale: [scale, scale * 1.1, scale]
    }}
    transition={{ 
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute text-chargetrux-green/30"
  >
    {children}
  </motion.div>
);

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] bg-chargetrux-darkblue flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="bg-california-road absolute inset-0 bg-fixed"></div>
      </div>
      
      {/* Floating Icons */}
      <FloatingIcon initialX={50} initialY={100} duration={4} scale={1.5}>
        <Car size={60} />
      </FloatingIcon>
      <FloatingIcon initialX={200} initialY={200} duration={5} scale={1.3}>
        <BatteryCharging size={52} />
      </FloatingIcon>
      <FloatingIcon initialX={400} initialY={150} duration={6} scale={1.4}>
        <Plug size={56} />
      </FloatingIcon>
      <FloatingIcon initialX={600} initialY={250} duration={4.5} scale={1.6}>
        <Car size={68} />
      </FloatingIcon>
      <FloatingIcon initialX={150} initialY={300} duration={5.5} scale={1.3}>
        <Battery size={54} />
      </FloatingIcon>
      <FloatingIcon initialX={500} initialY={100} duration={4.8} scale={1.5}>
        <CarFront size={62} />
      </FloatingIcon>
      <FloatingIcon initialX={300} initialY={50} duration={5.2} scale={1.4}>
        <BatteryCharging size={58} />
      </FloatingIcon>
      <FloatingIcon initialX={700} initialY={150} duration={4.2} scale={1.3}>
        <Zap size={50} />
      </FloatingIcon>
      {/* Add more icons for variety */}
      <FloatingIcon initialX={100} initialY={250} duration={5.8} scale={1.4}>
        <Cable size={56} />
      </FloatingIcon>
      <FloatingIcon initialX={550} initialY={200} duration={6.2} scale={1.5}>
        <Power size={60} />
      </FloatingIcon>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="w-full md:w-1/2 text-white space-y-4 md:pr-12 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Mobile Level 3 Charging.
              <span className="text-chargetrux-green"> Delivered.</span>
            </h1>
            <p className="text-lg text-gray-300">
              Fleet charging where and when you need it. Up to 450 kWh per session. 
              4 vehicles at once.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-chargetrux-blue hover:bg-chargetrux-blue/80 text-white px-6">
                Schedule a Demo
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                Fleet Overview PDF
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/dfd350d4-2c2c-4203-9ef6-db635efcfa6c.png" 
                alt="ChargeTrux mobile charging unit" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-3 -right-3 bg-chargetrux-green text-white p-3 rounded-lg shadow-lg">
                <p className="font-bold">Up to 440kW</p>
                <p className="text-sm">Charging Power</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
