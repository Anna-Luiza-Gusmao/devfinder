import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 6rem;
`

export const ThemeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.875rem;

    p {
        font-weight: 600;
    }

    button {
        all: unset;
        cursor: pointer;
    }
`