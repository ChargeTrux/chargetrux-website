
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle } from 'lucide-react';

const Slide2 = () => {
  return (
    <div className="slide-container">
      <div className="slide">
        {/* Header */}
        <div className="slide-header">
          <img src="/lovable-uploads/A_logo_of_the_company_name_&quot;ChargeTrux&quot;_is_display.png" alt="ChargeTrux Logo" className="h-8" />
          <h1 className="slide-title">EVs Break the Proven System</h1>
          <div className="slide-number">2</div>
        </div>

        {/* Content */}
        <div className="slide-content">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-red-500 mb-4 flex items-center justify-center gap-3">
              <AlertTriangle className="w-10 h-10" />
              Electric Vehicles Don't Fit the Model
            </h2>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-500 mb-3">⏱️ Time Problem</h3>
              <p className="text-gray-700">Charging takes hours, not minutes</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-500 mb-3">⚡ Capacity Issues</h3>
              <p className="text-gray-700">Limited on-site charging capacity creates bottlenecks</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-500 mb-3">🚗 Off-Site Charging</h3>
              <p className="text-gray-700">EVs often leave lot for public charging</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-500 mb-3">👥 Staff Juggling</h3>
              <p className="text-gray-700">Staff juggle charging with other critical tasks</p>
            </div>
          </div>

          {/* Central Issue */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-red-500 mb-4">Planning Complexity Disrupts Smooth Operations</h3>
            <p className="text-xl text-gray-700">The proven gas fleet model breaks down with electric vehicles</p>
          </div>

          {/* Badge */}
          <div className="flex justify-center mt-8">
            <Badge className="bg-red-600 text-white text-lg px-6 py-3">
              EVs = New Challenges, Same Expectations
            </Badge>
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

export default Slide2;
