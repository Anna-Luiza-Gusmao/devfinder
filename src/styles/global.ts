import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px #66BFFF;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-family: 'Roboto Mono', monospace;
        font-weight: 400;   
        font-size: 0.875rem;
        color: ${(props) => props.theme.colors.text};
    }
`