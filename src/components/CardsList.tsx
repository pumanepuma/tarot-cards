import axios from "axios"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import TarotStore from "../store/TarotStore"
import { CardsListProps, CardType } from "../types/CardsType"
import { REACT_APP_API_URL } from "../utils/constants"
import CardItem from "./CardItem"

const CardsList: React.FC<CardsListProps> = observer(({ days }) => {
    useEffect(() => {
        if(!TarotStore.cards)getCards()
    }, [days])

    const getCards = () => {
        axios.get(`${REACT_APP_API_URL}/random?n=${days}`)
            .then(res => {
                TarotStore.setCards(res.data.cards)
            }).then(() => setCards(TarotStore.cards))
    }

    const [cards, setCards] = useState(TarotStore.cards)

    useEffect(() => {
    }, [cards])

    return (
        <div className="cards-list">
            {TarotStore.cards.map(el => <CardItem key={el.name_short} card={el} />)}
            <button onClick={getCards}>get new cards</button>
        </div>
    )
})

export default CardsList