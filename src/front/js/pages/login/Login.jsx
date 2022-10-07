import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Mensaje from "../../component/mensaje/Mensaje.jsx";
import logo from "../../../img/logo-GOutside.png";
import "./login.css";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 2500);
    }

    let loginUser = await actions.login(email, password);
    if (loginUser) {
      if (store.userRol == "Rol.administration") {
        navigate("/private/admin");
      } else if (store.userRol == "Rol.competitor") {
        navigate("/private/competitor");
      } else {
        alert("datos inválidos");
      }
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-md-flex align-items-center justify-content-evenly">
      <div>
        <img src={logo} alt="GOutside" />
      </div>
      <form className="d-flex flex-column col-md-5" onSubmit={handleSubmit}>
        <h1 className="text-capitalize text-center">Iniciar sesión</h1>
        {mensaje && <Mensaje>{mensaje}</Mensaje>}
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
          onChange={(e) => setPassword(e.target.value)}
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
