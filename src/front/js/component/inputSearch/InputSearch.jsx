import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";

const InputSearch = () => {
  const param = useParams();
  const { store, actions } = useContext(Context);
  const [nameInput, setNameInput] = useState("");

  const searchUser = (name) => {
    setNameInput(name);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + actions.getTokenLS(),
      },
    };
    /*  try { */
    const resp = await fetch(
      process.env.BACKEND_URL + `/api/user/${nameInput}`
    );
    if (resp.status === 200) {
      const data = await resp.json();
      actions.addTemporalUserSearch(data);
    } else {
      console.log("no hay usuarios con ese nombre");
    }
    /*     } catch (error) {
      console.log("Error loading message from backend", error);
    } */
  };

  return (
    <form>
      <input
        placeholder="Buscar..."
        onChange={(e) => searchUser(e.target.value)}
      />
      <button onClick={(e) => handleSearch(e)}>Buscar</button>
    </form>
  );
};

export default InputSearch;

/* getUser: async () => {
  const options = {
    method: "GET",
    headers: { Authorization: "Bearer " + getActions().getTokenLS() },
  };
  try {
    const resp = await fetch(
      process.env.BACKEND_URL + "/api/user",
      options
    );
    const data = await resp.json();
    if (resp.status === 200) {
      setStore({
        userEmail: data.email,
        userName: data.name,
        userLastName: data.last_name,
        userAdress: data.adress,
        userGender: data.gender,
        userPhone: data.phone,
        userProfileImagen: data.profile_image,
        userRol: data.rol,
        loading: false,
        tokenLS: getActions().getTokenLS(),
      });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("Error loading message from backend", error);
  }
}, */

/* getPersona: (id) => {
  fetch(`https://www.swapi.tech/api/people/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setStore({ persona: data.result.properties });
      localStorage.setItem("persona", JSON.stringify(data.result.properties));
    } )
    .catch((error) => console.log(error));
}, */
