import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getUserAlignments } from "../API/AlignmentsAPI";
import AlignmentItem from "../components/AlignmentItem";
import { TAlignment } from "../models/Alignment";
import UserStore from "../store/UserStore";

const MyAlignments = observer(() => {
    const [alignments,setAlignments] = useState(Array<TAlignment>())
    useEffect(() => {
        getUserAlignments(UserStore.user).then(data => setAlignments(data))
    },[])
    return (
        <Container className='mt-3'>
            <h1>Сохраненные расклады</h1>
            {
                alignments.length ? alignments.map(alignment => <AlignmentItem alignment={alignment} key={alignment.id}/>)
                :<h3>Пока нет сохраненных раскладов</h3>
            }
        </Container>
    )
})

export default MyAlignments