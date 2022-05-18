import React from 'react';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';

// Layout global de toda la aplicacion
const Layout = ({ children }) => (
  <div className="App">
        {children}
    <Footer />
  </div>
);

export default Layout;