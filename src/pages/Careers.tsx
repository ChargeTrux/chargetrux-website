
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Careers = () => {
  const openPositions = [
    {
      title: "EV Charging Engineer",
      department: "Engineering",
      location: "Los Angeles, CA",
      type: "Full-time",
    },
    {
      title: "Fleet Operations Specialist",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Sustainability Analyst",
      department: "ESG",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    {
      title: "Mobile App Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Customer Success Manager",
      department: "Sales",
      location: "Chicago, IL",
      type: "Full-time",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Careers | ChargeTrux</title>
        <meta name="description" content="Join the ChargeTrux team and help revolutionize mobile EV charging for commercial fleets." />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="bg-chargetrux-darkblue py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Join Our Mission to Electrify Fleets
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Help us build the future of sustainable transportation with innovative mobile charging solutions.
            </p>
            <Button 
              variant="ctaGreen" 
              size="lg" 
              className="mx-auto"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-chargetrux-darkblue">Why Join ChargeTrux?</h2>
            <p className="text-lg text-gray-700">
              We're a team of passionate innovators working to accelerate the adoption of electric vehicles in commercial fleets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-chargetrux-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-chargetrux-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-chargetrux-darkblue">Meaningful Impact</h3>
              <p className="text-gray-700">
                Your work directly contributes to reducing carbon emissions and building a more sustainable future.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-chargetrux-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-chargetrux-green" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-chargetrux-darkblue">Innovation-Focused</h3>
              <p className="text-gray-700">
                We're solving complex challenges with cutting-edge technology in an emerging industry.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-chargetrux-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-chargetrux-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-chargetrux-darkblue">Growth Opportunities</h3>
              <p className="text-gray-700">
                Develop your career in a fast-growing company at the intersection of clean energy and transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-chargetrux-darkblue">Open Positions</h2>
            <p className="text-lg text-gray-700">
              We're looking for talented individuals who are passionate about sustainability and innovation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((job, index) => (
              <Card key={index} className="overflow-hidden border border-gray-200 hover:border-chargetrux-blue transition-colors">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-6">
                    <div>
                      <h3 className="text-xl font-bold text-chargetrux-darkblue mb-2">{job.title}</h3>
                      <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" /> 
                          {job.department}
                        </span>
                        <span>{job.location}</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <Button variant="viewDetails" size="sm" className="mt-4 md:mt-0">
                      View Details 
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-6 text-gray-700">
              Don't see a position that matches your skills?
            </p>
            <Button variant="outline" className="border-chargetrux-blue text-chargetrux-blue hover:bg-chargetrux-blue/10">
              Send Open Application
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-chargetrux-darkblue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Employee Benefits</h2>
            <p className="text-lg text-gray-300">
              We take care of our team with competitive benefits and a supportive work environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-chargetrux-green">Health & Wellness</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Comprehensive health insurance</li>
                <li>Dental and vision coverage</li>
                <li>Mental health support</li>
                <li>Wellness program</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-chargetrux-green">Work-Life Balance</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Flexible work arrangements</li>
                <li>Generous paid time off</li>
                <li>Paid parental leave</li>
                <li>Work from home options</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-chargetrux-green">Growth & Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Professional development budget</li>
                <li>Learning opportunities</li>
                <li>Career advancement</li>
                <li>Mentorship programs</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-chargetrux-green">Additional Benefits</h3>
              <ul className="space-y-2 text-gray-300">
                <li>401(k) with company match</li>
                <li>Employee stock options</li>
                <li>EV charging benefits</li>
                <li>Team building events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Careers;
