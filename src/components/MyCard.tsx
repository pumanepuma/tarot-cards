import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Button} from "react-bootstrap";
import { CardProps } from "../models/Card";
import TarotStore from "../store/TarotStore";
import CardItem from "./CardItem";

const MyCard:FC<CardProps> = observer(({card}) =>{
    const handleDelete = () => {
        TarotStore.deleteCard(card)
    }
    return(
        <div>
            <Button variant='outline-light'
            onClick={handleDelete}>Удалить карту</Button>
            <CardItem card={card} />
        </div>
    )
})

export default MyCard