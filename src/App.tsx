import { useState } from 'react'

import type { Task } from './types/index';
import { dataTaskArray } from './data/data.ts';
import { TaskList } from './components/TaskList/TaskList';
import { sortByKeyValue, getIndexSortedArray, getIndex } from './utils/utils.ts';
import { SortButton } from './components/SortButton/SortButton';
import { FilterButton } from './components/FilterButton/FilterButton';

import { Dropdown } from './components/Dropdown/Dropdown';

import './App.css';


// note: date string input "2025-07-25" turns to date object with dateObject = new Date (dateString)

/**
 * 
 * implement filtering
 * sorting, setState of tasks, import the sort function
 * Running filter function doesn't change state.  It toggles display: none and display: initial.
 * so set a state for 'All Statuses',Pending, In Progress, Completed
 *  'All Priorities', High, Medium, Low
 * pretty inelegant really, ought to just have . . . but it's the old question of whether filters should be additive or subtractive.
 *  Let's go with subtractive, and have some sort of filter function (Array.filter is shallow, so must copy)
 * for each of . . .
 * When I make dropdown, I get the value.  Note 'Status' of 'All Statuses, Pending, In Progress, Completed'
 * 'Priority' of 'All Priorities, High, Medium, Low" - populate with .split .join .toUpperCase
 * 
 *  keyValue: string;
  valueValue: string;
 */

function App() {
  const [tasklist, setTasklist] = useState(dataTaskArray);
  const [filter, setFilter] = useState({ status: 'All Statuses', priority: 'All Priorities' });

  const handleDropdownKeyChange = (taskId: string, keyValue: keyof Task, newValue: string) => {
    //console.log(`hDKC invoked with taskId ${taskId}; keyValue ${keyValue}; newValue ${newValue}`);
    // just go through array until finding the ID.  O(n); too many things in assignment operating effectively making sort unreliable.  Really, the database should be always sorted, and only views change, but implementation adds steps so eh.
    // so status change changes key 'status', priority change changes key 'priority'.
    //console.log(`core hDKC triggered, taskId ${taskId}, key ${keyValue}, newValue ${newValue}`);
    setTasklist(prev => {
      //const deepCopy = [...prev];
      //const deepCopy2 = deepCopy.map((task) => {
      // return [...prev].map((task) => {
      //   if (task.id === taskId) {
      //     // honestly, what is the point of Typescript if I'm just throwing in these 'any' all the time to get around Typescript?  There's got to be a better way.
      //     (task[keyValue] as any) = newValue;
      //     console.log(task);
      //     return task;
      //   } else {
      //     console.log(task);
      //     return task;
      //   } // map's anonymous function's return
      // }) // map

      const deepCopy = [];
      for (const each of prev) {
        //console.log(`hDKC each value: ${JSON.stringify(each)}`);
        if (each.id !== taskId) {
          //console.log('hDKC each=taskId');
          deepCopy.push(each);
        } else {
          //console.log('hDKC else');
          const deepCopy2 = JSON.parse(JSON.stringify(each));
          deepCopy2[keyValue] = newValue;
          deepCopy.push(deepCopy2);
        }
      }
      //console.log(JSON.stringify(deepCopy));
      return deepCopy;
    }); // setTasklist
  }; // handleDropownKeyChangem.

  const handleDelete = (taskId: string) => {
    //console.log('core handleDelete triggered');
    const indexToDelete = getIndex(tasklist, taskId);
    setTasklist(prev => prev.slice(0, indexToDelete).concat(prev.slice(indexToDelete + 1)));
  }

  const handleSort = () => {
    setTasklist(prev => {
      const sorted = sortByKeyValue(prev);
      //console.log(sorted);
      return sorted;
    });
  }

  // Changes state of filter, should change render, then filter . . . on this level?
  const handleFilter = (keyValue: string, valueValue: string) => {
    setFilter(prev => {
      const deepCopy = JSON.parse(JSON.stringify(prev));
      deepCopy[keyValue] = valueValue;
      //console.log(`handleFilter returning ${JSON.stringify(deepCopy)}`);
      return deepCopy;
    })
  }

  // first try feeding filtered deep copy of 'tasks'.
  // if that doesn't work (forget if dependencies or stuff), then forEach set display: none or initial.
  const filterTasks = () => {
    //console.log(`Current filters: ${JSON.stringify(filter)}`)
    const deepCopy = [];
    for (let i = 0; i < tasklist.length; i++) {
      let pushValue = true;
      for (const [key, value] of Object.entries(filter)) {
        if (value === "All Statuses" || value === "All Priorities") {
          null;
        } else if (tasklist[i][key as keyof Task] !== value) {
          pushValue = false;
        }
      } // filter
      if (pushValue) {
        deepCopy.push(tasklist[i]);
      }
    } // for . . . tasklist.length
    //console.log(`filterTasks, deepCopy ${JSON.stringify(deepCopy)}`);
    return deepCopy;
  } // filterTasks
  // note:  before, tasks={tasklist}

  return (
    <>
      <FilterButton keyValue='status' valueValue={filter.status} arrayOfOptions={["All Statuses", "Pending", "In Progress", "Completed"]} onChange={handleFilter} />
      <FilterButton keyValue='priority' valueValue={filter.priority} arrayOfOptions={["All Priorities", 'low', 'medium', 'high']} onChange={handleFilter} />
      <SortButton onSort={handleSort} />
      <br />
      <TaskList tasks={filterTasks()} onStatusChange={handleDropdownKeyChange} onPriorityChange={handleDropdownKeyChange} onDelete={handleDelete} />
    </>
  )
}

export default App;