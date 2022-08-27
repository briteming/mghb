import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react';
import { memo, useEffect, useState } from 'react';
import {
	ProfileCardContainer,
	ProfileCardContent,
	ProfileCardInfo,
} from './styles';
import { api } from '../../../../api';

interface IUser {
	login: string;
	name: string;
	bio: string;
	company: string;
	followers: number;
	avatar_url: string;
	html_url: string;
}
function ProfileCardComponent() {
	const [user, setUser] = useState({} as IUser);

	useEffect(() => {
		async function fetchUser() {
			const response = await api.get<IUser>('/users/Maymisk');
			const fetchedUser = response.data;

			setUser(fetchedUser);
		}

		fetchUser();
	}, []);

	return (
		<ProfileCardContainer>
			<img
				src={user.avatar_url}
				alt={`${user.login}'s profile picture`}
			/>

			<ProfileCardContent>
				<div>
					<header>
						<h1>{user.name}</h1>

						<a href={user.html_url} target="_blank">
							<span>github</span>
							<ArrowSquareOut size={18} />
						</a>
					</header>

					<p>{user.bio}</p>
				</div>

				<ProfileCardInfo>
					<a href={user.html_url} target="_blank">
						<GithubLogo size={18} />
						<span>{user.login}</span>
					</a>

					<a href={user.html_url} target="_blank">
						<Buildings size={18} />
						<span>
							{user.company ? user.company : 'Sem empresa'}
						</span>
					</a>

					<a href={user.html_url} target="_blank">
						<Users size={18} />
						<span>{user.followers} Seguidores</span>
					</a>
				</ProfileCardInfo>
			</ProfileCardContent>
		</ProfileCardContainer>
	);
}

export const ProfileCard = memo(ProfileCardComponent);
