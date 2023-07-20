// Importaciones
import React from 'react';
import getBooks from './src/Services/peticionLibros';

// Componente para el Home
function OpenWebinar() {
  getBooks();
  // console.log(listaLibros);
  return (
    <div id="openWebinar">
      <h1>OpenWebinar</h1>
    </div>
  );
}

// Exportación del componente
export default OpenWebinar;
