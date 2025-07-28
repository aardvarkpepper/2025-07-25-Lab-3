interface onSortButtonProps {
  onSort: () => void;
}

export const SortButton = ({ onSort }: onSortButtonProps) => {
  return (
    <button onClick={() => onSort()}>Sort By ID</button>
  )
}