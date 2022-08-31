import 'normalize.css'
import '@/styles/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { setupStore } from '@/store/store'

function MyApp({ Component, pageProps }: AppProps) {

  const store = setupStore();

  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme='dark'>
        <Head>
          <title>ZabarTV</title>
          <meta key="theme-color-light" name="theme-color" media="(prefers-color-scheme: light)" content="#ccd5e8"/>
          <meta key="theme-color-dark" name="theme-color" media="(prefers-color-scheme: dark)" content="#0c101f"/>
          <meta name="description" content="ZabarTV - фильмы и сериалы" />
          <meta name="keywords" content="фильмы сериалы мультфильмы" />
          <meta property="og:description" content="ZabarTV - фильмы и сериалы" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp;