import { GeneralContainer } from "./styles"
import { ReactNode } from 'react'

interface ChildrenProps {
    children: ReactNode;
}

export function GeneralBox({children}: ChildrenProps) {
    return (
        <GeneralContainer>
            {children}
        </GeneralContainer>
    )
}