import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './index.style';

ReactDOM.render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </ScopedCssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);
