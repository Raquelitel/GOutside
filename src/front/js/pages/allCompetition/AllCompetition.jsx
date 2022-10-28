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
      {competitions.map((competition) => {
        return (
          <div key={competition.id} className="card">
            <div className="card-body">
              <h4 className="card-title">{competition.competition_name}</h4>
              <h5 className="card-text">{competition.qualifier_date}</h5>
              <h5 className="card-text">{competition.category}</h5>
              <h5 className="card-text">{competition.stage}</h5>
              <Link to={`/competition/${competition.id}`}>
                <button className="home-button2">+INFO</button>
              </Link>
              <button
                className="home-button2"
                onClick={() =>
                  addCompetitorToCompetition(store.userId, competition.id)
                }
              >
                Participar
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AllCompetition;
