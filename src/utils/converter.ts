import { getCard } from "../API/TarotAPI";
import { TEngCard } from "../models/Card";

export const convertToRus = async (engCards : TEngCard[]) => {
  const res = []
  for(let i = 0;i< engCards.length;i++){
    let card = await getCard(engCards[i].name_short)
    res.push(card)
  }
  return res
}



export const convertCard = async(card:TEngCard) => {
  const rusCard = await getCard(card.name_short)
  return rusCard
}