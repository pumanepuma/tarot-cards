import { observer } from "mobx-react-lite"
import { FC } from "react"
import { Container } from "react-bootstrap"
import { CardsListProps } from "../models/Card"
import CardItem from "./CardItem"


const CardsList:FC<CardsListProps> = observer(({cards}) => {
    

    return (
        <Container className="w-100">
            {
                cards.length ? <Container className="d-flex flex-row justify-content-evenly pt-3 cards-list">
                {cards.map(card => <CardItem card={card} />)}
                </Container>
                :<h1>Карты не найдены</h1>
            }
        </Container>
    )
})

export default CardsList