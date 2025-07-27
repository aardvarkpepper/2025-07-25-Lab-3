import { useState } from 'react'

import type { Task } from './types/index';
import { dataTaskArray } from './data/data.ts';
import { TaskList } from './components/TaskList/TaskList';
import { sortByKeyValue, getIndexSortedArray } from './utils/utils.ts';

import { Dropdown } from './components/Dropdown/Dropdown';

// export const Dropdown = (elementName: string, arrayOfOptions: string[], selected: string) => {
//   return (
//     <select name = {elementName}>
//       {arrayOfOptions.map((element) => <option value={element}>{element}</option>)}
//     </select>
//   );
// }

import './App.css';



  // export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
// }

 // export type TaskStatus = 'pending' | 'in-progress' | 'completed';

  // export interface TaskListProps {
//   tasks: Task[];
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }

// note: date string input "2025-07-25" turns to date object with dateObject = new Date (dateString)

//onStatusChange, onPriorityChange, onDelete

  // onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  // onDelete: (taskId: string) => void;

// triggers on dropdown
const handleStatusChange = (taskId: Task, newStatus: string) => {

};
// triggers on dropdown.  Really doesn't need to be separate, could pass in arguments.
const handlePriorityChange = (newPriority: string) => {};
const handleDelete = (taskID: Task) => {}

const handleSelectChange = (event: any) => {
  console.log(`${event.target.value}`);
};

function App() {
  const [tasklist, setTasklist] = useState(dataTaskArray);

  return (
    <>
    <div>Test</div>
    <Dropdown id="generic" elementName="IAmAnElement" arrayOfOptions={["cheese","ham","sausage"]} selected="ham" onChange = {(event) => (handleSelectChange(event))}/>
    <TaskList tasks={tasklist} onStatusChange = {(event) => handleStatusChange} onPriorityChange = {handlePriorityChange} onDelete = {() => handleDelete}/>
    </>
  )
}

export default App;

// interface DropdownProps {
//   elementName: string;
//   arrayOfOptions: string[];
//   selected: string;
// }
