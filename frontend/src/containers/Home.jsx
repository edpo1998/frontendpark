
import React from 'react';

import Header from '../components/Header';
import { Button } from 'reactstrap';

const Home = ({history}) => {
  // Verifica que haya una sesion activa  
  const session_active = JSON.parse(localStorage['session']);
  
  // Redirecciona al dashboard del usuario logueado
  const redirectDashboard = () =>{
      if(session_active.rol=="admin"){
        history.push("/admin")
      }else{
        history.push("/empleado")
      }
  }

  return(
  <>
  <Header></Header>
  <div className='containeroption'>
    <h1>🛃 Bienvenido {session_active.name} </h1>
    <Button onClick={redirectDashboard}>Ir al Dashboard</Button>
  </div>
  </>
);
}
export default Home;