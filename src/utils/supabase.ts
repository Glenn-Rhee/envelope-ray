import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://erlojixckszyclmhikek.supabase.co";
const serviceRole =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVybG9qaXhja3N6eWNsbWhpa2VrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTcwNTk1NCwiZXhwIjoyMDI3MjgxOTU0fQ.qT8-9Urec3UXTVYgaJxtpn_tnPT9lcpUV-5o6Xi4Csc";

export const supabaseClient = createClient(supabaseUrl, serviceRole)