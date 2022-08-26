import styled from 'styled-components';

export const IssueCardContainer = styled.div`
	position: relative;
	z-index: 10;

	background: ${props => props.theme['base-profile']};

	border-radius: 10px;

	padding: 2rem;

	margin-top: -5.25rem;

	@media (max-width: 768px) {
		margin-top: -1.5rem;
	}
`;

export const IssueCardNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		text-transform: uppercase;

		font-size: 0.875rem;
		font-weight: bold;

		color: ${props => props.theme.blue};

		// fix misalignment 😩
		&:last-child {
			svg {
				margin-top: -5px;
			}
		}
	}

	@media (max-width: 768px) {
		a {
			font-size: 0.75rem;
		}
	}
`;

export const IssueCardContent = styled.div`
	margin-top: 1.25rem;

	h1 {
		font-weight: bold;
		font-size: 1.5rem;

		color: ${props => props.theme['base-title']};

		line-height: 130%;
	}

	footer {
		display: flex;
		align-items: center;
		gap: 2rem;

		margin-top: 0.5rem;

		div {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			color: ${props => props.theme['base-span']};

			svg {
				color: ${props => props.theme['base-label']};
			}
		}
	}
`;
