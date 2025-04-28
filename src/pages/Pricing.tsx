
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Contact Us",
      description: "Perfect for small fleets",
      features: [
        "Up to 5 vehicles per session",
        "8-hour response time",
        "Basic reporting",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "Contact Us",
      description: "Ideal for medium-sized fleets",
      features: [
        "Up to 15 vehicles per session",
        "4-hour response time",
        "Advanced analytics",
        "24/7 phone support",
        "Dedicated account manager",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Custom solutions for large fleets",
      features: [
        "Unlimited vehicles per session",
        "2-hour response time",
        "Custom reporting",
        "24/7 priority support",
        "Multiple account managers",
        "Custom integration",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-chargetrux-darkblue to-black">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that best fits your fleet's charging needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? "bg-chargetrux-green text-white"
                  : "bg-white/10 text-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
              </div>
              <p className="text-sm mb-6 opacity-90">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-white text-chargetrux-green hover:bg-white/90"
                    : "bg-chargetrux-green hover:bg-chargetrux-green/80"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
