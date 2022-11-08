type RadioState = 'WANT_TO_DO' | 'DONE';

// todoに関する型
type TodoRead = {
  id: number;
  title: string;
  description: string;
  authorName: string;
  wantTo: boolean;
  count: number;
  lastTime: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

type TodoListItem = Pick<
  TodoRead,
  'id' | 'title' | 'wantTo' | 'updatedAt'
>;
