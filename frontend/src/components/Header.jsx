// React
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Utils 
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
// Actions
import { logoutRequest } from '../actions';
// Images
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
// Styles
import '../assets/styles/components/Header.scss';


const Header = props => {
  
  // Clases para poder alterar el estilo del header
  const { user, isLogin, isRegister } = props;

  // Verifica que haya una session iniciada
  const hasUser = localStorage['session'];

  // Realiza los cambios en el cierre de la sesion
  const handleLogout = () => {
    props.logoutRequest({});
    localStorage.clear()
    props.history.push('/');
  }

  // Definimos las clases para definir los estados en los que estara la aplicacion
  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });
   
  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="ParkLot" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ?
            <img src={gravatar(JSON.parse(localStorage['session']).email)} alt={JSON.parse(localStorage['session']).email} /> :
            <img src={userIcon} alt="" />
          }
          {hasUser ?
            <p>{JSON.parse(localStorage['session']).name}</p>
            : <p>Perfil</p>
          }
        </div>
        <ul>
          {hasUser ? 
            <li><a href="/" onClick={handleLogout}>Cerrar Sesión</a></li>
            :
            <li>
              <Link to="/">
                Authenticate 
              </Link>
            </li>
          }
        </ul>
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

