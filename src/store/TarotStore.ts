import { makeAutoObservable } from "mobx"
import { TAlignment } from "../models/Alignment"
import { TCard } from '../models/Card'

const savedCards = localStorage.getItem('allCards')
let initCards = Array<TCard>()
if(savedCards){
  initCards = JSON.parse(savedCards)
}
const savedAlignment = localStorage.getItem('myAlignment')
class TarotStore{
  allCards = initCards
  myAlignment = Array<TCard>()
  alignmentName = ''
  constructor(){
    makeAutoObservable(this)
  }

  setAlignmentName(name:string){
    this.alignmentName = name
  }

  setAllCards(cards:TCard[]){
    this.allCards = cards
    localStorage.setItem('allCards',JSON.stringify(this.allCards))
  }

  addCard(card:TCard){
    this.myAlignment.push(card)
    localStorage.setItem('myAlignment',JSON.stringify(this.myAlignment))
  }

  deleteCard(card:TCard){
    this.myAlignment = this.myAlignment.filter(el => el.id !== card.id)
    localStorage.setItem('myAlignment',JSON.stringify(this.myAlignment))
  }

  setMyAlgnment(cards:TCard[]){
    this.myAlignment = cards
  }

  setCard(card:TCard){
    this.allCards.filter(el => el.id === card.id)[0] = card
  }

  getCard(id:string){
    return this.allCards.filter(el => el.id === id)[0]
  }

  get cardsNames(){
    return this.allCards.map(card => {
      return{label:card.rus_name,value:card.id}
    })
  }
}

export default new TarotStore()