import styled from "styled-components";

export const GeneralContainer = styled.main`
    width: 796px;

    @media (min-width: 768px) and (max-width: 1024px){
        width: 596px;
    }
    @media (min-width: 481px) and (max-width: 767px){
        width: 396px;
    }
    @media (max-width: 480px) {
        width: 326px;
    }
`