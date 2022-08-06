import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <nav>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/weekly'}>Расклад на неделю</NavLink>
        </nav>
    )
}

export default NavBar