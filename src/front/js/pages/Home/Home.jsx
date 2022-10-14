import React from "react";
import "./Home.css";
import GOutside_transp from "../../../img/GOutside_transp.png";
import X_transp from "../../../img/X_transp.png";
import Logo_Malaga_Throwdown from "../../../img/Logo_Malaga_Throwdown.jpg";
import Logo_Battle_Cancer from "../../../img/Logo_Battle_Cancer.jpg";
import Logo_Costa_Azahar from "../../../img/Logo_Costa_Azahar.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-center pt-5 home-welcome">
          <h1>Bienvenid</h1>
          <img className="home-X-icon" src={X_transp} />
          <h1>s</h1>
        </div>
        <div className="fs-2 home-subtitle">
          <h1>
            ¿Organizador de eventos deportivos?{" "}
            <a className="link" href="/">Nosotros te ayudamos</a>
            <a href=""></a>
          </h1>
        </div>
      </div>

      <div className="row d-flex p-0 m-0">
        <div className="col-4 container-fluid m-auto">
          <img className="home-logo" src={GOutside_transp} /> 
        </div>
        <div className="col-6 m-auto home-container__slider">
          <div className="container">
            <input type="radio" name="slider" id="item-1" checked />
            <input type="radio" name="slider" id="item-2" />
            <input type="radio" name="slider" id="item-3" />

            <div className="cards">
              <label className="card" for="item-1" id="selector-1">
                <img src={Logo_Malaga_Throwdown} />
              </label>
              <label className="card" for="item-2" id="selector-2">
                <img src={Logo_Battle_Cancer} />
              </label>
              <label className="card" for="item-3" id="selector-3">
                <img src={Logo_Costa_Azahar} />
              </label>
            </div>
          </div>
        </div> */}
      </div>

      <div className="row mx-auto home-buttons">
        <div className="col-md-12 align-items-center justify-content-center"></div>
        <div className="row mx-auto">
          <div className="col-md-12 ms-auto align-items-center justify-content-center home-subtitle">
            <h1>¿Quieres estar al día de las competiciones de tu región?</h1>
          </div>
          <div className="col-md-12 d-flex align-items-center justify-content-evenly">
          <Link to="/Signup">
              <button className="home-button2">Conviértete en GOutsider</button>
            </Link>
            <Link to="/Login">
              <button className="home-button2">Inicia sesión</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
