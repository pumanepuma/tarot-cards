import { makeAutoObservable } from "mobx"
import { TUser } from "../models/User"

class UserStore{
    isAuth = false
    user : TUser = {} as TUser
    constructor(){
        makeAutoObservable(this)
    }

    setUser(user:TUser){
        this.user = user
    }

    setIsAuth(bool:boolean){
        this.isAuth = bool
    }
}

export default new UserStore()