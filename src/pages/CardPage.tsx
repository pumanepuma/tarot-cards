import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { Button, Container, Image } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { getCard } from "../API/TarotAPI"
import { TCard } from "../models/Card"

const CardPage = observer(() => {
    const {id} = useParams()
    const [card,setCard] = useState({} as TCard)
    useEffect(() => {
        console.log(id)
        getCard(id!).then(data => setCard(data))
    },[])
    const navigate = useNavigate()
    return(
        <Container>
            <h1>{card.rus_name}</h1>
            <Image src={'/assets'+card.img} alt={card.id} width='300px' className="m-3"/>
            <p>{card.meaning_day}</p>
            <Button onClick={() => navigate(-1)}>Назад</Button>
        </Container>
    )
})

export default CardPage