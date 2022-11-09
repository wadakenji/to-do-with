import { useMutation } from '@tanstack/react-query';
import { supabase } from '../../supabase';

type Variables = {
  id: number;
  updateValues: Omit<TodoUpdate, 'id' | 'updated_at'>;
};

export const useUpdateTodo = () => {
  const { mutate, ...rest } = useMutation(
    async ({ id, updateValues }: Variables) => {
      const { data, error } = await supabase
        .from('todos')
        .update(updateValues)
        .eq('id', id)
        .select();

      if (error) throw error;
      return data[0];
    }
  );

  return {
    updateTodo: mutate,
    ...rest,
  };
};
