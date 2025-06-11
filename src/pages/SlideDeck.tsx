
import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SlideDeck = () => {
  const handleOpenFullscreen = () => {
    window.open('https://gamma.app/embed/7bkg8a5ncrsg8pz', '_blank');
  };

  return (
    <div className="min-h-screen bg-chargetrux-darkblue">
      {/* Navigation Header */}
      <div className="bg-chargetrux-darkblue border-b border-chargetrux-blue/20 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-chargetrux-blue hover:text-chargetrux-green transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <Button onClick={handleOpenFullscreen} className="bg-chargetrux-green hover:bg-chargetrux-green/90">
              <Download className="w-4 h-4 mr-2" />
              Open Fullscreen
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Gas Fleet Operations: Perfected Over Decades</h1>
          <p className="text-gray-300 text-lg">Interactive presentation slides</p>
        </div>

        {/* Embedded Slide Deck */}
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-2xl p-2">
            <iframe 
              src="https://gamma.app/embed/7bkg8a5ncrsg8pz" 
              style={{ width: '100%', maxWidth: '1200px', height: '675px' }}
              allow="fullscreen" 
              title="Gas Fleet Operations: Perfected Over Decades"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Use the controls within the presentation to navigate between slides
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideDeck;
