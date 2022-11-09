import React from 'react';
import { TodoList } from './List';
import { useGetDoneList } from '../../../lib/hooks/query/useGetTodoList';

type Props = {
  onClickTodo: (id: number) => void;
};

export const DoneList: React.FC<Props> = ({ onClickTodo }) => {
  const { todos } = useGetDoneList();

  return (
    <>
      {todos && (
        <TodoList
          todos={todos}
          headerText="またやる"
          onClickTodo={onClickTodo}
        />
      )}
    </>
  );
};
