import { useState } from 'react';
import { AuthError } from '@supabase/supabase-js';
import { supabase } from '../supabase';

export const useSignIn = (onSuccess?: () => Promise<void>) => {
  const [error, setError] = useState<AuthError | null>(null);
  const [isPending, setIsPending] = useState(false);

  const signIn = async (email: string, password: string) => {
    setIsPending(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setError(error);
    else await onSuccess?.();

    setIsPending(false);

    return data;
  };

  return {
    signIn,
    isPending,
    error,
  };
};
