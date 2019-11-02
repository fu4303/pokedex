import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'theme-ui';

import App from './pages/Home';
import theme from './theme';
import './index.css';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(rootElement).render(<Root />);

serviceWorker.unregister();
