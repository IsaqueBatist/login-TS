import React from "react"
import { Input } from "../../components/input/index"
import Button from "../../components/button"
import { Container, TittleContainer, Row, FormContainer } from "./style"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { IformData } from "./types"
import * as yup from "yup"

const schema = yup.object({
  usuario: yup.string().required('Campo Obrigatório'),
  password: yup.string().min(3, 'No mínimo três caracteres').required('Campo Obrigatório'),
}).required();
const LoginPage = () => {

  const { control, handleSubmit, formState: { errors, isValid } } = useForm <IformData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

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
            <Input control={control} name="usuario" placeholder="Usuario" />  
            <Input control={control} name="senha" placeholder="senha"/>
            <Button title="Entrar" />
          </form>
        </FormContainer>
      </Row>
    </Container>
  )
}

export { LoginPage }