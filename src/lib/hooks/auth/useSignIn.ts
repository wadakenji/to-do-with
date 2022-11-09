import { useState } from 'react';
import { AuthError } from '@supabase/supabase-js';
import { supabase } from '../../supabase';
import { useUsernameCache } from '../cache/useUsernameCache';

export const useSignIn = (onSuccess?: () => Promise<void>) => {
  const { setUsername } = useUsernameCache();

  const [error, setError] = useState<AuthError | null>(null);
  const [isPending, setIsPending] = useState(false);

  const signIn = async (email: string, password: string) => {
    setIsPending(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setError(error);
    else {
      await onSuccess?.();
      setUsername(data.user?.user_metadata.name);
    }

    setIsPending(false);

    return data;
  };

  return {
    signIn,
    isPending,
    error,
  };
};
