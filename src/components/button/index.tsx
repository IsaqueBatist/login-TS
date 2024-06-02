import React from "react"
import { IButton } from "./types"
import {ButtonConainer} from "./style"

const Button = ({title, onClick, disabled} : IButton) => {

  return (
    <ButtonConainer aria-disabled={!disabled}>
      {title}
    </ButtonConainer>
  )



}


export default Button