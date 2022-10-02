import React from "react";
import "./signup.css";
import logo from "../../../img/logo-GOutside.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="d-md-flex align-items-center justify-content-evenly">
      <div className="">
        <img src={logo} alt="GOutside" />
      </div>
      <form className="d-flex flex-column col-md-5">
        <h1 className="text-capitalize text-center">Crear cuenta</h1>
        <input placeholder="Email..." className="h-100 form-control mb-1" />
        <input
          placeholder="Contraseña..."
          className="h-100 form-control mb-1"
        />
        <input
          placeholder="Repetir contraseña..."
          className="h-100 form-control mb-1"
        />
        <button className="btn text-uppercase mb-1 shadow signup-btn">
          crear usuario
        </button>
        <div className="d-flex justify-content-around">
          <p>¿Ya tienes cuenta?</p>
          <Link
            to="/login"
            className="text-decoration-none text-capitalize signup-link"
          >
            Inicia sesión
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
