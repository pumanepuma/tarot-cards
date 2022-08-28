import axios from "axios";
import { TAlignment } from "../models/Alignment";
import { TUser } from "../models/User";
import { REACT_APP_API_URL } from "../utils/constants";
import { REACT_APP_API_URL_2 } from "../utils/constants";

export const getUserAlignments = async(user:TUser) => {
  const res = await axios.get(`${REACT_APP_API_URL}/alignments`)
  const data = res.data.filter((al:TAlignment) => al.userId === user.id)
  return data
}

export const postAlignment = async(alignment:TAlignment) => {
  const res = await axios.post(`${REACT_APP_API_URL}/alignments`,alignment)
  return res
}

export const getAlignment = async(id:string) => {
  const res = await axios.get(`${REACT_APP_API_URL}/alignments/${id}`)
  return res.data
}

export const deleteAlignment = async(id:string) => {
  const res = await axios.delete(`${REACT_APP_API_URL}/alignments/${id}`)
  console.log(res)
  return res
}

export const getRandomCards = async(count : number) => {
  const res = await axios.get(`${REACT_APP_API_URL_2}/random?n=${count}`)
  return res.data
}