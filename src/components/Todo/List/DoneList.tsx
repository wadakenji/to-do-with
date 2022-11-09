import React from 'react';
import { TodoList } from './List';
import { useGetDoneList } from '../../../lib/hooks/query/useGetTodoList';
import { useSetWantTo } from '../../../lib/hooks/mutation/useSetWantTo';

type Props = {
  onClickTodo: (id: number) => void;
};

export const DoneList: React.FC<Props> = ({ onClickTodo }) => {
  const { todos } = useGetDoneList();
  const { setWantTo } = useSetWantTo();

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
