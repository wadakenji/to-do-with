import React from 'react';
import { Checkbox, Row, Typography } from 'antd';
import { css } from '@emotion/react';

type Props = {
  todoItem: TodoListItem;
  onClick: () => void;
};

export const TodoItem: React.FC<Props> = ({
  todoItem: { title },
  onClick,
}) => {
  return (
    <Row
      justify="space-between"
      align="middle"
      wrap={false}
      css={style.row}
      onClick={onClick}
    >
      <Typography.Text ellipsis css={style.title}>
        {title}
      </Typography.Text>
      <div css={style.checkboxWrapper}>
        <Checkbox />
      </div>
    </Row>
  );
};

const style = {
  row: css`
    height: 32px;
    :nth-of-type(even) {
      background-color: #fafafa;
    }
  `,
  title: css`
    font-size: 14px;
    font-weight: 700;
  `,
  checkboxWrapper: css`
    width: 40px;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
