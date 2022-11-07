import React from 'react';
import { Badge, Modal, Typography } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import { grey, blue } from '@ant-design/colors';
import { css } from '@emotion/react';
import { calcElapsedDays } from '../../../lib/util';

type Props = {
  todo: TodoRead;
};

export const ModalEdit: React.FC<Props> = ({ todo }) => {
  const Title = () => (
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

  return (
    <Modal
      open={true}
      closable={false}
      title={<Title />}
      footer={null}
      bodyStyle={{ paddingTop: 8 }}
      style={{ paddingBottom: 8 }}
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
