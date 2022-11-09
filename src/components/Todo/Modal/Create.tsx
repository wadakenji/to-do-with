import React, { useState } from 'react';
import { Input, Modal } from 'antd';
import { css } from '@emotion/react';
import { useCreateTodo } from '../../../lib/hooks/mutation/useCreateTodo';

type Props = { isOpen: boolean; onClose: () => void };

export const ModalCreate: React.FC<Props> = ({ isOpen, onClose }) => {
  const { createTodo, isLoading } = useCreateTodo(onClose);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onClickOk = () => {
    createTodo({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <Modal
      open={isOpen}
      closable={false}
      okText="追加"
      cancelText="キャンセル"
      confirmLoading={isLoading}
      onCancel={onClose}
      onOk={onClickOk}
    >
      <Input
        value={title}
        placeholder="タイトル"
        css={style.title}
        onChange={e => setTitle(e.target.value)}
      />
      <Input.TextArea
        value={description}
        placeholder="補足があれば"
        style={{ minHeight: 120 }}
        onChange={e => setDescription(e.target.value)}
      />
    </Modal>
  );
};

const style = {
  title: css`
    margin-bottom: 18px;
  `,
};
