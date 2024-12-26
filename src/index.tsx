import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import 'normalize.css/normalize.css';
import { BrowserRouter } from 'react-router-dom';
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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
