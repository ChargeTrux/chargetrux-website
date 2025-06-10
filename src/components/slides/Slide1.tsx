
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Slide1 = () => {
  return (
    <div className="slide-container">
      <div className="slide">
        {/* Header */}
        <div className="slide-header">
          <img src="/lovable-uploads/A_logo_of_the_company_name_&quot;ChargeTrux&quot;_is_display.png" alt="ChargeTrux Logo" className="h-8" />
          <h1 className="slide-title">Gas Fleet Operations: Perfected Over Decades</h1>
          <div className="slide-number">1</div>
        </div>

        {/* Content */}
        <div className="slide-content">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">The Gold Standard of Fleet Operations</h2>
          </div>

          {/* Main Image */}
          <div className="relative mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/c61820a7-4170-4987-a2df-99408ae105de.png" 
              alt="Fleet Operations Workflow" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
            <Badge className="absolute top-4 right-4 bg-green-600 text-white text-lg px-4 py-2">
              Industry Standard - Efficient & Profitable
            </Badge>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Perfect Workflow</h3>
              <p className="text-lg text-gray-700">Vehicle Return → 5-Minute Refuel → Service & Clean → Revenue-Ready</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Proven Results</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 99% Uptime</li>
                <li>• Predictable Costs</li>
                <li>• Scalable Operations</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 md:col-span-2">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Operational Excellence</h3>
              <p className="text-lg text-gray-700">Proven logistics teams handle demand surges seamlessly with time-tested processes that maximize revenue</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="slide-footer">
          <div className="text-blue-600 font-medium">www.chargetrux.com</div>
          <div className="text-gray-500">Transforming Fleet Operations</div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
