import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

const InputSearch = () => {
  const { store, actions } = useContext(Context);
  const [nameInput, setNameInput] = useState("");
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();

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
        navigate(`user/${nameInput}`);
        setNameInput("");
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
      <form className="d-flex" onSubmit={(e) => handleSearch(e)}>
        <input
          placeholder="Buscar..."
          onChange={(e) => searchUser(e.target.value)}
          value={nameInput}
        />

        <button onClick={(e) => handleSearch(e)}>Buscar</button>
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
