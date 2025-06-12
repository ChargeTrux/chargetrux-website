
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin } from "lucide-react";
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
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  fleetSize: z.string().min(1, {
    message: "Please select your fleet size.",
  }),
  chargingFrequency: z.string().min(1, {
    message: "Please select a charging frequency.",
  }),
  serviceArea: z.string().min(1, {
    message: "Please select your service area.",
  }),
  meetingTimes: z.array(z.string()).min(1, {
    message: "Please select at least one preferred meeting time.",
  }),
  meetingType: z.string().min(1, {
    message: "Please select a meeting type.",
  }),
  timeline: z.string().min(1, {
    message: "Please select a timeline.",
  }),
  additionalComments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      fleetSize: "",
      chargingFrequency: "",
      serviceArea: "",
      meetingTimes: [],
      meetingType: "",
      timeline: "",
      additionalComments: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Prepare email data
      const emailData = {
        to: "specialist@chargetrux.com",
        subject: "New Fleet Charging Consultation Request",
        html: `
          <h2>New Fleet Charging Consultation Request</h2>
          <p><strong>Full Name:</strong> ${data.fullName}</p>
          <p><strong>Company:</strong> ${data.companyName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Fleet Size:</strong> ${data.fleetSize}</p>
          <p><strong>Charging Frequency:</strong> ${data.chargingFrequency}</p>
          <p><strong>Service Area:</strong> ${data.serviceArea}</p>
          <p><strong>Preferred Meeting Times:</strong> ${data.meetingTimes.join(", ")}</p>
          <p><strong>Meeting Type:</strong> ${data.meetingType}</p>
          <p><strong>Timeline:</strong> ${data.timeline}</p>
          ${data.additionalComments ? `<p><strong>Additional Comments:</strong> ${data.additionalComments}</p>` : ""}
        `
      };

      // Simulate email sending (you'll need to integrate with an email service)
      console.log("Email data to send:", emailData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Consultation Request Sent",
        description: "Our fleet specialist will contact you within 24 hours to schedule your consultation.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send consultation request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fleetSizeOptions = [
    "1-5 vehicles",
    "6-15 vehicles", 
    "16-50 vehicles",
    "51-100 vehicles",
    "100+ vehicles"
  ];

  const chargingFrequencyOptions = [
    "Daily charging needs",
    "Weekly charging needs",
    "Monthly charging needs",
    "Emergency backup only",
    "Still planning deployment"
  ];

  const serviceAreaOptions = [
    "Seattle", "Portland", "San Francisco", "Oakland", "San Jose", "Los Angeles", 
    "Orange County", "San Diego", "Phoenix", "Albuquerque", "Dallas", "Houston", 
    "Austin", "San Antonio", "New Orleans", "Tampa", "Orlando", "Fort Lauderdale", 
    "Miami", "Atlanta", "Charlotte", "Raleigh-Durham", "Norfolk/Virginia Beach", 
    "Washington D.C.", "Baltimore", "Philadelphia", "Newark", "New York City", "Boston"
  ];

  const meetingTimeOptions = [
    "Mon 9AM-12PM", "Mon 1PM-5PM", "Tue 9AM-12PM", "Tue 1PM-5PM",
    "Wed 9AM-12PM", "Wed 1PM-5PM", "Thu 9AM-12PM", "Thu 1PM-5PM", 
    "Fri 9AM-12PM", "Fri 1PM-5PM"
  ];

  const meetingTypeOptions = [
    "Phone Call (30 minutes)",
    "Video Call - Zoom/Teams (30 minutes)", 
    "In-Person Meeting (45 minutes)"
  ];

  const timelineOptions = [
    "Immediate (within 2 weeks)",
    "Short-term (1-3 months)",
    "Medium-term (3-6 months)",
    "Long-term (6+ months)",
    "Just exploring options"
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
          <h1 className="text-2xl md:text-3xl font-bold text-chargetrux-green mb-6">
            Schedule Your Free Fleet Charging Consultation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get personalized solutions for your electric vehicle fleet charging needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-8"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
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
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Company/Business Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your company name" 
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email Address *</FormLabel>
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
                      <FormLabel className="text-gray-300">Phone Number *</FormLabel>
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
                
                <FormField
                  control={form.control}
                  name="fleetSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Number of EVs in Fleet *</FormLabel>
                      <FormControl>
                        <select 
                          className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white text-base md:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                          defaultValue=""
                        >
                          <option value="" disabled>Select fleet size</option>
                          {fleetSizeOptions.map((option) => (
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
                  name="chargingFrequency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Charging Frequency Needed *</FormLabel>
                      <FormControl>
                        <select 
                          className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white text-base md:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                          defaultValue=""
                        >
                          <option value="" disabled>Select charging frequency</option>
                          {chargingFrequencyOptions.map((option) => (
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
                  name="serviceArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Primary Service Area *</FormLabel>
                      <FormControl>
                        <select 
                          className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white text-base md:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                          defaultValue=""
                        >
                          <option value="" disabled>Select your area</option>
                          {serviceAreaOptions.map((option) => (
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
                  name="meetingTimes"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Preferred Meeting Times (Select all that work) *</FormLabel>
                      <div className="grid grid-cols-2 gap-2">
                        {meetingTimeOptions.map((time) => (
                          <FormField
                            key={time}
                            control={form.control}
                            name="meetingTimes"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(time) || false}
                                    onCheckedChange={(checked) => {
                                      const currentValue = field.value || [];
                                      return checked
                                        ? field.onChange([...currentValue, time])
                                        : field.onChange(currentValue.filter((value) => value !== time))
                                    }}
                                    className="data-[state=checked]:bg-chargetrux-green data-[state=checked]:border-chargetrux-green"
                                  />
                                </FormControl>
                                <FormLabel className="text-sm text-gray-300 font-normal">
                                  {time}
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="meetingType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Preferred Meeting Type *</FormLabel>
                      <div className="space-y-2">
                        {meetingTypeOptions.map((type) => (
                          <FormField
                            key={type}
                            control={form.control}
                            name="meetingType"
                            render={({ field: radioField }) => (
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <input
                                    type="radio"
                                    name="meetingType"
                                    value={type}
                                    checked={radioField.value === type}
                                    onChange={() => radioField.onChange(type)}
                                    className="h-4 w-4 text-chargetrux-green"
                                  />
                                </FormControl>
                                <FormLabel className="text-sm text-gray-300 font-normal">
                                  {type}
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Timeline *</FormLabel>
                      <FormControl>
                        <select 
                          className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white text-base md:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                          defaultValue=""
                        >
                          <option value="" disabled>When do you need to get started?</option>
                          {timelineOptions.map((option) => (
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
                  name="additionalComments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Additional Comments or Requirements</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your specific charging needs, fleet composition, or any special requirements..."
                          className="bg-white/5 border-white/10 text-white"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-chargetrux-green hover:bg-chargetrux-green/80 text-white font-bold py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "📅 Book My Free Consultation"}
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
