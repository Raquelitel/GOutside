import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import GOutside_transp from "../../img/GOutside_transp.png";
import X_transp from "../../img/X_transp.png";
import Logo_Malaga_Throwdown from "../../img/Logo_Malaga_Throwdown.jpg";
import Logo_Battle_Cancer from "../../img/Logo_Battle_Cancer.jpg";
import Logo_Costa_Azahar from "../../img/Logo_Costa_Azahar.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-12 welcome d-flex align-items-center justify-content-center pt-5">
          <h1>Bienvenid</h1>
          <img className="X" src={X_transp} />
          <h1>S</h1>
        </div>
        <div className="subtitle fs-2">
          <h1>
            ¿Organizador de eventos deportivos?{" "}
            <a className="link">Nosotros te ayudamos</a>
          </h1>
        </div>
      </div>

      <div className="row d-flex p-0 m-0">
        <div className="col-6 logo-container-fluid">
          <img className="logo" src={GOutside_transp} />
        </div>

        <div className="col-6 container__slider ms-3">
          <div className="container">
            <input type="radio" name="slider" id="item-1" checked></input>
            <input type="radio" name="slider" id="item-2"></input>
            <input type="radio" name="slider" id="item-3"></input>

            <div className="cards">
              <label className="card" for="item-1" id="selector-1">
                <img src={Logo_Malaga_Throwdown}></img>
              </label>
              <label className="card" for="item-2" id="selector-2">
                <img src={Logo_Battle_Cancer}></img>
              </label>
              <label className="card" for="item-3" id="selector-3">
                <img src={Logo_Costa_Azahar}></img>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="row buttons mx-auto">
        <div className="col-md-12 align-items-center justify-content-center"></div>
        <div className="row mx-auto">
          <div className="subtitle col-md-12  ms-auto align-items-center justify-content-center">
            <h1>¿Quieres estar al día de las competiciones de tu región?</h1>
          </div>
          <div className="col-md-12 d-flex align-items-center justify-content-evenly">
            <button className="button2">Conviértete en GOutsider</button>
            <button className="button2">Inicia sesión</button>
          </div>
        </div>
      </div>

    </div>
  );
};
