import React from "react";
import { Link } from "react-router-dom";
import Card from "./cards/Card.jsx";
import "./HomeUser.css";

const HomeUser = () => {
  return (
    <div className="align-items-center justify-content-md-center text-center mt-5 home-user-container">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card align-items-center justify-content-md-center text-center library">
              <h2 className="mt-3">Si te atreves con este ejercicio...</h2>
              <p>Visita nuestra <a href="/Video-library">Biblioteca</a></p>
                <div className="ratio ratio-4x3 home-user-video-container">
                  <iframe className="p-5" src="https://www.youtube.com/embed/1ZXobu7JvvE" title="YouTube video player" frameborder="0" allowfullscreen/>
                </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card align-items-center justify-content-md-center text-center">
              <h2>MIS COMPETICIONES</h2>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card align-items-center justify-content-md-center text-center">
              <p>¿Todavía no te has apuntado a ninguna competición?</p>
              <h2>Descubre tu próximo reto... ¡APÚNTATE!</h2>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card align-items-center justify-content-md-center text-center">
              <h2>ECHA UN VISTAZO A LAS PRÓXIMAS COMPETICIONES</h2>
              <div className="mb-5"><Card /></div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeUser;
