import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { SearchForm } from "./components/SearchForm"
import { GeneralBox } from "./components/GeneralBox"

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
      </GeneralBox>

      <GlobalStyle />
    </ThemeProvider>
  )
}
