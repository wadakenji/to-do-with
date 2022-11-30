import React from 'react';
import { Row, Typography } from 'antd';
import { blue, grey } from '@ant-design/colors';
import {
  BorderOutlined,
  CheckSquareOutlined,
} from '@ant-design/icons';
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
        // ellipsis
        delete={checkboxValue}
        css={style.title}
        style={{ color: checkboxValue ? grey[3] : undefined }}
      >
        {title}
      </Typography.Text>
      <div css={style.checkboxWrapper} onClick={onClickCheckbox}>
        {checkboxValue ? (
          <CheckSquareOutlined
            css={[style.checkIcon, style.checkedIcon]}
          />
        ) : (
          <BorderOutlined css={[style.checkIcon, style.emptyIcon]} />
        )}
      </div>
    </Row>
  );
};

const style = {
  row: css`
    height: 44px;
    :nth-of-type(even) {
      background-color: #fafafa;
    }
  `,
  title: css`
    font-size: 18px;
    font-weight: 700;
    overflow: scroll;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  checkboxWrapper: css`
    width: 40px;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  checkIcon: css`
    font-size: 24px; ;
  `,
  emptyIcon: css`
    color: ${blue[9]};
  `,
  checkedIcon: css`
    color: ${grey[3]};
  `,
};
