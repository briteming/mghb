import styled from 'styled-components';

export const IssueLinksGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 416px);
	gap: 2rem;

	margin-top: 3rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fit, 100%);
	}
`;
