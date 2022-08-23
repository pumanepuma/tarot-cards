import { observer } from "mobx-react-lite"
import { Container, Nav, Navbar,Image, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from '../images/logo.svg'
import { TUser } from "../models/User"
import UserStore from "../store/UserStore"

const Header = observer(() => {
    const logout = () => {
        UserStore.setIsAuth(false)
        UserStore.setUser({} as TUser)
    }
    return (
        <Navbar bg='dark'>
            <Container className=''>
                <Nav className='d-flex flex-row justify-content-around align-items-center p-2 links'>
                    <NavLink to='/'>
                        <Image src={'/assets/images/logo.svg'} width='50px'/>
                    </NavLink>
                    <NavLink to='/weekly'>Alignments</NavLink>
                    <NavLink to='/my'>My alignment</NavLink>
                    {
                        UserStore.isAuth ? <Button variant="dark" onClick={logout}>Выйти</Button>
                        : <NavLink to='/auth'>Войти</NavLink>
                    }
                </Nav>
            </Container>

        </Navbar>
    )
})

export default Header