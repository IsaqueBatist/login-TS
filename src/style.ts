import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,body{
    margin: 0;
    padding: 0;
  }
  body{
    background-color: #82259C;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    color: black;
    font-family: 'Roboto';
  }
`