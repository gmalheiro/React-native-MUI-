import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';
import { theme } from '../src/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme = { theme }>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);