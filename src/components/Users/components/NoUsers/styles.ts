import styled from "styled-components"

export const NoUserContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;
    padding: 4rem;

    color: ${props => props.theme.colors.textNotAvailable};
    font-size: 1.25rem;
    text-align: center;

    svg {
        margin-bottom: 1rem;
    }
`