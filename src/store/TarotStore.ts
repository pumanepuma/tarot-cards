import { makeAutoObservable } from "mobx"
import { CardType } from "../types/CardsType"

let saved : string | null = localStorage.getItem('cards')
let init : Array<CardType> = []
if(saved){
    init = JSON.parse(saved)
}
let allSaved : string | null = localStorage.getItem('all')
let allInit : Array<CardType> = []
if(allSaved) allInit = JSON.parse(allSaved)

class TarotStore{
    cards = init
    allCards = allInit
    constuctor(){
       makeAutoObservable(this) 
    }

    setAllCards(cards: Array<CardType>){
        this.allCards = cards
        localStorage.setItem('all',JSON.stringify(this.allCards))
    }

    setCards(cards: Array<CardType>){
        this.cards = cards
        localStorage.setItem('cards',JSON.stringify(this.cards))
    }
}

export default new TarotStore()