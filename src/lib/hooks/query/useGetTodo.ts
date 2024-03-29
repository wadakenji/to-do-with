import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { API_KEY } from '../../../config/cacheKey';
import { supabase } from '../../supabase';

export const useGetTodo = (
  id: number
): Omit<UseQueryResult, 'data'> & {
  todo: TodoRead | undefined;
} => {
  const { data, ...rest } = useQuery(
    [API_KEY.TODO_SINGLE, id],
    async ctx => {
      const { data, error } = await supabase
        .from('todos')
        .select()
        .eq('id', ctx.queryKey[1]);
      if (error) throw error;
      return data[0];
    },
    { enabled: !!id }
  );

  const todoRow = data;
  const todo: TodoRead | undefined = todoRow && {
    id: todoRow.id,
    title: todoRow.title,
    description: todoRow.description || '',
    authorName: todoRow.author_name || '',
    wantTo: todoRow.want_to,
    count: todoRow.count,
    lastTime:
      todoRow.last_time != null ? new Date(todoRow.last_time) : null,
    createdAt: new Date(todoRow.created_at),
    updatedAt: new Date(todoRow.updated_at),
  };

  return {
    todo,
    ...rest,
  };
};
