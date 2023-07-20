// creacion del modelo
// (destructuracion del objeto del back para adaptarlo al front)
class Book {
  constructor(dto) {
    this.id = dto.id || '';
    this.nombre = dto.nombre || '';
    this.descripcion = dto.descripcion || '';
    this.pdf = dto.pdf || '';
    this.portada = dto.portada || '';
  }
}

export default Book;
