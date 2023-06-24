// Importaciones
import React from 'react';

// Componente para la página por defecto para cualquier acceso que no exista
function NoPage() {
  return (
    <div id="nopage">
      <h1>Not Found</h1>
      <h5>The requested URL was not found on this server.</h5>
      <h6>
        Additionally, a 404 Not Found error
        was encountered while trying to use an
        ErrorDocument to handle the request.
      </h6>
    </div>
  );
}

// Exportación del componente
export default NoPage;
