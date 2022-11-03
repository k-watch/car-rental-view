import GlobalStyle from 'styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { CarProvider } from 'modules/context/CarContext';
import Router from 'routes';
import Theme from 'styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <QueryClientProvider client={queryClient}>
          <CarProvider>
            <HelmetProvider>
              <Router />
            </HelmetProvider>
          </CarProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
