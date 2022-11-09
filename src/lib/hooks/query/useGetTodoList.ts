import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { supabase } from '../../supabase';
import { API_KEY } from '../../../config/apiCacheKey';

const useGetTodoList = (
  wantTo: boolean
): Omit<UseQueryResult, 'data'> & {
  todos: TodoListItem[] | undefined;
} => {
  const { data, ...rest } = useQuery(
    [API_KEY.TODO_LIST, wantTo],
    async ctx =>
      await supabase
        .from('todos')
        .select('id, title, want_to, updated_at')
        .order('updated_at')
        .eq('want_to', ctx.queryKey[1])
  );

  const todos = data?.data?.map(todo => ({
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
