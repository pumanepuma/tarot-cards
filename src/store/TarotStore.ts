import { makeAutoObservable } from "mobx"
import { TCard } from "../models/Card"

let allSaved : string | null = localStorage.getItem('all')
let allInit : Array<TCard> = []
if(allSaved) allInit = JSON.parse(allSaved)

class TarotStore{
    allCards = allInit
    constuctor(){
       makeAutoObservable(this) 
    }

    setAllCards(cards: Array<TCard>){
        this.allCards = cards
        localStorage.setItem('all',JSON.stringify(this.allCards))
    }
}

export default new TarotStore()