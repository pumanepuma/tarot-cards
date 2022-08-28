import { makeAutoObservable } from "mobx"
import { TUser } from "../models/User"

const savedIsAuth = localStorage.getItem('isAuth')
let initIsAuth = false
if(savedIsAuth) initIsAuth = JSON.parse(savedIsAuth)
class UserStore{
    isAuth = initIsAuth
    user : TUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : {} as TUser
    constructor(){
        makeAutoObservable(this)
    }

    setUser(user:TUser){
        this.user = user
        localStorage.setItem('user',JSON.stringify(this.user))
    }

    setIsAuth(bool:boolean){
        this.isAuth = bool
        localStorage.setItem('isAuth',JSON.stringify(this.isAuth))
    }
}

export default new UserStore()