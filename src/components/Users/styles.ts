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

    @media (min-width: 768px) and (max-width: 1024px){
        gap: 1.5rem;
        padding: 1.5rem;

        img {
            width: 7rem;
            height: 7rem;
        }
    }
    @media (max-width: 767px){
        flex-direction: column;
        padding: 1.5rem;
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

    @media (max-width: 480px) {
        div {
            flex-direction: column;
            align-items: flex-start;
        }
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

    strong {
        font-size: 1.5rem;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        padding: 1rem;
    }
    @media (min-width: 481px) and (max-width: 767px){
        padding: 1rem;
    }
    @media (max-width: 480px) {
        font-size: 0.75rem;
        padding: 1rem;

        strong {
            font-size: 1rem;
        }
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

    @media (max-width: 767px){
        grid-template-columns: 1fr;
    }
`

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