import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import Select from 'react-select'
import { getCard } from "../API/TarotAPI";
import { TCard } from "../models/Card";
import TarotStore from "../store/TarotStore";

export type ModalProps = {
    show: boolean,
    setShow: (show: boolean) => void
}
const AddCardModal: FC<ModalProps> = observer(({ show, setShow }) => {
    const [cardId, setCardId] = useState('')
    const handleClose = () => {
        setShow(false)
    }
    const [errorMessage,setErrorMessage] = useState('')
    const handleAdd = async () => {
        const card = await getCard(cardId)
        if (!TarotStore.myAlignment.map((el: TCard) => el.id).includes(card.id)) {
            TarotStore.addCard(card)
        }
        else{
            setErrorMessage('Карта уже добавлена')
        }
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Select className='cards-select'
                    options={TarotStore.cardsNames}
                    onChange={(opt) => setCardId(opt!.value)} />
                    {
                        errorMessage && <Alert variant="warning">{errorMessage}</Alert>
                    }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={handleAdd}>
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    )
})

export default AddCardModal