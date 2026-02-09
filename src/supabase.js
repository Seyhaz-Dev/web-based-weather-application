import { createClient } from '@supabase/supabase-js'

// 1. Use the "Project URL" from your screen
const supabaseUrl = 'https://xxliylqixxsnxpmjaqzd.supabase.co'

// 2. Use the "Publishable Key" from your screen
const supabaseKey = 'sb_publishable_vwOL1Z0XV1PiuYuPLzDdfg_lMV1BAQO' 

export const supabase = createClient(supabaseUrl, supabaseKey)