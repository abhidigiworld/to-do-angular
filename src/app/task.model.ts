export interface Task {
    id: number;
    name: string;
    description: string;
    deadline: Date;
    priority: 'low' | 'medium' | 'high';
  }
  