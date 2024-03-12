import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { WallsProvider } from './contexts/WallsContext.jsx';
// importamos los estilos
import './index.css';
import { lime, purple, red, teal } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[100],
      light: teal[50],
    },
    secundary: { main: lime[500] },
    warning: { main: red[900] },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <WallsProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </WallsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
