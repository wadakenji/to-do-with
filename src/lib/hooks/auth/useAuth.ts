import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../supabase';
import { GLOBAL_STATE_KEY } from '../../../config/cacheKey';

export const useAuth = () => {
  const { data, isLoading } = useQuery(
    [GLOBAL_STATE_KEY.USER_SESSION],
    () => supabase.auth.getSession().then(r => r.data.session)
  );

  return {
    session: data,
    isLoading,
  };
};
