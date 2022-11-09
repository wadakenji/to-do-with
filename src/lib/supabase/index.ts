import { createClient } from '@supabase/supabase-js';
import { ENV } from '../../config/env';

export const supabase = createClient<Database>(
  ENV.SUPABSE_PROJECT_URL,
  ENV.SUPABSE_API_KEY,
  {
    auth: { autoRefreshToken: true },
  }
);
