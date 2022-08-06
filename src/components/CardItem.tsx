import React from "react";
import { CardItemProps } from "../types/CardsType";
import { REACT_APP_API_URL } from "../utils/constants";

const CardItem : React.FC<CardItemProps> = ({card}) => {
    return (
        <div className="card-item">
            <p><a href={`/card/${card.name_short}`}>{card.name}</a></p>
        </div>
    )
}

export default CardItem