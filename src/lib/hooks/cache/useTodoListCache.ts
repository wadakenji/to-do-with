import { useQueryClient } from '@tanstack/react-query';
import { API_KEY } from '../../../config/cacheKey';

export const useTodoListCache = () => {
  const queryClient = useQueryClient();

  /** やりたいこと追加時 */
  const addAndUpdateWantToDoCache = (newTodo: TodoRowListItem) => {
    queryClient.setQueryData<TodoRowListItem[]>(
      [API_KEY.TODO_LIST, true],
      prev => {
        if (!prev) return prev;
        return [...prev, newTodo];
      }
    );
  };

  /** やりたいこと/やったことのチェックボックス押下時 */
  const setWantToCache = (updatedId: number, newWantTo: boolean) => {
    queryClient.setQueryData<TodoRowListItem[]>(
      [API_KEY.TODO_LIST, !newWantTo],
      prev => {
        if (!prev) return prev;
        return prev.map(prevTodo => {
          if (prevTodo.id !== updatedId) return prevTodo;
          return { ...prevTodo, want_to: newWantTo };
        });
      }
    );
  };

  return {
    addAndUpdateWantToDoCache,
    setWantToCache,
  };
};
