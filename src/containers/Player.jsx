import React, { useEffect } from "react";
import { connect } from "react-redux"; //conecta nuesta aplicacion con nuestro estado
import { getVideoSource } from "../actions"; //traemos los actions que necesitamos
import { Redirect } from "react-router";
import "../assets/styles/components/Player.scss";
import NotFound from "../containers/NotFound";

const Player = (props) => {
  /* cuando se genera esta ruta http://localhost:8080/player/2 estos datos nos los manda router
  hacemos match con los parametros que estamos recibiendo */
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src="" type="video/mp4"></source>
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

/**
 **1.- mapStateToProps(Es el mapeo de nuestros props)
 **2.-mapDispatchToProps(dispatch son los elementos que vamos a disparar por medio de nuestors actions)
 */
export default connect(mapStateToProps, mapDispatchToProps)(Player);
