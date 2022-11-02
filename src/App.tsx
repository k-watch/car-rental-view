import Router from 'routes';
import { ThemeProvider } from 'styled-components';
import Theme from 'styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
