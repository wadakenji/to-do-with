import React, { useEffect } from 'react';
import { TodoList } from './List';
import { useGetDoneList } from '../../../lib/hooks/query/useGetTodoList';
import { useSetWantTo } from '../../../lib/hooks/mutation/useSetWantTo';
import { useTodoListCache } from '../../../lib/hooks/cache/useTodoListCache';

type Props = {
  onClickTodo: (id: number) => void;
};

export const DoneList: React.FC<Props> = ({ onClickTodo }) => {
  const { todos } = useGetDoneList();
  const { setWantTo } = useSetWantTo();
  const { filterDoneListCache } = useTodoListCache();

  useEffect(() => filterDoneListCache, []);

  return (
    <>
      {todos && (
        <TodoList
          todos={todos}
          headerText="またやる"
          calcCheckboxValue={wantTo => wantTo}
          onClickTodo={onClickTodo}
          onCheck={id => setWantTo(id, true)}
        />
      )}
    </>
  );
};
