import React from "react";
import { connect } from "react-redux"; //conecta nuesta aplicacion con nuestro estado
import { logoutRequest } from "../actions"; //traemos los actions que necesitamos
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import gravatar from "../utils/gravatar";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0; //object.keys es para validar con length sus elementos

  const handleLogout = () => {
    props.logoutRequest({});
  };

  /* esta funcion utiliza una libreria y se encarga de validar los props que les pasamos
  si esta el prop isLogin cambia la className dentro del html */
  const geaderClass = classNames("header", {
    isLogin,
    isRegister,
  });

  return (
    <header className={geaderClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email}></img>
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogout}>
                Cerrar sesion
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar sesion</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  //Este es el dispatch que dispara nuestros actions
  logoutRequest,
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  logoutRequest: PropTypes.func.isRequired,
};

/**
 **1.- mapStateToProps(Es el mapeo de nuestros props)
 **2.-mapDispatchToProps(dispatch son los elementos que vamos a disparar por medio de nuestors actions)
 */
export default connect(mapStateToProps, mapDispatchToProps)(Header);
