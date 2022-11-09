import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { TodoList } from './List';
import { css } from '@emotion/react';
import { blue } from '@ant-design/colors';
import { ModalCreate } from '../Modal/Create';
import { useGetWantToDoList } from '../../../lib/hooks/query/useGetTodoList';

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
    width: 40px;
  `,
};

/** やりたいことリスト */
type Props = {};

export const WantToDoList: React.FC<Props> = () => {
  const { todos } = useGetWantToDoList();

  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);

  return (
    <>
      {todos && (
        <TodoList
          todos={todos}
          headerText="やった"
          footer={
            <AddButton onClick={() => setModalCreateIsOpen(true)} />
          }
        />
      )}
      <ModalCreate
        isOpen={modalCreateIsOpen}
        onClose={() => setModalCreateIsOpen(false)}
      />
    </>
  );
};
