// React
import React, { useState,useEffect } from 'react';
// Redux
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
// Components
import Header from '../components/Header';
// Api
import authentication from '../services/api-authentication';
// Images
import driver from '../assets/static/driver.png';
// Styles
import '../assets/styles/components/Login.scss';

const Login = props => {
  // Mensaje de error
  const [messageerror,setMessageerror] = useState('')
  // Loading para cargar el usuario
  const [loading, setLogin] = useState(true)
  // Datos para cargar el usuario
  const [form, setValues] = useState({
    username: '',
  });

  // Funcion para cambiar los valores del form
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }
 
  // Funcion para pedir los datos del login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await authentication.users.login(form)
        if(response.authentication){
            localStorage.setItem('session',JSON.stringify(response.data)) 
            props.loginRequest(response.data);
            history.go(0)
            setLogin(false)
        }  
        else{
          setMessageerror(response.message)
        }

  }

  // Al iniciar verifica si hay una sesion activa 
  useEffect(() => {
    if(localStorage.getItem("session"))
      setLogin(false)
    else
      setLogin(true)
  });

  return (
    <>
      <Header isLogin />
      {
      loading?
      <section className="login">
        <section className="login__container">
          <img src={driver} className="login__container-img" />
          {
            messageerror ?
            <p className="alert mt-2 alert-danger">{messageerror}</p>:
            ''
          }
          <form className="login__container--form" onSubmit={handleSubmit}>
                <input
                  name="username"
                  className="form-control mt-2"
                  type="email"
                  placeholder="Correo"
                  onChange={handleInput}
                />
                <input
                  name="password"
                  className="input mt-2"
                  type="password"
                  placeholder="Contraseña"
                  onChange={handleInput}
                />
            <button className="btn btn-secondary btnlogin btn-block mt-5">Iniciar sesión</button>
          </form>
        </section>
      </section>:
      <>
        <div className='containeroption'>
          <h1>▪️▪️▪️ Loading </h1>
        </div>
      </>
      }
    </>
  );
}

const mapDispatchToProps = {
  loginRequest,

};

export default connect(null, mapDispatchToProps)(Login);