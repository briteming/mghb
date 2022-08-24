import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

// ver como fazer roteamento com parametros (ler sobre hook useparams)

// ver como formatar texto markdowon com react-markdown

//buscar mais detalhes sobre a api do git hub

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />;
		</ThemeProvider>
	);
}
