import React from "react";
import { CardItemProps } from "../types/CardsType";
import { REACT_APP_API_URL } from "../utils/constants";
import back from '../assets/back.jpg'
import { Card,Image } from "react-bootstrap";

const CardItem : React.FC<CardItemProps> = ({card}) => {
    return (
        <Card className='card-item' style={{ width: '10rem' }}>
            <Card.Img src={back}/>
            <Card.Body>
                <Card.Title><a href={`/card/${card.name_short}`}>{card.name}</a></Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CardItem