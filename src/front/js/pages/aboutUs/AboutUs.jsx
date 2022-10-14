import React from "react";

function AboutUs() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [contact_request, setContact_request] = useState("");

  const contact_us = () => {
    const url =
      "https://3001-raquelitel-goutside-tu14qsfqas6.ws-eu70.gitpod.io/api/about-us";
    const body = {
      name: name,
      surname: surname,
      phone: phone,
      contact_request: contact_request,
    };
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(body),
    };
    fetch(url, options);
  };

  return (
    <div className="container text-center align-items-center justify-content-center">
      <h1 className="text-center">Contacta con nosotros</h1>
      <div className="card p-5">
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-4 align-items-center justify-content-center">
            <input
              placeholder="Nombre"
              className="form-control"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="col-4 align-items-center justify-content-center ">
            <input
              className="form-control"
              type="text"
              onChange={(e) => {
                setSurname(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-4 align-items-center justify-content-center ">
            <input
              placeholder="Telefono"
              className="form-control"
              type="tel"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row justify-content-center ">
          <div className="input-group align-items-center justify-content-center mb-5">
            <textarea
              className="form-control create-description"
              aria-label="With textarea"
              placeholder="Cuentanos tú consulta, queremos escucharte"
              onChange={(e) => {
                setContact_request(e.target.value);
              }}
            ></textarea>
          </div>
        </div>

        <div className="position-absolute bottom-0 end-0 d-flex mb-3 me-5 create-button">
          <button className="btn btn-success" onClick={() => contact_us()}>
            Crear competición
          </button>
          <br />
          <button className="btn btn-danger">Borrar</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
