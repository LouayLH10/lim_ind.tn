import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './Authcontext'; // Assurez-vous que le chemin est correct

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
