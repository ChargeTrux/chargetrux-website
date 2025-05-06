
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-chargetrux-darkblue">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300">Choose the plan that's right for your business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Pricing cards would go here */}
        </div>

        <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Service Coverage</h2>
          <div>
            <p className="mb-4 text-gray-700">
              Now servicing all major U.S. coastal regions—available in metropolitan areas and international airport zones across:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="font-medium text-chargetrux-darkblue mb-1">West Coast:</p>
                <p className="text-gray-700">Seattle, Portland, San Francisco, Oakland, San Jose, Los Angeles, Orange County, San Diego</p>
              </div>
              <div>
                <p className="font-medium text-chargetrux-darkblue mb-1">Gulf Coast & Southwest:</p>
                <p className="text-gray-700">Phoenix, Albuquerque, Dallas, Houston, Austin, San Antonio, New Orleans, Tampa, Orlando, Fort Lauderdale, Miami</p>
              </div>
              <div>
                <p className="font-medium text-chargetrux-darkblue mb-1">East Coast & Southeast:</p>
                <p className="text-gray-700">Atlanta, Charlotte, Raleigh-Durham, Norfolk/Virginia Beach, Washington D.C., Baltimore, Philadelphia, Newark, New York City, Boston</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          {/* FAQ content would go here */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
