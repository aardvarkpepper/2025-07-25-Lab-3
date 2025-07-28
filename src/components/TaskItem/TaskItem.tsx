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

  // the naming conventions are a real issue.
  return (
    <div>
      <div className='taskTitleContainer'>
        <div className='taskTitle'>{task.title}</div>
        <div className='taskTitleButtonContainer'>
          <Dropdown id={task.id} elementName={task.id} arrayOfOptions={['Pending', 'In Progress', 'Completed']} onChange={onStatusChange} selected={task.status} keyName='status' className={task.status} />
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      </div>
      <div>{`TASK TITLE: ${task.title}`}</div>
      <div>{`TASK DESCRIPTION: ${task.description}`}</div>
      <div>{`TASK DUE DATE: ${task.dueDate}`}</div>
      <div>{`TASK ID: ${task.id}`}</div>

      <Dropdown id={task.id} elementName={task.id} arrayOfOptions={['low', 'medium', 'high']} onChange={() => onPriorityChange} selected={task.priority} keyName='priority' className={task.priority} />

    </div>
  )
}