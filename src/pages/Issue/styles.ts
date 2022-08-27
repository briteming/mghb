import reactMarkdown from 'react-markdown';
import styled from 'styled-components';

export const IssueContent = styled(reactMarkdown)`
	padding: 2.5rem 2rem;

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
		padding: 1.5rem 1rem;
	}
`;
