// importaciones
import React from 'react';
import PropTypes from 'prop-types';

// componente de imput para el fomulario
function Input({
  type, name, valor, cambiarNombre,
}) {
  return (
    <input type={type} name={name} id={name} value={valor} onChange={cambiarNombre} />
  );
}

// tipado de las propedades
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  cambiarNombre: PropTypes.func,
};
// valor por defecto para la funcion
Input.defaultProps = {
  cambiarNombre: () => {},
};

// exportamos el componente
export default Input;
