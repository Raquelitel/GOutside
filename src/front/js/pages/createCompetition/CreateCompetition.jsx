import React, { useState } from "react";
import { useContext } from "react";
import Select from "react-select";
import MapView from "../../component/MapView/MapView.jsx";
import PosterCompetition from "../../component/posterCompetition/PosterCompetition.jsx";
import { Context } from "../../store/appContext.js";

const categories = [
  { label: "RX Femenino", value: "rx_femenino" },
  { label: "RX Masculino", value: "rx_masculino" },
  { label: "Scalled Femenino", value: "scalled_femenino" },
  { label: "Scalled Masculino", value: "scalled_masculino" },
  { label: "Elite Femenino", value: "elite_femenino" },
  { label: "Elite Masculino", value: "elite_masculino" },
  { label: "Equipos", value: "equipos" },
];

const stages = [
  { label: "Inscripción abierta", value: "inscripción_abierta" },
  { label: "Inscripción cerrada", value: "inscripción_cerrada" },
  { label: "Competición finalizada", value: "competición_finalizada" },
];

function CreateCompetition() {
  //CAMBIAR ESTO LO PRIMERO

  // if (store.tokenLS === user) {
  //   return <Navigate to="/" replace />;
  // }
  const {store, actions} = useContext(Context)

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState([]);
  const [requirements, setRequirements] = useState("");
  const [description, setDescription] = useState("");
  const [stage, setStage] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  if (name === "" || date === "" || location === "" || category === [] || requirements === "" || description === "" || stage === "" ) {
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

  const create_competition = () => {
    const url = process.env.BACKEND_URL + "/api/create-competition";

    const body = {
      competition_name: name,
      qualifier_date: date,
      location: location,
      category: category.map((cat) => cat.value),
      requirements: requirements,
      description: description,
      stage: stage,
      poster_image_url: store.posterImagenUrl
    };
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(body),
    };
    fetch(url, options);

    // actions.deleteUrlImg()


  };
  // const [inputs, setInputs] = useState("");

  // function clearForm() {
  //   const inputsArray = Object.entries(inputs);

  //   const clearInputsArray = inputsArray.map(([key]) => [key, ""]);

  //   const inputsJson = Object.fromEntries(clearInputsArray);

  //   setInputs(inputsJson);
  // }

  return (
    <div className="container-lg-fluid text-center align-items-center justify-content-center m-auto p-5">
      <div className="row d-flex create-title">
        <h1 className="text-center">Crea tu competición</h1>
      </div>
      <PosterCompetition />
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

        <div className="col-4 align-items-center justify-content-center ">
          <Select
            name="stage"
            placeholder="Estado de la competición"
            options={stages}
            className="basic-single"
            classNamePrefix="select"
            onChange={(e) => {
              setStage(e.value);
            }}
          />
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-4 align-items-center justify-content-center">
          <MapView />
        </div>

        <div className="col-6 align-items-center justify-content-center mb-5 ">
          <div className="create-category">
            <Select
              isMulti
              name="category"
              placeholder="Categoría"
              options={categories}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e) => {
                setCategory(e);
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

      <div className="row create-button">
        <div className="d-flex justify-content-around text-center align-items-center">
          <button
            className="btn btn-success"
            onClick={() => create_competition()}
          >
            Crear competición
          </button>
          <br />
          <button className="btn btn-danger" onClick={() => clearForm()}>
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateCompetition;
