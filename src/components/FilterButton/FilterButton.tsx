import type { Task } from '../../types/index';

interface FilterButtonProps {
  keyValue: string;
  valueValue: string;
  arrayOfOptions: string[];
  onChange: (keyValue: string, valueValue: string) => void;
}

export const FilterButton = ({keyValue, valueValue, arrayOfOptions, onChange}: FilterButtonProps) => {
  return (
    <select defaultValue={valueValue} onChange={(event) => onChange(keyValue, event.target.value)}>
      {arrayOfOptions.map((element) => <option key={element}>{element}</option>)}
    </select>
  )
}

// 

// export const FilterByPriorityButtonProps = ({id, elementName, arrayOfOptions, keyName, onChange, className, selected = arrayOfOptions[0], }: DropdownProps) => {
//   return (
//     <select id={id} name = {elementName} defaultValue={selected} onChange={(event) => {
//       event.target.className = `${event.target.value} dropdown`;
//       onChange(id, keyName, event.target.value)}
//       } className={`${className} dropdown`}>
//       {arrayOfOptions.map((element) => <option key={element} value={element}>{element}</option>)}
//     </select>
//   );
// }