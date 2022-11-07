import { useState } from 'react';
import { RadioChangeEvent } from 'antd';

export const useTodoRadios = () => {
  const [radioState, setRadioState] =
    useState<RadioState>('WANT_TO_DO');

  const onRadioChange = (e: RadioChangeEvent) =>
    setRadioState(e.target.value);

  return { radioState, onRadioChange };
};
