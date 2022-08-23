import { observer } from "mobx-react-lite";
import { SyntheticEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { loginUser, signupUser } from "../API/UserAPI";
import UserStore from "../store/UserStore";

const AuthForm = observer(() => {
    const [isLogin,setIsLogin] = useState(true)
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const handleClick = async (e:SyntheticEvent) => {
        e.preventDefault()
        const newUser = {login,password,id:login}
        if(isLogin) {
            const res = await loginUser(newUser)
            if(res) {
                UserStore.setIsAuth(true)
                UserStore.setUser(newUser)
            }
        }
        else{
            const res = await signupUser(newUser)
            console.log(res)
            UserStore.setIsAuth(true)
            UserStore.setUser(newUser)
        }
    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
                value={login} onChange={(e) => setLogin(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="dark" type="submit"
            onClick={(e) => handleClick(e)}>
                Submit
            </Button>
            {
                isLogin?<p>Еще нет аккаунта? <span onClick={() => setIsLogin(prev => !prev)}>Зарегистрируйтесь</span></p>
                :<p>Уже есть аккаунт? <span  onClick={() => setIsLogin(prev => !prev)}>Войдите</span></p>
            }
        </Form>
    )
})

export default AuthForm