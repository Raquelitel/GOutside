import React from "react";
import { Link } from "react-router-dom";
import GOutside_transp from "../../../img/GOutside_transp.png";
import X_transp from "../../../img/X_transp.png";
import Logo_Malaga_Throwdown from "../../../img/Logo_Malaga_Throwdown.jpg";
import Logo_Battle_Cancer from "../../../img/Logo_Battle_Cancer.jpg";
import Logo_Costa_Azahar from "../../../img/Logo_Costa_Azahar.jpg";

export const Home = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-center pt-5 home-welcome">
          <h1>Bienvenid</h1>
          <img className="home-X-icon" src={X_transp} />
          <h1>S</h1>
        </div>
        <div className="fs-2 home-subtitle">
          <h1>
            ¿Organizador de eventos deportivos?{" "}
            <Link to="/api/about-us" className="home-link">
              Nosotros te ayudamos
            </Link>
          </h1>
        </div>
      </div>

      <div className="row d-flex p-0 m-0">
        <div className="col-4 container-fluid m-auto">
          <img className="home-logo" src={GOutside_transp} />
        </div>

        <div className="col-6 mt-5 container-slider-home">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="align-items-center justify-content-center text-center carousel-inner">
              <div className="carousel-item active">
                <img src={Logo_Malaga_Throwdown} className="w-50" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Logo_Battle_Cancer} className="w-50" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Logo_Costa_Azahar} className="w-50" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="row mx-auto home-buttons">
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
