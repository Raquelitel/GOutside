import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Mensaje from "../../component/mensaje/Mensaje.jsx";
import logo from "../../../img/logo-GOutside.png";
import "./signup.css";

const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [mensaje, setMensaje] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password1, password2].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 2500);
    } else if (password1 != password2) {
      setMensaje("Las contraseñas deben ser iguales");

      setTimeout(() => {
        setMensaje("");
      }, 2500);
    }

    let signupUser = await actions.signupCompetitor(
      email,
      password1,
      password2
    );
    if (signupUser) {
      navigate("/private/competitor");
    }
    setEmail("");
    setPassword1("");
    setPassword2("");
  };
  return (
    <div className="d-md-flex align-items-center justify-content-evenly">
      <div className="">
        <img src={logo} alt="GOutside" />
      </div>
      <form className="d-flex flex-column col-md-5" onSubmit={handleSubmit}>
        <h1 className="text-capitalize text-center">Crear cuenta</h1>
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
          onChange={(e) => setPassword1(e.target.value)}
        />
        <input
          placeholder="Repetir contraseña..."
          className="h-100 form-control mb-1"
          type="password"
          onChange={(e) => setPassword2(e.target.value)}
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