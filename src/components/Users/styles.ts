import styled from "styled-components"

export const UsersContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-top: 2rem;

    padding: 2rem;
    background: ${props => props.theme.colors.box};
    border-radius: 16px;

    img {
        border-radius: 50%;
        width: 7.5rem;
        height: 7.5rem;
    }
`

export const UsersData = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const User = styled.p`
    padding: 0.75rem 0;
    color: ${props => props.theme.colors.button};
`

export const UserBio = styled.p`
    padding-top: 0.75rem;
    padding-bottom: 2rem;
    color: ${props => props.theme.colors.textNotAvailable};
`

export const ProfileNumbersContainer = styled.section`
    display: flex;
    justify-content: space-around;

    padding: 1rem 2rem;
    background: ${props => props.theme.colors.innerBox};
    border-radius: 16px;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`

export const IconsContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
    margin-top: 2rem;

    section {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`