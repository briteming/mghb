import {
	ArrowSquareOut,
	Calendar,
	CaretLeft,
	ChatCircle,
	GithubLogo,
} from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { IssueCardContainer, IssueCardContent, IssueCardNav } from './styles';

interface IIssueCardProps {
	cardInfo: {
		title: string;
		comments: number;
		created_at: string;
		html_url: string;
	};

	user: {
		login: string;
		html_url: string;
	};
}

export function IssueCard({ cardInfo, user }: IIssueCardProps) {
	return (
		<IssueCardContainer>
			<IssueCardNav>
				<NavLink to={'/'}>
					<CaretLeft size={18} />
					<span>voltar</span>
				</NavLink>

				<a href={cardInfo.html_url} target="_blank">
					<span>ver no github</span>
					<ArrowSquareOut size={18} />
				</a>
			</IssueCardNav>

			<IssueCardContent>
				<h1>{cardInfo.title}</h1>

				<footer>
					<a href={user.html_url} target="_blank">
						<GithubLogo size={18} weight="fill" />
						<span>{user.login}</span>
					</a>

					<a href={cardInfo.html_url} target="_blank">
						<Calendar size={18} weight="fill" />
						<span>{cardInfo.created_at}</span>
					</a>

					<a href={cardInfo.html_url} target="_blank">
						<ChatCircle size={18} weight="fill" />
						<span>{cardInfo.comments}</span>
					</a>
				</footer>
			</IssueCardContent>
		</IssueCardContainer>
	);
}
