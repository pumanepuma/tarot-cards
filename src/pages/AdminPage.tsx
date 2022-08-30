import { observer } from "mobx-react-lite"
import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Select from 'react-select'
import { isElementAccessExpression } from "typescript"
import { getCard, putCard } from "../API/TarotAPI"
import { MyButton } from "../components/UI/MyButton"
import { descTypes,  TDescription } from "../models/Card"
import TarotStore from "../store/TarotStore"

const AdminPage = observer(() => {
    const navigate = useNavigate()
    const [cardId,setCardId] = useState('')
    const [type,setType] = useState('')
    const [description,setDescription] = useState('')
    const handleSave = async () => {
        const card = await getCard(cardId)
        const newCard = card.description ? {...card} : {...card,description:Array<TDescription>()}
        const index = newCard.description.map((d:TDescription) => d.type).indexOf(type)
        let newDescription = {type,description}
        if(index !== -1){
            newCard.description[index] = newDescription
        }
        else{
            newCard.description.push({type,description})
        }
        const res = await putCard(card.id,newCard)
        navigate(`/cards/${card.id}`)
    }
    return(
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Карта</Form.Label>
                    <Select options={TarotStore.cardsNames} onChange={(opt) => setCardId(opt!.value)}
                    className='cards-select'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Тип значения</Form.Label>
                    <Select options={descTypes} onChange={(opt) => setType(opt!.label)}
                    className='cards-select'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Значение</Form.Label>
                    <textarea className='form-control' rows={3} value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
            </Form>
            <MyButton value='Добавить и закрыть' handleClick={handleSave}/>
        </Container>
    )
})

export default AdminPage