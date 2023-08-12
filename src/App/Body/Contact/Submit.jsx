// importaciones
import React from 'react';
import PropTypes from 'prop-types';

// componente de imput para el fomulario
function Submit({ enviarForm }) {
  return (
    <button type="button" onClick={enviarForm}>Enviar</button>
  );
}

// damos tipado a los atributos
Submit.propTypes = {
  enviarForm: PropTypes.func,
};

// creamos un valor por defecto para los valores del array ya que no los creamos como requeridos
Submit.defaultProps = {
  enviarForm: () => {},
};

// exportamos el componente
export default Submit;
