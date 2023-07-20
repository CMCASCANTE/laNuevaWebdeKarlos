// creacion de los interceptores para las peticiones fetch

// interceptor de peticion
export const requestInterceptor = (resource, init) => fetch(resource, {
  ...init,
  headers: {
    'content-type': 'application/json',
    ...init.headers,
  },
});

// interceptor de respuesta
export const responseInterceptor = (response) => {
  if (response.ok) {
    return response.json();
  }
  return response.json().then((data) => {
    const error = new Error(response.status);
    error.response = data;
    error.status = response.status;
    throw error;
  });
};
