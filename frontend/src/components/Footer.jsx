import React from 'react';
import '../assets/styles/components/Footer.scss';

/**
 * 
 * Componente del pie de pagina, se reutiliza
 * en todos los modulos de la aplicacion
 */
const Footer = () => (
  <footer className="footer">
    <a href="/">Terminos de uso</a>
    <a href="/">Declaración de privacidad</a>
    <a href="/">Centro de ayuda</a>
  </footer>
);

export default Footer;