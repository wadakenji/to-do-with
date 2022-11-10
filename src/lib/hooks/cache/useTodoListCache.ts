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
        return [newTodo, ...prev];
      }
    );
  };

  /** update時汎用 */
  const updateSingleTodoInList = (
    updatedId: number,
    listWantTo: boolean,
    updateValues: TodoUpdate
  ) => {
    queryClient.setQueryData<TodoRowListItem[]>(
      [API_KEY.TODO_LIST, listWantTo],
      prev => {
        if (!prev) return prev;
        return prev.map(prevTodo => {
          if (prevTodo.id !== updatedId) return prevTodo;
          return { ...prevTodo, ...updateValues };
        });
      }
    );
  };
  const updateSingleTodo = (
    updatedId: number,
    updateValues: TodoUpdate
  ) => {
    queryClient.setQueryData<TodoRow>(
      [API_KEY.TODO_SINGLE, updatedId],
      prev => {
        if (!prev) return prev;
        return { ...prev, ...updateValues };
      }
    );
  };

  /** やりたいこと/やったことのチェックボックス押下時 */
  const setWantToCache = (updatedId: number, newWantTo: boolean) => {
    updateSingleTodoInList(updatedId, !newWantTo, {
      want_to: newWantTo,
    });
  };

  /** タイトル編集時 */
  const setTitleCache = (
    updatedId: number,
    newTitle: string,
    wantTo: boolean
  ) => {
    const updateValues = { title: newTitle };
    updateSingleTodoInList(updatedId, wantTo, updateValues);
    updateSingleTodo(updatedId, updateValues);
  };

  /** 説明文編集時 */
  const setDescriptionCache = (
    updatedId: number,
    newDescription: string
  ) => {
    updateSingleTodo(updatedId, { description: newDescription });
  };

  return {
    addAndUpdateWantToDoCache,
    setWantToCache,
    setTitleCache,
    setDescriptionCache,
  };
};
