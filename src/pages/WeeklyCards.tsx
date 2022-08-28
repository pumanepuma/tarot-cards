import { useEffect, useState } from "react"
import { Button, Row } from "react-bootstrap"
import { getRandomCards } from "../API/AlignmentsAPI"
import AlignmentModal from "../components/AlignmentModal"
import CardsList from "../components/CardsList"
import { TCard } from "../models/Card"
import { convertToRus } from "../utils/converter"

const WeeklyCards = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [cards,setCards] = useState(Array<TCard>())
    const [show,setShow] = useState(false)
    const getNewCards = () => {
         getRandomCards(7).then(data => convertToRus(data.cards)).then(rus => setCards(rus))
         .then(() => setIsLoading(false))
    }
    
    const handleSave = () => {
        setShow(true)
    }
    useEffect(() => {
        getNewCards()
    },[])
    return(
        <div className="weekly">
            <h1>Weekly alignment</h1>
            {
                isLoading ? <h1>Загрузка...</h1>
                :<CardsList cards={cards} />
            }
            <Row>
                <Button variant='outline-light'
                onClick={getNewCards}>Новые карты</Button>
                <Button onClick={handleSave}>Сохранить</Button>
            </Row>
            {
                show && <AlignmentModal show={show} setShow={setShow}/>
            }
        </div>
    )
}

export default WeeklyCards