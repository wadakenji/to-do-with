import { useUpdateTodo } from './useUpdateTodo';
import { useTodoListCache } from '../cache/useTodoListCache';

export const useSetTitle = () => {
  const { updateTodo, ...rest } = useUpdateTodo();
  const { setTitleCache } = useTodoListCache();

  const setTitle = (
    updatedId: number,
    newTitle: string,
    wantTo: boolean
  ) => {
    setTitleCache(updatedId, newTitle, wantTo);
    updateTodo({ id: updatedId, updateValues: { title: newTitle } });
  };

  return { setTitle, ...rest };
};
