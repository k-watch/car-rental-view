import { CarProvider } from 'modules/context/CarContext';
import Router from 'routes';
import { ThemeProvider } from 'styled-components';
import Theme from 'styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CarProvider>
        <Router />
      </CarProvider>
    </ThemeProvider>
  );
};

export default App;
