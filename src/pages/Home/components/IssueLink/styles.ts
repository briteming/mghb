import styled from 'styled-components';
import reactMarkdown from 'react-markdown';

export const IssueLinkContainer = styled.div`
	position: relative;

	max-height: 491px;

	background: ${props => props.theme['base-post']};

	padding: 2rem;

	border-radius: 10px;

	line-height: 160%;

	overflow: hidden;

	border: 2px solid transparent;

	transition: border 0.2s, background-color 0.2s;

	&:hover {
		border: 2px solid ${props => props.theme['base-label']};

		background: ${props => props.theme['base-background']};
	}
`;

export const IssueLinkHeader = styled.header`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 1rem;

	a {
		max-width: 70%;

		font-weight: bold;
		font-size: 1rem;

		color: ${props => props.theme['base-title']};
	}

	time {
		font-size: 0.875rem;

		color: ${props => props.theme['base-span']};
	}

	@media (max-width: 768px) {
		a {
			max-width: 60%;

			font-size: 1rem;
		}
	}
`;

export const IssueLinkSnippet = styled(reactMarkdown)`
	margin-top: 1.25rem;

	color: ${props => props.theme['base-text']};

	word-wrap: break-word;

	p + p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	li {
		margin-top: 1.5rem;
	}

	a {
		color: ${props => props.theme.blue};

		&:hover {
			text-decoration: underline;
		}
	}

	img {
		width: 100%;

		border-radius: 6px;
	}

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
`;

export const FooterFade = styled.div`
	height: 70px;
	width: 100%;

	position: absolute;
	left: 0;
	bottom: 0;
	z-index: 100;

	border-radius: 0 0 10px 10px;

	background: linear-gradient(
		transparent,
		${props => props.theme['base-post']}
	);
`;
