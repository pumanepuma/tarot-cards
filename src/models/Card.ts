import { SyntheticEvent } from "react"

export interface TCard  {
  id:	string,
  name:	string,
  value:	string,
  value_int:	number,
  type:	string,
  rus_name:string,
  meaning_day:string,
  meaning_up:	string,
  meaning_rev:	string,
  img:string,
  desc:	string,
  description:TDescription[],
  [key:string]:any
}

export type TEngCard = {
  name_short: string,
  name: string,
  value: string,
  value_int: number,
  type: string,
  meaning_up: string,
  meaning_rev: string,
  desc: string
}

export interface CardProps {
  card:TCard
}

export interface ClickableCardProps extends CardProps{
  handleClick: (card:TCard) => void
}

export type CardsListProps = {
  cards:TCard[]
}

export enum cards_meanings {
  meaning_day ='DAY',
  love = 'LOVE',
  career = 'CAREER',
  general = 'GENERAL'
}

export const descTypes = [
  {
    label:'Карта дня',
    value: 'meaning_day'
  },
  {
    label:'Любовь',
    value: 'love'
  },
  {
    label:'Карьера',
    value: 'career'
  },
  {
    label:'Общее',
    value: 'general'
  },
]

export type TDescription = {
  type:string,
  description:string
}