import 'normalize.css';
import '@/styles/main.scss';
import '@/styles/fonts.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store';

function MyApp({ Component, pageProps }: AppProps) {
	const store = setupStore();

	return (
		<Provider store={store}>
			<ThemeProvider defaultTheme="dark">
				<Head>
					<title>ZabarTV</title>
					<meta name="theme-color" content="#0c101f" />
					<meta name="description" content="ZabarTV - фильмы и сериалы" />
					<meta name="keywords" content="фильмы сериалы мультфильмы" />
					<meta property="og:description" content="ZabarTV - фильмы и сериалы" />
					<link rel="icon" href="/favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	);
}

export default MyApp;
