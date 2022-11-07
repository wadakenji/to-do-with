import React from 'react';
import { Input, Modal } from 'antd';
import { css } from '@emotion/react';

type Props = {};

export const ModalCreate: React.FC<Props> = ({}) => {
  return (
    <Modal
      open={true}
      closable={false}
      okText="追加"
      cancelText="キャンセル"
    >
      <Input placeholder="タイトル" css={style.title} />
      <Input.TextArea
        placeholder="補足があれば"
        style={{ minHeight: 120 }}
      />
    </Modal>
  );
};

const style = {
  title: css`
    margin-bottom: 18px;
  `,
};
