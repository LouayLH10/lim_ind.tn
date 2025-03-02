import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './Authcontext'; // Assurez-vous que le chemin est correct

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
