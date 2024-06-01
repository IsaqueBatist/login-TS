import React from 'react'
import { InputContainer, InputText, ErrorText } from './style'
import { Controller } from 'react-hook-form'
import { IInput } from './types'
const Input = ({ control, name, placeholder, errorMessage, ...rest }: IInput) => {
  return (
    <>
      <InputContainer>

        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => <InputText value={value} onChange={onChange} placeholder={placeholder}{...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export { Input }