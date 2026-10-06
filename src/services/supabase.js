/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://acngmpkpqyxpgfovnfja.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjbmdtcGtwcXl4cGdmb3ZuZmphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5OTg2NzcsImV4cCI6MjEwNDU3NDY3N30.ASoqS9f6Sr3PxjUZLhucgp-khtG3mn-5EEDy6lbyimQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
