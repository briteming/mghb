import styled from 'styled-components';

export const IssueLinkContainer = styled.div`
	background: ${props => props.theme['base-post']};

	padding: 2rem;

	border-radius: 10px;

	line-height: 160%;
`;

export const IssueLinkHeader = styled.header`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	a {
		max-width: 75%;

		font-weight: bold;
		font-size: 1.25rem;

		color: ${props => props.theme['base-title']};
	}

	time {
		font-size: 0.875rem;

		color: ${props => props.theme['base-span']};
	}

	@media (max-width: 768px) {
		a {
			max-width: 70%;

			font-size: 1rem;
		}
	}
`;

export const IssueLinkSnippet = styled.p`
	margin-top: 1.25rem;

	color: ${props => props.theme['base-text']};

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
`;
