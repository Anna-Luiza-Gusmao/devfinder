import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { darkTheme } from "./styles/themes/dark"
import { lightTheme } from "./styles/themes/light"
import { Header } from "./components/Header"
import { SearchForm } from "./components/SearchForm"
import { GeneralBox } from "./components/GeneralBox"

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GeneralBox>
        <Header />
        <SearchForm />
      </GeneralBox>

      <GlobalStyle />
    </ThemeProvider>
  )
}
