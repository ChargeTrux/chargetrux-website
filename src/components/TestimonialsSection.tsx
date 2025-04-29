
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "ChargeTrux transformed our rental operations. We've increased EV availability by 40% without installing a single charging station.",
      author: "Sarah Johnson",
      position: "Fleet Operations Director",
      company: "Premier Rentals",
      logo: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png",
      avatar: "/lovable-uploads/567a5239-8c55-47c5-9f6a-041284ff6138.png",
    },
    {
      quote: "The flexibility of mobile charging allowed us to electrify our delivery fleet 6 months ahead of schedule.",
      author: "Michael Chen",
      position: "Sustainability Officer",
      company: "FastShip Logistics",
      logo: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png",
      avatar: "/lovable-uploads/6c363d9d-28fd-42f7-bfb2-cff24f8913fc.png",
    },
    {
      quote: "When our fixed charging infrastructure went down, ChargeTrux had us back up and running within hours instead of days.",
      author: "David Rodriguez",
      position: "Operations Manager",
      company: "Metro Transport Authority",
      logo: "/lovable-uploads/36188dbd-610f-4577-8787-67a7e25b04c5.png",
      avatar: "/lovable-uploads/8956cfb4-260b-4018-b40d-bd32fc141821.png",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayTime = 5000; // 5 seconds per testimonial

  const nextTestimonial = useCallback(() => {
    setCurrent(current => current === testimonials.length - 1 ? 0 : current + 1);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrent(current => current === 0 ? testimonials.length - 1 : current - 1);
  }, [testimonials.length]);

  // Auto-scroll functionality
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        nextTestimonial();
      }, autoPlayTime);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoPlay, nextTestimonial, autoPlayTime]);

  // Pause auto-scroll when user interacts with the carousel
  const handleInteraction = () => {
    setAutoPlay(false);
    // Resume auto-play after a period of inactivity
    const timeout = setTimeout(() => {
      setAutoPlay(true);
    }, 10000); // Resume after 10 seconds of inactivity

    return () => clearTimeout(timeout);
  };

  return (
    <div className="py-20 bg-chargetrux-darkblue text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Clients' Success Stories
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See how ChargeTrux is helping fleet operators across industries overcome EV charging challenges.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative" onMouseEnter={handleInteraction} onTouchStart={handleInteraction}>
          <div className="absolute top-0 left-0 -mt-6 -ml-4 text-chargetrux-blue">
            <Quote size={60} />
          </div>
          
          <div className="px-8 py-4">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl font-light mb-8 italic">
                "{testimonials[current].quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 border-2 border-chargetrux-blue mb-4">
                  <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].author} />
                  <AvatarFallback>{testimonials[current].author.charAt(0)}</AvatarFallback>
                </Avatar>
                {/* Removed the company logo image that was here */}
                <h4 className="font-bold text-lg">{testimonials[current].author}</h4>
                <p className="text-gray-300">{testimonials[current].position}</p>
                <p className="text-chargetrux-green">{testimonials[current].company}</p>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => {
                prevTestimonial();
                handleInteraction();
              }}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    handleInteraction();
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? "bg-chargetrux-green" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={() => {
                nextTestimonial();
                handleInteraction();
              }}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
