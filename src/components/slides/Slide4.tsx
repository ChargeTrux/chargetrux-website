
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Zap, CheckCircle } from 'lucide-react';

const Slide4 = () => {
  return (
    <div className="slide-container">
      {/* Header */}
      <div className="slide-header">
        <img src="/lovable-uploads/A_logo_of_the_company_name_"ChargeTrux"_is_display.png" alt="ChargeTrux Logo" className="h-8" />
        <h1 className="slide-title">ChargeTrux: Your Dedicated EV Operations Partner</h1>
        <div className="slide-number">4</div>
      </div>

      {/* Content */}
      <div className="slide-content">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-chargetrux-green mb-4 flex items-center justify-center gap-3">
            <Zap className="w-10 h-10" />
            Mobile Level 3 Charging + Complete Fleet Service
          </h2>
        </div>

        {/* Solution Points */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-chargetrux-green/20 border border-chargetrux-green/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-chargetrux-green" />
              <h3 className="text-xl font-semibold text-chargetrux-green">On-Site Charging</h3>
            </div>
            <p className="text-gray-200">No construction, no grid upgrades needed</p>
          </div>
          <div className="bg-chargetrux-green/20 border border-chargetrux-green/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-chargetrux-green" />
              <h3 className="text-xl font-semibold text-chargetrux-green">End-to-End Management</h3>
            </div>
            <p className="text-gray-200">Complete EV fleet management solution</p>
          </div>
          <div className="bg-chargetrux-green/20 border border-chargetrux-green/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-chargetrux-green" />
              <h3 className="text-xl font-semibold text-chargetrux-green">Parallel Operations</h3>
            </div>
            <p className="text-gray-200">Vehicle prep during charging time</p>
          </div>
          <div className="bg-chargetrux-green/20 border border-chargetrux-green/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-chargetrux-green" />
              <h3 className="text-xl font-semibold text-chargetrux-green">Dedicated Expertise</h3>
            </div>
            <p className="text-gray-200">Professional EV specialists you can count on</p>
          </div>
        </div>

        {/* Service Extras */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold text-chargetrux-blue mb-4">Included Services</h3>
          <div className="flex flex-wrap gap-4">
            <span className="bg-chargetrux-blue/20 text-chargetrux-blue px-4 py-2 rounded-full">Professional Maintenance Checks</span>
            <span className="bg-chargetrux-blue/20 text-chargetrux-blue px-4 py-2 rounded-full">Wiper Fluid</span>
            <span className="bg-chargetrux-blue/20 text-chargetrux-blue px-4 py-2 rounded-full">Tire Pressure</span>
            <span className="bg-chargetrux-blue/20 text-chargetrux-blue px-4 py-2 rounded-full">Basic Maintenance</span>
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center">
          <Badge className="bg-chargetrux-green text-white text-lg px-6 py-3">
            Mobile Power + Fleet Service = Complete Solution
          </Badge>
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

export default Slide4;
