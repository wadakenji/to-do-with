import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { TodoList } from './List';
import { css } from '@emotion/react';
import { blue } from '@ant-design/colors';
import { ModalCreate } from '../Modal/Create';
import { useGetWantToDoList } from '../../../lib/hooks/query/useGetTodoList';
import { useSetWantTo } from '../../../lib/hooks/mutation/useSetWantTo';
import { useTodoListCache } from '../../../lib/hooks/cache/useTodoListCache';

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
    font-size: 18px;
    height: 40px;
    background-color: #fff;
    position: sticky;
    left: 0;
    bottom: 0px;
    z-index: 99;
    border: solid 1px #fff;
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
  const { filterWantToDoListCache } = useTodoListCache();
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);

  useEffect(() => filterWantToDoListCache, []);

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
