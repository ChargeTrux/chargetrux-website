
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Slide1 from '@/components/slides/Slide1';
import Slide2 from '@/components/slides/Slide2';
import Slide3 from '@/components/slides/Slide3';
import Slide4 from '@/components/slides/Slide4';
import Slide5 from '@/components/slides/Slide5';
import Slide6 from '@/components/slides/Slide6';
import Slide7 from '@/components/slides/Slide7';

const SlideDeck = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slides = [
    { component: Slide1, title: "Industry-Standard Workflow" },
    { component: Slide2, title: "EV Disruption" },
    { component: Slide3, title: "Process Breakdown" },
    { component: Slide4, title: "ChargeTrux Solution" },
    { component: Slide5, title: "Operational Efficiency" },
    { component: Slide6, title: "Cost Comparison" },
    { component: Slide7, title: "Call to Action" }
  ];

  const handlePrintPDF = () => {
    window.print();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-chargetrux-darkblue">
      {/* Navigation Header - Hidden in print */}
      <div className="print:hidden bg-chargetrux-darkblue border-b border-chargetrux-blue/20 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-chargetrux-blue hover:text-chargetrux-green transition-colors">
            ← Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <Button onClick={handlePrintPDF} className="bg-chargetrux-green hover:bg-chargetrux-green/90">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <div className="flex items-center gap-2">
              <Button 
                onClick={prevSlide} 
                variant="outline" 
                size="sm"
                disabled={currentSlide === 0}
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <span className="text-white min-w-[100px] text-center">
                {currentSlide + 1} of {slides.length}
              </span>
              <Button 
                onClick={nextSlide} 
                variant="outline" 
                size="sm"
                disabled={currentSlide === slides.length - 1}
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation - Hidden in print */}
      <div className="print:hidden bg-chargetrux-darkblue/50 p-2">
        <div className="container mx-auto">
          <div className="flex gap-2 overflow-x-auto">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`px-3 py-1 rounded text-sm whitespace-nowrap transition-colors ${
                  currentSlide === index 
                    ? 'bg-chargetrux-blue text-white' 
                    : 'bg-chargetrux-darkblue text-gray-300 hover:bg-chargetrux-blue/20'
                }`}
              >
                {index + 1}. {slide.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Single Slide View - Screen only */}
      <div className="print:hidden">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-[calc(100vh-120px)]"
        >
          <CurrentSlideComponent />
        </motion.div>
      </div>

      {/* All Slides View - Print only */}
      <div className="hidden print:block">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <div key={index} className="page-break-after">
              <SlideComponent />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideDeck;
