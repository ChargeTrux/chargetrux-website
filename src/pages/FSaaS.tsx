
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
import CtaSection from "@/components/CtaSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    <div className="min-h-screen bg-chargetrux-darkblue">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-chargetrux-darkblue via-[#0A1930] to-[#001845] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Fleet Support-as-a-Service (FSaaS)
            </h1>
            <div className="w-20 h-1 bg-chargetrux-green mx-auto mb-4"></div>
            <p className="text-base md:text-lg font-light text-white">
              Reliable Level 3 Fast Charging Without the Infrastructure Burden
            </p>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mt-6">
              ChargeTrux delivers high-capacity mobile charging solutions that keep your electric fleet vehicles powered and operational without the constraints of fixed infrastructure. Our innovative FSaaS model combines advanced mobile charging technology, intelligent energy management, and flexible service options to solve the most pressing challenges facing EV fleet operators today.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* R-Series Mobile Charging Units */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-100" id="r-series">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-chargetrux-darkblue">
              Our R-Series Mobile Charging Units
            </h2>
            <div className="w-20 h-1 bg-chargetrux-green mx-auto mb-4"></div>
            <p className="text-lg text-chargetrux-green font-medium">
              Next-Generation Mobile Power Delivery System
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-12 items-center">            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-chargetrux-darktext max-w-3xl mx-auto"
            >
              <p className="mb-6 text-center">
                The ChargeTrux R-Series represents the pinnacle of mobile EV charging technology, delivering unprecedented power and flexibility for commercial fleet operations.
              </p>
              
              <h3 className="text-xl font-semibold text-chargetrux-darkblue mb-4 text-center">Key Technical Specifications:</h3>
              
              <Card className="mb-6 bg-chargetrux-darkblue text-white">
                <CardHeader>
                  <CardTitle className="text-chargetrux-blue">Current R-Series 450</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-6 space-y-2 text-white">
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
              
              <Card className="bg-chargetrux-darkblue text-white">
                <CardHeader>
                  <CardTitle className="text-chargetrux-green">Future Developments (Coming Q3 2025)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-6 space-y-2 text-white">
                    <li>R-Series 600: 600 kWh capacity</li>
                    <li>R-Series 750: 750 kWh capacity with enhanced battery density</li>
                    <li>Solar-augmented charging option</li>
                    <li>Bi-directional power flow capability</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* R-Series Fleet Illustration - Made smaller with width constraint */}
          <motion.div 
            className="mt-12 mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="max-w-lg mx-auto">
              <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/891f92b4-6ad6-4462-b50e-2e496d37f059.png" 
                  alt="ChargeTrux R-Series Fleet Illustration" 
                  className="w-full h-full object-contain rounded-xl shadow-lg"
                />
              </AspectRatio>
            </div>
          </motion.div>
          
          <div className="mt-8">
            <motion.h3 
              className="text-2xl font-bold mb-6 text-center text-chargetrux-darkblue"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              How Our Units Connect to Multiple Vehicles
            </motion.h3>
            
            <div className="grid grid-cols-1 gap-12 items-center">
              <motion.div 
                className="text-chargetrux-darktext mx-auto max-w-3xl text-center"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h4 className="text-xl font-semibold text-chargetrux-darkblue mb-4">Our proprietary connection system enables:</h4>
                
                <ul className="space-y-4 inline-block text-left">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Settings className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div className="text-chargetrux-darktext">
                      <span className="font-medium">Intelligent Load Distribution:</span> Dynamic power allocation ensures optimal charging for each connected vehicle
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <FileChartLine className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div className="text-chargetrux-darktext">
                      <span className="font-medium">Priority Charging Algorithms:</span> Critical vehicles receive accelerated charging based on operational requirements
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Truck className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div className="text-chargetrux-darktext">
                      <span className="font-medium">Simultaneous Multi-Vehicle Support:</span> Charge up to 4 vehicles at once with customizable power distribution
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Settings2 className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div className="text-chargetrux-darktext">
                      <span className="font-medium">Thermal Management System:</span> Advanced cooling technology maintains optimal charging temperatures even in extreme conditions
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Models */}
      <section className="py-20 bg-gradient-to-br from-chargetrux-darkblue via-[#0954c5] to-chargetrux-blue text-white" id="service-models">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">
              Service Models
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-xl text-white">
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
            className="text-center mt-8 text-white/80"
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
      <section className="py-20 bg-gradient-to-br from-white to-gray-100" id="fleet-integration">
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
            <div className="w-20 h-1 bg-chargetrux-green mx-auto mb-4"></div>
            <p className="text-xl text-chargetrux-darkblue">
              Seamless Connection With Your Existing Fleet Management Systems
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-chargetrux-darktext"
            >
              <h3 className="text-xl font-bold mb-4 text-chargetrux-darkblue">Real-Time Energy Monitoring</h3>
              <p className="mb-6">
                Our cloud-based monitoring platform provides comprehensive visibility into your charging operations:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-blue">•</div>
                  <div className="text-chargetrux-darktext">Live charging status for all vehicles</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-blue">•</div>
                  <div className="text-chargetrux-darktext">Energy delivery metrics and performance analytics</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-blue">•</div>
                  <div className="text-chargetrux-darktext">Consumption tracking and allocation by vehicle/department</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-blue">•</div>
                  <div className="text-chargetrux-darktext">Historical data and trend analysis</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-blue">•</div>
                  <div className="text-chargetrux-darktext">Customizable alerts and notifications</div>
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
              className="text-chargetrux-darktext"
            >
              <h3 className="text-xl font-bold mb-4 text-chargetrux-darkblue">Reporting for ESG Compliance</h3>
              <p className="mb-6">
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
                  <div className="text-chargetrux-darktext">Carbon offset tracking and verification</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-green">•</div>
                  <div className="text-chargetrux-darktext">Renewable energy certification</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-green">•</div>
                  <div className="text-chargetrux-darktext">Quarterly and annual ESG reporting templates</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-green">•</div>
                  <div className="text-chargetrux-darktext">Regulatory compliance documentation</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-chargetrux-green">•</div>
                  <div className="text-chargetrux-darktext">Custom reporting capabilities for stakeholder requirements</div>
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
            <p className="text-chargetrux-darktext mb-8 text-center max-w-3xl mx-auto">
              Our robust API enables seamless integration with your existing fleet management systems:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <ChargeTruxAPI />
              
              <div className="text-chargetrux-darktext">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div className="text-chargetrux-darktext">
                      <span className="font-medium">RESTful API</span> with comprehensive documentation
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Wifi className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div className="text-chargetrux-darktext">
                      <span className="font-medium">Webhook support</span> for real-time event notifications
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div className="text-chargetrux-darktext">
                      <span className="font-medium">OAuth 2.0 authentication</span> for secure access
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Plug className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div className="text-chargetrux-darktext">
                      <span className="font-medium">Integration</span> with major fleet management platforms
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chargetrux-blue/10 flex items-center justify-center">
                      <Settings className="h-4 w-4 text-chargetrux-blue" />
                    </div>
                    <div className="text-chargetrux-darktext">
                      <span className="font-medium">Custom integration</span> development support
                    </div>
                  </li>
                </ul>
                <p className="mt-6 text-chargetrux-darktext">
                  Our technical team provides full support for API integration, ensuring a smooth connection between your fleet management systems and our charging infrastructure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaSection />
      
      <Footer />
    </div>
  );
};

export default FSaaS;
