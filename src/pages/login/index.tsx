import React from "react"
import { Input } from "../../components/input/index"
import Button from "../../components/button"
import { Container, TittleContainer, Row, FormContainer } from "./style"
import { useForm } from "react-hook-form"
import { IformData } from "./types"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().min(6, 'No minimo 6 caracteres').required('Campo obrigatório')
})

const LoginPage = () => {

  const { control, watch, formState: { errors, isValid } } = useForm({ resolver: yupResolver(schema), mode: 'onBlur', reValidateMode: 'onChange' })

  console.log(errors)

  return (
    <Container>
      <Row>
        <TittleContainer>
          Login
        </TittleContainer>
      </Row>
      <Row>
        <FormContainer>
          <form>
            <Input name="email" placeholder="email" control={control} errorMessage={errors?.email?.message} />
            <Input name="password" placeholder="password" control={control} errorMessage={errors?.password?.message} />
            <Button title="Entrar" disabled={isValid}/>
          </form>
        </FormContainer>
      </Row>
    </Container>
  )
}

export { LoginPage }