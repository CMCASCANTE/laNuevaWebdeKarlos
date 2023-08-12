// importaciones
import React from 'react';
import PropTypes from 'prop-types';

// componente de respuesta una vez se active el submit
function Span({ texto, clases }) {
  return (
    <span className={clases}>{texto}</span>
  );
}

// tipado de props
Span.propTypes = {
  texto: PropTypes.string.isRequired,
  clases: PropTypes.string,
};
// valor por defecto de clases, si no le dan ninguna
Span.defaultProps = {
  clases: '',
};

// exportacion del componente
export default Span;
