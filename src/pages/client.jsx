import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gddmjykozlechthudfpq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZG1qeWtvemxlY2h0aHVkZnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzODU1MzgsImV4cCI6MjAyMDk2MTUzOH0.91Y9E4gdBE0EAT2SUQ8o9bUbyFCrEVuJSdlVOc8aO9E";
export const supabase = createClient(supabaseUrl, supabaseKey);
