import type { Task, TaskItemProps } from '../../types/index';
import { Dropdown } from '../Dropdown/Dropdown';

// export interface TaskItemProps {
//   task: Task;
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }

// export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
// }

// Create a TaskItem component that displays individual task information.

export const TaskItem = ({ task, onStatusChange, onPriorityChange, onDelete }: TaskItemProps) => {
  return (
    <div>
      <div className='taskTitleContainer'>
        <span className='taskTitle'>{task.title}</span>
        <span className='taskTitleButtonContainer'>
          <Dropdown id={task.id} elementName={task.id} arrayOfOptions={['Pending', 'In Progress', 'Completed']} onChange={() => onStatusChange} selected={task.status} />
          <button onClick={() => onDelete}>Delete</button>
        </span>
      </div>
      <p>{`TASK TITLE: ${task.title}, TASK DESCRIPTION: ${task.description}, TASK DUE DATE: ${task.dueDate}`}</p>
      <p>{`TASK ID: ${task.id}`}</p>

      <Dropdown id={task.id} elementName={task.id} arrayOfOptions={['low', 'medium', 'high']} onChange={() => onPriorityChange} selected={task.priority} />

    </div>
  )
}