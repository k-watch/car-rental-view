import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import GlobalStyle from '@src/styles/GlobalStyle';
import Theme from '@src/styles/theme';
import { CarProvider } from '@src/modules/context/CarContext';

export default function App({ Component, pageProps }: AppProps) {
  const [qeuryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <QueryClientProvider client={qeuryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <CarProvider>
              <Component {...pageProps} />
            </CarProvider>
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
