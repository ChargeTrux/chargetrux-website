
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FloatingScheduleButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium h-12 px-6 rounded-full shadow-lg"
        asChild
      >
        <Link to="/contact">Schedule a Demo</Link>
      </Button>
    </div>
  );
};

export default FloatingScheduleButton;
