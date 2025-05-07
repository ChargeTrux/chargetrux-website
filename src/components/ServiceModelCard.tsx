
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
      <Card className="h-full flex flex-col transition-shadow duration-300 hover:shadow-lg bg-chargetrux-darkblue border border-white/10">
        <CardHeader>
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 bg-blue-100 rounded-full">
              {icon}
            </div>
            <CardTitle className="text-xl text-white font-bold">{title}</CardTitle>
          </div>
          <CardDescription className="text-base text-white/80">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <Collapsible 
            open={isExpanded} 
            onOpenChange={setIsExpanded}
            className="w-full"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="viewDetails"
                className="w-full text-white bg-chargetrux-blue flex items-center justify-center mb-4 hover:bg-blue-600"
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
            </CollapsibleTrigger>
            
            <CollapsibleContent>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 bg-blue-900/50 p-4 rounded-lg border border-white/10"
              >
                <ul className="space-y-3">
                  {details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white">
                      <div className="mt-1 text-chargetrux-green font-bold">•</div>
                      <div>{detail}</div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceModelCard;
