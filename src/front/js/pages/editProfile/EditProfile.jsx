import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../store/appContext";
import "./editProfile.css";
import logo from "../../../img/logo-GOutside.png";

const EditProfile = () => {
  const { store, actions } = useContext(Context);
  const [files, setFiles] = useState(null);

  const ref = useRef(null);

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
              <button className="btn btn-primary">cambiar foto</button>
            </form>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="text-uppercase">Mi perfil</h5>
              <form className="container row col-md-8 text-start">
                <div className="my-2">
                  <label className="col-12 col-md-10 col-lg-2 mx-2">
                    Nombre*
                  </label>
                  <input type="text" ref={ref} defaultValue={store.userName} />
                </div>
                <div>
                  <label className="col-12 col-md-2 mx-2">Apellidos</label>
                  <input type="text" ref={ref} defaultValue={store.userName} />
                </div>
                <div className="my-2">
                  <label className="col-12 col-md-2 mx-2">E-mail*</label>
                  <input
                    type="email"
                    ref={ref}
                    defaultValue={store.userEmail}
                    disabled
                  />
                </div>
                <div className="my-2">
                  <label className="col-12 col-md-2 mx-2">Dirección</label>
                  <input
                    type="text"
                    ref={ref}
                    defaultValue={store.userAdress}
                  />
                </div>
                <div className="my-2">
                  <label className="col-12 col-md-2 mx-2">Teléfono</label>
                  <input type="tel" ref={ref} defaultValue={store.userPhone} />
                </div>
                <div className="my-2">
                  <label className="col-2 mx-2">Sexo</label>
                  <select placeholder="seleccionar">
                    <option>Seleccionar</option>
                    <option>Mujer</option>
                    <option>Hombre</option>
                  </select>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn editprofile-btn-borrar mx-2">
                    Borrar
                  </button>
                  <button className="btn btn-primary me-5">
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
