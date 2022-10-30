import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import Mensaje from "../mensaje/Mensaje.jsx";

const MesageGoProfile = () => {
  const { store, actions } = useContext(Context);

  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");
  const [navegar, setNavegar] = useState(false);

  const navigate = useNavigate();

  const navigateProfile = () => {
    navigate("/edit-profile");
  };
  if (
    [
      store.userName ||
        store.userLastName ||
        store.userAdress ||
        store.userGender ||
        store.userPhone,
    ].includes("")
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
    }, 7000);
  } else {
    setMensaje(
      "¡FELICIDADES! Tu inscripción se ha realizado con éxito. Por favor, acude a tu correo electrónico para finalizar el proceso"
    );
    setTipoMensaje("mensaje-correcto");
    setTimeout(() => {
      setMensaje("");
      setTipoMensaje("");
    }, 7000);
  }

  return;
  <>
    {mensaje && <Mensaje tipo={tipoMensaje}>{mensaje}</Mensaje>}

    {navegar && (
      <button className="btn btn-validacion" onClick={navigateProfile}>
        Editar Perfil
      </button>
    )}
  </>;
};

export default MesageGoProfile;
