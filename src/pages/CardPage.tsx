import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getCard } from "../API/TarotAPI";
import DescriptionItem from "../components/DescriptionItem";
import { MyButton } from "../components/UI/MyButton";
import { TCard } from "../models/Card"; 
import UserStore from "../store/UserStore";

const CardPage = observer(() => {
  const { id } = useParams();
  const [card,setCard] = useState({} as TCard)
  const navigate = useNavigate()
  useEffect(() => {
    getCard(id!).then(data => setCard(data))
  }, []);
  return (
    <Container className="d-flex flex-row justify-content-center pt-3">
      <Col  className='card-item'>
          <h1>{card.rus_name}</h1>
          <img src={'/assets' + card.img} 
          width='300px'/>
          <button onClick={() => navigate(-1)}>Назад</button>
          {
            UserStore.user.role === 'admin' && <MyButton value='Редактировать' handleClick={() => navigate('/admin')}/>
          }
      </Col>
      <Col className='mx-2 text-align-left'>
        <h1>Значение карты дня</h1>
        <p className='card-desc'>{card.meaning_day}</p>
        {
          card.description && card.description.map(desc => <DescriptionItem description={desc}/>)
        }
      </Col>
    </Container>
  )
})

export default CardPage