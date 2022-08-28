import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { Button, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { flattenDiagnosticMessageText } from "typescript"
import { deleteAlignment, getAlignment } from "../API/AlignmentsAPI"
import { TAlignment } from "../models/Alignment"
import { TCard } from "../models/Card"
import { emptyAlignment } from "../utils/constants"
import CardsList from "./CardsList"



const AlignmentPage = observer(() => {
    const {id} = useParams()
    const [alignment,setAlignment] = useState(emptyAlignment)
    const [isLoading,setIsLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        getAlignment(id!).then(data => setAlignment(data))
        .then(() => setIsLoading(false))
    },[])
    const handleDelete = async () => {
        const res = await deleteAlignment(alignment.id)
        if(res.status === 200){
            navigate('/my')
        }
    }
    return(
        <Container>
            {
                isLoading ? <h1>Загрузка...</h1>
                :
                <Row>
                    <h1>{alignment.name}</h1>
                    <CardsList cards={alignment.cards} />
                    <Button onClick={handleDelete}
                    variant='outline-light'>Удалить расклад</Button>
                </Row>
            }
        </Container>
    )
})

export default AlignmentPage