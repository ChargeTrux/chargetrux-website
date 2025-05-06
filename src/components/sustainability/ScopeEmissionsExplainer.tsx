import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const ScopeEmissionsExplainer = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} viewport={{
    once: true
  }} className="mb-16">
      
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white shadow hover:shadow-md transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-chargetrux-darkblue">How ChargeTrux Supports ESG Initiatives</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              ChargeTrux supports ESG initiatives by delivering 100% renewable energy for all mobile charging operations, 
              significantly reducing Scope 2 emissions compared to traditional grid charging. By utilizing certified 
              renewable energy sources and providing transparent tracking of energy consumption, ChargeTrux enables 
              fleet operators to accurately report their reduced carbon footprint while meeting increasingly stringent 
              sustainability requirements. This renewable approach helps organizations demonstrate meaningful progress 
              toward their environmental goals while maintaining operational efficiency.
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>;
};
export default ScopeEmissionsExplainer;