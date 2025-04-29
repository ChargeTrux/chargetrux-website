import { motion } from "framer-motion";
import { Check, ChartBar, CircleDollarSign, Scale, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="bg-gradient-to-b from-chargetrux-darkblue to-black min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Transparent EV Charging Pricing For Fleets
          </h1>
          <div className="w-24 h-1.5 bg-chargetrux-green mx-auto mb-8"></div>
          <p className="text-xl text-white max-w-3xl mx-auto font-medium">
            Flexible Solutions That Scale With Your EV Fleet Needs
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mt-6">
            ChargeTrux provides clear, transparent pricing options designed specifically for commercial fleet operations. 
            Our mobile Level 3 charging solutions eliminate the need for expensive infrastructure investments while 
            offering predictable operational costs that can be tailored to your specific fleet requirements.
          </p>
        </motion.div>

        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center text-white mb-6"
          >
            Contract Charging Plans
          </motion.h2>
          <p className="text-center text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Predictable Monthly or Seasonal Options for Fleet Operators
          </p>
          <div className="w-24 h-1.5 bg-chargetrux-blue mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-2 border-gray-100 hover:border-chargetrux-blue transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg">
                <div className="h-2 bg-chargetrux-blue w-full"></div>
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="text-2xl text-white">Monthly Contract Plans</CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    Reliable, scheduled charging for consistent fleet operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Fixed monthly fee</strong> based on fleet size and energy requirements</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Unlimited scheduled charging sessions</strong> within your contracted energy allocation</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Priority service scheduling</strong> with guaranteed 4-hour service windows</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Dedicated account manager</strong> for streamlined operations</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Fleet-wide analytics dashboard</strong> for operational insights</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">No peak-hour surcharges</strong> for predictable cost management</span>
                    </li>
                  </ul>
                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <p className="font-medium text-white">
                      Ideal for: <span className="font-normal text-gray-300">Regular depot charging, scheduled routes, predictable energy needs</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-2 border-gray-100 hover:border-chargetrux-blue transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg">
                <div className="h-2 bg-chargetrux-blue w-full"></div>
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="text-2xl text-white">Seasonal Contract Plans</CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    Flexible charging options for operations with seasonal variations
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">3, 6, or 9-month commitments</strong> with scaled pricing</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Seasonal capacity adjustments</strong> to match operational intensity</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Scheduled high-capacity charging</strong> during peak seasons</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Reduced rates during contract extension periods</strong></span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Mid-season plan adjustments available</strong> with 30-day notice</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Combined with on-demand options</strong> for maximum flexibility</span>
                    </li>
                  </ul>
                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <p className="font-medium text-white">
                      Ideal for: <span className="font-normal text-gray-300">Delivery fleets with holiday surges, tourism operations, agricultural transport</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-white mb-6">Contract Plan Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <CircleDollarSign className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-white">No Infrastructure Investment</h4>
                <p className="text-sm text-gray-300">Eliminate the costs of installing permanent charging stations</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <Scale className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Predictable Monthly Costs</h4>
                <p className="text-sm text-gray-300">Fixed pricing makes budgeting straightforward</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <ChartBar className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Schedule Optimization</h4>
                <p className="text-sm text-gray-300">Align charging schedules with operational downtime</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Energy Management</h4>
                <p className="text-sm text-gray-300">Avoid utility demand charges and peak pricing</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <ChartBar className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Emissions Reporting</h4>
                <p className="text-sm text-gray-300">Detailed ESG documentation included with all plans</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center text-white mb-6"
          >
            On-Demand Sessions
          </motion.h2>
          <p className="text-center text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Charging When You Need It, No Commitments Required
          </p>
          <div className="w-24 h-1.5 bg-chargetrux-blue mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 max-w-2xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-2 border-gray-100 hover:border-chargetrux-blue transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg">
                <div className="h-2 bg-chargetrux-blue w-full"></div>
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="text-2xl text-white">Flexible Pay-Per-Charge Model</CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    Only pay for the energy you need, when you need it
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Base dispatch fee</strong> + transparent per kWh delivered rate</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">No long-term commitments</strong> required</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">2-hour emergency response option</strong> available</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Multiple vehicles charged</strong> per service call</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Pay only for energy delivered</strong> to your fleet</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-blue-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-blue" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Volume discounts available</strong> for frequent users</span>
                    </li>
                  </ul>
                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <p className="font-medium text-white">
                      Ideal for: <span className="font-normal text-gray-300">Occasional charging needs, emergency backup, supplemental capacity</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-white mb-6">On-Demand Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <CircleDollarSign className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Maximum Flexibility</h4>
                <p className="text-sm text-gray-300">Request charging service only when needed</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <Scale className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-white">No Upfront Investment</h4>
                <p className="text-sm text-gray-300">Zero capital expenditure required</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <ChartBar className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Scale With Demand</h4>
                <p className="text-sm text-gray-300">Perfect for growing or transitioning fleets</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Location Freedom</h4>
                <p className="text-sm text-gray-300">Service available anywhere in our coverage areas</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-blue-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <ChartBar className="h-6 w-6 text-chargetrux-blue" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Multi-Vehicle Efficiency</h4>
                <p className="text-sm text-gray-300">Charge multiple vehicles during a single service call</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center text-white mb-6"
          >
            Custom Enterprise Packages
          </motion.h2>
          <p className="text-center text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Tailored Solutions for Complex Fleet Operations
          </p>
          <div className="w-24 h-1.5 bg-chargetrux-green mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-2 border-chargetrux-green bg-gradient-to-br from-white to-green-50 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-2 bg-chargetrux-green w-full"></div>
                <CardHeader className="bg-chargetrux-green bg-opacity-10 border-b">
                  <CardTitle className="text-2xl text-white">Enterprise Fleet Solutions</CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    Comprehensive charging strategies for complex fleet operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="bg-green-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-green" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Tiered pricing by fleet size</strong> for maximum cost efficiency</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-green" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Multi-region coverage</strong> with consistent service levels</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-green" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Custom usage frequency options</strong> based on operational patterns</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-green" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Integrated reporting systems</strong> compatible with fleet management software</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-green" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Dedicated service team</strong> with specialized fleet experience</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-50 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-chargetrux-green" />
                      </span>
                      <span className="text-gray-700"><strong className="text-white">Customized SLAs</strong> to meet your specific operational requirements</span>
                    </li>
                  </ul>
                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <p className="font-medium text-white">
                      Ideal for: <span className="font-normal text-gray-300">Large fleets, multi-city operations, specialized vehicle requirements</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-green-50/30 rounded-xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-white mb-6">Enterprise Package Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-green-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <CircleDollarSign className="h-6 w-6 text-chargetrux-green" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Consolidated Billing</h4>
                <p className="text-sm text-gray-300">Streamlined administrative processes across multiple locations</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-green-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <Scale className="h-6 w-6 text-chargetrux-green" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Volume Discounts</h4>
                <p className="text-sm text-gray-300">Competitive rates based on fleet size and energy consumption</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-green-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <ChartBar className="h-6 w-6 text-chargetrux-green" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Custom Reporting</h4>
                <p className="text-sm text-gray-300">Tailored analytics for your specific operational metrics</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-green-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-chargetrux-green" />
                </div>
                <h4 className="font-semibold mb-2 text-white">API Integration</h4>
                <p className="text-sm text-gray-300">Connect charging data with your existing fleet management systems</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-green-50 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <ChartBar className="h-6 w-6 text-chargetrux-green" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Strategic Planning</h4>
                <p className="text-sm text-gray-300">Expert guidance for electrification strategy development</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center text-white mb-6"
          >
            Transparent Value
          </motion.h2>
          <p className="text-center text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            What Sets ChargeTrux Pricing Apart
          </p>
          <div className="w-24 h-1.5 bg-chargetrux-blue mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center h-full hover:shadow-md hover:border-chargetrux-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-blue-50 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <CircleDollarSign className="h-8 w-8 text-chargetrux-blue" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">No Hidden Costs</h4>
                <p className="text-gray-600">
                  Our pricing includes all operational costs with no surprise fees, surcharges, or add-ons.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center h-full hover:shadow-md hover:border-chargetrux-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-blue-50 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <Scale className="h-8 w-8 text-chargetrux-blue" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">Energy-Based Billing</h4>
                <p className="text-gray-600">
                  You only pay for the actual energy delivered to your vehicles, not for connection time or session fees.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center h-full hover:shadow-md hover:border-chargetrux-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-blue-50 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-chargetrux-blue" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">Scalable Solutions</h4>
                <p className="text-gray-600">
                  Start with what you need now and easily scale as your EV fleet grows without penalties or contract renegotiations.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center h-full hover:shadow-md hover:border-chargetrux-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-blue-50 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <ChartBar className="h-8 w-8 text-chargetrux-blue" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">Operational Insights</h4>
                <p className="text-gray-600">
                  All plans include robust data reporting to help optimize your fleet's energy consumption and operational efficiency.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-chargetrux-darkblue to-chargetrux-blue text-white p-12 rounded-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Power Your Fleet's Future?</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Our pricing specialists will work with you to develop a customized charging solution that maximizes 
              operational efficiency while minimizing costs for your specific fleet profile.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-chargetrux-blue hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
              onClick={() => window.location.href = '/contact'}
            >
              Request Custom Quote
            </Button>
          </motion.div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl text-sm shadow-sm"
          >
            <p className="font-semibold mb-2 text-chargetrux-darkblue">Coverage Areas:</p>
            <p className="mb-4 text-gray-600">
              ChargeTrux currently services major metropolitan areas across the United States including 
              Los Angeles, San Francisco, Chicago, Dallas, Houston, Miami, Atlanta, Washington DC, Boston, 
              and New York. See our <a href="/coverage" className="text-chargetrux-blue hover:underline">service map</a> for complete details and expansion plans.
            </p>
            <p className="font-semibold mb-2 text-chargetrux-darkblue">Enterprise Solutions:</p>
            <p className="text-gray-600">
              Custom enterprise packages are available for fleets of 10+ vehicles. Multi-year agreements 
              include price protection guarantees and priority service allocation.
            </p>
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
