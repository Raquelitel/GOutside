import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import logo from "../../../img/logo-GOutside.png";
import "./posterCompetition.css";

const PosterCompetition = () => {
  const { store, actions } = useContext(Context);
  const [files, setFiles] = useState(null);

  const uploadPosterImage = async (e) => {
    e.preventDefault();

    let body = new FormData();
    body.append("poster_image", files[0]);

    const options = {
      method: "POST",
      body,
      headers: { Authorization: "Bearer " + actions.getTokenLS() },
    };
    try {
      const resp = await fetch(
        process.env.BACKEND_URL + "/api/poster-upload",
        options
      );
      const data = await resp.json();
      console.log(data);
    } catch (error) {
      console.log("Error loading message from backend", error);
    }
  };
  return (
    <div className="col-md-4">
      <img
        src={store.posterImagen === null ? logo : store.posterImagen}
        className="mt-4 img-fluid poster-competition-photo"
        alt="poster photo"
      />
      <form className="m-2" onSubmit={uploadPosterImage}>
        <input type="file" onChange={(e) => setFiles(e.target.files)} />
        <button className="btn postercompetition-btn-primary">
          añadir cartel
        </button>
      </form>
    </div>
  );
};

export default PosterCompetition;
