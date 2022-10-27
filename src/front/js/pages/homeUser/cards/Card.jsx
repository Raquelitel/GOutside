import "./Card.css";
import React from "react";
import logo from "../../../../img/logo-GOutside.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card cards">
      <div className="cards-details">
        <img src={logo} alt="/" />
      </div>
      <Link to="/competitions">
      <button className="cards-button">Más info aquí</button>
      </Link>
    </div>
  );
};

export default Card;
