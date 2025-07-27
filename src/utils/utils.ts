import type { Task } from '../types/index';
import { dataTaskArray } from '../data/data.ts';

export const sortByKeyValue = (arrayOfObjects: Array<Task>, key: keyof Task = 'id') => {
  return arrayOfObjects.sort((a, b) => {
    const stringA = a[key];
    const stringB = b[key];
    if (stringA < stringB) {
      return -1;
    } else if (stringA > stringB) {
      return 1;
    } else {
      return 0;
    }
  });
}

//console.log(sortByKeyValue(dataTaskArray, 'dueDate'));

export const getIndex = (sortedArrayOfObjects: Array<Task>, id: string) => {
  //console.log(arrayOfObjects); // remember, this does not change state, nor is it intended to.
  //note:  pass in sorted array.
  let first = 0, last = sortedArrayOfObjects.length - 1;
  let mid;
  while (first <= last) {
    mid = Math.floor((first + last) / 2);
    //console.log('Mid:', mid, arrayOfObjects[mid])
    if (sortedArrayOfObjects[mid].id === id) {
      return mid;
    }
    //console.log(arrayOfObjects[mid].id, id);
    if (sortedArrayOfObjects[mid].id < id) {
      first = mid + 1;
      //console.log(first, mid, last);
    } else {
      last = mid - 1;
      //console.log(first, mid, last);
    }
  }
  return -1;
}

// console.log(getIndex(dataTaskArray, 'EatApple01')); // 1
// console.log(getIndex(dataTaskArray, 'BalanceCantaloupe01')); // 0
// console.log(getIndex(dataTaskArray, 'EatBanana01')); // 2
// console.log(getIndex(dataTaskArray, "I'm not a task.")); // -1