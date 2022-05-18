// Reacr
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Paginas y modulos 
import Layout from '../components/Layout';
import Login from '../containers/Login';
import Dashboard from '../containers/Empleado/Dashboard';
import ManageDashBoard from '../containers/Administrador/ManageDashBoard';
import NotFound from '../containers/NotFound';

// Middlewares para verificar los login
import { verifyRol,isLogged } from '../utils/auth.js';

const App = () => {
  return(
  <BrowserRouter>
    <Layout>
      <Switch>
        {/** Login, en caso de estar logueado renderiza el home */}
        <Route exact path="/" component={isLogged(Login)} />
        {/** Modulo del administrador */}
        <Route path="/admin" component={verifyRol(["admin"],ManageDashBoard)} />
        {/** Modulo del empleados */}
        <Route path="/empleado" component={verifyRol(["admin","empleado"],Dashboard)} />
        {/** Ruta inexistente */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
}
export default App;