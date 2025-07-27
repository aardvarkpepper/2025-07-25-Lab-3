interface DropdownProps {
  id: string;
  elementName: string;
  arrayOfOptions: string[];
  selected: string;
  onChange: (taskId: string, key: string, newValue: string) => void;
}

export const Dropdown = ({id, elementName, arrayOfOptions, onChange, selected = arrayOfOptions[0]}: DropdownProps) => {
  return (
    <select id={id} name = {elementName} defaultValue={selected} onChange={onChange}>
      {arrayOfOptions.map((element) => <option key={element} value={element}>{element}</option>)}
    </select>
  );
}