// Importaciones
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

// Componente menu del navegador
function NavStyle() {
  return (
    <>
      <div id="navegador" className="row justify-content-center">
        <div className="col-1 text-center">
          <Link to="/">
            <button type="button">Home</button>
          </Link>
        </div>
        <div className="col-1 text-center">
          <Link to="/aboutme">
            <button type="button">AboutMe</button>
          </Link>
        </div>
        <div className="col-1 text-center">
          <Link to="/app">
            <button type="button">App</button>
          </Link>
        </div>
        <div className="col-1 text-center">
          <Link to="/contact">
            <button type="button">Contact</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

// Exportación del navegador
export default NavStyle;
