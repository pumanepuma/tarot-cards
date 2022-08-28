import { observer } from "mobx-react-lite"
import { FC } from "react"
import { Container } from "react-bootstrap"
import { AlItemProps } from "../models/Alignment"

const AlignmentItem : FC<AlItemProps> = observer(({alignment}) => {
    return (
        <Container>
            <a href={`/my/${alignment.id}`}><h3>{alignment.name}</h3></a>
        </Container>
    )
})

export default AlignmentItem