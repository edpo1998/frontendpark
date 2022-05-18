import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DefaultAction from './moduleaction/DefaultAction';
const Conductores = () => (
  <div className='containeroption'>
    <Switch>
       { /*<Route exact path="/admin/usuarios/add" component={addPosicion} />*/}
        <Route 
          render={(props) => <DefaultAction {...props} name={"👦 Conductores"} />} />
    </Switch>
  </div>
);

export default Conductores;