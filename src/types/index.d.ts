type RadioState = 'WANT_TO_DO' | 'DONE';

// todoに関する型
type TodoRow = {
  id: number;
  title: string;
  description: string | null;
  author_name: string;
  want_to: boolean;
  count: number;
  last_time: string | null;
  created_at: string;
  updated_at: string;
};

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
