import type { Task } from '../../types/index';
import { useState } from 'react';
interface DropdownProps {
  id: string;
  // elementName: string;
  arrayOfOptions: string[];
  selected: string;
  keyName: keyof Task;
  onChange: (taskId: string, keyName: keyof Task, newValue: string) => void;
  className: string;
}

// removed id, elementName, from props

export const Dropdown = ({id, arrayOfOptions, keyName, onChange, className, selected = arrayOfOptions[0], }: DropdownProps) => {

  const [dropdownValue, setDropdownValue] = useState(selected);
  // previously had in select prop className={`${className} dropdown`}

  return (
    <select id={`${id}${keyName}`} name = {keyName} defaultValue={selected} onChange={(event) => {
      event.target.className = `${event.target.value} dropdown`;
      onChange(id, keyName, event.target.value)}
      } className={`${dropdownValue} dropdown`}>
      {arrayOfOptions.map((element) => <option key={element} value={element}>{element}</option>)}
    </select>
  );
}