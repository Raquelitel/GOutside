import React, { useContext, useEffect, useState } from "react";
import MapView from "../../component/MapView/MapView.jsx";
import { Link, useParams, useNavigate } from "react-router-dom";
import Mensaje from "../../component/mensaje/Mensaje.jsx";
import logo from "../../../img/logo-GOutside.png";
import { Context } from "../../store/appContext.js";

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
    // <div className="container-lg-fluid text-center align-items-center justify-content-center m-auto p-5">
    //   <div className="row d-flex create-title">
    //     <h1 className="text-center">Info detallada de la competición</h1>
    //   </div>
    //   <img
    //     src={store.posterImagenUrl === null ? logo : store.posterImagenUrl}
    //     className="navbar-photo-profile"
    //     alt="profile photo"
    //   />
    //   <div className="row justify-content-center mt-5 mb-5">
    //     <div className="col-4 align-items-center justify-content-center">
    //       <input type="text" value={datas.competition_name} />
    //     </div>

    //     <div className="col-4 align-items-center justify-content-center ">
    //       <input type="text" value={datas.qualifier_date} />
    //     </div>

    //     <div className="col-4 align-items-center justify-content-center ">
    //       <input type="text" value={datas.category} />
    //     </div>
    //   </div>

    //   <div className="row d-flex justify-content-center">
    //     <div className="col-4 align-items-center justify-content-center">
    //       <input type="text" value={datas.location} />
    //     </div>

    //     <div className="col-6 align-items-center justify-content-center mb-5 ">
    //       <div className="create-category">
    //         <input type="text" value={datas.requirements} />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="row d-flex justify-content-center">
    //     <div className="input-group align-items-center justify-content-center mb-5">
    //       <input type="text" value={datas.description} />
    //     </div>
    //   </div>

    //   <div className="row justify-content-center ">
    //     <div className="input-group align-items-center justify-content-center mb-5">
    //       <input type="text" value={datas.stage} />
    //     </div>
    //   </div>

    //   <div className="row create-button">
    //     <div className="d-flex justify-content-around text-center align-items-center">
    //       <button
    //         className="btn btn-success"
    //         onClick={() => getCompetitionInfo()}
    //       >
    //         Este boton tiene que llevar la validación de que es ADMIN y además
    //         ha creado esta competición para poder editar.
    //       </button>
    //       <br />
    //     </div>
    //   </div>
    // </div>
    <>
      {mensaje && <Mensaje tipo={tipoMensaje}>{mensaje}</Mensaje>}

      {navegar && (
        <button className="btn btn-sucessfull" onClick={navigateProfile}>
          Editar Perfil
        </button>
      )}
      <div className="card m-2">
        <img
          src={!datas.poster_image_url ? logo : datas.poster_image_url}
          className="competition-img-card"
          alt="cartel competicion"
        />
        <div className="card-body">
          <h4 className="card-title">{datas.competition_name}</h4>
          <h5 className="card-text">{datas.qualifier_date}</h5>
          <h5 className="card-text">{datas.category}</h5>
          <h5 className="card-text">{datas.stage}</h5>
          <h5 className="card-text">{datas.location}</h5>
          <h5 className="card-text">{datas.requirements}</h5>
          <h5 className="card-text">{datas.description}</h5>
          <div className="d-flex justify-content-center gap-3">
            <Link to={-1}>
              <button className="btn btn-sucessfull">Volver</button>
            </Link>
            <button className="btn btn-validacion" onClick={handleInscription}>
              Participar
            </button>
          </div>
          <div>
            {store.userRol === "Rol.administration" && (
              <Link to="/create-competition">
                <button className="btn btn-sucessfull">
                  Editar Competición
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCompetition;
