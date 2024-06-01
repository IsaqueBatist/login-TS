import React from "react"
import { IButton } from "./types"
import {ButtonConainer} from "./style"

const Button = ({title, onClick} : IButton) => {

  return (
    <ButtonConainer onClick={onClick}>
      {title}
    </ButtonConainer>
  )



}


export default Button