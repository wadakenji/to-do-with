import { useUpdateTodo } from './useUpdateTodo';
import { useTodoListCache } from '../cache/useTodoListCache';

export const useSetWantTo = () => {
  const { updateTodo, ...rest } = useUpdateTodo();
  const { setWantToCache } = useTodoListCache();

  const setWantTo = (id: number, wantTo: boolean) => {
    setWantToCache(id, wantTo);
    updateTodo({ id, updateValues: { want_to: wantTo } });
  };

  return { setWantTo, ...rest };
};
