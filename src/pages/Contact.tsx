import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Calendar } from "lucide-react";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  fleetSize: z.string().min(1, {
    message: "Please enter your fleet size.",
  }),
  frequency: z.string().min(1, {
    message: "Please select a charging frequency.",
  }),
  locations: z.string().min(2, {
    message: "Please enter your service areas.",
  }),
  message: z.string().optional(),
  newsletter: z.boolean().default(false).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      fleetSize: "",
      frequency: "",
      locations: "",
      message: "",
      newsletter: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form data submitted:", data);
    toast({
      title: "Request Received",
      description: "One of our fleet specialists will contact you within 24 hours.",
    });
    
    setIsSubmitting(false);
    form.reset();
  };

  const frequencyOptions = [
    "Daily charging needs",
    "Weekly charging needs",
    "Monthly charging needs",
    "Emergency backup only",
    "Still planning deployment"
  ];

  // Updated service areas organized by regions
  const serviceAreas = {
    westCoast: {
      title: "West Coast",
      cities: ["Seattle", "Portland", "San Francisco", "Oakland", "San Jose", "Los Angeles", "Orange County", "San Diego"]
    },
    gulfSouthwest: {
      title: "Gulf Coast & Southwest",
      cities: ["Phoenix", "Albuquerque", "Dallas", "Houston", "Austin", "San Antonio", "New Orleans", "Tampa", "Orlando", "Fort Lauderdale", "Miami"]
    },
    eastCoast: {
      title: "East Coast & Southeast",
      cities: ["Atlanta", "Charlotte", "Raleigh-Durham", "Norfolk/Virginia Beach", "Washington D.C.", "Baltimore", "Philadelphia", "Newark", "New York City", "Boston"]
    }
  };

  // Calendly direct URL - replace with your actual Calendly link
  const calendlyUrl = "https://calendly.com/your-calendly-link";

  return (
    <div className="min-h-screen bg-gradient-to-b from-chargetrux-darkblue to-black">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Contact ChargeTrux
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to revolutionize how your fleet charges? Our team of EV charging specialists is ready to discuss your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Get Started With Mobile Fleet Charging
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="bg-white/5 border-white/10 text-white" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Company/Business Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your company" 
                            className="bg-white/5 border-white/10 text-white" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your@email.com" 
                            className="bg-white/5 border-white/10 text-white" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your phone number" 
                            className="bg-white/5 border-white/10 text-white" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="fleetSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Number of EVs in Fleet</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Current or planned fleet size" 
                          className="bg-white/5 border-white/10 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="frequency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Charging Frequency</FormLabel>
                      <FormControl>
                        <select 
                          className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white text-base md:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                          defaultValue=""
                        >
                          <option value="" disabled>Select charging frequency</option>
                          {frequencyOptions.map((option) => (
                            <option key={option} value={option} className="bg-chargetrux-darkblue">
                              {option}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="locations"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Primary Service Areas/Locations</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Where do you need charging services?" 
                          className="bg-white/5 border-white/10 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Additional Comments or Requirements</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your specific charging needs..."
                          className="bg-white/5 border-white/10 text-white"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-chargetrux-green data-[state=checked]:border-chargetrux-green"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-gray-300">
                          Subscribe to our newsletter for EV charging insights and updates
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-chargetrux-green hover:bg-chargetrux-green/80 text-white font-bold py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Schedule a Consultation
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-chargetrux-green mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Book a Meeting</h3>
                    <p className="text-gray-300 mb-4">Schedule a 30-minute intro call with our fleet specialists to discuss your specific needs.</p>
                    <Button 
                      className="bg-chargetrux-blue hover:bg-chargetrux-blue/80"
                      onClick={() => window.open(calendlyUrl, "_blank")}
                    >
                      Schedule Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-chargetrux-green mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Service Areas</h3>
                  <p className="text-gray-300 mb-4">ChargeTrux currently services major metropolitan areas across the United States, with rapid expansion plans underway.</p>
                </div>
              </div>
              
              {/* Updated Service Areas by region */}
              <div className="grid grid-cols-1 gap-6">
                {/* West Coast */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-chargetrux-green mb-2 flex items-center">
                    <span className="text-chargetrux-green mr-2">✓</span>
                    {serviceAreas.westCoast.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.westCoast.cities.map((city) => (
                      <div key={city} className="bg-white/5 rounded-md px-3 py-2 text-gray-300">
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Gulf Coast & Southwest */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-chargetrux-green mb-2 flex items-center">
                    <span className="text-chargetrux-green mr-2">✓</span>
                    {serviceAreas.gulfSouthwest.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.gulfSouthwest.cities.map((city) => (
                      <div key={city} className="bg-white/5 rounded-md px-3 py-2 text-gray-300">
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* East Coast & Southeast */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-chargetrux-green mb-2 flex items-center">
                    <span className="text-chargetrux-green mr-2">✓</span>
                    {serviceAreas.eastCoast.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.eastCoast.cities.map((city) => (
                      <div key={city} className="bg-white/5 rounded-md px-3 py-2 text-gray-300">
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="mt-4 text-sm text-gray-400">
                Planning to deploy EVs in other locations? Let us know—we're expanding rapidly!
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Why Fleet Operators Choose ChargeTrux</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-chargetrux-green">✓</span>
                  <span><strong>Zero Infrastructure Costs:</strong> No construction, permitting, or electrical upgrades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chargetrux-green">✓</span>
                  <span><strong>Flexible Deployment:</strong> On-demand or scheduled charging when and where needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chargetrux-green">✓</span>
                  <span><strong>Maximum Uptime:</strong> Keep vehicles in service longer with strategic mobile charging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chargetrux-green">✓</span>
                  <span><strong>Complete Energy Management:</strong> 100% renewable electricity with detailed reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chargetrux-green">✓</span>
                  <span><strong>Operational Simplicity:</strong> We handle everything—you focus on running your fleet</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
