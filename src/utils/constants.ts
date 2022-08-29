import { TCard } from "../models/Card"
export const REACT_APP_API_URL = 'http://localhost:3001'
export const REACT_APP_API_URL_2 = 'https://rws-cards-api.herokuapp.com/api/v1/cards'

export const backCard = {
  name: "",
			id: "card",
			value: "",
			value_int: 0,
			suit: "",
			type: "",
			meaning_up: "",
			meaning_rev: "",
			desc: "",
			rus_name: "",
      img:"/images/back.jpg",
			meaning_day: ""
}


export const emptyAlignment = {
  id:'',
  name:'',
  userId:'',
  cards: Array<TCard>()
}