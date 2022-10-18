import React from "react";
import "./Sidebar.css";
import GOutside_transp from "../../../img/GOutside_transp.png";

function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center " data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={GOutside_transp} alt="hugenerd" class="rounded-circle" />
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="#">Editar perfil</a></li>
                        <li><a class="dropdown-item" href="#">Sobre nosotros</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                    </ul>
                </div>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0">
                <i class="fs-4 bi bi-person"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Mi perfil</span>
                </a>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-trophy"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Competiciones</span>{" "}
                </a>
                <ul
                  className="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                    <i className="fs-6 bi-pencil-square"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Crear competición</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      <i className="fs-6 bi-stopwatch"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Mis competiciones</span>{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
