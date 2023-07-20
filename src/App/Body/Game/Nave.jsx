// Importaciones
import React from 'react';
import './Game.css';
// Importaciones de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShuttleSpace,
} from '@fortawesome/free-solid-svg-icons';

// div para la nave
function Nave() {
  return (
    <div className="col-auto nave">
      <FontAwesomeIcon icon={faShuttleSpace} />
    </div>
  );
}

// Exportación del componente
export default Nave;
