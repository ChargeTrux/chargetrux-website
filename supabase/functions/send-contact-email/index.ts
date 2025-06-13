
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  fleetSize: string;
  chargingFrequency: string;
  serviceArea: string;
  meetingTimes: string[];
  meetingType: string;
  timeline: string;
  additionalComments?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Processing contact form submission...");
    
    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store the form submission in the database
    console.log("Saving to database...");
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        full_name: formData.fullName,
        company_name: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        fleet_size: formData.fleetSize,
        charging_frequency: formData.chargingFrequency,
        service_area: formData.serviceArea,
        meeting_times: formData.meetingTimes,
        meeting_type: formData.meetingType,
        timeline: formData.timeline,
        additional_comments: formData.additionalComments || null,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log("Form submission saved to database:", submission);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submitted successfully!",
        submissionId: submission.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in contact form function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "An unexpected error occurred" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
