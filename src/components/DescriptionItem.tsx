import { observer } from "mobx-react-lite"
import { FC } from "react"
import { Container } from "react-bootstrap"
import { DescriptionProps } from "../models/Components"

const DescriptionItem : FC<DescriptionProps> = observer(({description}) => {
    return (
        <Container>
            <h4>{description.type}</h4>
            <p>{description.description}</p>
        </Container>
    )
})

export default DescriptionItem