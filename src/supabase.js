import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nqcozvfmrjydftyivbxc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xY296dmZtcmp5ZGZ0eWl2YnhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4MDM0NjQsImV4cCI6MTk5NDM3OTQ2NH0.G5vs3GPV3rSQAN-fwqwzCBkyoZVJ86c7tLkDt-7jDGI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
