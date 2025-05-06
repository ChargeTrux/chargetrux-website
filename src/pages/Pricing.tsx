
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, BadgePercent, CalendarDays, Check, ChartBar, CircleDollarSign, Clock, DollarSign, Globe, Scale, Shield, TrendingUp, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
        <section id="pricing-plans" className="mb-24">
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
                          <Truck className="h-3.5 w-3.5 text-[#00A859]" />
                        </span>
                        <span className="text-sm text-gray-700">Added to daily delivery routes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-50 p-1 rounded-full mt-0.5">
                          <Check className="h-3.5 w-3.5 text-[#00A859]" />
                        </span>
                        <span className="text-sm text-gray-700">Regular scheduled charging service</span>
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
                          <Truck className="h-3.5 w-3.5 text-[#FF9500]" />
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
                          <Truck className="h-3.5 w-3.5 text-purple-500" />
                        </span>
                        <span className="text-sm text-gray-700">Dedicated ChargeTrux units</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-50 p-1 rounded-full mt-0.5">
                          <Users className="h-3.5 w-3.5 text-purple-500" />
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

        {/* Detailed Plan Sections - Added to make Learn More buttons work */}
        <section className="mb-24">
          {/* On-Demand Plan Detail */}
          <div id="on-demand-detail" className="py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-xl p-8 border border-blue-800/30 mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-chargetrux-blue/20 p-3 rounded-full">
                  <DollarSign className="h-8 w-8 text-chargetrux-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-chargetrux-lighttext">On-Demand Charging Plan</h2>
                  <p className="text-gray-300">Flexible pay-as-you-go charging for your fleet</p>
                </div>
              </div>
              <div className="w-24 h-1 bg-chargetrux-blue mb-8"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-semibold text-chargetrux-lighttext mb-4">Plan Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-chargetrux-blue/20 p-1.5 rounded-full mt-1">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Zero Commitment Structure</span>
                        <span className="text-sm text-gray-300">Use our services only when you need them with no long-term contracts</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-chargetrux-blue/20 p-1.5 rounded-full mt-1">
                        <Clock className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Rapid Response Option</span>
                        <span className="text-sm text-gray-300">Premium 2-hour emergency response window available for critical charging needs</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-chargetrux-blue/20 p-1.5 rounded-full mt-1">
                        <Truck className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Multiple Vehicle Charging</span>
                        <span className="text-sm text-gray-300">Charge up to 5-7 vehicles per service call depending on battery capacity needs</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-chargetrux-blue/20 p-1.5 rounded-full mt-1">
                        <CircleDollarSign className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Premium Rate Structure</span>
                        <span className="text-sm text-gray-300">Standard market rates plus a premium for on-demand flexibility</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-chargetrux-lighttext mb-4">Ideal For</h3>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-800/20">
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-chargetrux-blue flex-shrink-0" />
                        <span>Fleet operators with occasional EV charging needs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-chargetrux-blue flex-shrink-0" />
                        <span>Businesses in the early stages of EV adoption</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-chargetrux-blue flex-shrink-0" />
                        <span>Emergency backup to supplement existing charging infrastructure</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-chargetrux-blue flex-shrink-0" />
                        <span>Fleet managers who need to fill charging gaps during peak periods</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-chargetrux-blue flex-shrink-0" />
                        <span>Companies testing mobile charging before committing to a contract</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-blue-800/10 mt-6">
                    <h4 className="text-lg font-medium text-chargetrux-lighttext mb-2">
                      Service Availability
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Subject to regional capacity and availability. For urgent needs, we recommend booking 48 hours in advance to ensure service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button onClick={() => scrollToSection('pricing-plans')} variant="viewDetails" className="flex items-center gap-2">
                  <ArrowUp className="h-4 w-4" /> Back to Plans
                </Button>
              </div>
            </motion.div>
          </div>

          {/* One-Year Contract Plan Detail */}
          <div id="one-year-detail" className="py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/30 to-green-800/10 rounded-xl p-8 border border-green-800/30 mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#00A859]/20 p-3 rounded-full">
                  <CalendarDays className="h-8 w-8 text-[#00A859]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-chargetrux-lighttext">One-Year Contract Plan</h2>
                  <p className="text-gray-300">Reliable scheduled charging with guaranteed service</p>
                </div>
              </div>
              <div className="w-24 h-1 bg-[#00A859] mb-8"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-semibold text-chargetrux-lighttext mb-4">Plan Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#00A859]/20 p-1.5 rounded-full mt-1">
                        <Check className="h-4 w-4 text-[#00A859]" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Predictable Monthly Pricing</span>
                        <span className="text-sm text-gray-300">Lock in fixed pricing for 12 months regardless of market fluctuations</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#00A859]/20 p-1.5 rounded-full mt-1">
                        <Clock className="h-4 w-4 text-[#00A859]" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Priority Scheduling</span>
                        <span className="text-sm text-gray-300">Guaranteed 4-hour service windows with preferential scheduling</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#00A859]/20 p-1.5 rounded-full mt-1">
                        <Truck className="h-4 w-4 text-[#00A859]" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Daily Route Integration</span>
                        <span className="text-sm text-gray-300">Your location is added to our daily delivery routes for reliable service</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#00A859]/20 p-1.5 rounded-full mt-1">
                        <Shield className="h-4 w-4 text-[#00A859]" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Service Level Agreement</span>
                        <span className="text-sm text-gray-300">Guaranteed availability with financial penalties if we miss service windows</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#00A859]/20 p-1.5 rounded-full mt-1">
                        <CircleDollarSign className="h-4 w-4 text-[#00A859]" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Preferred Pricing</span>
                        <span className="text-sm text-gray-300">15-25% lower per-kWh rates compared to on-demand service</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-chargetrux-lighttext mb-4">Ideal For</h3>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-green-800/20">
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#00A859] flex-shrink-0" />
                        <span>Fleets with established EV operations and predictable charging needs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#00A859] flex-shrink-0" />
                        <span>Businesses with regular delivery or service schedules</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#00A859] flex-shrink-0" />
                        <span>Operations requiring consistent charging reliability</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#00A859] flex-shrink-0" />
                        <span>Companies with nightly vehicle returns to a central depot</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#00A859] flex-shrink-0" />
                        <span>Businesses who want budget certainty for charging operations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-green-800/10 mt-6">
                    <h4 className="text-lg font-medium text-chargetrux-lighttext mb-2">
                      Contract Flexibility
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">
                      One-year plans include quarterly reviews with options to adjust service frequency based on changing fleet needs. Early termination options available with reduced penalty after 6 months.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button onClick={() => scrollToSection('pricing-plans')} variant="viewDetails" className="flex items-center gap-2">
                  <ArrowUp className="h-4 w-4" /> Back to Plans
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Multi-Year Seasonal Plan Detail */}
          <div id="multi-year-detail" className="py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-900/30 to-orange-800/10 rounded-xl p-8 border border-orange-800/30 mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#FF9500]/20 p-3 rounded-full">
                  <TrendingUp className="h-8 w-8 text-[#FF9500]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-chargetrux-lighttext">Multi-Year Seasonal Plan</h2>
                  <p className="text-gray-300">Flexible capacity for businesses with seasonal patterns</p>
                </div>
              </div>
              <div className="w-24 h-1 bg-[#FF9500] mb-8"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-semibold text-chargetrux-lighttext mb-4">Plan Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF9500]/20 p-1.5 rounded-full mt-1">
                        <Check className="h-4 w-4 text-[#FF9500]" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Long-Term Value</span>
                        <span className="text-sm text-gray-300">3+ year agreement with locked-in rates and seasonal adjustments</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF9500]/20 p-1.5 rounded-full mt-1">
                        <TrendingUp className="h-4 w-4 text-[#FF9500]" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Capacity Scaling</span>
                        <span className="text-sm text-gray-300">Pre-planned capacity increases during your peak operational seasons</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF9500]/20 p-1.5 rounded-full mt-1">
                        <Truck className="h-4 w-4 text-[#FF9500]" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Dedicated Peak Resources</span>
                        <span className="text-sm text-gray-300">Exclusive charging trucks assigned during your high-volume periods</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF9500]/20 p-1.5 rounded-full mt-1">
                        <CircleDollarSign className="h-4 w-4 text-[#FF9500]" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Maximum Cost Efficiency</span>
                        <span className="text-sm text-gray-300">30-40% lower per-kWh rates compared to on-demand pricing</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-chargetrux-lighttext mb-4">Ideal For</h3>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-orange-800/20">
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#FF9500] flex-shrink-0" />
                        <span>Delivery services with holiday peak seasons</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#FF9500] flex-shrink-0" />
                        <span>Agricultural operations with harvest schedules</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#FF9500] flex-shrink-0" />
                        <span>Tourism and hospitality businesses with seasonal customer patterns</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#FF9500] flex-shrink-0" />
                        <span>Construction companies with weather-dependent project timelines</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#FF9500] flex-shrink-0" />
                        <span>Retail businesses with predictable high and low seasons</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-orange-800/10 mt-6">
                    <h4 className="text-lg font-medium text-chargetrux-lighttext mb-2">
                      Seasonal Planning
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Annual capacity planning sessions are included to optimize your charging schedule for each year of the contract. Up to four seasonal adjustments per year with two months advance notice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button onClick={() => scrollToSection('pricing-plans')} variant="viewDetails" className="flex items-center gap-2">
                  <ArrowUp className="h-4 w-4" /> Back to Plans
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Enterprise Plan Detail */}
          <div id="enterprise-detail" className="py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl p-8 border border-purple-800/30 mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Users className="h-8 w-8 text-purple-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-chargetrux-lighttext">Custom Enterprise Plan</h2>
                  <p className="text-gray-300">Fully tailored solutions for large fleet operations</p>
                </div>
              </div>
              <div className="w-24 h-1 bg-purple-500 mb-8"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-semibold text-chargetrux-lighttext mb-4">Plan Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-purple-500/20 p-1.5 rounded-full mt-1">
                        <Truck className="h-4 w-4 text-purple-500" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Exclusive Equipment</span>
                        <span className="text-sm text-gray-300">Dedicated ChargeTrux units assigned exclusively to your operations</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-purple-500/20 p-1.5 rounded-full mt-1">
                        <Users className="h-4 w-4 text-purple-500" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">24/7 Dispatch Access</span>
                        <span className="text-sm text-gray-300">On-call dispatch team available round-the-clock for your fleet needs</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-purple-500/20 p-1.5 rounded-full mt-1">
                        <Shield className="h-4 w-4 text-purple-500" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Custom SLA Development</span>
                        <span className="text-sm text-gray-300">Tailored service level agreements designed around your specific operations</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-purple-500/20 p-1.5 rounded-full mt-1">
                        <ChartBar className="h-4 w-4 text-purple-500" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Advanced Analytics Portal</span>
                        <span className="text-sm text-gray-300">Custom-built dashboard with real-time fleet charging metrics and reports</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-purple-500/20 p-1.5 rounded-full mt-1">
                        <CircleDollarSign className="h-4 w-4 text-purple-500" />
                      </span>
                      <div>
                        <span className="text-white font-medium block mb-1">Enterprise Rate Structure</span>
                        <span className="text-sm text-gray-300">Our lowest available rates with custom volume-based pricing tiers</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-chargetrux-lighttext mb-4">Ideal For</h3>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-purple-800/20">
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-purple-500 flex-shrink-0" />
                        <span>National fleet operators with multiple regional hubs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-purple-500 flex-shrink-0" />
                        <span>Last-mile delivery companies with large EV deployments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-purple-500 flex-shrink-0" />
                        <span>Logistics providers transitioning to fully electric operations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-purple-500 flex-shrink-0" />
                        <span>Companies with complex charging requirements across multiple locations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-purple-500 flex-shrink-0" />
                        <span>Organizations with significant EV charging budget and strategic importance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-purple-800/10 mt-6">
                    <h4 className="text-lg font-medium text-chargetrux-lighttext mb-2">
                      Customization Options
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Enterprise plans include quarterly business reviews, executive reporting, and assigned account management. Integration with your fleet management systems available.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button onClick={() => scrollToSection('pricing-plans')} variant="viewDetails" className="flex items-center gap-2">
                  <ArrowUp className="h-4 w-4" /> Back to Plans
                </Button>
              </div>
            </motion.div>
          </div>
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
        
        {/* Service Locations Section */}
        <section className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/50 to-green-900/30 rounded-xl p-10 border border-blue-800/30"
          >
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-chargetrux-green mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-chargetrux-lighttext">Service Coverage</h2>
            </div>
            <div className="w-24 h-1 bg-chargetrux-blue mx-auto mb-8"></div>
            
            <p className="text-center text-lg text-chargetrux-lighttext mb-8 max-w-3xl mx-auto">
              Now servicing all major U.S. coastal regions—available in metropolitan areas and international airport zones across:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-800/20"
              >
                <h3 className="text-lg font-bold text-chargetrux-green mb-4 flex items-center">
                  <span className="bg-chargetrux-green/20 p-1.5 rounded-full mr-2">
                    <Check className="h-4 w-4 text-chargetrux-green" />
                  </span>
                  West Coast
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Seattle</li>
                  <li>Portland</li>
                  <li>San Francisco</li>
                  <li>Oakland</li>
                  <li>San Jose</li>
                  <li>Los Angeles</li>
                  <li>Orange County</li>
                  <li>San Diego</li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-800/20"
              >
                <h3 className="text-lg font-bold text-chargetrux-green mb-4 flex items-center">
                  <span className="bg-chargetrux-green/20 p-1.5 rounded-full mr-2">
                    <Check className="h-4 w-4 text-chargetrux-green" />
                  </span>
                  Gulf Coast & Southwest
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Phoenix</li>
                  <li>Albuquerque</li>
                  <li>Dallas</li>
                  <li>Houston</li>
                  <li>Austin</li>
                  <li>San Antonio</li>
                  <li>New Orleans</li>
                  <li>Tampa</li>
                  <li>Orlando</li>
                  <li>Fort Lauderdale</li>
                  <li>Miami</li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-800/20"
              >
                <h3 className="text-lg font-bold text-chargetrux-green mb-4 flex items-center">
                  <span className="bg-chargetrux-green/20 p-1.5 rounded-full mr-2">
                    <Check className="h-4 w-4 text-chargetrux-green" />
                  </span>
                  East Coast & Southeast
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Atlanta</li>
                  <li>Charlotte</li>
                  <li>Raleigh-Durham</li>
                  <li>Norfolk/Virginia Beach</li>
                  <li>Washington D.C.</li>
                  <li>Baltimore</li>
                  <li>Philadelphia</li>
                  <li>Newark</li>
                  <li>New York City</li>
                  <li>Boston</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
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

