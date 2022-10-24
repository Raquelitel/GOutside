import React, { useEffect, useState } from "react";
import MapView from "../../component/MapView/MapView.jsx";
import { Context } from "../../store/appContext.js";
import { useParams } from "react-router-dom";

const InfoCompetition = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState([]);
  const [requirements, setRequirements] = useState("");
  const [description, setDescription] = useState("");
  const [stage, setStage] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    get_competition_info();
  }, [id]);

  const get_competition_info = () => {
    const url = process.env.BACKEND_URL + `/api/competition/${id}`;

    // const body = {
    //   competition_name: name,
    //   qualifier_date: date,
    //   location: location,
    //   category: category.map((cat) => cat.value),
    //   requirements: requirements,
    //   description: description,
    //   stage: stage,
    // };

    const options = {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setData(data.competition);
      });
  };

  // useEffect(() => {
  //   const url = process.env.BACKEND_URL + `api/competition/:id`;

  //   fetch(url, {
  //     method: "GET",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="container-lg-fluid text-center align-items-center justify-content-center m-auto p-5">
      <div className="row d-flex create-title">
        <h1 className="text-center">Info detallada de la competición</h1>
      </div>
      {/* <PosterCompetition /> */}
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-4 align-items-center justify-content-center">
          <input type="text" value={data.name} />
        </div>

        <div className="col-4 align-items-center justify-content-center ">
          <input type="text" disabled value={data.qualifier_date} />
        </div>

        <div className="col-4 align-items-center justify-content-center ">
          <input type="text" disabled value={data.category} />
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-4 align-items-center justify-content-center">
          <input type="text" disabled value={data.location} />
        </div>

        <div className="col-6 align-items-center justify-content-center mb-5 ">
          <div className="create-category">
            <input type="text" disabled value={data.requirements} />
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="input-group align-items-center justify-content-center mb-5">
          <input type="text" disabled value={data.description} />
        </div>
      </div>

      <div className="row justify-content-center ">
        <div className="input-group align-items-center justify-content-center mb-5">
          <input type="text" disabled value={data.stage} />
        </div>
      </div>

      <div className="row create-button">
        <div className="d-flex justify-content-around text-center align-items-center">
          <button
            className="btn btn-success"
            onClick={() => get_competition_info()}
          >
            Este boton tiene que llevar la validación de que es ADMIN y además
            ha creado esta competición para poder editar.
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default InfoCompetition;
