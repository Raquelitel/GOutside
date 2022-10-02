import React from "react";
import logo from "../../../img/logo-GOutside.png";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="d-md-flex align-items-center justify-content-evenly">
      <div className="">
        <img src={logo} alt="GOutside" />
      </div>
      <form className="d-flex flex-column col-md-5">
        <h1 className="text-capitalize text-center">Iniciar sesión</h1>
        <input
          placeholder="Email..."
          className="h-100 form-control mb-1"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Contraseña..."
          className="h-100 form-control mb-1"
          type="password"
          onChange={(e) => setPassword1(e.target.value)}
        />
        <button className="btn text-uppercase mb-1 shadow login-btn">
          login
        </button>
        <div className="d-flex justify-content-around">
          <p>¿Todavía no tienes cuenta?</p>
          <Link
            to="/signup"
            className="text-decoration-none text-capitalize login-link"
          >
            Crear cuenta
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
