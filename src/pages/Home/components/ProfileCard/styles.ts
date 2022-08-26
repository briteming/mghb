import styled from 'styled-components';

export const ProfileCardContainer = styled.div`
	position: relative;
	z-index: 10;

	display: flex;
	align-items: center;
	gap: 2rem;

	padding: 2rem;

	background: ${props => props.theme['base-profile']};

	border-radius: 10px;

	margin-top: -5.5rem;

	img {
		max-height: 11.5rem;

		border-radius: 8px;

		margin-left: 0.5rem;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 0.75rem;

		margin-top: -1rem;

		padding: 1.2rem 1rem;

		img {
			max-height: 5rem;

			margin: 0;
		}
	}
`;

export const ProfileCardContent = styled.div`
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		h1 {
			color: ${props => props.theme['base-title']};

			font-size: 1.5rem;
			font-weight: bold;
		}

		a {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			color: ${props => props.theme.blue};

			font-size: 0.75rem;
			font-weight: bold;

			text-transform: uppercase;

			svg {
				// fix misalignment
				margin-top: -4px;
			}
		}
	}

	p {
		margin-top: 0.5rem;

		color: ${props => props.theme['base-text']};
	}

	@media (max-width: 768px) {
		header {
			flex-direction: column;

			h1 {
				font-size: 1rem;
			}

			a {
				font-size: 0.6rem;

				svg {
					width: 14px;

					margin-top: -2px;
				}
			}
		}

		p {
			font-size: 0.75rem;

			text-align: center;
		}
	}
`;

export const ProfileCardInfo = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1.5rem;

	margin-top: 1.5rem;

	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		color: ${props => props.theme['base-subtitle']};

		svg {
			color: ${props => props.theme['base-label']};
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 0.75rem;

		margin-top: 0.75rem;

		a {
			font-size: 0.75rem;
		}
	}
`;
