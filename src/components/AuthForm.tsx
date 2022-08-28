import { observer } from "mobx-react-lite"
import { FC, SyntheticEvent, useState } from "react"
import UserStore from "../store/UserStore"
import {loginUser,signupUser} from '../API/UserAPI'
import { useNavigate } from "react-router-dom"

interface AuthProps {
  isLogin: boolean
}

const AuthForm:FC<AuthProps> = observer(({isLogin}) => {
  const [login,setLogin] = useState('')
  const [password,setPasword] = useState('')
  const [errorMessage,setErrorMessage] = useState('')
  const navigate = useNavigate()
  
  const handleLogin = async (e:SyntheticEvent) => {
    e.preventDefault()
    const newUser = {
      login:login,
      password:password,
      id:login
    }
    const res = await loginUser(newUser)
    if(res){
      UserStore.setIsAuth(true)
      UserStore.setUser(newUser)
      navigate('/')
    }
    else{
      setErrorMessage('Неправильный пароль')
    }
  }
  
  const handleSignup = async (e:SyntheticEvent) => {
    e.preventDefault()
    const newUser = {
      login:login,
      password:password,
      id:login
    }
    const res = await signupUser(newUser)
    if(res === 500){
      setErrorMessage('Пользователь уже зарегистрирован')
    }
    else{
      UserStore.setIsAuth(true)
      UserStore.setUser(newUser)
      navigate('/')
    }
  }
  return (
    <form>
      <input type='text' placeholder='Login' 
        value={login} onChange={(e) => setLogin(e.target.value)}/>
      <input type='password' placeholder='Password' 
        value={password} onChange={(e) => setPasword(e.target.value)}/>
      {
        isLogin ? <button onClick={(e) => handleLogin(e)}>Login</button>
        :<button onClick={(e) => handleSignup(e)}>Signup</button>
      }
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  )
})

export default AuthForm