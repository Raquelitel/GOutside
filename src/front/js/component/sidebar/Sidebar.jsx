import React from "react";
import "./Sidebar.css";
import GOutside_transp from "../../../img/GOutside_transp.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="col-12">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar-bg">
          <div className="min-vh-100">
            <ul
              className="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li>
                <Link to="" className="nav-link sidebar-text">
                  <i class="fs-4 bi bi-person"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Editar perfil</span>
                </Link>
              </li>

              <li>
                <Link to="" className="nav-link sidebar-text">
                  <i className="fs-6 bi-pencil-square"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    Crear competición
                  </span>{" "}
                </Link>
              </li>

              <li>
                <Link to="" className="nav-link sidebar-text">
                  <i className="fs-6 bi-stopwatch"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    Mis competiciones
                  </span>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
