import { useState } from 'react'

import type { Task } from './types/index';
import { dataTaskArray } from './data/data.ts';
import { TaskList } from './components/TaskList/TaskList';
import { sortByKeyValue, getIndexSortedArray, getIndex } from './utils/utils.ts';

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
const handleStatusChange = (event: any, taskId: Task, newPriority: string) => {
  console.log(`Event.target.value: ${event.target.value}, taskID: ${taskId} newPriority: ${newPriority}`);
};
// triggers on dropdown.  Really doesn't need to be separate, could pass in arguments.
const handlePriorityChange = (event: any, newPriority: string) => {
  console.log(`Event.target.value: ${event.target.value}, newPriority: ${newPriority}`);
};

/**
 * 
 * implement filtering and sorting
 */

function App() {
  const [tasklist, setTasklist] = useState(dataTaskArray);

  const handleDropdownKeyChange = (taskId: string, keyValue: keyof Task, newValue: string) => {
    // just go through array until finding the ID.  O(n); too many things in assignment operating effectively making sort unreliable.  Really, the database should be always sorted, and only views change, but implementation adds steps so eh.
    // so status change changes key 'status', priority change changes key 'priority'.
    // remember state changes are a bother.
    //console.log(`core hDKC triggered, taskId ${taskId}, key ${keyValue}, newValue ${newValue}`);
    // setTasklist(prev => []);
    setTasklist(prev => 
      prev.map((task) => {
        if (task.id === taskId) {
          // honestly, what is the point of Typescript if I'm just throwing in these 'any' all the time to get around Typescript?  There's got to be a better way to do this.
          (task[keyValue] as any) = newValue;
          return task;
        } else {
          return task;
        } // map's anonymous function's return
      }) // map
    ); // setTasklist
  }; // handleDropownKeyChange
  // this is a lot of brackets, hm.

  const handleDelete = (taskId: string) => {
    //console.log('core handleDelete triggered');
    const indexToDelete = getIndex(tasklist, taskId);
    setTasklist(prev => prev.slice(0, indexToDelete).concat(prev.slice(indexToDelete + 1)));
  }

  return (
    <>
      <div>Test</div>
      <br />
      {/* <Dropdown id="generic" elementName="IAmAnElement" arrayOfOptions={["cheese","ham","sausage"]} selected="ham" onChange = {(event) => (handleSelectChange(event))}/> */}
      <TaskList tasks={tasklist} onStatusChange={handleDropdownKeyChange} onPriorityChange={handleDropdownKeyChange} onDelete={handleDelete} />
    </>
  )
}

export default App;

// interface DropdownProps {
//   elementName: string;
//   arrayOfOptions: string[];
//   selected: string;
// }
