import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme?.body};
    color: ${({ theme }) => theme?.text};
    background-color: ${({ theme }) => theme?.backgroundColor};
    background-image: ${({theme}) => theme?.backgroundImage};
    font-family: "Inconsolata", sans-serif;
    transition: all 0.50s linear;
  }
  `
