import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { supabase } from '../../supabase';
import { API_KEY } from '../../../config/cacheKey';

const useGetTodoList = (
  wantTo: boolean
): Omit<UseQueryResult, 'data'> & {
  todos: TodoListItem[] | undefined;
} => {
  const { data, ...rest } = useQuery(
    [API_KEY.TODO_LIST, wantTo],
    async ctx => {
      const { data, error } = await supabase
        .from('todos')
        .select('id, title, want_to, updated_at')
        .order('updated_at', { ascending: false })
        .eq('want_to', ctx.queryKey[1]);
      if (error) throw error;
      return data;
    }
  );

  const todos = data?.map(todo => ({
    id: todo.id,
    title: todo.title,
    wantTo: todo.want_to,
    updatedAt: new Date(todo.updated_at),
  }));

  return {
    todos,
    ...rest,
  };
};

export const useGetWantToDoList = () => useGetTodoList(true);
export const useGetDoneList = () => useGetTodoList(false);
