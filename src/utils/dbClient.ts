import { createClient } from "@supabase/supabase-js";

const dbClient = createClient(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_KEY
)

export default dbClient
