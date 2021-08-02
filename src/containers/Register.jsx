import React, { Fragment, useState } from "react";
import { connect } from "react-redux"; //conecta nuesta aplicacion con nuestro estado
import { registerRequest } from "../actions"; //traemos los actions que necesitamos
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";
import Header from "../components/Header";

const Register = (props) => {
  const [form, setValues] = useState({
    name: "",
    email: "",
    password: "",
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
    props.registerRequest(form); //pasamos el form al action
    props.history.push("/");
  };

  return (
    <Fragment>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
            ></input>
            <input
              name="email"
              className="input"
              type="email"
              placeholder="Correo"
              onChange={handleInput}
            ></input>
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            ></input>
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </Fragment>
  );
};

const mapDispatchToProps = {
  //Este es el dispatch que dispara nuestros actions
  registerRequest,
};

/**
 **1.- mapStateToProps(Es el mapeo de nuestros props)
 **2.-mapDispatchToProps(dispatch son los elementos que vamos a disparar por medio de nuestors actions)
 */
export default connect(null, mapDispatchToProps)(Register);
