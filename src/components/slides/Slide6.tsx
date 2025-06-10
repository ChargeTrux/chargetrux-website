
import React from 'react';
import { DollarSign, Clock, TrendingDown } from 'lucide-react';

const Slide6 = () => {
  return (
    <div className="slide-container">
      {/* Header */}
      <div className="slide-header">
        <img src="/lovable-uploads/A_logo_of_the_company_name_"ChargeTrux"_is_display.png" alt="ChargeTrux Logo" className="h-8" />
        <h1 className="slide-title">Real Numbers: ChargeTrux vs. Current Process</h1>
        <div className="slide-number">6</div>
      </div>

      {/* Content */}
      <div className="slide-content">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-chargetrux-green mb-4 flex items-center justify-center gap-3">
            <TrendingDown className="w-10 h-10" />
            We Save Time, Not Just Power
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Header */}
            <div className="font-bold text-chargetrux-blue text-lg">Metric</div>
            <div className="font-bold text-red-400 text-lg text-center">Current Off-Site Process</div>
            <div className="font-bold text-chargetrux-green text-lg text-center">ChargeTrux On-Site</div>

            {/* Labor Cost */}
            <div className="text-gray-200 border-t border-gray-600 pt-3">Labor Cost</div>
            <div className="text-red-400 text-center border-t border-gray-600 pt-3">1-2 hours labor cost</div>
            <div className="text-chargetrux-green text-center border-t border-gray-600 pt-3">$28.50 flat fee</div>

            {/* Energy Cost */}
            <div className="text-gray-200 border-t border-gray-600 pt-3">Energy Cost</div>
            <div className="text-red-400 text-center border-t border-gray-600 pt-3">$0.40-$0.65 per kWh</div>
            <div className="text-chargetrux-green text-center border-t border-gray-600 pt-3">$0.40-$0.65 per kWh</div>

            {/* Travel Costs */}
            <div className="text-gray-200 border-t border-gray-600 pt-3">Travel Costs</div>
            <div className="text-red-400 text-center border-t border-gray-600 pt-3">Mileage + liability</div>
            <div className="text-chargetrux-green text-center border-t border-gray-600 pt-3">Zero travel costs</div>

            {/* Vehicle Prep */}
            <div className="text-gray-200 border-t border-gray-600 pt-3">Vehicle Prep</div>
            <div className="text-red-400 text-center border-t border-gray-600 pt-3">Re-prep required</div>
            <div className="text-chargetrux-green text-center border-t border-gray-600 pt-3">Prep during charging</div>

            {/* Turnaround Time */}
            <div className="text-gray-200 border-t border-gray-600 pt-3">Turnaround Time</div>
            <div className="text-red-400 text-center border-t border-gray-600 pt-3">24+ hour turnaround</div>
            <div className="text-chargetrux-green text-center border-t border-gray-600 pt-3">4-6 hour turnaround</div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-chargetrux-green/30 border-2 border-chargetrux-green rounded-lg p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-chargetrux-green" />
            <h3 className="text-2xl font-bold text-chargetrux-green">Bottom Line</h3>
          </div>
          <p className="text-2xl text-white">
            Average Turn Time: <span className="text-red-400">24+ hrs</span> → <span className="text-chargetrux-green">4-6 hrs</span> with ChargeTrux
          </p>
        </div>

        {/* ROI Highlight */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="bg-chargetrux-blue/20 rounded-lg p-4 text-center">
            <DollarSign className="w-8 h-8 text-chargetrux-blue mx-auto mb-2" />
            <div className="text-chargetrux-blue font-semibold">Lower Costs</div>
            <div className="text-sm text-gray-300">Flat fee pricing</div>
          </div>
          <div className="bg-chargetrux-green/20 rounded-lg p-4 text-center">
            <Clock className="w-8 h-8 text-chargetrux-green mx-auto mb-2" />
            <div className="text-chargetrux-green font-semibold">Faster Turnaround</div>
            <div className="text-sm text-gray-300">4-6 hour service</div>
          </div>
          <div className="bg-yellow-600/20 rounded-lg p-4 text-center">
            <TrendingDown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-yellow-400 font-semibold">Zero Downtime</div>
            <div className="text-sm text-gray-300">On-site service</div>
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

export default Slide6;
