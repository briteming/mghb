import { BaseContainer } from '../../styles/global';
import { IssueLink } from './components/IssueLink';
import { ProfileCard } from './components/ProfileCard';
import { SearchIssuesForm } from './components/SearchIssuesForm';
import { IssueLinksGrid } from './styles';

export function Home() {
	return (
		<BaseContainer>
			<ProfileCard />

			<SearchIssuesForm />

			<IssueLinksGrid>
				<IssueLink />
				<IssueLink />
				<IssueLink />
				<IssueLink />
				<IssueLink />
				<IssueLink />
				<IssueLink />
				<IssueLink />
				<IssueLink />
				<IssueLink />
				<IssueLink />
				<IssueLink />
			</IssueLinksGrid>
		</BaseContainer>
	);
}
