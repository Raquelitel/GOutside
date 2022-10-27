import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import logo from "../../../img/logo-GOutside.png";
import X_transp from "../../../img/X_transp.png";

export const Home = () => {
  return (
    <div className="container-fluid text-center">
      <h1 className="d-flex mt-4 justify-content-center align-items-center home-title-size">
        ¡Bienvenid{" "}
        <img className="home-X-icon" src={X_transp} alt="titulo bienvenidos" />
        s!
      </h1>

      <div className="">
        <div className="d-md-flex align-items-center justify-content-evenly">
          <img className="home-logo" src={logo} />

          <div className="row mx-auto home-buttons">
            <div className="row mx-auto">
              <div className="col-md-12 ms-auto align-items-center justify-content-center home-subtitle">
                <p>¿Quieres estar al día de las competiciones de tu región?</p>
              </div>
              <div className="col-md-12 d-flex align-items-center justify-content-evenly">
                <Link to="/Signup">
                  <button className="btn btn-validacion">
                    Conviértete en GOutsider
                  </button>
                </Link>
                <Link to="/Login">
                  <button className="btn btn-validacion">Inicia sesión</button>
                </Link>
              </div>
            </div>
            <div>
              <p className="mt-5">¿Eres organizador de eventos deportivos? </p>
              <p>¿Te gustaría gestionar tus eventos con nosotros?</p>
              <Link to="/about-us" className="color-link">
                Nosotros te ayudamos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
