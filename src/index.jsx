import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from 'routes';
import theme from 'assets/theme';

import reportWebVitals from './reportWebVitals';

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
