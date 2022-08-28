import { InputProps } from "../models/Components"

const Search:React.FC<InputProps> = ({value,setValue}) => {
  return(
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)}
        placeholder='Поиск...'/>
    </div>
  )
}

export default Search