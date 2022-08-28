import { SyntheticEvent } from "react"

export type TCard = {
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
  desc:	string
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