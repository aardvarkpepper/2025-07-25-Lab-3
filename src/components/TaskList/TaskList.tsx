import { useState } from 'react';
import type { TaskStatus, Task, TaskListProps } from '../../types/index';
import { TaskItem } from '../TaskItem/TaskItem';

// Create a TaskList component that manages and displays a list of tasks.
// conditional rendering based on task properties (filtering)
// handle task status changes
// implement task deletion
// Show different styles based on task status and priority.
// Implement hover and active states.
// Add visual indicators for task properties.
// Compose components to create a complete task management interface.
// Handle prop passing between components.
// Implement proper event handling.

/**
 * Status dropdown.  (All Statuses, Pending, In Progress, Completed)
 * Priority dropdown. (All Priorities, High, Medium, Low)
 * 
 * Task 1
 * Description 1
 * Priority: low (green text) / medium (orange) / high (red)
 * Due 12/31/2023
 * Dropdown - Pending (brown text yellow background) / In Progress (blue) / Completed (green)
 * Delete - Red
 * 
 * optional - button tasklist component sorts tasks by due date
 * - button that adds new task to list (req's form too obv)
 * - buttons to TaskItem component allowing a user to move task up and down list (draggable?)
 */

/**
 * From 'tasks', I map onto 'Task'.  Each 'Task' gets 'onStatusChange' and 'onPriorityChange', and 'onDelete' as well.  These change the element's property - really, they don't need separate functions, could just . . . but eh.
 * Button sorts tasklist, then gets id of element, then gets index of element in tasklist, then changes that element's property corresponding with the given key (status or priority), then sets state to the . . . ? But when saving, this changes the tasklist rendered, so may not be desired, especially with all the weird stuff.  So I suppose maybe just iterates through (sigh) in O(n) and changes the property.  After all, O(n) of finding beats O (n log n) of the sort . . .
 * Note to self - better ideation; you ought to have seen this coming.
 */


  // export interface TaskListProps {
//   tasks: Task[];
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }

  // export type TaskStatus = 'pending' | 'in-progress' | 'completed';

  // export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
// }

export const TaskList = ({tasks, onStatusChange, onPriorityChange, onDelete}: TaskListProps) => {
  //console.log(tasks, onStatusChange, onPriorityChange, onDelete);

  return (
    <>
    {tasks.map((task) => {
      return <TaskItem key={task.id} task={task} onStatusChange={onStatusChange} onPriorityChange={onPriorityChange} onDelete={onDelete}/>
    })}
    </>
  )
}