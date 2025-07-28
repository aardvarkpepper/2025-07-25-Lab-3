import { useState } from 'react'

import type { Task } from './types/index';
import { dataTaskArray } from './data/data.ts';
import { TaskList } from './components/TaskList/TaskList';
import { sortByKeyValue, getIndexSortedArray, getIndex } from './utils/utils.ts';

import { Dropdown } from './components/Dropdown/Dropdown';

import './App.css';


// note: date string input "2025-07-25" turns to date object with dateObject = new Date (dateString)

/**
 * 
 * implement filtering and sorting.
 * sorting, setState of tasks, import the sort function
 */

function App() {
  const [tasklist, setTasklist] = useState(dataTaskArray);

  const handleDropdownKeyChange = (taskId: string, keyValue: keyof Task, newValue: string) => {
    // just go through array until finding the ID.  O(n); too many things in assignment operating effectively making sort unreliable.  Really, the database should be always sorted, and only views change, but implementation adds steps so eh.
    // so status change changes key 'status', priority change changes key 'priority'.
    //console.log(`core hDKC triggered, taskId ${taskId}, key ${keyValue}, newValue ${newValue}`);
    setTasklist(prev => 
      prev.map((task) => {
        if (task.id === taskId) {
          // honestly, what is the point of Typescript if I'm just throwing in these 'any' all the time to get around Typescript?  There's got to be a better way.
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
      <TaskList tasks={tasklist} onStatusChange={handleDropdownKeyChange} onPriorityChange={handleDropdownKeyChange} onDelete={handleDelete} />
    </>
  )
}

export default App;