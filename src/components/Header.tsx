import { observer } from "mobx-react-lite"
import { NavLink, useNavigate } from "react-router-dom"
import { TUser } from "../models/User"
import TarotStore from "../store/TarotStore"
import UserStore from "../store/UserStore"

const Header = observer(() => {
  const navigate = useNavigate()
  const logout = () => {
    UserStore.setIsAuth(false)
    UserStore.setUser({} as TUser)
    navigate('/')
  }
  return (
    <nav>
      <div className="public-navs">
        <NavLink to='/'>
          <img src='/assets/images/logo.svg' alt='Главная' width='40px'/>
        </NavLink>
        <NavLink to='/week'>Недельный расклад</NavLink>
      </div>
      {
        UserStore.isAuth ? 
        <div className="auth-navs">
          <NavLink to="/my">{UserStore.user.id}</NavLink>
          <NavLink to="/create">Создать расклад</NavLink>
          <button onClick={logout}>Выйти</button>
        </div>
        :
        <div>
          <NavLink to='/auth'>Войти</NavLink>
        </div>
      }
    </nav>
  )
})

export default Header