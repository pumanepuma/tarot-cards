import { makeAutoObservable } from "mobx"
import { CardType } from "../types/CardsType"

let saved : string | null = localStorage.getItem('cards')
let init : Array<CardType> = []
if(saved){
    init = JSON.parse(saved)
}

class TarotStore{
    cards = init
    constuctor(){
       makeAutoObservable(this) 
    }

    setCards(cards: Array<CardType>){
        this.cards = cards
        localStorage.setItem('cards',JSON.stringify(this.cards))
    }
}

export default new TarotStore()