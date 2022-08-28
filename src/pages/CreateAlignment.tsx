import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { TCard } from "../models/Card"
import TarotStore from "../store/TarotStore"
import '../styles/Modal.css'
import CardItem from "../components/CardItem"
import AddCardModal from "../components/AddCardModal"
import MyCard from "../components/MyCard"
import UserStore from "../store/UserStore"
import { postAlignment } from "../API/AlignmentsAPI"
import { TAlignment } from "../models/Alignment"
import { useNavigate } from "react-router-dom"
import AlignmentModal from "../components/AlignmentModal"
const CreateAlignment = observer(() => {
    const [show, setShow] = useState(false)
    const [showAlignmentForm,setShowAlignmentForm] = useState(false)
    const add = async () => {
        setShow(true)
    }
    const clear = () => {
        TarotStore.setMyAlgnment(Array<TCard>())
    }
    const saveAlignment = () => {
        setShowAlignmentForm(true)
    }
    return (
        <div className="page">
            <div className='controls'>
                <button onClick={add}>Добавить карту</button>
                <button onClick={clear}>Очистить</button>
                <button onClick={saveAlignment}>Сохрнить расклад</button>
            </div>
            <div className="cards-list">
                {
                    TarotStore.myAlignment.map(card => <MyCard card={card} key={card.id}/>)
                }
            </div>
            {
                show &&
                <AddCardModal show={show} setShow={setShow} />
            }
            {
                showAlignmentForm && <AlignmentModal show={showAlignmentForm} setShow={setShowAlignmentForm} />
            }
        </div>
    )
})

export default CreateAlignment