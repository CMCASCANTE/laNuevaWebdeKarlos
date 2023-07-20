// Importaciones
import React from 'react';
import './Game.css';
import Nave from './Nave';

// asignacion al pulsar teclas
function pulsarTecha() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      document.getElementById('game').classList.add('up');
    }
    if (e.key === 'ArrowDown') {
      document.getElementById('game').classList.add('down');
    }
    if (e.key === 'ArrowRight') {
      document.getElementById('game').classList.add('right');
    }
    if (e.key === 'ArrowLeft') {
      document.getElementById('game').classList.add('left');
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp') {
      document.getElementById('game').classList.remove('up');
    }
    if (e.key === 'ArrowDown') {
      document.getElementById('game').classList.remove('down');
    }
    if (e.key === 'ArrowRight') {
      document.getElementById('game').classList.remove('right');
    }
    if (e.key === 'ArrowLeft') {
      document.getElementById('game').classList.remove('left');
    }
  });
}

// asignacion al soltar teclas

// creamos la nave
const nave = <Nave pulsarTecla={pulsarTecha} />;

// Componente principal para el juego
function Game() {
  return (
    <div id="game" className="row align-items-center justify-content-center">
      {nave}
      {pulsarTecha()}
    </div>
  );
}

// Exportación del componente
export default Game;
