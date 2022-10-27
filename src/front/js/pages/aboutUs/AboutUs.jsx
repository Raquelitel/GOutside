import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/logo-GOutside.png";

function AboutUs() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [contactRequest, setContactRequest] = useState("");

  const contactUs = () => {
    const url = process.env.BACKEND_URL + "/api/about-us";
    const body = {
      name: name,
      surname: surname,
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
      <h1 className="text-center text-capitalize mt-5 aboutUs-title-color">
        ¿Quiénes somos?
      </h1>
      <div className="d-lg-flex align-items-center justify-content-evenly">
        <Link to="/">
          <img src={logo} alt="GOutside" />
        </Link>
        <p className="text-sm-start lh-lg aboutUs-title-color">
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>

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
          placeholder="Apellidos"
          type="text"
          onChange={(e) => {
            setSurname(e.target.value);
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
        <textarea
          className="form-control"
          aria-label="With textarea"
          placeholder="Cuentanos tú consulta, queremos escucharte"
          onChange={(e) => {
            setContactRequest(e.target.value);
          }}
        ></textarea>
        <div className="d-flex justify-content-end gap-2 mb-3">
          <button className="btn btn-validacion" onClick={() => contactUs()}>
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
