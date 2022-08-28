import { observer } from "mobx-react-lite"
import { CardsListProps, TCard } from "../models/Card"
import CardItem from "./CardItem"

const CardsList:React.FC<CardsListProps> = observer(({cards}) => {
  return(
    <div className='cards-list'>
      {
        cards.length ? 
        <div className='cards-list'>
          {cards.map((card:TCard) => <CardItem card={card} key={card.id}/>)}
        </div>
        :<h1>Карты не найдены</h1>
      }
    </div>
  )
})

export default CardsList