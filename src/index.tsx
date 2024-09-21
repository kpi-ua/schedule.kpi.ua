import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './index.style';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isBetween from 'dayjs/plugin/isBetween';
import duration from 'dayjs/plugin/duration';

dayjs.extend(isBetween);
dayjs.extend(localizedFormat);
dayjs.extend(duration);
dayjs.locale('uk');

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
