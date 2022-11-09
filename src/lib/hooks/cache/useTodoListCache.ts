import { useQueryClient } from '@tanstack/react-query';
import { API_KEY } from '../../../config/cacheKey';

export const useTodoListCache = () => {
  const queryClient = useQueryClient();

  const addAndUpdateWantToDoCache = (newTodo: TodoRowListItem) => {
    queryClient.setQueryData<TodoRowListItem[]>(
      [API_KEY.TODO_LIST, true],
      prev => {
        if (!prev) return prev;
        return [...prev, newTodo];
      }
    );
  };

  return { addAndUpdateWantToDoCache };
};
