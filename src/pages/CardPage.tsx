import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getCard } from "../API/TarotAPI";
import AddDescModal from "../components/AddDescModal";
import { MyButton } from "../components/UI/MyButton";
import { TCard } from "../models/Card"; 
import UserStore from "../store/UserStore";

const CardPage = observer(() => {
  const { id } = useParams();
  const [card,setCard] = useState({} as TCard)
  const [show,setShow] = useState(false)
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
            UserStore.user.role === 'admin' && 
            <MyButton value='Добавить значение' handleClick={() => setShow(true)} />
          }
      </Col>
      <Col className='mx-2 text-align-left'>
        <h1>Значение карты дня</h1>
        <p className='card-desc'>{card.meaning_day}</p>
        {
          card.description && card.description.map(desc => {
            return (
              <Container>
                <h1>{desc.label}</h1>
                <p>{desc.value}</p>
              </Container>
            )
          })
        }
      </Col>
      {
        show && <AddDescModal show={show} setShow={setShow} card={card} />
      }
    </Container>
  )
})

export default CardPage