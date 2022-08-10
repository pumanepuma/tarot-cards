import axios from "axios"
import { useEffect } from "react"
import { Container } from "react-bootstrap"
import TarotStore from "../store/TarotStore"
import { REACT_APP_API_URL } from "../utils/constants"

const Home = () => {
    useEffect(() => {
        if(!TarotStore.allCards) getAllCards()
    }, [])
    const getAllCards = () => {
        axios.get(`${REACT_APP_API_URL}`)
            .then(res => TarotStore.setAllCards(res.data.cards))
    }

    return (
        <Container className='pt-3'>
            <h1>Home</h1>
        </Container>
    )
}

export default Home