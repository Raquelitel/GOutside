import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import MapView from "../../component/MapView/MapView.jsx";
import Mensaje from "../../component/mensaje/Mensaje.jsx";
import logo from "../../../img/logo-GOutside.png";
import "./InfoCompetition.css";

const InfoCompetition = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [datas, setData] = useState({});

  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");
  const [navegar, setNavegar] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getCompetitionInfo();
  }, [id]);

  const getCompetitionInfo = () => {
    const url = process.env.BACKEND_URL + `/api/competition/${id}`;

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + actions.getTokenLS(),
      },
      method: "GET",
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setData(data.competition);
      });
  };

  const addCompetitorToCompetition = (competition_id) => {
    const url = process.env.BACKEND_URL + "/api/my-competitions";

    const body = {
      competition_id,
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + actions.getTokenLS(),
      },
      method: "POST",
      body: JSON.stringify(body),
    };
    const resp = fetch(url, options).then((response) => response.json());
    console.log(resp);
    if (resp.status === 200) {
      setMensaje(
        "¡FELICIDADES! Tu inscripción se ha realizado con éxito. Por favor, acude a tu correo electrónico para finalizar el proceso"
      );
      setTipoMensaje("mensaje-correcto");
      setTimeout(() => {
        setMensaje("");
        setTipoMensaje("");
      }, 7000);
      return;
    } else {
      setMensaje(
        "se ha producido un error en la inscripción. Contacte con el administrador"
      );
      setTipoMensaje("mensaje-error");

      setTimeout(() => {
        setMensaje("");
        setTipoMensaje("");
      }, 3000);
      return;
    }
  };

  const navigateProfile = () => {
    navigate("/edit-profile");
  };

  const handleInscription = () => {
    if (
      store.userName === null ||
      store.userLastName === null ||
      store.userAdress === null ||
      store.userGender === null ||
      store.userPhone === null
    ) {
      setMensaje(
        "Para poder inscribirse debe completar todos los datos de su perfil. Una vez completados, vuelva a la inscripción."
      );
      setTipoMensaje("mensaje-error");
      setNavegar(true);
      setTimeout(() => {
        setMensaje("");
        setTipoMensaje("");
        setNavegar(false);
      }, 3000);
      return;
    } else {
      addCompetitorToCompetition();
    }
  };

  return (
    <>
      {mensaje && <Mensaje tipo={tipoMensaje}>{mensaje}</Mensaje>}

      {navegar && (
        <button className="btn btn-sucessfull" onClick={navigateProfile}>
          Editar Perfil
        </button>
      )}

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={!datas.poster_image_url ? logo : datas.poster_image_url}
              className="infocompetition-img-card"
              alt="cartel competicion"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fw-bold">{datas.competition_name}</h5>
              <p className="infocompetition-text-p ">{datas.qualifier_date}</p>
              <p className="infocompetition-text-p ">{datas.category}</p>
              <p className="infocompetition-text-p ">{datas.stage}</p>
              <p className="infocompetition-text-p ">{datas.location}</p>
              <p className="infocompetition-text-p ">{datas.requirements}</p>
              <p className="infocompetition-text-p ">{datas.description}</p>
              <div className="">
                <Link to={-1}>
                  <button className="btn col-12 col-md-2 m-1 btn-sucessfull">
                    Volver
                  </button>
                </Link>
                <button
                  className="btn col-12 col-md-3 m-1 btn-validacion"
                  onClick={handleInscription}
                >
                  Participar
                </button>
                {store.userRol === "Rol.administration" && (
                  <Link to="/create-competition">
                    <button className="btn col-12 col-md-4 m-1 btn-cancelar">
                      Editar Competición
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCompetition;
