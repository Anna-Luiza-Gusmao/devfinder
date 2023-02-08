import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px #0078FD;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        -webkit-font-smoothing: antialiased;
        
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    body, input, textarea, button {
        font-family: 'Roboto Mono', monospace;
        font-weight: 400;   
        font-size: 0.875rem;
        color: ${(props) => props.theme.colors.text};
    }
`