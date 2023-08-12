// Importaciones
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import Input from './Input';
import Label from './Label';
import Textarea from './Textarea';
import Submit from './Submit';
import Span from './Span';
import './contact.css';

// creacion de ref para el captcha
const recaptchaRef = React.createRef();

// Componente para el contacto de la web
function Contact() {
  // control del input de nombre
  const [nombre, setNombre] = useState('');
  const cambiarNombre = (event) => {
    setNombre(event.target.value);
  };

  // control del textarea
  const [texto, setTexto] = useState('');
  const cambiarTexto = (event) => {
    setTexto(event.target.value);
  };

  // control de los Spans
  const [textResultadoSubmit, setTextResultadoSubmit] = useState('Hola y bienvenido.'
    + ' Me alegra que hayas decidido visitar el apartado de Contacto.'
    + ' Por favor, dejanos un comentario para saber en qué estas pensando.');
  const [textResultadoSubmitError, setTextResultadoSubmitError] = useState('');
  const [textResultadoSubmitDone, setTextResultadoSubmitDone] = useState('');
  const [textSpanNombre, setTextSpanNombre] = useState('');
  const [textSpanComentario, setTextSpanComentario] = useState('');

  // activar boton submit
  const activarSubmit = () => {
    // comprobamos si se ha completado correctamente los campos
    if (nombre === '') {
      setTextSpanNombre('Por favor, pon un nombre para que sepamos quien nos escribe.');
    } else {
      setTextSpanNombre('');
    }
    if (texto === '') {
      setTextSpanComentario('Por favor, cuentanos en qué estas pensando.');
    } else {
      setTextSpanComentario('');
    }
    // si valida correctamente enviamos los datos del form
    // queda pendiente hacer la validacion del token ref desde el servidor con el api de google
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue && nombre !== '' && texto !== '') {
      // recogemos el valor actual de los datos
      const nombreComentario = nombre;
      const comentario = texto;
      // configuramos los datos que vamos a mandar desde la petición post
      const url = 'http://localhost/newWeb/sendMail.php';
      const data = { nombre: nombreComentario, texto: comentario };
      const config = { 'content-type': 'application/json' };
      // los enviamos al servidor para que envíe un email a la cuenta principal
      axios
        .post(url, data, config)
        .then(
          (response) => {
            if (response.data === 'Message has been sent') {
              recaptchaRef.current.reset();
              setNombre('');
              setTexto('');
              setTextResultadoSubmitError('');
              setTextResultadoSubmit('');
              setTextResultadoSubmitDone('Muchas gracias por tu comentario !!!!!!'
                + ' Puedes mandarnos todos los comentarios que quieras, estaremos encantados de recibirlos :)');
            } else {
              setTextResultadoSubmitDone('');
              setTextResultadoSubmit('');
              setTextResultadoSubmitError('Ooops, parece que ha habido algún error.'
                + ' Por favor, prueba mas tarde');
            }
          },
        ).catch(() => {
          setTextResultadoSubmitDone('');
          setTextResultadoSubmit('');
          setTextResultadoSubmitError('Ooops, parece que ha habido algún error.'
            + ' Por favor, prueba de nuevo');
        });
    }
  };

  // formulario de contacto
  return (
    <div id="contact" className="row justify-content-center">
      <div className="col-12">
        <Span texto={textResultadoSubmit} clases="bienvenidaSpan" />
        <Span texto={textResultadoSubmitError} clases="errorSpan" />
        <Span texto={textResultadoSubmitDone} clases="doneSpan" />
      </div>
      <div className="col-12">
        <Label htmlFor="nombre" label="Nombre" />
        <Input type="text" name="nombre" valor={nombre} cambiarNombre={cambiarNombre} />
        <Span texto={textSpanNombre} clases="errorSpan" />
      </div>
      <div className="col-12">
        <Label htmlFor="texto" label="Comentario" />
        <Textarea name="texto" texto={texto} cambiarTexto={cambiarTexto} />
        <Span texto={textSpanComentario} clases="errorSpan" />
      </div>
      <div className="col-auto gCaptcha">
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_SITEKEY}
          ref={recaptchaRef}
          theme="dark"
        />
        <Submit enviarForm={activarSubmit} />
      </div>
    </div>
  );
}

// Exportación de componente
export default Contact;
