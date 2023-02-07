import styled from "styled-components"

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-top: 2.5rem;
    padding: 0.5rem;
    background: ${props => props.theme.colors.box};
    border-radius: 16px;

    input {
        flex: 1;
    }

    button {
        all: unset;
        cursor: pointer;
        padding: 0.75rem 1rem;
        border-radius: 8px;

        background: ${props => props.theme.colors.button};
    }
`