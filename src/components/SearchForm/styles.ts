import styled from "styled-components"

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-top: 2.5rem;
    padding: 0.5rem;
    background: ${props => props.theme.colors.box};
    border-radius: 16px;
    box-shadow: -1px 4px 26px -6px ${props => props.theme.colors.boxShadow};

    svg {
        margin-left: 0.75rem;

        @media (max-width: 480px) {
            display: none;
        }
    }

    input {
        flex: 1;
        border: none;
        border-radius: 8px;
        padding: 0.5rem;

        background: transparent;
        
        ::placeholder {
            color: ${props => props.theme.colors.text}
        }
    }

    button {
        all: unset;
        cursor: pointer;
        padding: 0.75rem 1rem;
        border-radius: 8px;

        color: ${props => props.theme.colors.textButton};
        background: ${props => props.theme.colors.button};
        transition: 0.2s background;

        &:not(:disabled):hover {
            background: ${props => props.theme.colors.buttonHover};
        }

        &:disabled {
            cursor: not-allowed;
            background: ${props => props.theme.colors.buttonHover};
        }
    }
`