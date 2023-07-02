// Importaciones
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from '../Body/AboutMe/AboutMe';
import Game from '../Body/Game/Game';
import Contact from '../Body/Contact/Contact';
import Home from '../Body/Home/Home';
import NavStyle from './NavStyle';
import NoPage from './NoPage';

// Componente para el menú del navegador con react-router
function Nav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavStyle />}>
          <Route index element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/app" element={<Game />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Exportación del componente
export default Nav;
