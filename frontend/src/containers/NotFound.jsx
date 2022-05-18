import React from 'react';
import Header from '../components/Header';

// Vista para cuando la ruta no esta definida
const NotFound = () => {
  return(
  <>
    <Header></Header>
    <div className='containeroption'>
      <h1>❌ 404 No Found</h1>
    </div>
  </>
);
}
export default NotFound;