import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { darkTheme } from "./styles/themes/dark"
import { lightTheme } from "./styles/themes/light"

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <h1>Teste</h1>
      <p>Teste do p</p>
      <GlobalStyle />
    </ThemeProvider>
  )
}
