import { TCard } from "./Card"

export type TAlignment = {
  id:string,
  userId:string,
  cards:TCard[],
  name:string
}

export interface AlItemProps {
  alignment:TAlignment
}

export interface AlListProps {
  alignments:TAlignment[]
}