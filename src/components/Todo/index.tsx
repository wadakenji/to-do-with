import React, { useState } from 'react';
import { Radios } from './Radios';
import { useTodoRadios } from '../../lib/hooks/useTodoRadios';
import { css } from '@emotion/react';
import { WantToDoList } from './List/WantToDoList';
import { DoneList } from './List/DoneList';
import { ModalEdit } from './Modal/Edit';

export const Todo: React.FC = () => {
  const { radioState, onRadioChange } = useTodoRadios();

  const [selectedId, setSelectedId] = useState(0);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

  const onClickTodo = (id: number) => {
    setSelectedId(id);
    setModalEditIsOpen(true);
  };

  return (
    <>
      <div css={style.wrapper}>
        <Radios
          radioState={radioState}
          onRadioChange={onRadioChange}
          mb={12}
        />
        {radioState === 'WANT_TO_DO' ? (
          <WantToDoList onClickTodo={onClickTodo} />
        ) : (
          <DoneList onClickTodo={onClickTodo} />
        )}
      </div>
      <ModalEdit
        todoId={selectedId}
        isOpen={modalEditIsOpen}
        onClose={() => setModalEditIsOpen(false)}
      />
    </>
  );
};

const style = {
  wrapper: css`
    width: 100%;
    text-align: center;
  `,
};
