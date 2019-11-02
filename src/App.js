import React from 'react';
import {ThemeProvider} from 'theme-ui';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import theme from './theme';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
