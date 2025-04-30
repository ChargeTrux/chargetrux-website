
import React from "react";
import { motion } from "framer-motion";
import CaseStudy from "./CaseStudy";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Logistics Hub: Mid-Route Charging Optimization",
      gradientClasses: "bg-gradient-to-r from-chargetrux-darkblue to-chargetrux-blue",
      imageText: "Logistics Hub Electric Vehicle Charging",
      clientDescription: "National Distribution Center Optimizes EV Fleet Operations",
      stats: [
        { value: "12%", label: "Daily Uptime Recovery" },
        { value: "27%", label: "Reduction in Charging Costs" },
        { value: "142", label: "Tons CO₂ Avoided Annually" }
      ],
      challenge: "A major logistics provider operating a fleet of 50+ electric delivery vehicles faced significant operational challenges with their fixed charging infrastructure. Limited charging capacity at their distribution center created bottlenecks during peak periods, while routing constraints and battery range limitations reduced daily delivery capacity.",
      solution: "ChargeTrux implemented a strategic mid-route charging solution with mobile Level 3 chargers deployed at two satellite locations along common delivery routes. This allowed vehicles to receive a rapid mid-shift charge without returning to the main distribution center.",
      results: [
        "<strong>Recovered 12% daily uptime</strong> by eliminating return trips to the central depot for charging",
        "<strong>Increased delivery capacity</strong> by extending effective range of each vehicle",
        "<strong>Reduced charging infrastructure costs</strong> by avoiding installation of permanent charging stations",
        "<strong>Eliminated charging bottlenecks</strong> during peak operational periods",
        "<strong>Improved driver satisfaction</strong> with more predictable schedules and reduced range anxiety"
      ],
      quote: "The mobile charging solution from ChargeTrux has transformed our electric fleet operations. We've been able to recover valuable delivery time while ensuring our vehicles always have sufficient charge to complete their routes. This has been a game-changer for our organization's electrification strategy.",
      quoteAuthor: "— Operations Director, National Logistics Provider",
      borderColor: "border-chargetrux-blue"
    },
    {
      title: "Airport Rental Operations: EV Processing Optimization",
      gradientClasses: "bg-gradient-to-r from-chargetrux-blue to-chargetrux-green",
      imageText: "Airport Rental Car EV Charging",
      clientDescription: "Major Airport Rental Location Streamlines EV Turnaround",
      stats: [
        { value: "18%", label: "Reduction in Processing Bottlenecks" },
        { value: "45", label: "Minutes Average Time Saved Per Vehicle" },
        { value: "32%", label: "Increase in EV Availability" }
      ],
      challenge: "A leading rental car company at a major international airport was expanding their electric vehicle fleet but faced significant operational challenges. Limited fixed charging infrastructure created processing bottlenecks, while the time required to charge returned vehicles reduced fleet availability and impacted customer satisfaction.",
      solution: "ChargeTrux deployed mobile Level 3 charging units to supplement the existing fixed charging infrastructure. These mobile units were strategically positioned in the vehicle processing area, providing flexible charging capacity that could be adjusted based on demand patterns.",
      results: [
        "<strong>Reduced EV processing bottlenecks by 18%</strong> through additional charging capacity",
        "<strong>Decreased average turnaround time</strong> for returned electric vehicles",
        "<strong>Improved fleet utilization</strong> with faster processing of returned vehicles",
        "<strong>Enhanced customer satisfaction</strong> due to increased availability of fully-charged EVs",
        "<strong>Achieved sustainability goals</strong> with 100% renewable energy charging"
      ],
      quote: "The flexibility of ChargeTrux's mobile charging solution has been instrumental in optimizing our EV rental operations. We've significantly reduced processing times and improved vehicle availability, all while advancing our sustainability initiatives with zero-emission charging.",
      quoteAuthor: "— Operations Manager, International Airport Rental Location",
      borderColor: "border-chargetrux-green"
    },
    {
      title: "Port Operations: Clean Truck Compliance Solution",
      gradientClasses: "bg-gradient-to-r from-chargetrux-green to-chargetrux-darkblue",
      imageText: "Port Operations Electric Truck Charging",
      clientDescription: "Major Port Authority Maintains Operations During Infrastructure Upgrade",
      stats: [
        { value: "24/7", label: "Clean Truck Compliance" },
        { value: "100%", label: "Operational Continuity" },
        { value: "0", label: "Emissions During Construction" }
      ],
      challenge: "A major port authority implementing a clean truck program faced a critical challenge during the construction of their permanent charging infrastructure. The port needed to maintain 24/7 operations for electric drayage trucks while their fixed charging stations were being installed, a process expected to take 8-12 months.",
      solution: "ChargeTrux provided a comprehensive mobile charging solution to bridge the gap during construction. Multiple high-capacity mobile units were deployed at strategic locations throughout the port, ensuring continuous charging availability for the growing electric truck fleet.",
      results: [
        "<strong>Enabled 24/7 clean truck compliance</strong> during fixed-station construction",
        "<strong>Maintained operational continuity</strong> throughout infrastructure transition",
        "<strong>Provided flexible charging capacity</strong> that scaled with growing fleet needs",
        "<strong>Eliminated construction delays</strong> related to charging availability",
        "<strong>Supported emissions reduction targets</strong> with 100% renewable energy"
      ],
      quote: "ChargeTrux's mobile charging solution was critical to the success of our clean truck program. We were able to maintain full operations during the construction of our permanent charging infrastructure, ensuring compliance with emissions regulations without disrupting the vital flow of goods through our port.",
      quoteAuthor: "— Sustainability Director, Major West Coast Port Authority",
      borderColor: "border-chargetrux-darkblue"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#f7f7f7] to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-chargetrux-darkblue">Case Studies</h2>
          <div className="w-20 h-1 bg-chargetrux-green mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Real-World Impact of Mobile EV Charging Solutions</p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our mobile Level 3 charging infrastructure has helped organizations across various industries achieve significant operational and sustainability improvements. The following case studies demonstrate the tangible benefits of the ChargeTrux solution in real-world applications.
          </p>
        </motion.div>

        {caseStudies.map((study, index) => (
          <CaseStudy key={index} {...study} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
