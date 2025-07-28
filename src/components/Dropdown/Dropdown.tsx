import type { Task } from '../../types/index';

interface DropdownProps {
  id: string;
  elementName: string;
  arrayOfOptions: string[];
  selected: string;
  keyName: keyof Task;
  onChange: (taskId: string, keyName: keyof Task, newValue: string) => void;
  className: string;
}

// 

export const Dropdown = ({id, elementName, arrayOfOptions, keyName, onChange, className, selected = arrayOfOptions[0], }: DropdownProps) => {
  return (
    <select id={id} name = {elementName} defaultValue={selected} onChange={(event) => {
      event.target.className = event.target.value;
      onChange(id, keyName, event.target.value)}
      } className={`${className} dropdown`}>
      {arrayOfOptions.map((element) => <option key={element} value={element}>{element}</option>)}
    </select>
  );
}