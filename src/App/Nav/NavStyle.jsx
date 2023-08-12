// Importaciones
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

// Componente menu del navegador
function NavStyle() {
  return (
    <>
      <div id="navegador" className="row justify-content-center">
        <div className="col-xxl-1 col-md-2 col-3 text-center navButonDiv">
          <Link to="/">
            <button type="button">Inicio</button>
          </Link>
        </div>
        <div className="col-xxl-1 col-md-2 col-3 text-center navButonDiv">
          <Link to="/aboutme">
            <button type="button">Conóceme</button>
          </Link>
        </div>
        <div className="col-xxl-1 col-md-2 col-3 text-center navButonDiv">
          <Link to="/app">
            <button type="button">App</button>
          </Link>
        </div>
        <div className="col-xxl-1 col-md-2 col-3 text-center navButonDiv">
          <Link to="/contact">
            <button type="button">Contacto</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

// Exportación del navegador
export default NavStyle;
