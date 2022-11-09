import React, { ReactNode } from 'react';
import { TodoItem } from '../Item/Item';
import { css } from '@emotion/react';
import { blue } from '@ant-design/colors';

type Props = {
  todos: TodoListItem[];
  headerText: string;
  onClickTodo: (id: number) => void;
  footer?: ReactNode;
};

export const TodoList: React.FC<Props> = ({
  todos,
  headerText,
  onClickTodo,
  footer,
}) => {
  return (
    <div css={style.container}>
      <div css={style.header}>
        <div>{headerText}</div>
      </div>
      <div css={style.scrollable}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todoItem={todo}
            onClick={() => onClickTodo(todo.id)}
          />
        ))}
        {footer}
      </div>
    </div>
  );
};

const style = {
  container: css`
    background-color: #fff;
    border-radius: 4px;
    padding: 10px 12px;
    height: calc(100vh - 140px);
  `,

  header: css`
    display: flex;
    justify-content: end;
    height: 18px;
    font-size: 8px;
    font-weight: bold;
    color: ${blue[7]};

    div {
      width: 40px;
    }
  `,

  scrollable: css`
    overflow: scroll;
    height: calc(100% - 18px);
  `,
};
