// Importaciones
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App';

// Importación de Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Creación del renderizado inicial
const root = createRoot(document.getElementById('root'));
root.render(
  <App />,
);
