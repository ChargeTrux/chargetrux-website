
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const ChargeTruxAPI = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API data loading
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Add animation effect every few seconds
    const interval = setInterval(() => {
      setIsHighlighted(true);
      setTimeout(() => setIsHighlighted(false), 1000);
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimeout);
    };
  }, []);

  const apiExample = `// Example API Response
{
  "session_id": "CS12345",
  "vehicle_id": "V-789",
  "start_time": "2025-04-29T14:30:00Z",
  "end_time": "2025-04-29T16:15:00Z",
  "energy_delivered": 87.4,
  "carbon_offset": 38.2,
  "charging_location": {
    "lat": 34.052235,
    "long": -118.243683
  },
  "status": "completed"
}`;

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Code className="w-5 h-5 text-chargetrux-green mr-2" />
          <span className="text-sm font-medium">ChargeTrux API</span>
        </div>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-gray-900 p-4 font-mono text-sm overflow-auto ${
          isHighlighted ? "ring-2 ring-chargetrux-blue" : ""
        }`}
        style={{ maxHeight: "400px" }}
      >
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4 bg-gray-800" />
            <Skeleton className="h-4 w-full bg-gray-800" />
            <Skeleton className="h-4 w-5/6 bg-gray-800" />
            <Skeleton className="h-4 w-2/3 bg-gray-800" />
            <Skeleton className="h-4 w-full bg-gray-800" />
            <Skeleton className="h-4 w-4/5 bg-gray-800" />
          </div>
        ) : (
          <pre className="text-green-400 whitespace-pre-wrap">{apiExample}</pre>
        )}
      </motion.div>
    </div>
  );
};

export default ChargeTruxAPI;
