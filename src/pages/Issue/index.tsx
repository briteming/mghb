import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';
import { Loading } from '../../components/Loading';
import { BaseContainer } from '../../styles/global';
import { DateFormatter } from '../../utils/formatter';
import { IssueCard } from './components/IssueCard';
import { IssueContent } from './styles';

interface IIssue {
	title: string;
	body: string;
	comments: number;
	created_at: string;
	html_url: string;

	user: {
		login: string;
		html_url: string;
	};
}

export function Issue() {
	const [issue, setIssue] = useState<IIssue | null>(null);
	const { number } = useParams();

	useEffect(() => {
		async function fetchIssue() {
			const response = await api.get<IIssue>(
				'/repos/' + import.meta.env.VITE_REPO + '/issues/' + number
			);

			const { title, body, comments, created_at, html_url, user } =
				response.data;

			const issue: IIssue = {
				title,
				body,
				comments,
				created_at: DateFormatter.distanceToNow(created_at),
				html_url,
				user,
			};

			setIssue(issue);
		}

		fetchIssue();
	}, []);

	return (
		<BaseContainer>
			{issue ? (
				<>
					<IssueCard cardInfo={issue} user={issue.user} />

					<IssueContent>{issue.body}</IssueContent>
				</>
			) : (
				<Loading />
			)}
		</BaseContainer>
	);
}
