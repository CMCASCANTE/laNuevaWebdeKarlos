// importaciones
// import { post } from './bookService';
// import { Book } from '../Models/Book';
import { post } from './Peticion';

// const getBooks = () => post('', {}, {
//   headers: 'Access-Control-Allow-Origin: *',
// }).then((response) => response);

// const getBooks = () => {
//   request('http://localhost/apiLibreria/src/serve.php', {});
// };

const getBooks = () => { post('', {}); };

export default getBooks;
