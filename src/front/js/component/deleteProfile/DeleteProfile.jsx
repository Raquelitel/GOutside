import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "./deleteprofile.css";

const DeleteProfile = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-warning profile-btn-delete-bg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Eliminar cuenta
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              ¿Seguro que desea eliminar su cuenta? Una vez eliminada, se
              perderán todos sus datos
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProfile;
