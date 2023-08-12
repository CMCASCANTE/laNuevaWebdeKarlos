// importaciones
import React from 'react';
import PropTypes from 'prop-types';

// componente de Label para el formulario
function Label({ htmlFor, label }) {
  return (
    <label htmlFor={htmlFor}>{label}</label>
  );
}

// tipado de las propedades
Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

// exportamos el componente
export default Label;
