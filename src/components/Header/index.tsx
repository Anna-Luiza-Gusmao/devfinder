import { Moon, Sun } from "phosphor-react"
import { useState } from "react"
import { HeaderContainer, ThemeContainer } from "./styles"

import { darkTheme } from '../../styles/themes/dark'
import { lightTheme } from "../../styles/themes/light"

export function Header() {
    const [chosenTheme, setChosenTheme] = useState(darkTheme)

    function handleTheme () {
        if(chosenTheme === darkTheme){
            setChosenTheme(lightTheme)
        }else{
            setChosenTheme(darkTheme)
        }
    }

    return {
        chosenTheme,
        renderHeader: (
            <HeaderContainer>
                <h1>devfinder</h1>
    
                <ThemeContainer>
                    {
                        (chosenTheme.name === 'dark') ? <p>LIGHT</p> : <p>DARK</p>
                    }
                    
                        {
                            (chosenTheme.name === 'dark') ? (
                                <button onClick={handleTheme}>
                                    <Sun size={32} /> 
                                </button>
                            )
                            : (
                                <button onClick={handleTheme}>
                                    <Moon size={32} color='#343434'/>
                                </button>
                            )
                        }
                    
                </ThemeContainer>
            </HeaderContainer>
        )
    }
}