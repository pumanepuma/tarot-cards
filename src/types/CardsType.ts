export type CardType = {
    "name_short": "string",
    "name": "string",
    "value": "string",
    "value_int": 0,
    "type": "major",
    "meaning_up": "string",
    "meaning_rev": "string",
    "desc": "string"
}

export type CardItemProps = {
    card: CardType
}

export type CardsListProps = {
    days:number
}