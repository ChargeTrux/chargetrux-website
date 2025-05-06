
import { motion } from "framer-motion";
import { ArrowDown, BadgePercent, CalendarDays, Check, ChartBar, CircleDollarSign, DollarSign, Scale, TrendingUp, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  // Function to handle scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <div className="bg-gradient-to-b from-chargetrux-darkblue to-black min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl font-bold text-chargetrux-lighttext mb-6 block text-center mx-auto">
            Transparent EV Charging Pricing For Fleets
          </h1>
          <div className="w-24 h-1.5 bg-chargetrux-green mx-auto mb-8"></div>
          <p className="text-base md:text-lg text-chargetrux-lighttext max-w-3xl mx-auto font-medium">
            Flexible Solutions That Scale With Your EV Fleet Needs
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mt-6">
            ChargeTrux provides clear, transparent pricing options designed specifically for commercial fleet operations. 
            Our mobile Level 3 charging solutions eliminate the need for expensive infrastructure investments while 
            offering predictable operational costs that can be tailored to your specific fleet requirements.
          </p>
        </motion.div>
        
        {/* Pricing Plans Grid - 4 columns side by side */}
        <section className="mb-24">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="text-xl md:text-2xl font-bold text-center text-chargetrux-lighttext mb-6 block text-center mx-auto">
            Choose Your Pricing Plan
          </motion.h2>
          <p className="text-center text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Select the plan that best fits your fleet's charging needs and operational requirements
          </p>
          <div className="w-24 h-1.5 bg-chargetrux-green mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* Plan 1: On-Demand */}
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="group">
              <Card className="h-full border-2 border-chargetrux-blue hover:border-chargetrux-green transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg flex flex-col">
                <div className="h-2 bg-chargetrux-blue w-full"></div>
                <CardHeader className="bg-blue-50 border-b">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-chargetrux-darkblue">On-Demand</CardTitle>
                      <CardDescription className="text-base pt-1">
                        Pay-as-you-go flexibility
                      </CardDescription>
                    </div>
                    <div className="flex text-chargetrux-darkblue font-bold">
                      <DollarSign className="h-5 w-5" />
                      <DollarSign className="h-5 w-5" />
                      <DollarSign className="h-5 w-5" />
                      <DollarSign className="h-5 w-5" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 pb-8 bg-gradient-to-br from-white to-blue-50 flex-grow flex flex-col justify-between">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="bg-blue-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-chargetrux-blue" />
                        </span>
                        <span className="text-sm text-gray-700">No long-term commitments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-blue-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-chargetrux-blue" />
                        </span>
                        <span className="text-sm text-gray-700">2-hour emergency response available</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-blue-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-chargetrux-blue" />
                        </span>
                        <span className="text-sm text-gray-700">Multiple vehicles per service call</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-blue-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-chargetrux-blue" />
                        </span>
                        <span className="text-sm text-gray-700">Highest per-kWh rate</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-3 italic">
                      Best for occasional or emergency needs
                    </p>
                    <Button onClick={() => scrollToSection('on-demand-detail')} className="w-full bg-chargetrux-blue hover:bg-chargetrux-blue/90">
                      Learn More <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Plan 2: One-Year Contract */}
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="group">
              <Card className="h-full border-2 border-[#00A859] hover:border-chargetrux-blue transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg flex flex-col">
                <div className="h-2 bg-[#00A859] w-full"></div>
                <CardHeader className="bg-green-50 border-b">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-chargetrux-darkblue">One-Year Contract</CardTitle>
                      <CardDescription className="text-base pt-1">
                        Guaranteed 12-month service
                      </CardDescription>
                    </div>
                    <div className="flex text-chargetrux-darkblue font-bold">
                      <DollarSign className="h-5 w-5" />
                      <DollarSign className="h-5 w-5" />
                      <DollarSign className="h-5 w-5" />
                      <span className="h-5 w-5"></span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 pb-8 bg-gradient-to-br from-white to-green-50 flex-grow flex flex-col justify-between">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="bg-green-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-[#00A859]" />
                        </span>
                        <span className="text-sm text-gray-700">Fixed monthly pricing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-[#00A859]" />
                        </span>
                        <span className="text-sm text-gray-700">Priority scheduling with 4-hour windows</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-[#00A859]" />
                        </span>
                        <span className="text-sm text-gray-700">Added to daily delivery routes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-[#00A859]" />
                        </span>
                        <span className="text-sm text-gray-700">Lower per-kWh rates</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-3 italic">
                      Best for regular scheduled charging
                    </p>
                    <Button onClick={() => scrollToSection('one-year-detail')} className="w-full bg-[#00A859] hover:bg-[#00A859]/90">
                      Learn More <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Plan 3: Multi-Year Seasonal Contract */}
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }} viewport={{
              once: true
            }} className="group">
              <Card className="h-full border-2 border-[#FF9500] hover:border-chargetrux-blue transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg flex flex-col">
                <div className="h-2 bg-[#FF9500] w-full"></div>
                <CardHeader className="bg-orange-50 border-b">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-chargetrux-darkblue">Multi-Year Seasonal</CardTitle>
                      <CardDescription className="text-base pt-1">
                        Flexible capacity adjustments
                      </CardDescription>
                    </div>
                    <div className="flex text-chargetrux-darkblue font-bold">
                      <DollarSign className="h-5 w-5" />
                      <DollarSign className="h-5 w-5" />
                      <span className="h-5 w-5"></span>
                      <span className="h-5 w-5"></span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 pb-8 bg-gradient-to-br from-white to-orange-50 flex-grow flex flex-col justify-between">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-[#FF9500]" />
                        </span>
                        <span className="text-sm text-gray-700">3+ year commitment with seasonal flexibility</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-[#FF9500]" />
                        </span>
                        <span className="text-sm text-gray-700">Capacity adjustments for peak seasons</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-[#FF9500]" />
                        </span>
                        <span className="text-sm text-gray-700">Dedicated trucks during peak periods</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-[#FF9500]" />
                        </span>
                        <span className="text-sm text-gray-700">Significantly reduced per-kWh rates</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-3 italic">
                      Best for seasonal operational patterns
                    </p>
                    <Button onClick={() => scrollToSection('multi-year-detail')} className="w-full bg-[#FF9500] hover:bg-[#FF9500]/90">
                      Learn More <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Plan 4: Custom Enterprise Plan */}
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} viewport={{
              once: true
            }} className="group">
              <Card className="h-full border-2 border-purple-500 hover:border-chargetrux-blue transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg flex flex-col">
                <div className="h-2 bg-purple-500 w-full"></div>
                <CardHeader className="bg-purple-50 border-b">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-chargetrux-darkblue">Custom Enterprise</CardTitle>
                      <CardDescription className="text-base pt-1">
                        Tailored solutions for large fleets
                      </CardDescription>
                    </div>
                    <div className="flex text-chargetrux-darkblue font-bold">
                      <DollarSign className="h-5 w-5" />
                      <span className="h-5 w-5"></span>
                      <span className="h-5 w-5"></span>
                      <span className="h-5 w-5"></span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 pb-8 bg-gradient-to-br from-white to-purple-50 flex-grow flex flex-col justify-between">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-purple-500" />
                        </span>
                        <span className="text-sm text-gray-700">Dedicated ChargeTrux units</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-purple-500" />
                        </span>
                        <span className="text-sm text-gray-700">On-call dispatch availability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-purple-500" />
                        </span>
                        <span className="text-sm text-gray-700">Custom SLA for your specific needs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-purple-500" />
                        </span>
                        <span className="text-sm text-gray-700">Lowest per-kWh enterprise rates</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-3 italic">
                      Best for large fleet operations
                    </p>
                    <Button onClick={() => scrollToSection('enterprise-detail')} className="w-full bg-purple-500 hover:bg-purple-500/90">
                      Learn More <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="bg-gradient-to-br from-gray-50 to-green-50/30 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-chargetrux-darkblue mb-6">Common Benefits Across All Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-green-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <CircleDollarSign className="h-6 w-6 text-chargetrux-green" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">No Infrastructure Investment</h4>
                <p className="text-sm text-gray-700">Eliminate the costs of installing permanent charging stations</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-green-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <Truck className="h-6 w-6 text-chargetrux-green" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">Mobile Level 3 Charging</h4>
                <p className="text-sm text-gray-700">High-speed DC fast charging comes directly to your fleet</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-green-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <ChartBar className="h-6 w-6 text-chargetrux-green" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">Fleet Analytics</h4>
                <p className="text-sm text-gray-700">Detailed reporting and operational insights</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-green-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-chargetrux-green" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">Energy Management</h4>
                <p className="text-sm text-gray-700">Avoid utility demand charges and peak pricing</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-green-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <BadgePercent className="h-6 w-6 text-chargetrux-green" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">Emissions Reporting</h4>
                <p className="text-sm text-gray-700">Detailed ESG documentation included with all plans</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* On-Demand Section */}
        <section id="on-demand-detail" className="mb-24 pt-16 -mt-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="text-xl md:text-2xl font-bold text-center text-chargetrux-lighttext mb-6 block text-center mx-auto">
            On-Demand Sessions
          </motion.h2>
          <p className="text-center text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Charging When You Need It, No Commitments Required
          </p>
          <div className="w-24 h-1.5 bg-chargetrux-blue mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 max-w-2xl mx-auto mb-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="group">
              <Card className="h-full border-2 border-chargetrux-blue hover:border-chargetrux-blue transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg">
                <div className="h-2 bg-chargetrux-blue w-full"></div>
                <CardHeader className="bg-blue-50 border-b">
                  <CardTitle className="text-2xl text-chargetrux-darkblue">Flexible Pay-Per-Charge Model</CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    Only pay for the energy you need, when you need it
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 bg-gradient-to-br from-white to-blue-50">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Base dispatch fee</span>
                        <span className="text-gray-700"> + transparent per kWh delivered rate</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">No long-term commitments</span>
                        <span className="text-gray-700"> required</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">2-hour emergency response option</span>
                        <span className="text-gray-700"> available</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Multiple vehicles charged</span>
                        <span className="text-gray-700"> per service call</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Pay only for energy delivered</span>
                        <span className="text-gray-700"> to your fleet</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Volume discounts available</span>
                        <span className="text-gray-700"> for frequent users</span>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <p className="font-medium text-chargetrux-darkblue">
                      Ideal for: <span className="font-normal text-gray-700">Occasional charging needs, emergency backup, supplemental capacity</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-chargetrux-darkblue mb-6">On-Demand Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <CircleDollarSign className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">Maximum Flexibility</h4>
                <p className="text-sm text-gray-700">Request charging service only when needed</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <Scale className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">No Upfront Investment</h4>
                <p className="text-sm text-gray-700">Zero capital expenditure required</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <ChartBar className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">Scale With Demand</h4>
                <p className="text-sm text-gray-700">Perfect for growing or transitioning fleets</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">Location Freedom</h4>
                <p className="text-sm text-gray-700">Service available anywhere in our coverage areas</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <ChartBar className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">Multi-Vehicle Efficiency</h4>
                <p className="text-sm text-gray-700">Charge multiple vehicles during a single service call</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* One-Year Contract Section */}
        <section id="one-year-detail" className="mb-24 pt-16 -mt-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="text-xl md:text-2xl font-bold text-center text-chargetrux-lighttext mb-6 block text-center mx-auto">
            One-Year Contract Plan
          </motion.h2>
          <p className="text-center text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Reliable, Scheduled Charging for Consistent Fleet Operations
          </p>
          <div className="w-24 h-1.5 bg-[#00A859] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 max-w-2xl mx-auto mb-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="group">
              <Card className="h-full border-2 border-[#00A859] rounded-lg hover:border-[#00A859] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg">
                <div className="h-2 bg-[#00A859] w-full"></div>
                <CardHeader className="bg-green-50 border-b">
                  <CardTitle className="text-2xl text-chargetrux-darkblue">Monthly Contract Benefits</CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    Predictable charging with 12-month commitment
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 bg-gradient-to-br from-white to-green-50">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="bg-green-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-[#00A859]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Fixed monthly fee</span>
                        <span className="text-gray-700"> based on fleet size and energy requirements</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-[#00A859]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Unlimited scheduled charging sessions</span>
                        <span className="text-gray-700"> within your contracted energy allocation</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-[#00A859]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Priority service scheduling</span>
                        <span className="text-gray-700"> with guaranteed 4-hour service windows</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-[#00A859]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Added to daily delivery routes</span>
                        <span className="text-gray-700"> for consistent charging schedule</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-[#00A859]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Dedicated account manager</span>
                        <span className="text-gray-700"> for streamlined operations</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-[#00A859]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Fleet-wide analytics dashboard</span>
                        <span className="text-gray-700"> for operational insights</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-50 p-1.5 rounded-full mt-0.5">
                        <Truck className="h-4 w-4 text-[#00A859]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Shared ChargeTrux service vehicles</span>
                        <span className="text-gray-700"> on regular routes with priority scheduling</span>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <p className="font-medium text-chargetrux-darkblue">
                      Ideal for: <span className="font-normal text-gray-700">Regular depot charging, scheduled routes, predictable energy needs</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Multi-Year Seasonal Contract Section */}
        <section id="multi-year-detail" className="mb-24 pt-16 -mt-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="text-xl md:text-2xl font-bold text-center text-chargetrux-lighttext mb-6 block text-center mx-auto">
            Multi-Year Seasonal Contract
          </motion.h2>
          <p className="text-center text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Flexible Charging Options for Operations with Seasonal Variations
          </p>
          <div className="w-24 h-1.5 bg-[#FF9500] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 max-w-2xl mx-auto mb-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="group">
              <Card className="h-full border-2 border-[#FF9500] rounded-lg hover:border-[#FF9500] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg">
                <div className="h-2 bg-[#FF9500] w-full"></div>
                <CardHeader className="bg-orange-50 border-b">
                  <CardTitle className="text-2xl text-chargetrux-darkblue">Seasonal Contract Plans</CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    Flexible charging options with multi-year commitment
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 pb-8 bg-gradient-to-br from-white to-orange-50">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="bg-orange-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-[#FF9500]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">3, 4, or 5-year commitments</span>
                        <span className="text-gray-700"> with significantly scaled pricing</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-orange-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-[#FF9500]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Seasonal capacity adjustments</span>
                        <span className="text-gray-700"> to match operational intensity</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-orange-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-[#FF9500]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Scheduled high-capacity charging</span>
                        <span className="text-gray-700"> during peak seasons</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-orange-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-[#FF9500]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Reduced rates during contract extension periods</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-orange-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-[#FF9500]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Mid-season plan adjustments available</span>
                        <span className="text-gray-700"> with 30-day notice</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-orange-50 p-1.5 rounded-full mt-0.5">
                        <Truck className="h-4 w-4 text-[#FF9500]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Dedicated trucks during peak periods</span>
                        <span className="text-gray-700"> based on seasonal needs</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-orange-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-[#FF9500]" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Combined with on-demand options</span>
                        <span className="text-gray-700"> for maximum flexibility</span>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <p className="font-medium text-chargetrux-darkblue">
                      Ideal for: <span className="font-normal text-gray-700">Delivery fleets with holiday surges, tourism operations, agricultural transport</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Plan Section */}
        <section id="enterprise-detail" className="mb-24 pt-16 -mt-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="text-xl md:text-2xl font-bold text-center text-chargetrux-lighttext mb-6 block text-center mx-auto">
            Custom Enterprise Packages
          </motion.h2>
          <p className="text-center text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Tailored Solutions for Complex Fleet Operations
          </p>
          <div className="w-24 h-1.5 bg-purple-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 max-w-3xl mx-auto mb-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="group">
              <Card className="h-full border-2 border-purple-500 bg-gradient-to-br from-white to-purple-50 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-2 bg-purple-500 w-full"></div>
                <CardHeader className="bg-purple-500 bg-opacity-10 border-b">
                  <CardTitle className="text-2xl text-chargetrux-darkblue">Enterprise Fleet Solutions</CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    Comprehensive charging strategies for complex fleet operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="bg-purple-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-purple-500" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Tiered pricing by fleet size</span>
                        <span className="text-gray-700"> for maximum cost efficiency</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-purple-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-purple-500" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Multi-region coverage</span>
                        <span className="text-gray-700"> with consistent service levels</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-purple-50 p-1.5 rounded-full mt-0.5">
                        <Truck className="h-4 w-4 text-purple-500" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Dedicated ChargeTrux units</span>
                        <span className="text-gray-700"> stationed at your facilities</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-purple-50 p-1.5 rounded-full mt-0.5">
                        <Users className="h-4 w-4 text-purple-500" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">On-call dispatch availability</span>
                        <span className="text-gray-700"> for emergency charging needs</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-purple-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-purple-500" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Custom usage frequency options</span>
                        <span className="text-gray-700"> based on operational patterns</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-purple-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-purple-500" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Integrated reporting systems</span>
                        <span className="text-gray-700"> compatible with fleet management software</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-purple-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-purple-500" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Dedicated service team</span>
                        <span className="text-gray-700"> with specialized fleet experience</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-purple-50 p-1.5 rounded-full mt-0.5">
                        <CalendarDays className="h-4 w-4 text-purple-500" />
                      </span>
                      <div>
                        <span className="text-chargetrux-darkblue font-medium">Customized SLAs</span>
                        <span className="text-gray-700"> to meet your specific operational requirements</span>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <p className="font-medium text-chargetrux-darkblue">
                      Ideal for: <span className="font-normal text-gray-700">Large fleets, multi-city operations, specialized vehicle requirements</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-chargetrux-darkblue mb-6">Enterprise Package Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-purple-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <CircleDollarSign className="h-6 w-6 text-purple-500" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">Consolidated Billing</h4>
                <p className="text-sm text-gray-700">Streamlined administrative processes across multiple locations</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-purple-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <Scale className="h-6 w-6 text-purple-500" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">Volume Discounts</h4>
                <p className="text-sm text-gray-700">Competitive rates based on fleet size and energy consumption</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-purple-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <ChartBar className="h-6 w-6 text-purple-500" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">Custom Reporting</h4>
                <p className="text-sm text-gray-700">Tailored analytics for your specific operational metrics</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-purple-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-500" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">API Integration</h4>
                <p className="text-sm text-gray-700">Connect charging data with your existing fleet management systems</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-purple-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <Truck className="h-6 w-6 text-purple-500" />
                </div>
                <h4 className="font-semibold mb-2 text-chargetrux-darkblue">Dedicated Units</h4>
                <p className="text-sm text-gray-700">ChargeTrux vehicles assigned exclusively to your operation</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-24">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="text-xl md:text-2xl font-bold text-center text-chargetrux-lighttext mb-6 block text-center mx-auto">
            Transparent Value
          </motion.h2>
          <p className="text-center text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            What Sets ChargeTrux Pricing Apart
          </p>
          <div className="w-24 h-1.5 bg-chargetrux-blue mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center h-full hover:shadow-md hover:border-chargetrux-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-blue-50 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <CircleDollarSign className="h-8 w-8 text-chargetrux-blue" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-chargetrux-darkblue">No Hidden Costs</h4>
                <p className="text-gray-700">
                  Our pricing includes all operational costs with no surprise fees, surcharges, or add-ons.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center h-full hover:shadow-md hover:border-chargetrux-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-blue-50 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <Scale className="h-8 w-8 text-chargetrux-blue" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-chargetrux-darkblue">Energy-Based Billing</h4>
                <p className="text-gray-700">
                  You only pay for the actual energy delivered to your vehicles, not for connection time or session fees.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center h-full hover:shadow-md hover:border-chargetrux-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-blue-50 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-chargetrux-darkblue">Scalable Solutions</h4>
                <p className="text-gray-700">
                  Start with what you need now and easily scale as your EV fleet grows without penalties or contract renegotiations.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} viewport={{
            once: true
          }} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center h-full hover:shadow-md hover:border-chargetrux-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-blue-50 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <ChartBar className="h-8 w-8 text-chargetrux-blue" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-chargetrux-darkblue">Operational Insights</h4>
                <p className="text-gray-700">
                  All plans include robust data reporting to help optimize your fleet's energy consumption and operational efficiency.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="bg-gradient-to-br from-chargetrux-darkblue to-chargetrux-blue text-white p-12 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-chargetrux-lighttext">Ready to Power Your Fleet's Future?</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-chargetrux-lighttext">
              Our pricing specialists will work with you to develop a customized charging solution that maximizes 
              operational efficiency while minimizing costs for your specific fleet profile.
            </p>
            <Button className="bg-[#00cc66] hover:bg-[#00cc66]/90 text-white font-medium h-14 px-6 text-lg rounded-md" onClick={() => window.location.href = '/contact'}>
              Request Custom Quote
            </Button>
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>;
};
export default Pricing;
