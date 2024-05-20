interface ListProps {
  listOptions: string[]
}

const List: React.FC<ListProps> = ({ listOptions }) => {
  return (
    <ul className="list">
      {listOptions.map((option) => (
        <li key={option} className="list__option">
          {option}
        </li>
      ))}
    </ul>
  )
}

export default List
