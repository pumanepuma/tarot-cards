import { FC } from "react"

export type ButtonProps = {
    value:string,
    handleClick:()=>void
}

export const MyButton:FC<ButtonProps> = ({value,handleClick}) => {
    return(
        <button onClick={handleClick}>
            {value}
        </button>
    )
}