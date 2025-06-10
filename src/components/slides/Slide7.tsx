
import React from 'react';
import { MapPin, CheckCircle, Rocket, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Slide7 = () => {
  return (
    <div className="slide-container">
      {/* Header */}
      <div className="slide-header">
        <img src="/lovable-uploads/A_logo_of_the_company_name_"ChargeTrux"_is_display.png" alt="ChargeTrux Logo" className="h-8" />
        <h1 className="slide-title">Expanding to LAX - Ready to Transform Your Fleet?</h1>
        <div className="slide-number">7</div>
      </div>

      {/* Content */}
      <div className="slide-content">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-chargetrux-green mb-4">Proven Results, Expanding Service</h2>
        </div>

        {/* Current Markets */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-chargetrux-blue mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            Current Markets
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-chargetrux-green/20 rounded-lg">
              <CheckCircle className="w-6 h-6 text-chargetrux-green" />
              <span className="text-white font-medium">San Francisco (SFO) - Active</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-chargetrux-green/20 rounded-lg">
              <CheckCircle className="w-6 h-6 text-chargetrux-green" />
              <span className="text-white font-medium">Oakland (OAK) - Active</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-chargetrux-green/20 rounded-lg">
              <CheckCircle className="w-6 h-6 text-chargetrux-green" />
              <span className="text-white font-medium">San Diego (SAN) - Active</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-chargetrux-blue/30 border border-chargetrux-blue rounded-lg">
              <Rocket className="w-6 h-6 text-chargetrux-blue" />
              <span className="text-chargetrux-blue font-medium">Los Angeles (LAX) - Now Booking</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-chargetrux-blue/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-chargetrux-blue mb-4">Next Steps</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chargetrux-blue rounded-full"></div>
                <span className="text-gray-200">Visit www.chargetrux.com</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chargetrux-blue rounded-full"></div>
                <span className="text-gray-200">Scan QR code for 15-minute consultation</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chargetrux-blue rounded-full"></div>
                <span className="text-gray-200">See how we streamline your EV operations</span>
              </li>
            </ul>
          </div>

          <div className="bg-chargetrux-green/20 rounded-lg p-6 text-center">
            <QrCode className="w-16 h-16 text-chargetrux-green mx-auto mb-4" />
            <p className="text-chargetrux-green font-medium mb-2">Scan for Quick Consultation</p>
            <Button className="bg-chargetrux-green hover:bg-chargetrux-green/90 text-white">
              Schedule Now
            </Button>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-chargetrux-green/30 border-2 border-chargetrux-green rounded-lg p-8 mt-8 text-center">
          <h3 className="text-3xl font-bold text-chargetrux-green mb-4">No Downtime. No Off-Site Costs. Just Ready EVs.</h3>
          <p className="text-xl text-white">Transform your fleet operations with ChargeTrux</p>
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

export default Slide7;
