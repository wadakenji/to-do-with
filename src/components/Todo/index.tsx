import React from 'react';
import { Radios } from './Radios';
import { useTodoRadios } from '../../lib/hooks/useTodoRadios';
import { css } from '@emotion/react';
import { WantToDoList } from './List/WantToDoList';
import { DoneList } from './List/DoneList';

const MOCK: TodoRead[] = new Array(16).fill(null).map((_, id) => ({
  id,
  title: 'タイトル'.repeat((id % 5) + 1),
  description: '説明文'.repeat(100),
  authorName: 'だれか',
  count: 0,
  wantTo: true,
  lastTime: null,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

export const Todo: React.FC = () => {
  const { radioState, onRadioChange } = useTodoRadios();

  return (
    <div css={style.wrapper}>
      <Radios
        radioState={radioState}
        onRadioChange={onRadioChange}
        mb={12}
      />
      {radioState === 'WANT_TO_DO' ? (
        <WantToDoList todos={MOCK} />
      ) : (
        <DoneList todos={MOCK} />
      )}
    </div>
  );
};

const style = {
  wrapper: css`
    width: 100%;
    text-align: center;
  `,
};
