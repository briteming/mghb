import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react';
import {
	ProfileCardContainer,
	ProfileCardContent,
	ProfileCardInfo,
} from './styles';

export function ProfileCard() {
	return (
		<ProfileCardContainer>
			<img
				src="https://github.com/Maymisk.png"
				alt="Maymisk profile picture"
			/>

			<ProfileCardContent>
				<header>
					<h1>Khalil Bohner</h1>

					<a href="">
						<span>github</span>
						<ArrowSquareOut size={18} />
					</a>
				</header>

				<p>
					Tristique volutpat pulvinar vel massa, pellentesque egestas.
					Eu viverra massa quam dignissim aenean malesuada suscipit.
					Nunc, volutpat pulvinar vel mass.
				</p>

				<ProfileCardInfo>
					<a href="">
						<GithubLogo size={18} />
						<span>Maymisk</span>
					</a>

					<a href="">
						<Buildings size={18} />
						<span>Desempregado 😭</span>
					</a>

					<a href="">
						<Users size={18} />
						<span>32 Seguidores</span>
					</a>
				</ProfileCardInfo>
			</ProfileCardContent>
		</ProfileCardContainer>
	);
}
