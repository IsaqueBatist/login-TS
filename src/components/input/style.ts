import styled from "styled-components"

export const InputContainer = styled.div`
  width: 100%;  
  padding: .5rem;
  border-radius: 1rem;
  max-width: 275px;
  heigh: 30px;
  border: 1px solid #3b3450;

  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input{
    outline: none;
    border: none;
    
  }
`
export const ErrorText = styled.p`
  color: #FF0000;
  font-size: 12px;
  margin: 0;

`
