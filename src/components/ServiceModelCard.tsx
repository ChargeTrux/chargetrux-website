
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceModelCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  index: number;
}

const ServiceModelCard = ({
  icon,
  title,
  description,
  details,
  index
}: ServiceModelCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col transition-shadow duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 bg-blue-50 rounded-full">
              {icon}
            </div>
            <CardTitle className="text-xl text-chargetrux-darkblue">{title}</CardTitle>
          </div>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <Button
            variant="ghost"
            className="text-white bg-chargetrux-blue flex items-center justify-center mb-4 hover:bg-blue-600"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                Hide Details <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                View Details <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2"
            >
              <ul className="space-y-2 pl-4">
                {details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="mt-1 text-chargetrux-blue">•</div>
                    <div>{detail}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceModelCard;
