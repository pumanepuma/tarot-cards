import axios from 'axios'
import { TCard } from '../models/Card'
import { REACT_APP_API_URL } from '../utils/constants'

export const getAllCards = async () => {
  const res = await axios.get(`${REACT_APP_API_URL}/cards`)
  return res.data
}

export const getCard = async (id:string) => {
  const res = await axios.get(`${REACT_APP_API_URL}/cards/${id}`)
  return res.data
}

export const putCard = async (id:string,card:TCard) => {
  const res = await axios.put(`${REACT_APP_API_URL}/cards/${id}`,card)
  return res.data
}