interface DropdownProps {
  id: string;
  elementName: string;
  arrayOfOptions: string[];
  selected: string;
  keyName: string;
  onChange: (taskId: string, keyName: string, newValue: string) => void;
}

// const handleDropdownKeyChange = (taskId: string, key: string, newValue: string) 


export const Dropdown = ({id, elementName, arrayOfOptions, keyName, onChange, selected = arrayOfOptions[0]}: DropdownProps) => {
  return (
    <select id={id} name = {elementName} defaultValue={selected} onChange={(event) => onChange(id, keyName, event.target.value)}>
      {arrayOfOptions.map((element) => <option key={element} value={element}>{element}</option>)}
    </select>
  );
}