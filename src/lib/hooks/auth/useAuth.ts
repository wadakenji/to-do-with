import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../../supabase';

export const useAuth = () => {
  const [session, setSession] = useState<null | Session>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    setIsLoading(true);

    const { data } = await supabase.auth.getSession();
    setSession(data.session);

    setIsLoading(false);
  };

  return {
    session,
    refreshSession: getSession,
    isLoading,
  };
};
