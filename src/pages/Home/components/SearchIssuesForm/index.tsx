import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer, FormHeader, FormInput } from './styles';

interface ISearchIssuesFormProps {
	amountOfIssues: number;
	fetchIssues(query?: string): Promise<void>;
}

export function SearchIssuesForm({
	amountOfIssues,
	fetchIssues,
}: ISearchIssuesFormProps) {
	const { register, watch } = useForm({
		defaultValues: {
			q: '',
		},
	});

	const queryInputValue = watch('q');

	useEffect(() => {
		if (!queryInputValue) {
			fetchIssues();
			return;
		}

		const timeout = setTimeout(() => fetchIssues(queryInputValue), 1000);

		return () => {
			clearTimeout(timeout);
		};
	}, [queryInputValue]);

	return (
		<FormContainer>
			<FormHeader>
				<strong>Publicações</strong>

				<span>{amountOfIssues} publicações</span>
			</FormHeader>

			<FormInput
				type="text"
				required
				{...register('q', {
					required: true,
				})}
				placeholder="Buscar conteúdo"
				value={queryInputValue}
			/>
		</FormContainer>
	);
}
