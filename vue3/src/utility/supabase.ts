import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./secret";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
