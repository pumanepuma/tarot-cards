import { Dispatch, SetStateAction, SyntheticEvent } from 'react'

export interface InputProps{
  value: string | number,
  setValue: Dispatch<SetStateAction<string>>
}

export interface FormProps extends InputProps{
  handleClick:(e:SyntheticEvent) => void
}

export interface ModalProps{
  show:boolean,
  setShow:(show:boolean) => void
}