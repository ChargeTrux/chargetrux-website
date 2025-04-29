
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ChargeTruxAPI = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  
  useEffect(() => {
    // Add animation effect every few seconds
    const interval = setInterval(() => {
      setIsHighlighted(true);
      setTimeout(() => setIsHighlighted(false), 1000);
    }, 5000);
    
    return () => clearInterval(interval);
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-900 rounded-xl p-4 font-mono text-sm overflow-auto ${
        isHighlighted ? "ring-2 ring-chargetrux-blue" : ""
      }`}
      style={{ maxHeight: "400px" }}
    >
      <pre className="text-green-400 whitespace-pre-wrap">{apiExample}</pre>
    </motion.div>
  );
};

export default ChargeTruxAPI;
