import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { TodoList } from './List';
import { css } from '@emotion/react';
import { blue } from '@ant-design/colors';
import { ModalCreate } from '../Modal/Create';
import { useGetWantToDoList } from '../../../lib/hooks/query/useGetTodoList';
import { useSetWantTo } from '../../../lib/hooks/mutation/useSetWantTo';

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
type Props = {
  onClickTodo: (id: number) => void;
};

export const WantToDoList: React.FC<Props> = ({ onClickTodo }) => {
  const { todos } = useGetWantToDoList();
  const { setWantTo } = useSetWantTo();

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
          calcCheckboxValue={wantTo => !wantTo}
          onClickTodo={onClickTodo}
          onCheck={id => setWantTo(id, false)}
        />
      )}
      <ModalCreate
        isOpen={modalCreateIsOpen}
        onClose={() => setModalCreateIsOpen(false)}
      />
    </>
  );
};
