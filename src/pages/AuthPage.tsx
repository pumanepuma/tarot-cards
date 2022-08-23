import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import AuthForm from "../components/AuthForm";

const AuthPage = observer(() => {
    return (
        <Container className="page">
            <AuthForm />
        </Container>
    )
})

export default AuthPage