import { useState } from 'react';
import { api } from '../../api';
import { Loading } from '../../components/Loading';
import { BaseContainer } from '../../styles/global';
import { DateFormatter } from '../../utils/formatter';
import { IssueLink } from './components/IssueLink';
import { ProfileCard } from './components/ProfileCard';
import { SearchIssuesForm } from './components/SearchIssuesForm';
import { IssueLinksGrid } from './styles';

interface IRepoIssue {
	id: string;
	title: string;
	number: number;
	body?: string;
	created_at: string;
}

interface IResponse {
	items: IRepoIssue[];
}

export function Home() {
	const [issues, setIssues] = useState<IRepoIssue[]>([]);
	const [isFetching, setIsFetching] = useState(false);

	async function fetchIssues(query?: string) {
		setIsFetching(true);

		let q: string;

		if (query) {
			q = `${query} repo:${import.meta.env.VITE_REPO}`;
		} else {
			q = `repo:${import.meta.env.VITE_REPO}`;
		}

		const response = await api.get<IResponse>('/search/issues', {
			params: {
				q,
			},
		});

		const formattedIssues = response.data.items.map(issue => {
			return {
				...issue,
				created_at: DateFormatter.distanceToNow(issue.created_at),
			};
		});

		setIssues(formattedIssues);
		setIsFetching(false);
	}

	return (
		<BaseContainer>
			<ProfileCard />

			<SearchIssuesForm
				amountOfIssues={issues.length}
				fetchIssues={fetchIssues}
			/>

			{isFetching ? (
				<Loading />
			) : (
				<IssueLinksGrid>
					{issues.map(issue => {
						return <IssueLink key={issue.id} {...issue} />;
					})}
				</IssueLinksGrid>
			)}
		</BaseContainer>
	);
}
