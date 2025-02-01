import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import lightTheme from './styles/themes/light';
import GlobalStyles from './styles/global';
import Routes from './pages/router';



function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
