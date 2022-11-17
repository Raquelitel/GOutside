import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../store/appContext";
import "./InputSearch.css";

const InputSearch = () => {
  const { store, actions } = useContext(Context);
  const [nameInput, setNameInput] = useState("");
  const [mensaje, setMensaje] = useState("");

  const searchUser = (name) => {
    setNameInput(name.toLowerCase());
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + actions.getTokenLS(),
      },
    };
    try {
      const resp = await fetch(
        process.env.BACKEND_URL + `/api/user/${nameInput}`
      );
      const data = await resp.json();
      if (data.number > 0) {
        actions.addTemporalUserSearch(data);
      } else {
        setMensaje("No existen usuarios con ese nombre");
        setTimeout(() => {
          setMensaje("");
        }, 2500);
      }
    } catch (error) {
      console.log("Error loading message from backend", error);
    }
  };

  return (
    <div className="row">
      {/* <form className="d-flex inputForm">
        <input
          className="inputSearch"
          placeholder="Buscar..."
          onChange={(e) => searchUser(e.target.value)}
          value={nameInput}
        />
        <button className="inputButton" onClick={(e) => handleSearch(e)}>
          Buscar
        </button>
      </form> */}

      {/* <div class="demo">
        <form class="form-search">
          <div class="input-group">
            <input
              class="form-control form-text"
              maxlength="128"
              placeholder="Buscar"
              size="15"
              type="text"
            />
            <span class="input-group-btn">
              <button class="btn btn-primary">
                <i class="fa fa-search fa-lg">&nbsp;</i>
              </button>
            </span>
          </div>
        </form>
      </div> */}

      <form
        className="d-flex inputForm p-0 "
        onsubmit="event.preventDefault();"
        role="search"
      >
        <input
          id="search"
          type="search"
          className="inputSearch p-2"
          placeholder="Buscar..."
          onChange={(e) => searchUser(e.target.value)}
          value={nameInput}
          autofocus
          required
        />
        <button
          type="submit"
          className="inputButton"
          onClick={(e) => handleSearch(e)}
        >
          GO!
        </button>
      </form>
      {mensaje && (
        <p className="bg-white overflow-scroll opacity-50 text-black">
          {mensaje}
        </p>
      )}
    </div>
  );
};

export default InputSearch;
