type RadioState = 'WANT_TO_DO' | 'DONE';

// todoに関する型
type TodoRow = Database['public']['Tables']['todos']['Row'];

type TodoRowListItem = Pick<
  TodoRow,
  'id' | 'title' | 'want_to' | 'updated_at'
>;

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

type TodoUpdate = Database['public']['Tables']['todos']['Update'];
