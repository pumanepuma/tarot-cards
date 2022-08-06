import axios from "axios"
import { useEffect, useState } from "react"
import { CardsListProps, CardType } from "../types/CardsType"
import { REACT_APP_API_URL } from "../utils/constants"
import CardItem from "./CardItem"

const CardsList : React.FC<CardsListProps>= ({days}) => {
    const [cards,setCards] = useState(new Array<CardType>())
    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/random?n=${days}`)
        .then(res => {
            setCards(res.data.cards)
        })
    },[days])
    return (
        <div className="cards-list">
            {cards.map(el => <CardItem key={el.name_short} card={el}/>)}
        </div>
    )
}

export default CardsList