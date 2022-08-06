import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { REACT_APP_API_URL } from "../utils/constants"
import { CardType } from "../types/CardsType"

const CardPage = () => {
    const {id} = useParams()
    const [card,setCard] = useState({} as CardType)
    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/${id}`)
        .then(res => {
            setCard(res.data.card)
        })
    }, [])
    return (
        <div className="card-page">
            <p>{card.name}</p>
            <div className="card-description">
                {card.desc}
            </div>
        </div>
    )
}

export default CardPage