import { Sun } from "phosphor-react"
import { HeaderContainer, ThemeContainer } from "./styles"

export function Header() {
    return (
        <HeaderContainer>
            <h1>devfinder</h1>

            <ThemeContainer>
                <p>LIGHT</p>
                <button>
                    <Sun size={32} />
                </button>
            </ThemeContainer>
        </HeaderContainer>
    )
}