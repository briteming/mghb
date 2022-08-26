import { FormContainer, FormHeader, FormInput } from './styles';

// o form vai ter que usar debounce
export function SearchIssuesForm() {
	return (
		<FormContainer>
			<FormHeader>
				<strong>Publicações</strong>

				<span>6 publicações</span>
			</FormHeader>

			<FormInput type="text" placeholder="Buscar conteúdo" />
		</FormContainer>
	);
}
