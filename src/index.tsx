import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import 'typeface-lato';
import ReactGA from 'react-ga4';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default theme;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
ReactGA.initialize("G-GWKML1H4VY")
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
