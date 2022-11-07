import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { TodoList } from './List';
import { css } from '@emotion/react';
import { blue } from '@ant-design/colors';

/** 追加用ボタン */
type AddButtonProps = {
  onClick: () => void;
};

export const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <div css={addButtonStyle.container} onClick={onClick}>
      <div>新しいやりたいこと…</div>
      <div css={addButtonStyle.iconWrapper}>
        <PlusOutlined />
      </div>
    </div>
  );
};

const addButtonStyle = {
  container: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${blue[5]};
    height: 32px;
    background-color: #fff;
    position: sticky;
    left: 0;
    bottom: 0;
  `,

  iconWrapper: css`
    width: 32px;
  `,
};

/** やりたいことリスト */
type Props = {
  todos: TodoListItem[];
};

export const WantToDoList: React.FC<Props> = ({ todos }) => {
  return (
    <TodoList
      todos={todos}
      headerText="やった"
      footer={<AddButton onClick={() => undefined} />}
    />
  );
};
