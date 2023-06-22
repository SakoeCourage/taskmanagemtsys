import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SnackbarProvider, useSnackbar } from 'notistack'
import { AuthProvider } from './context/Authcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackbarProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>
);