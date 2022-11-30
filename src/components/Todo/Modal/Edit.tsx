import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import {
  Badge,
  Modal,
  Skeleton,
  Typography,
  Input,
  Button,
} from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import { grey, blue } from '@ant-design/colors';
import { css } from '@emotion/react';
import { calcElapsedDays } from '../../../lib/util';
import { useGetTodo } from '../../../lib/hooks/query/useGetTodo';
import { useSetTitle } from '../../../lib/hooks/mutation/useSetTitle';
import { useSetDescription } from '../../../lib/hooks/mutation/useSetDescription';

const ModalSkeleton: ReactElement = (
  <Modal
    open={true}
    footer={null}
    title={<Skeleton title={{ width: '50%' }} paragraph={false} />}
  >
    <Skeleton title={false} />
  </Modal>
);

type Props = { isOpen: boolean; onClose: () => void; todoId: number };

export const ModalEdit: React.FC<Props> = ({
  isOpen,
  onClose,
  todoId,
}) => {
  const { todo, refetch } = useGetTodo(todoId);
  const { setTitle } = useSetTitle();
  const [descriptionTmp, setDescriptionTmp] = useState('');
  const [isEditingDescription, setIsEditingDescription] =
    useState(false);
  const { setDescription } = useSetDescription();

  useEffect(() => {
    if (isOpen && todo) refetch();
  }, [isOpen]);

  useEffect(() => {
    if (todo) setDescriptionTmp(todo.description);
  }, [!!todo]);

  if (!todo) return isOpen ? ModalSkeleton : null;

  const TitleSectionElement: ReactNode = (
    <div css={style.title.wrapper}>
      <Typography.Title
        level={3}
        editable={{
          enterIcon: null,
          onChange: value => setTitle(todo.id, value, todo.wantTo),
        }}
      >
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
      open={isOpen}
      closable={false}
      title={TitleSectionElement}
      footer={null}
      bodyStyle={{ paddingTop: 12 }}
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
              fontSize: 16,
            }}
          />
          <span css={style.dateText}>
            {calcElapsedDays(todo.lastTime)} 日前
          </span>
        </div>
      )}
      {!isEditingDescription ? (
        <Typography.Text css={style.description}>
          {todo.description}
          <span
            css={style.editButton}
            onClick={() => setIsEditingDescription(true)}
          >
            {!todo.description && '補足を追加…'}
            <EditOutlined
              style={{ marginLeft: todo.description ? 8 : 0 }}
            />
          </span>
        </Typography.Text>
      ) : (
        <div css={style.textareaWrapper}>
          <Input.TextArea
            value={descriptionTmp}
            onChange={e => setDescriptionTmp(e.target.value)}
            autoSize={{ minRows: 2, maxRows: 7 }}
            autoFocus
          />
          <Button
            type={'primary'}
            onClick={() => {
              setDescription(todo.id, descriptionTmp);
              setIsEditingDescription(false);
            }}
          >
            OK
          </Button>
        </div>
      )}
    </Modal>
  );
};

const style = {
  title: {
    wrapper: css`
      margin-bottom: -12px;
      display: flex;
      justify-content: space-between;
    `,
    authorContainer: css`
      text-align: right;
      font-size: 14px;
      color: ${grey[8]};
      align-self: end;
      flex-shrink: 0;
    `,
    icon: css`
      margin-right: 4px;
    `,
  },

  countWrapper: css`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  `,

  dateText: css`
    font-size: 18px;
  `,

  description: css`
    font-size: 14px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.45);
    letter-spacing: 2px;
    white-space: pre-line;
  `,

  editButton: css`
    color: ${blue[5]};
  `,

  textareaWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: end;
  `,
};
