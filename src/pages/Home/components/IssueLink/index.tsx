import { NavLink } from 'react-router-dom';
import {
	FooterFade,
	IssueLinkContainer,
	IssueLinkHeader,
	IssueLinkSnippet,
} from './styles';

interface IIssueLinkProps {
	title: string;
	body?: string;
	number: number;
	created_at: string;
}

export function IssueLink({
	title,
	number,
	body,
	created_at,
}: IIssueLinkProps) {
	return (
		<IssueLinkContainer>
			<IssueLinkHeader>
				<NavLink to={'/issue/' + number}>{title}</NavLink>

				<time>{created_at}</time>
			</IssueLinkHeader>

			<IssueLinkSnippet>
				{body ? body + '...' : 'Sem texto...'}
			</IssueLinkSnippet>

			<FooterFade />
		</IssueLinkContainer>
	);
}
