import { MagnifyingGlass } from "phosphor-react";
import { FormContainer } from "./styles";

export function SearchForm() {
    return (
        <FormContainer>
            <MagnifyingGlass size={24} color="#0079FE"/>
            <input />
            <button>Buscar</button>
        </FormContainer>
    )
}