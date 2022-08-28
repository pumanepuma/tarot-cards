import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { postAlignment } from "../API/AlignmentsAPI";
import { TAlignment } from "../models/Alignment";
import TarotStore from "../store/TarotStore";
import UserStore from "../store/UserStore";
import { ModalProps } from "./AddCardModal";

const AlignmentModal:FC<ModalProps> = observer(({show,setShow}) => {
    const [name,setName] = useState('')
    const handleClose = () => {
        setShow(false)
    }
    const navigate = useNavigate()
    const handleAdd = async () => {
        console.log(name)
        const newAlignment :TAlignment = {
            name: name || 'alignment # ' + new Date().getTime(),
            id:new Date().getTime().toString(),
            userId: UserStore.user.id,
            cards:TarotStore.myAlignment
        }
        const res = await postAlignment(newAlignment)
        navigate('/my')
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Сохранить расклад</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control type='text'
                value={name} onChange={(e) => setName(e.target.value)}
                placeholder='Имя расклада...'/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick = {handleAdd}>
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    )
})

export default AlignmentModal