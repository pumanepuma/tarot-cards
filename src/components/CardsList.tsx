import axios from "axios"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { Button, Container,Row } from "react-bootstrap"
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
        <Container className="d-flex flex-column justify-content-evenly pt-3">
           <Row className="d-flex flex-row justify-content-evenly pt-3">
            
           {
                cards.map(card => <CardItem card={card} />)
            }
           </Row>
           <Row className="d-flex flex-row justify-content-evenly pt-3">
            <Button style={{background:'transparent',border:'none',width:'30%'}} onClick={getCards}>
                Get new Cards
            </Button>
           </Row>
        </Container>
    )
})

export default CardsList