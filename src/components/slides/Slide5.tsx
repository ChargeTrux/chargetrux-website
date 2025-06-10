
import React from 'react';
import { Users, Zap, ArrowRight } from 'lucide-react';

const Slide5 = () => {
  return (
    <div className="slide-container">
      {/* Header */}
      <div className="slide-header">
        <img src="/lovable-uploads/A_logo_of_the_company_name_"ChargeTrux"_is_display.png" alt="ChargeTrux Logo" className="h-8" />
        <h1 className="slide-title">Let Your Teams Do What They Do Best</h1>
        <div className="slide-number">5</div>
      </div>

      {/* Content */}
      <div className="slide-content">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-chargetrux-blue mb-4">Parallel Operations = Maximum Efficiency</h2>
        </div>

        {/* Workflow Diagram */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Your Team */}
          <div className="bg-chargetrux-blue/20 border border-chargetrux-blue rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-chargetrux-blue" />
              <h3 className="text-2xl font-bold text-chargetrux-blue">Your Logistics Teams</h3>
            </div>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chargetrux-blue rounded-full"></div>
                Focus on gas vehicles (their expertise)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chargetrux-blue rounded-full"></div>
                No workflow disruption
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chargetrux-blue rounded-full"></div>
                Existing operations continue seamlessly
              </li>
            </ul>
          </div>

          {/* ChargeTrux Team */}
          <div className="bg-chargetrux-green/20 border border-chargetrux-green rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-chargetrux-green" />
              <h3 className="text-2xl font-bold text-chargetrux-green">ChargeTrux Team</h3>
            </div>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chargetrux-green rounded-full"></div>
                Handle all EV operations (our expertise)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chargetrux-green rounded-full"></div>
                EVs charge and prep simultaneously
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chargetrux-green rounded-full"></div>
                Charged EVs go directly to ready line
              </li>
            </ul>
          </div>
        </div>

        {/* New Workflow */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold text-chargetrux-green mb-6 text-center">The New Workflow</h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="bg-chargetrux-blue/20 px-4 py-2 rounded-lg text-center">
              <div className="text-chargetrux-blue font-semibold">Gas Vehicles</div>
              <div className="text-sm text-gray-300">Your Team</div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400" />
            <div className="bg-yellow-600/20 px-4 py-2 rounded-lg text-center">
              <div className="text-yellow-400 font-semibold">Parallel Process</div>
              <div className="text-sm text-gray-300">No Interference</div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400" />
            <div className="bg-chargetrux-green/20 px-4 py-2 rounded-lg text-center">
              <div className="text-chargetrux-green font-semibold">EV Operations</div>
              <div className="text-sm text-gray-300">ChargeTrux</div>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="bg-chargetrux-green/30 border-2 border-chargetrux-green rounded-lg p-6 mt-8 text-center">
          <h3 className="text-2xl font-bold text-chargetrux-green mb-2">Result</h3>
          <p className="text-xl text-white">Two Parallel Systems = Zero Bottlenecks</p>
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

export default Slide5;
