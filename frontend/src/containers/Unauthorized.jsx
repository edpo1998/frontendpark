
import React from 'react';
import Header from '../components/Header';

// Vista para cuando se intenta acceder a una pagina sin permisos concendidos
const Unauthorized = () => {  
  return(
  <>
    <Header></Header>
    <div className='containeroption'>
      <h1>⛔️ Acceso No authorizado</h1>
    </div>
  </>
);
}
export default Unauthorized;