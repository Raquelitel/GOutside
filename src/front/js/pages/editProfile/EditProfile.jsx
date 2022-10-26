import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import Mensaje from "../../component/mensaje/Mensaje.jsx";
import DeleteProfile from "../../component/deleteProfile/DeleteProfile.jsx";
import logo from "../../../img/logo-GOutside.png";
import "./editProfile.css";
import "../../component/mensaje/mensaje.css";

const EditProfile = () => {
  const { store, actions } = useContext(Context);
  const [files, setFiles] = useState(null);

  const [mensaje, setMensaje] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const uploadImage = async (e) => {
    e.preventDefault();

    let body = new FormData();
    body.append("profile_image", files[0]);

    const options = {
      method: "POST",
      body,
      headers: { Authorization: "Bearer " + actions.getTokenLS() },
    };
    try {
      const resp = await fetch(
        process.env.BACKEND_URL + "/api/upload",
        options
      );
      const data = await resp.json();
      console.log(data);
      actions.getUser();
    } catch (error) {
      console.log("Error loading message from backend", error);
    }
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();

    actions.changeDataUser(name, lastName, adress, gender, phone);
    setMensaje("Datos modificados correctamente");

    setTimeout(() => {
      setMensaje("");
      navigate("/home/user");
    }, 2500);
  };

  return (
    <>
      <div className="card mt-5 editprofile-bg">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                store.userProfileImagen === null
                  ? logo
                  : store.userProfileImagen
              }
              className="mt-4 img-fluid editprofile-photo"
              alt="profile photo"
            />
            <form className="m-2" onSubmit={uploadImage}>
              <input type="file" onChange={(e) => setFiles(e.target.files)} />
              <button className="btn editProfile-btn-primary">
                cambiar foto
              </button>
            </form>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {mensaje && <Mensaje tipo="mensaje-correcto">{mensaje}</Mensaje>}
              <h5 className="text-uppercase">Mi perfil</h5>
              <form
                className="container row col-md-12 text-start"
                onSubmit={handleSubmitChange}
              >
                <div className="my-2">
                  <label className="col-12 col-md-10 col-lg-2 mx-2">
                    Nombre*
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    defaultValue={store.userName}
                  />
                </div>
                <div>
                  <label className="col-12 col-md-10 col-lg-2 mx-2">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    defaultValue={store.userLastName}
                  />
                </div>
                <div className="my-2">
                  <label className="col-12 col-md-10 col-lg-2 mx-2">
                    E-mail*
                  </label>
                  <input type="email" defaultValue={store.userEmail} disabled />
                </div>
                <div className="my-2">
                  <label className="col-12 col-md-10 col-lg-2 mx-2">
                    Dirección
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setAdress(e.target.value);
                    }}
                    defaultValue={store.userAdress}
                  />
                </div>
                <div className="my-2">
                  <label className="col-12 col-md-10 col-lg-2 mx-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    defaultValue={store.userPhone}
                  />
                </div>
                <div className="my-2">
                  <label className="col-2 mx-2">Sexo</label>
                  <select
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    placeholder="seleccionar"
                  >
                    <option>Seleccionar</option>
                    <option value={"femenino"}>Mujer</option>
                    <option value={"masculino"}>Hombre</option>
                  </select>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn me-5 editProfile-btn-primary"
                    onClick={handleSubmitChange}
                  >
                    Guardar Cambios
                  </button>

                  <DeleteProfile />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row editprofile-bg"></div>
    </>
  );
};

export default EditProfile;
