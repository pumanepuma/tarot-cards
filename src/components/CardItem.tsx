import { FC } from "react";
import { Card,Image } from "react-bootstrap";
import { CardItemProps, TCard } from "../models/Card";

const CardItem:FC<CardItemProps> = ({card}) => {
    return (
        <Card className='card-item' style={{ width: '10rem' }}>
            <Card.Body>
                <Card.Title>
                    <a href={`/cards/${card.id}`}>
                    {card.rus_name}
                    </a>
                </Card.Title>
            </Card.Body>
            <Card.Img src={'/assets'+card.img}/>
        </Card>
    )
}

export default CardItem