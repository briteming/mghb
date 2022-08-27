import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { Router } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Browser } from 'phosphor-react';

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	);
}
