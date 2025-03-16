import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Détection des effets de bord : Il détecte les effets de bord (side effects) dans les méthodes du cycle de vie.
// Avertissements sur les API obsolètes : Il avertit lorsque des API obsolètes sont utilisées.
// Vérification des clés : Il vérifie que les composants ont des clés uniques lorsqu'ils sont rendus dans une liste.
// Il est important de noter que StrictMode n'affecte pas le rendu en production, il est uniquement actif en mode développement.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
