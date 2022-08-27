import styled from 'styled-components';

export const FormContainer = styled.div`
	margin-top: 4.5rem;
`;

export const FormHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 1rem;

	strong {
		font-weight: bold;
		font-size: 1.125rem;

		color: ${props => props.theme['base-subtitle']};
	}

	span {
		font-size: 0.875rem;

		color: ${props => props.theme['base-span']};
	}
`;

export const FormInput = styled.input`
	width: 100%;

	background: ${props => props.theme['base-input']};
	color: ${props => props.theme['base-text']};

	border: 1px solid ${props => props.theme['base-border']};
	border-radius: 6px;

	padding: 0.75rem 1rem;

	::placeholder {
		color: ${props => props.theme['base-label']};
	}
`;
