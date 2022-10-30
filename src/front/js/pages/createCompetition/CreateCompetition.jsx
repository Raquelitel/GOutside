import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Navigate } from "react-router-dom";
import Select from "react-select";
import MapView from "../../component/MapView/MapView.jsx";
import PosterCompetition from "../../component/posterCompetition/PosterCompetition.jsx";
import Mensaje from "../../component/mensaje/Mensaje.jsx";
import "./CreateCompetition.css"; 

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
  const { store, actions } = useContext(Context);

  // if (store.userRol != "Rol.administration") {
  //   return <Navigate to="/" replace />;
  // }

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState([]);
  const [requirements, setRequirements] = useState("");
  const [description, setDescription] = useState("");
  const [stage, setStage] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const validation = () => {
    if (
      name === "" ||
      date === "" ||
      category === [] ||
      requirements === "" ||
      description === "" ||
      stage === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const create_competition = () => {
    const url = process.env.BACKEND_URL + "/api/create-competition";

    if (validation()) {
      const body = {
        competition_name: name,
        qualifier_date: date,
        location: location,
        category: category.map((cat) => cat.value),
        requirements: requirements,
        description: description,
        stage: stage,
        poster_image_url: store.posterImagenUrl,
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.tokenLS,
        },
        method: "POST",
        body: JSON.stringify(body),
      };
      fetch(url, options).then(() => {
        setMensaje("Competición creada");
        setTipoMensaje("mensaje-correcto");
        setTimeout(() => {
          setMensaje("");
          setTipoMensaje("");
        }, 5000);
      });
    } else {
      setMensaje("Todos los campos son obligatorios");
      setTipoMensaje("mensaje-error");
      setTimeout(() => {
        setMensaje("");
        setTipoMensaje("");
      }, 2500);
    }

    // actions.deleteUrlImg()
  };

  return (
    <div className="container-lg-fluid">
      <div className="card text-center align-items-center justify-content-center m-3 create-comp-cont">
        <div className="row create-title">
          <h2 className="text-center m-3">Crea tu competición</h2>
        </div>
        <PosterCompetition />
        <div className="row container-fluid justify-content-center mt-4 mb-4">
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

        <div className="row container-fluid d-flex justify-content-between ">
          <div className="col-4 align-items-center justify-content-center">
            <MapView />
          </div>

          <div className="col-6 align-items-center justify-content-center mt-5">
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

        <div className="row container-fluid align-items-center d-flex justify-content-center mt-4">
          <div className="input-group">
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

        <div className="row container-fluid align-items-center d-flex justify-content-center mt-4 ">
          <div className="input-group">
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
        {mensaje && <Mensaje tipo={tipoMensaje}>{mensaje}</Mensaje>}
        <div className="row container-fluid align-items-center d-flex justify-content-center mt-4 mb-4 create-button">
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
    </div>
  );
}

export default CreateCompetition;
