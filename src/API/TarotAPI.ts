import axios from 'axios'
import { REACT_APP_API_URL } from '../utils/constants'

export const getAllCards = async () => {
  const res = await axios.get(`${REACT_APP_API_URL}/cards`)
  return res.data
}

export const getCard = async (id:string) => {
  const res = await axios.get(`${REACT_APP_API_URL}/cards/${id}`)
  return res.data
}
