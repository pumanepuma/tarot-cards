import axios from "axios"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { getAll } from "../API/TarotAPI"
import CardsList from "../components/CardsList"
import TarotStore from "../store/TarotStore"

const Home = observer(() => {
    const [searchQuery,setSearchQuery] = useState('')
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        getAll().then(data => TarotStore.setAllCards(data))
        .then(() => setIsLoading(false))
    },[])
    const searchedCards = searchQuery ? 
    TarotStore.allCards.filter(card => card.rus_name.toLowerCase().includes(searchQuery.toLowerCase()))
    : TarotStore.allCards
    return (
        <Container>
            <h1>Home</h1>
            <input type='text' placeholder='Поиск...' 
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            {
                isLoading ? <h1>Загрузка...</h1>
                : <CardsList cards={searchedCards}/>
            }
        </Container>
    )
})

export default Home