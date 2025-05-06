import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Battery, Truck, MapPin, Hotel, Building } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState("rental");
  const location = useLocation();

  useEffect(() => {
    // Get the industry from URL query parameters
    const searchParams = new URLSearchParams(location.search);
    const industryParam = searchParams.get('industry');
    
    // Set the active industry if a valid one is provided in the URL
    if (industryParam && industries.some(ind => ind.id === industryParam)) {
      setActiveIndustry(industryParam);
      
      // Scroll to the top to show the selected industry
      window.scrollTo(0, 0);
    }
  }, [location]);

  const industries = [
    {
      id: "rental",
      title: "Rental Fleet Operators",
      shortDesc: "Charge returned vehicles quickly with no buildout",
      icon: <Truck className="h-6 w-6 text-chargetrux-green" />,
      image: "/lovable-uploads/6f9386c8-ac09-4dc9-88ba-31ecf9859f75.png",
      heading: "Rental Fleet EV Charging Solutions",
      subheading: "High-Speed Mobile DC Fast Charging for EV Rental Fleets Without Infrastructure Investment",
      description: "Rental companies face unique challenges when integrating electric vehicles into their fleets. ChargeTrux delivers tailored mobile EV charging solutions that solve these critical pain points:",
      benefits: [
        "Rapid EV Turnaround Times: Our mobile DC fast chargers deliver up to 450 kWh per session at rates up to 220kW per cable, enabling rental companies to recharge multiple returned electric vehicles simultaneously in under 1 hour.",
        "Zero Infrastructure Investment Required: Eliminate costly construction, permitting delays, grid upgrades, and permanent infrastructure commitments. Our mobile EV charging units deploy exactly where your fleet vehicles are parked within days, not months.",
        "Scalable Fleet Charging Operations: Whether managing 10 EVs or 1,000, our flexible electric vehicle charging service contracts adjust to your fleet's changing needs, seasonal demand fluctuations, and evolving vehicle technology.",
        "Complete ESG Compliance Support: Meet sustainability goals with our 100% renewable energy charging solution, with detailed emissions reports, carbon offset tracking, and regulatory compliance documentation for stakeholder reporting.",
        "Rental-Specific Workflow Integration: Schedule Level 3 charging sessions during off-hours or integrate with your existing rental return processes via our API, eliminating bottlenecks during high-volume periods."
      ],
      metric: "Major airport rental operations reduced EV processing bottlenecks by 18% and decreased vehicle turnaround time by 45 minutes on average with our on-demand mobile Level 3 charging service."
    },
    {
      id: "delivery",
      title: "Last-Mile Delivery",
      shortDesc: "Prevent route delays due to depot congestion",
      icon: <MapPin className="h-6 w-6 text-chargetrux-green" />,
      image: "/lovable-uploads/6b116e21-a7b2-44e4-a38a-d056e7c61fce.png",
      heading: "Last-Mile Delivery Fleet EV Charging",
      subheading: "On-Site Mobile DC Fast Charging to Eliminate Depot Congestion & Maximize Route Efficiency",
      description: "For delivery fleets transitioning to electric vehicles, charging infrastructure often becomes the critical bottleneck. ChargeTrux delivers operational continuity with mobile Level 3 charging solutions designed specifically for logistics operations:",
      benefits: [
        "Decentralized Fleet Charging Hubs: Bring powerful 440kW DC fast charging directly to where your delivery EVs park, eliminating the need for vehicles to queue at limited depot charging stations or make time-consuming detours.",
        "Predictable EV Fleet Operating Costs: Transparent, fixed pricing plans allow for accurate forecasting of charging expenses, with no hidden infrastructure maintenance costs, demand charges, or unexpected utility fees.",
        "Strategic Mid-Route Charging Support: Position mobile EV chargers at distribution centers or along delivery routes, ensuring vehicles maintain optimal battery levels throughout their service day without compromising delivery schedules.",
        "Seamless Fleet Management System Integration: Our charging API integrates with your TMS and logistics platforms for automated scheduling, energy management, and driver notification systems.",
        "Fleet Uptime Guarantee: 99.9% charge delivery reliability backed by SLAs, with 2-hour emergency response for critical charging needs across your electric delivery vehicle fleet."
      ],
      metric: "Logistics hub recovered 12% daily uptime by implementing mid-route mobile charge service for electric delivery vehicles."
    },
    {
      id: "ports",
      title: "Ports & Industrial Zones",
      shortDesc: "Support compliance with local EV mandates",
      icon: <Building className="h-6 w-6 text-chargetrux-green" />,
      image: "/lovable-uploads/32a2004b-2356-4605-9883-432a282117a5.png",
      heading: "Ports & Industrial EV Charging",
      subheading: "Mobile Level 3 Charging to Support Electric Vehicle Mandates at Ports and Industrial Zones",
      description: "Industrial operations and ports face stringent emissions regulations and complex operational challenges. Our mobile EV charging infrastructure delivers compliance without compromising operations:",
      benefits: [
        "EV Mandate Compliance Solutions: Meet zero-emission vehicle requirements with reliable mobile charging support for electric industrial vehicles and drayage trucks.",
        "Flexible EV Charging Deployment: Operate Level 3 mobile chargers in restricted areas, temporary worksites, or across vast industrial facilities without fixed infrastructure limitations.",
        "Multi-Shift EV Support: Schedule fast charging during shift changes or operational downtimes to maximize vehicle availability during peak working hours.",
        "Heavy-Duty Electric Vehicle Capability: High-capacity charging for industrial EVs, port equipment, and heavy-duty electric vehicles with demanding power requirements.",
        "Emergency Backup Charging: Provide reliable charging during grid outages or natural disasters to ensure operational continuity of essential electric vehicles."
      ],
      metric: "Port operations enabled 24/7 clean truck compliance during fixed-station construction, maintaining operational continuity."
    },
    {
      id: "hospitality",
      title: "Valet, Hospitality & Events",
      shortDesc: "Mobile Level 3 charging for high-end clients",
      icon: <Hotel className="h-6 w-6 text-chargetrux-green" />,
      image: "/lovable-uploads/184a1e78-89e7-4a15-b547-3968236836ec.png",
      heading: "Valet, Hospitality & Events EV Charging Services",
      subheading: "Premium Mobile Level 3 Fast Charging for High-End Clients and Guest Experiences",
      description: "Elevate your guest experience with premium mobile EV charging services that differentiate your offering in the competitive hospitality market:",
      benefits: [
        "White-Glove Electric Vehicle Charging: Offer exclusive Level 3 EV charging amenities for guests without dedicated charging infrastructure, enhancing customer satisfaction.",
        "Flexible Location Service: Deliver fast EV charging anywhere on your property – from parking structures to valet areas to temporary event spaces.",
        "New Revenue Generation Opportunities: Create premium service offerings with branded electric vehicle charging experiences for guests and visitors.",
        "Event EV Charging Support: Power electric vehicles at conferences, outdoor events, and temporary venues where traditional charging infrastructure isn't available.",
        "Sustainability Brand Enhancement: Demonstrate environmental leadership and technological innovation to eco-conscious guests and clients with mobile EV charging."
      ],
      metric: "Luxury hotels offering ChargeTrux mobile EV charging services report significant increases in guest satisfaction scores among electric vehicle-driving clientele."
    },
    {
      id: "developers",
      title: "Charging Infrastructure",
      shortDesc: "Temporary mobile support while fixed assets are under construction",
      icon: <Battery className="h-6 w-6 text-chargetrux-green" />,
      image: "/lovable-uploads/6f9386c8-ac09-4dc9-88ba-31ecf9859f75.png", // Using a placeholder image
      heading: "EV Charging Infrastructure",
      subheading: "Temporary Mobile Level 3 Charging Support During Fixed Asset Construction",
      description: "Bridge the gap while permanent EV charging infrastructure is under development:",
      benefits: [
        "Construction Phase Coverage: Maintain uninterrupted electric vehicle charging services during the installation of permanent charging infrastructure, ensuring continuous service for EV users.",
        "EV Charging Proof-of-Concept Testing: Validate charging needs and usage patterns before committing to expensive fixed installation locations.",
        "Peak Demand Management: Supplement fixed charging stations during high-demand periods without overbuilding permanent infrastructure.",
        "Emergency Backup EV Charging: Provide reliable mobile Level 3 charging alternatives during maintenance, repairs, or unexpected outages of fixed charging stations.",
        "New Site Preparation: Offer charging services while navigating permits, utility upgrades, and construction timelines for permanent installations."
      ],
      metric: "Infrastructure developers partner with ChargeTrux to ensure continuous service throughout multi-phase EV charging deployments."
    }
  ];

  const features = [
    "100% Renewable Energy: All charging delivered with certified renewable energy sources and tracked via blockchain",
    "No Construction or Permits Required: Deploy fully operational charging within 48 hours, not months",
    "Multi-Vehicle Simultaneous Charging: Up to 4 vehicles charged at once from a single unit",
    "High-Power Level 3 DC Fast Charging: Up to 440kW total output (220kW per cable max)",
    "Expanding Nationwide Coverage: Available in major metropolitan areas with 2-hour response times",
    "24/7 Monitoring & Support: Real-time energy tracking, charging analytics, and technical assistance",
    "Universal Compatibility: Works with all EV makes and models (NACS + CCS1 compatible)"
  ];

  const selectedIndustry = industries.find(ind => ind.id === activeIndustry) || industries[0];

  return (
    <div className="min-h-screen bg-chargetrux-darkblue">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-b from-chargetrux-darkblue to-black">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized mobile Level 3 charging solutions tailored for diverse industry needs.
              Deploy powerful DC fast charging exactly where you need it.
            </p>
          </motion.div>

          {/* Industry Navigation */}
          <NavigationMenu className="mb-12 justify-center">
            <NavigationMenuList className="flex flex-wrap justify-center">
              {industries.map((industry) => (
                <NavigationMenuItem key={industry.id}>
                  <NavigationMenuLink 
                    className={`px-3 py-2 text-sm md:text-base rounded-md mx-2 my-1 transition-colors ${
                      activeIndustry === industry.id 
                        ? "bg-chargetrux-green text-white" 
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                    onClick={() => setActiveIndustry(industry.id)}
                  >
                    {industry.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Featured Industry */}
          <motion.div
            key={selectedIndustry.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl aspect-video shadow-2xl">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-flex items-center bg-chargetrux-green/90 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {selectedIndustry.icon}
                  <span className="ml-2">{selectedIndustry.title}</span>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="text-white p-4">
              <h2 className="text-3xl font-bold mb-2">{selectedIndustry.heading}</h2>
              <p className="text-chargetrux-green mb-4">{selectedIndustry.subheading}</p>
              <p className="text-gray-300 mb-6">{selectedIndustry.description}</p>
              
              <div className="mb-6">
                <Accordion type="single" collapsible className="w-full">
                  {selectedIndustry.benefits.map((benefit, index) => {
                    const benefitParts = benefit.split(':');
                    const title = benefitParts[0];
                    const description = benefitParts.length > 1 ? benefitParts[1] : '';
                    
                    return (
                      <AccordionItem key={index} value={`item-${index}`} className="border-white/20">
                        <AccordionTrigger className="text-left text-chargetrux-green hover:text-chargetrux-green/80">
                          {title}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          {description}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
              
              <div className="bg-chargetrux-green/20 border border-chargetrux-green/30 rounded-lg p-4 mb-6">
                <p className="text-sm text-white">
                  <strong>Success Metric:</strong> {selectedIndustry.metric}
                </p>
              </div>
              
              <Button className="bg-chargetrux-green hover:bg-chargetrux-green/80 text-white" asChild>
                <Link to="/contact">
                  Learn More About {selectedIndustry.title} Solutions
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* All Industries Section */}
      <div className="bg-chargetrux-darkblue py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Explore All Industries
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {industries.map((industry) => (
              <motion.div
                key={industry.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => setActiveIndustry(industry.id)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden h-full border-none shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardHeader className="bg-white">
                    <div className="flex items-center mb-2">
                      {industry.icon}
                      <CardTitle className="ml-2 text-xl">{industry.title}</CardTitle>
                    </div>
                    <CardDescription>{industry.shortDesc}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4 bg-white">
                    <Button variant="outline" className="w-full text-chargetrux-blue border-chargetrux-blue hover:bg-chargetrux-blue/10" asChild>
                      <Link to="/contact">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-chargetrux-darkblue py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Why Choose ChargeTrux Mobile EV Charging Solutions?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our mobile Level 3 DC fast charging services deliver unmatched flexibility,
              reliability, and performance across all industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const featureParts = feature.split(':');
              const title = featureParts[0];
              const description = featureParts.length > 1 ? featureParts[1] : '';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-chargetrux-green/20 flex items-center justify-center mr-3 mt-1">
                      <Check className="h-4 w-4 text-chargetrux-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-chargetrux-darkblue">{title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              ChargeTrux provides mobile Level 3 DC fast charging services for commercial fleets in Los Angeles, San Francisco, San Diego, Seattle, Portland, Chicago, Dallas, Houston, Miami, Atlanta, Washington DC, Boston, and New York metro areas. New markets added monthly. Contact us for EV charging availability and service options in your specific location.
            </p>
          </div>
        </div>
      </div>

      <CtaSection />
      <Footer />
    </div>
  );
};

export default Industries;
