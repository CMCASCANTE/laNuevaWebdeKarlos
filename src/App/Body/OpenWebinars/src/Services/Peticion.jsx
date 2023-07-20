// importaciones
// import React from 'react';
import axios from 'axios';

// URL
const API_URL = 'http://localhost/apiLibreria/src/serve.php';

// peticion
const request = (resource, init) => {
  if (init.method === 'GET') {
    axios.get(
      resource,
      {
        ...init,
        headers: {
          'content-type': 'application/json',
          ...init.headers,
        },
      },
    ).then((response) => response.data)
      .catch((error) => {
        console.error(`Ha ocurrido un error al pedir el recurso ${resource} con el mensaje ${error.menssage}`);
      });
  }
  if (init.method === 'POST') {
    axios.post(resource, {
      ...init,
      headers: {
        'content-type': 'application/json',
        ...init.headers,
      },
    }).then((response) => {
      console.log(response.data);
    })
      .catch((error) => {
        console.error(`Ha ocurrido un error al pedir el recurso ${resource} con el mensaje ${error.menssage}`);
      });
  }
};

// peticion get
export const get = (endpoint, params, options = {}) => {
  // url completa para la peticion
  const url = new URL(API_URL + endpoint);
  // añadir los valores get a la url
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  // respuesta final para el get
  return request(url, {
    method: 'GET',
    headers: 'headers' in options ? options.headers : {},
    ...options,
  });
};

// peticion post
export function post(endpoint, body, options = {}) {
  // url completa para la peticion
  const url = new URL(API_URL + endpoint);
  // respuesta final para el post
  return request(url, {
    method: 'POST',
    headers: 'headers' in options ? options.headers : {},
    body: JSON.stringify(body),
    ...options,
  });
}
