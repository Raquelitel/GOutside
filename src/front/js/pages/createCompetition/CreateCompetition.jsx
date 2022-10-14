import React, { useState } from "react";
import Select from "react-select";

const categories = [
  { label: "RX Femenino", value: "rx_femenino" },
  { label: "RX Masculino", value: "rx_masculino" },
  { label: "Scalled Femenino", value: "scalled_femenino" },
  { label: "Scalled Masculino", value: "scalled_masculino" },
  { label: "Elite Femenino", value: "elite_femenino" },
  { label: "Elite Masculino", value: "elite_masculino" },
  { label: "Equipos", value: "equipos" },
];

function CreateCompetition() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [requirements, setRequirements] = useState("");
  const [description, setDescription] = useState("");
  const [stage, setStage] = useState("");

  const create_competition = () => {
    const url = process.env.BACKEND_URL + "/api/create-competition";
    const body = {
      competition_name: name,
      qualifier_date: date,
      location: location,
      category: category,
      requirements: requirements,
      description: description,
      stage: stage,
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
      <h1 className="text-center">Crea tu competición</h1>
      <div className="card p-5">
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-4 align-items-center justify-content-center">
            <input
              placeholder="Nombre de la competición"
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
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-4 align-items-center justify-content-center ">
            <input
              placeholder="Localización"
              className="form-control"
              type="text"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>

          <div className="col-4 align-items-center justify-content-center mb-5 ">
            <div className="create-category">
              <Select
                isMulti
                name="category"
                placeholder="Categoría"
                options={categories}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  setCategory(e.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="input-group align-items-center justify-content-center mb-5">
            <textarea
              className="form-control create-requirements"
              placeholder="Requisitos"
              aria-label="With textarea"
              onChange={(e) => {
                setRequirements(e.target.value);
              }}
            ></textarea>
          </div>
        </div>

        <div className="row justify-content-center ">
          <div className="input-group align-items-center justify-content-center mb-5">
            <textarea
              className="form-control create-description"
              aria-label="With textarea"
              placeholder="Descripción de la competición"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="position-absolute bottom-0 end-0 d-flex mb-3 me-5 create-button">
          <button
            className="btn btn-success"
            onClick={() => create_competition()}
          >
            Crear competición
          </button>
          <br />
          <button className="btn btn-danger">Borrar</button>
        </div>
      </div>
    </div>
  );
}

export default CreateCompetition;
