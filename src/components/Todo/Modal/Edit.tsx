import React from 'react';
import { Badge, Modal, Typography } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import { grey, blue } from '@ant-design/colors';
import { css } from '@emotion/react';
import { calcElapsedDays } from '../../../lib/util';
import { useGetTodo } from '../../../lib/hooks/query/useGetTodo';

const Title: React.FC<{ todo: TodoRead }> = ({ todo }) => (
  <div style={{ marginBottom: -12 }}>
    <Typography.Title level={5} editable={{ enterIcon: null }}>
      {todo.title}
    </Typography.Title>
    <div css={style.title.authorContainer}>
      <UserOutlined css={style.title.icon} />
      {todo.authorName}
    </div>
  </div>
);

type Props = { isOpen: boolean; onClose: () => void; todoId: number };

export const ModalEdit: React.FC<Props> = ({
  isOpen,
  onClose,
  todoId,
}) => {
  const { todo } = useGetTodo(todoId);

  if (!todo) return <Modal open={isOpen} footer={null} />;

  return (
    <Modal
      open={isOpen}
      closable={false}
      title={<Title todo={todo} />}
      footer={null}
      bodyStyle={{ paddingTop: 8 }}
      style={{ paddingBottom: 8 }}
      onCancel={onClose}
    >
      {!!todo.count && todo.lastTime && (
        <div css={style.countWrapper}>
          <Badge
            count={todo.count}
            style={{
              backgroundColor: blue[0],
              color: blue[5],
            }}
          />
          {calcElapsedDays(todo.lastTime)} 日前
        </div>
      )}
      <Typography.Text
        css={style.description}
        editable={{
          enterIcon: null,
          icon: todo.description ? undefined : (
            <div>
              補足を追加…
              <EditOutlined />
            </div>
          ),
        }}
      >
        {todo.description}
      </Typography.Text>
    </Modal>
  );
};

const style = {
  title: {
    authorContainer: css`
      text-align: right;
      font-size: 10px;
      color: ${grey[8]};
    `,
    icon: css`
      width: 16px;
    `,
  },

  countWrapper: css`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  `,

  description: css`
    font-size: 10px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.45);
    letter-spacing: 0.5px;
  `,
};
