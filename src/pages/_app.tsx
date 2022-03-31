import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { light } from '../styles/themes/light';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='stylesheet' href='https://use.typekit.net/hqo5ogn.css' />
      </Head>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
