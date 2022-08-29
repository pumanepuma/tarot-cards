import { observer } from "mobx-react-lite"
import { FC, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { descTypes, TCard, TDesc } from "../models/Card"
import { ModalProps } from "./AddCardModal"
import { MyButton } from "./UI/MyButton"
import Select from 'react-select'
import { putCard } from "../API/TarotAPI"
import TarotStore from "../store/TarotStore"

export interface AddDescModal extends ModalProps{
    card:TCard
}
const AddDescModal:FC<AddDescModal> = observer(({show,setShow,card}) => { 
    const [name,setName] = useState('')
    const [desc,setDesc] = useState('')
    const handleClose = () => {
        setShow(false)
    }
    const handleAdd = async() => {
        const newCard = {...card}
        newCard.description = newCard.description || Array<TDesc>()
        newCard.description.push({
            label:name,
            value:desc
        })
        const res = await putCard(card.id,newCard)
        handleClose()
    }
    return(
        <Modal show={show} onHide={handleClose} style={{color:'black'}}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить значение</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form style={{color:'black'}}>
                    <Select options={descTypes} 
                    onChange={(opt) => setName(opt!.value)}/>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}
                    value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <MyButton value='Добавить' handleClick={handleAdd} />
            </Modal.Footer> 
        </Modal>
    )
})

export default AddDescModal