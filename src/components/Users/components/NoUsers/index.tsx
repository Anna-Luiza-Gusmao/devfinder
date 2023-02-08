import { MagnifyingGlass } from "phosphor-react"
import { NoUserContainer } from "./styles"

export function NoUsers() {
    return (
        <NoUserContainer>
            <MagnifyingGlass size={84} />
            <p>Ops...</p>
            <p>Você ainda não buscou por nenhum usuário válido</p>
        </NoUserContainer>
    )
}