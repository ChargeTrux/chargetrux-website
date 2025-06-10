
import React from 'react';
import { Clock, DollarSign } from 'lucide-react';

const Slide3 = () => {
  return (
    <div className="slide-container">
      {/* Header */}
      <div className="slide-header">
        <img src="/lovable-uploads/A_logo_of_the_company_name_&quot;ChargeTrux&quot;_is_display.png" alt="ChargeTrux Logo" className="h-8" />
        <h1 className="slide-title">The Hidden Costs of Off-Site EV Charging</h1>
        <div className="slide-number">3</div>
      </div>

      {/* Content */}
      <div className="slide-content">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-red-400 mb-4 flex items-center justify-center gap-3">
            <DollarSign className="w-10 h-10" />
            Where Time and Money Disappear
          </h2>
        </div>

        {/* Time Breakdown */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-chargetrux-blue mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6" />
            Time Breakdown Per Vehicle
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-600">
              <span className="text-gray-200">Job assignment and coordination</span>
              <span className="text-red-400 font-semibold">15 min</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-600">
              <span className="text-gray-200">Drive to charging location</span>
              <span className="text-red-400 font-semibold">20 min</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-600">
              <span className="text-gray-200">Wait in line at public charger</span>
              <span className="text-red-400 font-semibold">15 min</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-600">
              <span className="text-gray-200">Actual charging time</span>
              <span className="text-red-400 font-semibold">30-60 min</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-600">
              <span className="text-gray-200">Return drive to lot</span>
              <span className="text-red-400 font-semibold">20 min</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-600">
              <span className="text-gray-200">Process completion and handoff</span>
              <span className="text-red-400 font-semibold">15 min</span>
            </div>
          </div>
        </div>

        {/* Total Impact */}
        <div className="bg-red-900/30 border-2 border-red-500 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold text-red-400 mb-4">Total Impact</h3>
          <p className="text-2xl text-white mb-4">Up to 2 Hours Labor Per Vehicle + Vehicle Downtime</p>
          <p className="text-xl text-gray-200">Additional Costs: Re-prepping vehicle after return</p>
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

export default Slide3;
