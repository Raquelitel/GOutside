import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Mensaje from "../../component/mensaje/Mensaje.jsx";
import logo from "../../../img/logo-GOutside.png";
import "../../component/mensaje/mensaje.css";

const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [mensaje, setMensaje] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let regex = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );

    if ([email, password1, password2].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 2500);
      return;
    } else if (password1 != password2) {
      setMensaje("Las contraseñas deben ser iguales");

      setTimeout(() => {
        setMensaje("");
      }, 2500);
      return;
    } /* else if (!regex.test(email)) {
      setMensaje("E-mail no válido");

      setTimeout(() => {
        setMensaje("");
      }, 2500);
      return;
    } */
    let signupUser = await actions.signup(email, password1, password2);

    if (signupUser) {
      navigate("/home/user");
    }
  };
  return (
    <div className="d-md-flex align-items-center justify-content-evenly">
      <Link to="/" className="">
        <img src={logo} alt="GOutside" />
      </Link>
      <form className="d-flex flex-column col-md-5" onSubmit={handleSubmit}>
        <h1 className="text-capitalize text-center">Crear cuenta</h1>
        {mensaje && <Mensaje tipo="mensaje-error">{mensaje}</Mensaje>}
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
        <button className="btn text-uppercase mb-1 shadow btn-validacion">
          crear usuario
        </button>
        <div className="d-flex justify-content-around">
          <p>¿Ya tienes cuenta?</p>
          <Link
            to="/login"
            className="text-decoration-none text-capitalize color-link"
          >
            Inicia sesión
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
