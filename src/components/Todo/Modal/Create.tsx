import React from 'react';
import { Input, Modal } from 'antd';
import { css } from '@emotion/react';

type Props = { isOpen: boolean; onClose: () => void };

export const ModalCreate: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      closable={false}
      okText="追加"
      cancelText="キャンセル"
      onCancel={onClose}
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
