import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../../supabase';
import { GLOBAL_STATE_KEY } from '../../../config/cacheKey';

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const refetchSession = async () =>
    await queryClient.refetchQueries([GLOBAL_STATE_KEY.USER_SESSION]);

  const { mutate, isLoading, ...rest } = useMutation(
    async (variables: { email: string; password: string }) => {
      const { data, error } = await supabase.auth.signInWithPassword(
        variables
      );
      if (error) throw error;
      return data;
    },
    { onSuccess: refetchSession }
  );

  const signIn = (email: string, password: string) =>
    mutate({ email, password });

  return {
    signIn,
    isPending: isLoading,
    ...rest,
  };
};
