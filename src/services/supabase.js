/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl =
// const supabaseKey =
//
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);

export default supabase;
