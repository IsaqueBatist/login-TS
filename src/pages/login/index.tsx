import React from "react"
import { Input } from "../../components/input/index"
import Button from "../../components/button"
import { Container, TittleContainer, Row, FormContainer } from "./style"
import { useForm } from "react-hook-form"

const LoginPage = () => {

  const { control, watch, formState: { errors, isValid } } = useForm()

  const form = watch()
  console.log(form)

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
            <Input name="email" placeholder="email" control={control} />
            <Input name="password" placeholder="password" control={control} />
            <Button title="Entrar" />
          </form>
        </FormContainer>
      </Row>
    </Container>
  )
}

export { LoginPage }