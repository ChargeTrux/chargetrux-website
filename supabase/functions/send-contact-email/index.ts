
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

// Initialize Resend with proper error handling
const resendApiKey = Deno.env.get("RESEND_API_KEY");
if (!resendApiKey) {
  console.error("RESEND_API_KEY environment variable is not set");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

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
    
    // Check if Resend is available
    if (!resend) {
      throw new Error("Email service is not configured. Please contact support.");
    }

    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    // Create Supabase client
    const supabaseUrl = "https://lelfjloclbvantovejny.supabase.co";
    const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlbGZqbG9jbGJ2YW50b3Zlam55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NjkxMjksImV4cCI6MjA2NTM0NTEyOX0.DTsKKOw-MshrPk05wavTf_zSkXr05TKoQdOgNywKAwE";
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

    // Send email to specialist
    console.log("Sending specialist email...");
    const emailResponse = await resend.emails.send({
      from: "ChargeTrux Contact Form <onboarding@resend.dev>",
      to: ["specialist@chargetrux.com"],
      subject: `New Fleet Charging Consultation Request from ${formData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00cc66; border-bottom: 2px solid #00cc66; padding-bottom: 10px;">
            New Fleet Charging Consultation Request
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Full Name:</strong> ${formData.fullName}</p>
            <p><strong>Company:</strong> ${formData.companyName}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
          </div>

          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Fleet Details</h3>
            <p><strong>Fleet Size:</strong> ${formData.fleetSize}</p>
            <p><strong>Charging Frequency:</strong> ${formData.chargingFrequency}</p>
            <p><strong>Service Area:</strong> ${formData.serviceArea}</p>
            <p><strong>Timeline:</strong> ${formData.timeline}</p>
          </div>

          <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Meeting Preferences</h3>
            <p><strong>Preferred Meeting Type:</strong> ${formData.meetingType}</p>
            <p><strong>Preferred Meeting Times:</strong></p>
            <ul>
              ${formData.meetingTimes.map(time => `<li>${time}</li>`).join('')}
            </ul>
          </div>

          ${formData.additionalComments ? `
          <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Additional Comments</h3>
            <p style="white-space: pre-wrap;">${formData.additionalComments}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666;">
            <p>This consultation request was submitted through the ChargeTrux website contact form.</p>
            <p><strong>Response Time:</strong> Please contact within 24 hours for optimal conversion.</p>
          </div>
        </div>
      `,
    });

    console.log("Specialist email sent successfully:", emailResponse);

    // Send confirmation email to the customer
    console.log("Sending confirmation email...");
    const confirmationResponse = await resend.emails.send({
      from: "ChargeTrux <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank you for your ChargeTrux consultation request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00cc66; border-bottom: 2px solid #00cc66; padding-bottom: 10px;">
            Thank You for Your Interest in ChargeTrux!
          </h2>
          
          <p>Dear ${formData.fullName},</p>
          
          <p>Thank you for requesting a free fleet charging consultation with ChargeTrux. We've received your information and our fleet specialist will contact you within 24 hours to schedule your consultation.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
            <ol>
              <li><strong>Initial Contact:</strong> Our specialist will reach out within 24 hours</li>
              <li><strong>Consultation Scheduling:</strong> We'll find a time that works with your preferences</li>
              <li><strong>Custom Solution:</strong> We'll discuss your specific fleet charging needs</li>
              <li><strong>Proposal:</strong> You'll receive a tailored charging solution for your fleet</li>
            </ol>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Request Summary</h3>
            <p><strong>Fleet Size:</strong> ${formData.fleetSize}</p>
            <p><strong>Service Area:</strong> ${formData.serviceArea}</p>
            <p><strong>Preferred Meeting Type:</strong> ${formData.meetingType}</p>
            <p><strong>Timeline:</strong> ${formData.timeline}</p>
          </div>
          
          <p>In the meantime, feel free to explore our website to learn more about how ChargeTrux is revolutionizing fleet charging with mobile Level 3 solutions.</p>
          
          <p>Best regards,<br>
          The ChargeTrux Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666;">
            <p>ChargeTrux - Mobile Level 3 EV Charging Solutions</p>
            <p>Questions? Reply to this email or visit our website.</p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submitted successfully and emails sent!",
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
    console.error("Error in send-contact-email function:", error);
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
