import React from 'react'
import { InputContainer, ErrorText } from './style'
import { Controller } from 'react-hook-form'
import { IInput } from './types'
const Input = ({control, name, errorMessage, ...rest}: IInput) => {
  return (
    <>
      <InputContainer >
      < Controller 
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value, ref}}) =>  <input {...rest} onChange={onChange} onBlur={onBlur} value={value} ref={ref}/>}
      />
      </InputContainer>
      {errorMessage? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export { Input }