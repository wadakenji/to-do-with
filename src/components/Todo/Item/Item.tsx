import React from 'react';
import { Checkbox, Row, Typography } from 'antd';
import { grey } from '@ant-design/colors';
import { css } from '@emotion/react';

type Props = {
  todoItem: TodoListItem;
  checkboxValue: boolean;
  onClickItem: () => void;
  onCheck: () => void;
};

export const TodoItem: React.FC<Props> = ({
  todoItem: { title },
  checkboxValue,
  onClickItem,
  onCheck,
}) => {
  const onClickCheckbox = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (!checkboxValue) onCheck();
  };

  return (
    <Row
      justify="space-between"
      align="middle"
      wrap={false}
      css={style.row}
      onClick={onClickItem}
    >
      <Typography.Text
        ellipsis
        delete={checkboxValue}
        css={style.title}
        style={{ color: checkboxValue ? grey[3] : undefined }}
      >
        {title}
      </Typography.Text>
      <div css={style.checkboxWrapper} onClick={onClickCheckbox}>
        <Checkbox disabled={checkboxValue} />
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
