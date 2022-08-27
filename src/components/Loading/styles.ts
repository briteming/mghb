import styled from 'styled-components';

export const LoadingContainer = styled.main`
	margin-top: 3rem;

	text-align: center;

	svg {
		animation: spin 1s ease-out alternate infinite;

		color: ${props => props.theme.blue};
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
`;
