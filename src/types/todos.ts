export interface ITodo {
  id: string;
  value: string;
  isComplete: boolean;
}

export type Filter = 'all' | 'complete' | 'incomplete';
