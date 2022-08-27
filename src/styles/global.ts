import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
		outline: 1px solid ${props => props.theme.blue};
	}

    body, textarea, input, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;

        border: 0;
    }

    body {
        background: ${props => props.theme['base-background']};
        color: ${props => props.theme['base-text']};

    }
    

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
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

export const BaseContainer = styled.main`
	width: 100%;
	max-width: 864px;

	margin: 0 auto;

	@media (max-width: 768px) {
		max-width: 300px;
	}
`;
