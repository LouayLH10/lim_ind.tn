import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './Authcontext'; // Assurez-vous que le chemin est correct
const root = ReactDOM.createRoot(document.getElementById('root')); // Nouvelle méthode en React 18
root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
