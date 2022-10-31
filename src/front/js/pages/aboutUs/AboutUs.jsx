import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/logo-GOutside.png";
import Mensaje from "../../component/mensaje/Mensaje.jsx";

function AboutUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactRequest, setContactRequest] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const sendContact = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || contactRequest === "") {
      setMensaje("Todos los campos son obligatorios");
      setTipoMensaje("mensaje-error");
      setTimeout(() => {
        setMensaje("");
        setTipoMensaje("");
      }, 2500);
    } else {
      setMensaje(
        "Muchas gracias por contactar con el equipo de GOutside. En breve, un agente se pondrá en contacto con usted"
      );
      setTipoMensaje("mensaje-correcto");
      setTimeout(() => {
        setMensaje("");
        setTipoMensaje("");
      }, 5000);
      contactUs();
    }
  };

  const contactUs = () => {
    const url = process.env.BACKEND_URL + "/api/about-us";
    const body = {
      name: name,
      email: email,
      phone: phone,
      contact_request: contactRequest,
    };
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(body),
    };
    fetch(url, options);
  };

  return (
    <div className="container">
      <h1 className="text-center text-capitalize mt-3 aboutUs-title-color">
        ¿Quiénes somos?
      </h1>
      <div className="d-lg-flex align-items-center justify-content-evenly">
        <Link to="/">
          <img src={logo} className="login-logo-size" alt="GOutside" />
        </Link>
        <div className="d-lg-flex-column align-items-center justify-content-evenly ms-5">
          <p className="text-sm-start lh-lg aboutUs-title-color">
            {" "}
            Hemos venido a revolucionar las competiciones de entrenamiento
            funcional.
          </p>
          <p className="text-sm-start lh-lg aboutUs-title-color">
            {" "}
            Hasta ahora las pruebas deportivas dependían del boca a boca en los
            propios box, desde ahora podrás promocionar tus eventos de nuestra
            mano accediendo de forma inmediata a un mercado de más de 100.000
            usuarios.
          </p>
          <p className="text-sm-start lh-lg aboutUs-title-color">
            {" "}
            Unete a nuestra comunidad, crezcamos juntos.
          </p>
        </div>
      </div>

      {mensaje && <Mensaje tipo={tipoMensaje}>{mensaje}</Mensaje>}

      <h2 className="text-center text-capitalize aboutUs-title-color">
        Contacta con nosotros
      </h2>
      <form className="d-flex flex-column gap-4">
        <input
          placeholder="Nombre"
          className="form-control"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="form-control"
          placeholder="Correo electrónico"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="Telefono"
          className="form-control"
          type="tel"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          className="form-control"
          aria-label="With textarea"
          placeholder="Queremos escucharte, hablemos y compartamos ideas"
          onChange={(e) => {
            setContactRequest(e.target.value);
          }}
        ></input>
        <div className="d-flex justify-content-end gap-2 mb-3">
          <button
            className="btn btn-validacion"
            onClick={(e) => sendContact(e)}
          >
            Quiero más información
          </button>
          <Link to={-1}>
            <button className="btn btn-cancelar">Volver atrás</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AboutUs;
