import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { SearchForm } from "./components/SearchForm"
import { GeneralBox } from "./components/GeneralBox"
import { Users } from "./components/Users"

export function App() {
  const {
    chosenTheme,
    renderHeader
  } = Header()

  return (
    <ThemeProvider theme={chosenTheme}>
      <GeneralBox>
        {renderHeader}
        <SearchForm />
        <Users />
      </GeneralBox>

      <GlobalStyle />
    </ThemeProvider>
  )
}
