import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import MapView from "../../component/MapView/MapView.jsx";
import { Link } from "react-router-dom";
import "./allCompetition.css";
import logo from "../../../img/logo-GOutside.png";

const AllCompetition = () => {
  const [competitions, setCompetitions] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    getCardsInfo();
  }, []);

  const getCardsInfo = () => {
    const url = process.env.BACKEND_URL + "/api/competitions";

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + actions.getTokenLS(),
      },
      method: "GET",
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setCompetitions(data.competitions);
      });
  };

  const addCompetitorToCompetition = (competitor_id, competition_id) => {
    const url = process.env.BACKEND_URL + "/api/my-competitions";

    const body = {
      competition_id,
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + actions.getTokenLS(),
      },
      method: "POST",
      body: JSON.stringify(body),
    };
    fetch(url, options).then((response) => response.json());
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        {competitions.map((param) => {
          return (
            <div key={param.id} className=" col-md-6 col-lg-4">
              <div className="card m-2">
                <img
                  src={!param.poster_image_url ? logo : param.poster_image_url}
                  className="competition-img-card"
                  alt="cartel competicion"
                />
                <div className="card-body">
                  <h4 className="card-title">{param.competition_name}</h4>
                  <h5 className="card-text">{param.qualifier_date}</h5>
                  <h5 className="card-text">{param.category}</h5>
                  <h5 className="card-text">{param.stage}</h5>
                  <div className="d-flex justify-content-center gap-3">
                    <Link to={`/competition/${param.id}`}>
                      <button className="btn btn-sucessfull">+INFO</button>
                    </Link>
                    <button className="btn btn-validacion">Participar</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllCompetition;
