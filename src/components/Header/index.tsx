import { HeaderContainer } from './styles';
import coverImagePath from '../../assets/Cover.svg';

export function Header() {
	return (
		<HeaderContainer>
			<img src={coverImagePath} alt="Git Hub Blog cover image" />
		</HeaderContainer>
	);
}
