import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import Router from './Router';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
