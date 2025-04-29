
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Settings, ShieldCheck, FileChartLine, Calendar, Calendar as CalendarDays, Clock, ClockAlert, FileText, FileUp, FileDown, Plug, Truck, Settings2, Shield, ShieldOff, Wifi } from "lucide-react";
import ServiceModelCard from "@/components/ServiceModelCard";
import ChargeTruxAPI from "@/components/ChargeTruxAPI";

const FSaaS = () => {
  useEffect(() => {
    document.title = "FSaaS | ChargeTrux - Fleet Support-as-a-Service";
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const serviceModels = [
    {
      icon: <Calendar className="h-8 w-8 text-chargetrux-blue" />,
      title: "Scheduled Fleet Contracts",
      description: "Regular charging services on daily or weekly schedules to maintain consistent fleet readiness.",
      details: [
        "Set recurring charging schedules aligned with fleet downtime",
        "Guaranteed charging windows for predictable operations",
        "Flexible arrangements from daily to monthly services",
        "Long-term contracts with predictable pricing and priority service",
        "Dedicated account management and operational support"
      ]
    },
    {
      icon: <Battery className="h-8 w-8 text-chargetrux-blue" />,
      title: "On-Demand Dispatch",
      description: "Rapid response mobile charging with 2-hour deployment windows for unexpected needs.",
      details: [
        "Request charging via app, web portal, or phone",
        "2-hour response guarantee in service areas",
        "24/7 availability with emergency priority options",
        "No minimum usage requirements or long-term commitments",
        "Flexible payment options (per session or monthly subscription)"
      ]
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-chargetrux-blue" />,
      title: "Site Backup for Infrastructure Downtime",
      description: "Contingency charging solutions when fixed infrastructure is unavailable or under maintenance.",
      details: [
        "Rapid deployment during planned maintenance periods",
        "Emergency backup during infrastructure failures",
        "Seamless integration with existing charging workflows",
        "Scheduled preventative coverage during grid outages or peak demand periods",
        "Custom SLAs available for mission-critical operations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-chargetrux-darkblue">
              Fleet Support-as-a-Service (FSaaS)
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Reliable Level 3 Fast Charging Without the Infrastructure Burden
            </p>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              ChargeTrux delivers high-capacity mobile charging solutions that keep your electric fleet vehicles powered and operational without the constraints of fixed infrastructure. Our innovative FSaaS model combines advanced mobile charging technology, intelligent energy management, and flexible service options to solve the most pressing challenges facing EV fleet operators today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-chargetrux-blue text-white hover:bg-chargetrux-blue/90">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="border-chargetrux-blue text-chargetrux-blue hover:bg-chargetrux-blue/10">
                Download Technical Specs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* R-Series Mobile Charging Units */}
      <section className="py-16 bg-white" id="r-series">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-chargetrux-darkblue">
              Our R-Series Mobile Charging Units
            </h2>
            <p className="text-xl text-gray-600">
              Next-Generation Mobile Power Delivery System
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="aspect-video rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img 
                src="/lovable-uploads/7352ddc9-7057-4db1-8f1e-97b0188b38b4.png" 
                alt="ChargeTrux R-Series Mobile Charging Unit" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <p className="text-gray-600 mb-6">
                The ChargeTrux R-Series represents the pinnacle of mobile EV charging technology, delivering unprecedented power and flexibility for commercial fleet operations.
              </p>
              
              <h3 className="text-xl font-semibold text-chargetrux-darkblue mb-4">Key Technical Specifications:</h3>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-chargetrux-blue">Current R-Series 450</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>450 kWh total capacity per unit</li>
                    <li>Up to 440kW output capability</li>
                    <li>Simultaneous charging for up to 4 vehicles</li>
                    <li>220kW maximum per charging cable</li>
                    <li>Compatible with all major EV models (NACS + CCS1)</li>
                    <li>100% renewable energy source-certified</li>
                    <li>Rapid deployment within 48 hours of request</li>
                    <li>No permits, construction, or utility upgrades required</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-chargetrux-green">Future Developments (Coming Q3 2025)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>R-Series 600: 600 kWh capacity</li>
                    <li>R-Series 750: 750 kWh capacity with enhanced battery density</li>
                    <li>Solar-augmented charging option</li>
                    <li>Bi-directional power flow capability</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <div className="mt-16">
            <motion.h3 
              className="text-2xl font-bold mb-6 text-center text-chargetrux-darkblue"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              How Our Units Connect to Multiple Vehicles
            </motion.h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="order-2 lg:order-1"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h4 className="text-xl font-semibold text-chargetrux-darkblue mb-4">Our proprietary connection system enables:</h4>
                
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Settings className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div>
                      <span className="font-medium">Intelligent Load Distribution:</span> Dynamic power allocation ensures optimal charging for each connected vehicle
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <FileChartLine className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div>
                      <span className="font-medium">Priority Charging Algorithms:</span> Critical vehicles receive accelerated charging based on operational requirements
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Truck className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div>
                      <span className="font-medium">Simultaneous Multi-Vehicle Support:</span> Charge up to 4 vehicles at once with customizable power distribution
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Settings2 className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div>
                      <span className="font-medium">Thermal Management System:</span> Advanced cooling technology maintains optimal charging temperatures even in extreme conditions
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="interactive-diagram order-1 lg:order-2 aspect-video rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <img 
                  src="/lovable-uploads/2a17e2a2-043b-48fd-b836-dde88b37533a.png" 
                  alt="Multi-Vehicle Connection Diagram" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Models */}
      <section className="py-16 bg-gray-50" id="service-models">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-chargetrux-darkblue">
              Service Models
            </h2>
            <p className="text-xl text-gray-600">
              Flexible Options Tailored to Your Fleet's Operational Requirements
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceModels.map((model, index) => (
              <ServiceModelCard 
                key={index}
                icon={model.icon}
                title={model.title}
                description={model.description}
                details={model.details}
                index={index}
              />
            ))}
          </div>
          
          <motion.p 
            className="text-center mt-8 text-gray-600"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Our service models can be combined and customized to create a comprehensive charging solution that meets your specific operational requirements. Contact our fleet specialists to develop a tailored charging strategy for your organization.
          </motion.p>
        </div>
      </section>
      
      {/* Fleet Integration */}
      <section className="py-16 bg-white" id="fleet-integration">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-chargetrux-darkblue">
              Fleet Integration
            </h2>
            <p className="text-xl text-gray-600">
              Seamless Connection With Your Existing Fleet Management Systems
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4 text-chargetrux-darkblue">Real-Time Energy Monitoring</h3>
              <p className="text-gray-600 mb-6">
                Our cloud-based monitoring platform provides comprehensive visibility into your charging operations:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-blue">•</div>
                  <div>Live charging status for all vehicles</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-blue">•</div>
                  <div>Energy delivery metrics and performance analytics</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-blue">•</div>
                  <div>Consumption tracking and allocation by vehicle/department</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-blue">•</div>
                  <div>Historical data and trend analysis</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-blue">•</div>
                  <div>Customizable alerts and notifications</div>
                </li>
              </ul>
              
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                <img 
                  src="/lovable-uploads/8b7c269d-9b34-4e35-99ea-4e3206e0a0f0.png" 
                  alt="Fleet Management Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4 text-chargetrux-darkblue">Reporting for ESG Compliance</h3>
              <p className="text-gray-600 mb-6">
                Generate detailed reports to support your sustainability initiatives and regulatory compliance:
              </p>
              
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 mb-8">
                <img 
                  src="/lovable-uploads/8956cfb4-260b-4018-b40d-bd32fc141821.png" 
                  alt="ESG Compliance Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-green">•</div>
                  <div>Carbon offset tracking and verification</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-green">•</div>
                  <div>Renewable energy certification</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-green">•</div>
                  <div>Quarterly and annual ESG reporting templates</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-green">•</div>
                  <div>Regulatory compliance documentation</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-green">•</div>
                  <div>Custom reporting capabilities for stakeholder requirements</div>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* API Support */}
          <motion.div 
            className="mt-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-chargetrux-darkblue">API Support for Fleet Scheduling Tools</h3>
            <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Our robust API enables seamless integration with your existing fleet management systems:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <ChargeTruxAPI />
              
              <div>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div>
                      <span className="font-medium">RESTful API</span> with comprehensive documentation
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Wifi className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div>
                      <span className="font-medium">Webhook support</span> for real-time event notifications
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div>
                      <span className="font-medium">OAuth 2.0 authentication</span> for secure access
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Plug className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div>
                      <span className="font-medium">Integration</span> with major fleet management platforms
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Settings className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div>
                      <span className="font-medium">Custom integration</span> development support
                    </div>
                  </li>
                </ul>
                <p className="mt-6 text-gray-600">
                  Our technical team provides full support for API integration, ensuring a smooth connection between your fleet management systems and our charging infrastructure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-chargetrux-darkblue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience FSaaS?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Discover how ChargeTrux's Fleet Support-as-a-Service can transform your EV fleet operations with reliable, flexible, and infrastructure-free charging solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button className="bg-chargetrux-blue text-white hover:bg-chargetrux-blue/90">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Download Technical Specifications
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
            
            <p className="text-sm text-gray-300">
              ChargeTrux utilizes 100% renewable energy and maintains a 99.9% service reliability rating across all service areas. Our R-Series units are manufactured in the USA with industry-leading safety certifications and redundant power systems.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FSaaS;
