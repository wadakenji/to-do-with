type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

interface Database {
  public: {
    Tables: {
      todos: {
        Row: {
          id: number;
          created_at: string | null;
          title: string;
          description: string | null;
          count: number;
          want_to: boolean;
          last_time: string | null;
          author_name: string | null;
          updated_at: string;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          title: string;
          description?: string | null;
          count?: number;
          want_to?: boolean;
          last_time?: string | null;
          author_name?: string | null;
          updated_at?: string;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          title?: string;
          description?: string | null;
          count?: number;
          want_to?: boolean;
          last_time?: string | null;
          author_name?: string | null;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
