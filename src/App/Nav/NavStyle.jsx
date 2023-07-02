// Importaciones
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// Importaciones de Bootstrap
// import Button from 'react-bootstrap/Button';
// Importación de iconos de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope, faAddressCard, faHouse, faGamepad,
} from '@fortawesome/free-solid-svg-icons';

// Componente menu del navegador
function NavStyle() {
  return (
    <>
      <div id="nav" className="row justify-content-center">
        <div className="col-3 text-center">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
            {' '}
            Home
          </Link>
        </div>
        <div className="col-3 text-center">
          <Link to="/aboutme">
            <FontAwesomeIcon icon={faAddressCard} />
            {' '}
            AboutMe
          </Link>
        </div>
        <div className="col-3 text-center">
          <Link to="/app">
            <FontAwesomeIcon icon={faGamepad} />
            {' '}
            App
          </Link>
        </div>
        <div className="col-3 text-center">
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
            {' '}
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

// Exportación del navegador
export default NavStyle;
