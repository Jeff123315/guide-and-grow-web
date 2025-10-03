import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://prgezkutnfmhqdtwejkt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByZ2V6a3V0bmZtaHFkdHdlamt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MzkwNzEsImV4cCI6MjA3NTAxNTA3MX0.xGGqGka283U31G5zn78XEnyQsJxLByUh6-ILyNwnjPc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
