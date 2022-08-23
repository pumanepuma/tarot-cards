export type TCard = {
    type: string,
    id: string,
    name: string,
    value: string,
    value_int: number,
    meaning_up: string,
    meaning_rev: string,
    desc: string,
    rus_name: string,
    img: string,
    meaning_day: string
}

export interface CardItemProps {
    card:TCard
}

export interface CardsListProps {
    cards: TCard[]
}