import { Radio, RadioChangeEvent } from 'antd';
import React from 'react';

type Props = {
  radioState: RadioState;
  onRadioChange: (e: RadioChangeEvent) => void;
};

export const Radios: React.FC<Props> = ({
  radioState,
  onRadioChange,
}) => {
  return (
    <Radio.Group
      value={radioState}
      onChange={onRadioChange}
      buttonStyle="solid"
    >
      <Radio.Button value="WANT_TO_DO">やりたい</Radio.Button>
      <Radio.Button value="DONE">やった</Radio.Button>
    </Radio.Group>
  );
};
