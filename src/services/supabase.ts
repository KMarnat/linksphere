import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wasoizajlheggsngsrii.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indhc29pemFqbGhlZ2dzbmdzcmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NDQzMzYsImV4cCI6MjAyNzEyMDMzNn0.DyRrgT-QkHXilfCnpEKGA6MuG2lns6_6qutqGIHFuBQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
