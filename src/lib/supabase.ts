import { createClient } from '@supabase/supabase-js';

// Lovable Cloud provides these credentials automatically
// You can find them in the Cloud tab in Lovable
const supabaseUrl = 'https://your-project.supabase.co';
const supabaseAnonKey = 'your-anon-key';

if (!supabaseUrl || supabaseUrl === 'https://your-project.supabase.co') {
  console.error('Please configure your Supabase credentials in src/lib/supabase.ts');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
