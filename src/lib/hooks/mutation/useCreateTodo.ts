import { useMutation } from '@tanstack/react-query';
import { supabase } from '../../supabase';
import { useUsernameCache } from '../cache/useUsernameCache';
import { useTodoListCache } from '../cache/useTodoListCache';

export const useCreateTodo = (onSuccess?: () => void) => {
  const { username } = useUsernameCache();
  const { addAndUpdateWantToDoCache } = useTodoListCache();

  const { mutate, ...rest } = useMutation(
    async (variables: { title: string; description?: string }) => {
      const { data, error } = await supabase
        .from('todos')
        .insert({ author_name: username, ...variables })
        .select('id, title, want_to, updated_at');

      if (error) throw error;
      return data[0];
    },
    {
      onSuccess: data => {
        if (!data) return;
        onSuccess?.();
        addAndUpdateWantToDoCache(data);
      },
    }
  );

  return {
    createTodo: mutate,
    ...rest,
  };
};
