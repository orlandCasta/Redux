import React, { Fragment, useState } from "react";
import { connect } from "react-redux"; //conecta nuesta aplicacion con nuestro estado
import { loginRequest } from "../actions"; //traemos los actions que necesitamos
import { Link } from "react-router-dom";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import Header from "../components/Header";
import "../assets/styles/components/Login.scss";

const Login = (props) => {
  const [form, setValues] = useState({
    email: "",
  });

  //funcion que maneja los cambios en los inputs
  const handleInput = (event) => {
    setValues({
      //...form es para destructurar lo que hay en el form
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  //funcion que envia estos elementos capturados a donde requeramos
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form); //pasamos el form al action
    props.history.push("/");
  };

  return (
    <Fragment>
      <Header isLogin />
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              className="input"
              type="email"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={googleIcon} /> Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} /> Inicia sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
          </p>
        </section>
      </section>
    </Fragment>
  );
};

const mapDispatchToProps = {
  //Este es el dispatch que dispara nuestros actions
  loginRequest,
};

/**
 **1.- mapStateToProps(Es el mapeo de nuestros props)
 **2.-mapDispatchToProps(dispatch son los elementos que vamos a disparar por medio de nuestors actions)
 */
export default connect(null, mapDispatchToProps)(Login);
