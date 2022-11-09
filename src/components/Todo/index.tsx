import React from 'react';
import { Radios } from './Radios';
import { useTodoRadios } from '../../lib/hooks/useTodoRadios';
import { css } from '@emotion/react';
import { WantToDoList } from './List/WantToDoList';
import { DoneList } from './List/DoneList';

export const Todo: React.FC = () => {
  const { radioState, onRadioChange } = useTodoRadios();

  return (
    <div css={style.wrapper}>
      <Radios
        radioState={radioState}
        onRadioChange={onRadioChange}
        mb={12}
      />
      {radioState === 'WANT_TO_DO' ? <WantToDoList /> : <DoneList />}
    </div>
  );
};

const style = {
  wrapper: css`
    width: 100%;
    text-align: center;
  `,
};
