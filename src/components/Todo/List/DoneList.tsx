import React from 'react';
import { TodoList } from './List';
import { useGetDoneList } from '../../../lib/hooks/query/useGetTodoList';

type Props = {};

export const DoneList: React.FC<Props> = () => {
  const { todos } = useGetDoneList();

  return (
    <>{todos && <TodoList todos={todos} headerText="またやる" />}</>
  );
};
