import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';

import GlobalStyles from './GlobalStyles';
import theme from './theme';
import Routes from './routes';

ReactDOM.render(
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </MuiThemeProvider>
  </StylesProvider >,
  document.getElementById('root')
);

reportWebVitals();
