import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCard } from "../API/TarotAPI";
import { TCard } from "../models/Card"; 

const CardPage = () => {
  const { id } = useParams();
  const [card,setCard] = useState({} as TCard)
  const navigate = useNavigate()
  useEffect(() => {
    getCard(id!).then(data => setCard(data))
  }, []);
  return (
    <div className='page'>
      <div  className='card-item'>
          <h1>{card.rus_name}</h1>
          <img src={'/assets' + card.img} 
          width='300px'/>
        <p className='card-desc'>{card.meaning_day}</p>
      </div>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}

export default CardPage