import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTU4OTI4NSwiZXhwIjoxOTQxMTY1Mjg1fQ.CF_ZxsrNHgReyYvH3CEs-g8zeLua0AYV29NHT5nZ8HE'
export default ({ app }, inject) => {
  const supabaseUrl = "https://bbmfpiyvievjtvcsazgn.supabase.co"
  const supabaseKey = SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  inject('supabase', supabase)
}