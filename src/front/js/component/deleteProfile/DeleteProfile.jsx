import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import Mensaje from "../mensaje/Mensaje.jsx";
import "./deleteprofile.css";

const DeleteProfile = () => {
  const { store, actions } = useContext(Context);
  const [mensaje, setMensaje] = useState("");
  let navigate = useNavigate();

  const goNavigate = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning profile-btn-delete-bg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Eliminar cuenta
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-capitalize"
                id="exampleModalLabel"
              >
                Eliminar cuenta
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {mensaje ? (
                <Mensaje tipo="mensaje-correcto">{children}</Mensaje>
              ) : (
                "¿Seguro que quiere eliminar la cuenta?"
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    actions.deleteUser(e);
                    localStorage.clear();
                  }}
                >
                  Eliminar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProfile;
