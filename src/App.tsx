import GlobalStyle from 'styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { CarProvider } from 'modules/context/CarContext';
import Router from 'routes';
import Theme from 'styles/theme';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <CarProvider>
          <Router />
        </CarProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
