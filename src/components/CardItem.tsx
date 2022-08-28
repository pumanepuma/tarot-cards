import { observer } from "mobx-react-lite"
import { CardProps } from "../models/Card"

const CardItem: React.FC<CardProps> = observer(({card}) => {
  return (
    <div className='card-item'>
      <p><a href={`/cards/${card.id}`}>{card.rus_name}</a></p>
      <img src={'/assets'+card.img} width='150px'/>
    </div>
  )
})

export default CardItem
