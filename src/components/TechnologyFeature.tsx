
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TechnologyFeatureProps {
  icon: string;
  title: string;
  description: string;
  variant?: "default" | "large";
}

const TechnologyFeature = ({ 
  icon, 
  title, 
  description, 
  variant = "default" 
}: TechnologyFeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={cn(
        "flex items-start p-4 bg-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-700",
        variant === "large" && "p-6"
      )}
    >
      <div className={cn(
        "flex-shrink-0 flex items-center justify-center bg-chargetrux-blue/20 rounded-full mr-4",
        variant === "default" ? "w-12 h-12 text-2xl" : "w-14 h-14 text-3xl"
      )}>
        {icon}
      </div>
      <div>
        <h4 className={cn(
          "font-semibold text-white mb-2",
          variant === "default" ? "text-lg" : "text-xl"
        )}>
          {title}
        </h4>
        <p className={cn(
          "text-gray-300",
          variant === "large" && "text-lg"
        )}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default TechnologyFeature;
