import { observer } from 'mobx-react-lite'
import { useState, useEffect } from 'react'
import { getAllCards } from '../API/TarotAPI'
import CardsList from '../components/CardsList'
import Search from '../components/Search'
import {TCard} from '../models/Card'
import TarotStore from '../store/TarotStore'

const Home = observer(() => {
  const [searchQuery,setSearchQuery] = useState('')
  const [isLoading,setIsLoading] = useState(true)
  
  useEffect(() => {
    getAllCards().then((data:TCard[]) => TarotStore.setAllCards(data))
    .then(() => setIsLoading(false))
  },[])
  
  const searchedCards = searchQuery ? 
    TarotStore.allCards.filter((card:TCard) => card.rus_name.toLowerCase().includes(searchQuery.toLowerCase()))
    : TarotStore.allCards
  
  return (
    <div className='page'>
      {
        isLoading ? <h1>Загрузка...</h1>
        :<div>
          <Search value={searchQuery} setValue={setSearchQuery} />
          <CardsList cards={searchedCards} />
        </div>
      }
    </div>
  )
})

export default Home