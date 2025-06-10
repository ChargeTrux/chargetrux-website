
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Slide1 = () => {
  return (
    <div className="slide-container">
      {/* Header */}
      <div className="slide-header">
        <img src="/lovable-uploads/A_logo_of_the_company_name_"ChargeTrux"_is_display.png" alt="ChargeTrux Logo" className="h-8" />
        <h1 className="slide-title">Gas Fleet Operations: Perfected Over Decades</h1>
        <div className="slide-number">1</div>
      </div>

      {/* Content */}
      <div className="slide-content">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-chargetrux-blue mb-4">The Gold Standard of Fleet Operations</h2>
        </div>

        {/* Main Image */}
        <div className="relative mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/c61820a7-4170-4987-a2df-99408ae105de.png" 
            alt="Fleet Operations Workflow" 
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
          <Badge className="absolute top-4 right-4 bg-chargetrux-green text-white text-lg px-4 py-2">
            Industry Standard - Efficient & Profitable
          </Badge>
        </div>

        {/* Key Points */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-chargetrux-green mb-4">Perfect Workflow</h3>
            <p className="text-lg text-gray-200">Vehicle Return → 5-Minute Refuel → Service & Clean → Revenue-Ready</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-chargetrux-green mb-4">Proven Results</h3>
            <ul className="text-gray-200 space-y-2">
              <li>• 99% Uptime</li>
              <li>• Predictable Costs</li>
              <li>• Scalable Operations</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:col-span-2">
            <h3 className="text-xl font-semibold text-chargetrux-green mb-4">Operational Excellence</h3>
            <p className="text-lg text-gray-200">Proven logistics teams handle demand surges seamlessly with time-tested processes that maximize revenue</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="slide-footer">
        <div className="text-chargetrux-blue font-medium">www.chargetrux.com</div>
        <div className="text-gray-400">Transforming Fleet Operations</div>
      </div>
    </div>
  );
};

export default Slide1;
