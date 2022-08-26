import {
	IssueLinkContainer,
	IssueLinkHeader,
	IssueLinkSnippet,
} from './styles';

export function IssueLink() {
	return (
		<IssueLinkContainer>
			<IssueLinkHeader>
				<a>JavaScript data types and data structures</a>

				<time>Há 1 dia</time>
			</IssueLinkHeader>

			<IssueLinkSnippet>
				Programming languages all have built-in data structures, but
				these often differ from one language to another. This article
				attempts to list the built-in data structures available in
			</IssueLinkSnippet>
		</IssueLinkContainer>
	);
}
