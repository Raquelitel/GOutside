import React, { useContext } from "react";
import "./Sidebar.css";
import GOutside_transp from "../../../img/GOutside_transp.png";
import { Link } from "react-router-dom";
import { BsEnvelope } from "react-icons/bs";
import { Context } from "../../store/appContext";

function Sidebar() {
  const { store, actions } = useContext(Context);

  return (
    <aside className="col-auto">
      <div className="sidebar-bg">
        <div className="min-vh-100">
          <ul
            className="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li>
              <Link
                to="/edit-profile"
                className="nav-link mt-5 text-capitalize sidebar-text"
              >
                <i className="fs-4 bi bi-person"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Editar perfil</span>
              </Link>
            </li>

            {store.userRol === "Rol.administration" && (
              <li>
                <Link
                  to="/create-competition"
                  className="nav-link mt-4 text-capitalize sidebar-text"
                >
                  <i className="fs-6 bi-pencil-square"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    Crear competición
                  </span>{" "}
                </Link>
              </li>
            )}
            {store.userRol != "Rol.administration" && (
            <li>
              <Link
                to="/my-competitions"
                className="nav-link text-capitalize sidebar-text"
              >
                <i className="fs-6 bi-stopwatch"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">
                  Mis competiciones
                </span>{" "}
              </Link>
            </li>
            )}

            <li>
              <Link
                to="/about-us"
                className="nav-link text-capitalize mt-4 border-top border-bottom border-secondary sidebar-text"
              >
                <BsEnvelope />
                <span className="ms-2 d-none d-sm-inline">
                  Sobre Nosotros
                </span>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
