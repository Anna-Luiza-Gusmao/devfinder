import { MagnifyingGlass } from "phosphor-react";
import { FormContainer } from "./styles";

export function SearchForm() {
    return (
        <FormContainer>
            <MagnifyingGlass size={24} color="#0079FE"/>
            <input 
                placeholder="Procure por um usuário no GitHub"
            />
            <button>Buscar</button>
        </FormContainer>
    )
}