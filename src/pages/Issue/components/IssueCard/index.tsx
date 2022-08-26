import { ArrowSquareOut, CaretLeft, GithubLogo } from 'phosphor-react';
import { IssueCardContainer, IssueCardContent, IssueCardNav } from './styles';

export function IssueCard() {
	return (
		<IssueCardContainer>
			<IssueCardNav>
				<a href="">
					<CaretLeft size={18} />
					<span>voltar</span>
				</a>

				<a href="">
					<span>ver no github</span>
					<ArrowSquareOut size={18} />
				</a>
			</IssueCardNav>

			<IssueCardContent>
				<h1>fodase</h1>

				<footer>
					<div>
						<GithubLogo size={18} />
						<span>Maymisk</span>
					</div>
				</footer>
			</IssueCardContent>
		</IssueCardContainer>
	);
}
