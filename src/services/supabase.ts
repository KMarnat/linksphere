import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zsryhgxipiughyncuhql.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzcnloZ3hpcGl1Z2h5bmN1aHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MjA2NzksImV4cCI6MjAzMjk5NjY3OX0.oGDXwJa7eXsfhiQaiFEGIxwsA-qLxAjd93t0Wo3nS2c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
