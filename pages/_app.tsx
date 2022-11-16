import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@src/styles/GlobalStyle';
import Theme from '@src/styles/theme';
import { CarProvider } from '@src/modules/context/CarContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <CarProvider>
          <Component {...pageProps} />
        </CarProvider>
      </ThemeProvider>
    </>
  );
}
