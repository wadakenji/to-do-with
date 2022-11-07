import React from 'react';
import { TodoList } from './List';

type Props = { todos: TodoListItem[] };

export const DoneList: React.FC<Props> = ({ todos }) => {
  return <TodoList todos={todos} headerText="またやる" />;
};
