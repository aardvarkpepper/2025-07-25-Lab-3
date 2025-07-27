export type TaskStatus = 'Pending' | 'In Progress' | 'Completed';

export type PriorityStatus = 'low' | 'medium' | 'high';
 
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: PriorityStatus;
  dueDate: string;
}
 
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, key: string, newValue: string) => void;
  onPriorityChange: (taskId: string, key: string, newValue: string) => void;
  // onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  // onPriorityChange: (taskId: string, newPriority: PriorityStatus) => void;
  onDelete: (taskId: string) => void;
}

export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, key: string, newValue: string) => void;
  onPriorityChange: (taskId: string, key: string, newValue: string) => void;
  // onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  // onPriorityChange: (taskId: string, newPriority: PriorityStatus) => void;
  onDelete: (taskId: string) => void;
}

export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: PriorityStatus;
  }) => void;
}