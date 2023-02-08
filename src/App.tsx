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

  const {
    usersData,
    renderSearchForm
  } = SearchForm()

  return (
    <ThemeProvider theme={chosenTheme}>
      <GeneralBox>
        {renderHeader}
        {renderSearchForm}
        <Users usersData={usersData} />
      </GeneralBox>

      <GlobalStyle />
    </ThemeProvider>
  )
}
