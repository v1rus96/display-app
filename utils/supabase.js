// utils/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://fyzcarugqmcpcfspouzk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5emNhcnVncW1jcGNmc3BvdXprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxMDY2NDMsImV4cCI6MjAxNDY4MjY0M30.AFVqzMGr9Sxor29w80a_9A7fJy-3MaanWqNpLPRl5lE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);