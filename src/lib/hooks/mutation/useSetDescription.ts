import { useUpdateTodo } from './useUpdateTodo';
import { useTodoListCache } from '../cache/useTodoListCache';

export const useSetDescription = () => {
  const { updateTodo, ...rest } = useUpdateTodo();
  const { setDescriptionCache } = useTodoListCache();

  const setDescription = (
    updatedId: number,
    newDescription: string
  ) => {
    setDescriptionCache(updatedId, newDescription);
    updateTodo({
      id: updatedId,
      updateValues: { title: newDescription },
    });
  };

  return { setDescription, ...rest };
};
