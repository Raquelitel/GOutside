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
    <nav className="navbar navbar-expand-lg navbar-color">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={logo} alt="GOutside Logo" style={{ width: "4rem" }} />
        </div>
        <div className="col-6 col-md-8 col-lg-9">
          <div className="d-flex justify-content-between">
            <form className="">
              <input
                placeholder="Buscar..."
                type="text"
                className="navbar-input"
              />
            </form>
            <div className="d-flex ">
              <Link to="/home/user">
                <button className="btn btn-menu mx-2">
                  <BsHouseFill className="btn-icon" />
                  <span className="btn-text">HOME</span>
                </button>
              </Link>
              <Link to="/video-library">
                <button className="btn btn-menu mx-2">
                  <BsFillCollectionPlayFill className="btn-icon" />

                  <span className="btn-text">BIBLIOTECA</span>
                </button>
              </Link>
              <Link to="/all-commpetition">
                <button className="btn btn-menu mx-2">
                  <BsFillTrophyFill className="btn-icon" />

                  <span className="btn-text">COMPETICIONES</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="btn-group">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={
                store.userProfileImagen === null
                  ? logo
                  : store.userProfileImagen
              }
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
                to="/about-us"
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
