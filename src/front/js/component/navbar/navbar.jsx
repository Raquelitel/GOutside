import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import logo from "../../../img/logo-GOutside.png";
import "./navbar.css";
import {
  BsHouseFill,
  BsFillCollectionPlayFill,
  BsFillTrophyFill,
  BsList,
} from "react-icons/bs";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    actions.deleteTokenLS();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-color p-0">
      <div className="container-fluid">
        <div className="navbar-brand mt-2 mt-lg-0">
          <img src={logo} alt="GOutside Logo" style={{ width: "4rem" }} />
        </div>
        <button
          type="button"
          className="navbar-toggler btn-collapse"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon">
            <BsList />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="inputbox">
            <input
              placeholder="Buscar..."
              type="text"
              className="navbar-input"
              required=""
            />
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/home/user">
              <li className="nav-item">
                <button className="btn btn-menu mx-2">
                  <span className="btn-icon" style={{ fontSize: "1rem" }}>
                    <BsHouseFill />
                  </span>
                  <span className="btn-text" style={{ fontSize: "1rem" }}>
                    HOME
                  </span>
                </button>
              </li>
            </Link>
            <Link to="/videoLibrary">
              <li className="nav-item">
                <button className="btn btn-menu mx-2">
                  <span className="btn-icon" style={{ fontSize: "1rem" }}>
                    <BsFillCollectionPlayFill />
                  </span>
                  <span className="btn-text" style={{ fontSize: "1rem" }}>
                    BIBLIOTECA
                  </span>
                </button>
              </li>
            </Link>
            <Link to="/all-commpetition">
              <li className="nav-item">
                <button className="btn btn-menu mx-2">
                  <span className="btn-icon" style={{ fontSize: "1rem" }}>
                    <BsFillTrophyFill />
                  </span>
                  <span className="btn-text" style={{ fontSize: "1rem" }}>
                    COMPETICIONES
                  </span>
                </button>
              </li>
            </Link>
          </ul>
        </div>
        <div className="btn-group">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="navbar-photo-profile"
              alt="profile photo"
            />
          </button>
          <ul className="dropdown-menu navbar-color navbar-menu-size">
            <li>
              <Link
                to="/edit-profile"
                className="dropdown-item text-capitalize navbar-menu-li "
              >
                editar perfil
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="dropdown-item text-capitalize navbar-menu-li "
              >
                Mis Competiciones
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="dropdown-item text-capitalize my-2 border-top border-bottom border-secondary navbar-menu-li "
              >
                sobre nosotros
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className="btn text-uppercase navbar-menu-button"
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
