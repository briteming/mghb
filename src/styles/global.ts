import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1440px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 768) {
        html {
            font-size: 87.5%;
        }
    }
`;
