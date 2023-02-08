import 'styled-components'
import { darkTheme } from '../themes/dark'

type DarkThemeType = typeof darkTheme

declare module 'styled-components' {
    export interface DefaultTheme extends DarkThemeType {}
}