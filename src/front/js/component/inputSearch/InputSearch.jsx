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
    <div className="row align-items-center text-center">
      <form className="d-flex inputForm p-0 " role="search">
        <input
          id="search"
          type="search"
          className="inputSearch p-2"
          placeholder="Buscar..."
          onChange={(e) => searchUser(e.target.value)}
          value={nameInput}
          autoFocus
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
      <br />
      <div className="">
        {mensaje && <div className="card msg-card">{mensaje}</div>}
      </div>
    </div>
  );
};

export default InputSearch;
