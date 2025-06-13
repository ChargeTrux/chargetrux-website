
-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;

-- Create a new policy that allows anyone (including anonymous users) to insert contact forms
CREATE POLICY "Allow public contact form submissions" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Keep the existing policy for viewing submissions (only authenticated users)
-- This ensures that while anyone can submit, only authenticated users can view submissions
