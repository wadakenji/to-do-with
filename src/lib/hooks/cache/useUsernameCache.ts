import { useQueryClient } from '@tanstack/react-query';
import { GLOBAL_STATE_KEY } from '../../../config/cacheKey';
import { Session } from '@supabase/supabase-js';

export const useUsernameCache = () => {
  const queryClient = useQueryClient();

  const session = queryClient.getQueryData<Session | null>([
    GLOBAL_STATE_KEY.USER_SESSION,
  ]);

  const username = session?.user.user_metadata.name || '';

  return { username };
};
