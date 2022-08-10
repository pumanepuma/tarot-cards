import { Container, Nav, Navbar,Image } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <Navbar bg='dark'>
            <Container className=''>
                <Nav className='d-flex flex-row justify-content-between align-items-center p-2 links'>
                    <NavLink to='/'>
                        <Image src={logo} width='50px'/>
                    </NavLink>
                    <NavLink to='/weekly'>Alignments</NavLink>
                    <NavLink to='/my'>My alignment</NavLink>
                </Nav>
            </Container>

        </Navbar>
    )
}

export default Header