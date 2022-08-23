import axios from "axios"
import { TUser } from "../models/User"
import { REACT_APP_API_URL } from "../utils/constants"

export const signupUser = async(user:TUser) => {
    const res = await axios.post(`${REACT_APP_API_URL}/users`,user)
    return res.status
}

export const loginUser = async(user:TUser) => {
    const res = await axios.get(`${REACT_APP_API_URL}/users/${user.id}`)
    return res.data.password === user.password
}