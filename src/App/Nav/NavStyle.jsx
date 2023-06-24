// Importaciones
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// Componente menu del navegador
function NavStyle() {
  return (
    <div id="nav">
      <Link to="/"><Button>Home</Button></Link>
      <Link to="/aboutme"><Button>AboutMe</Button></Link>
      <Link to="/contact"><Button>Contact</Button></Link>
      <Outlet />
    </div>
  );
}

// Exportación del navegador
export default NavStyle;
