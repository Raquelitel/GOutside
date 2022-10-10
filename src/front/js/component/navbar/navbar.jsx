import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./navbar.css";
import {
  BsHouseFill,
  BsFillCollectionPlayFill,
  BsFillTrophyFill,
  BsList,
} from "react-icons/bs";

export const Navbar = () => {
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
              placeholder="Search..."
              type="text"
              className="navbar-input"
              required=""
            />
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/">
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
            <Link to="/">
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
        <div className="d-flex align-items-center">
          <div className="dropdown">
            <div
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
