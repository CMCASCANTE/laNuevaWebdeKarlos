// importaciones
import React from 'react';
import PropTypes from 'prop-types';

// componente de imput para el fomulario
function Textarea({ name, texto, cambiarTexto }) {
  return (
    <textarea name={name} id={name} value={texto} onChange={cambiarTexto} />
  );
}

// tipado de las propedades
Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  cambiarTexto: PropTypes.func,
};
// valor por defecto para la funcion
Textarea.defaultProps = {
  cambiarTexto: () => {},
};

// exportamos el componente
export default Textarea;
