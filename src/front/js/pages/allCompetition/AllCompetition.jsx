import React, { useEffect, useState } from "react";
import MapView from "../../component/MapView/MapView.jsx";
import { Context } from "../../store/appContext.js";
import { useParams } from "react-router-dom";

const AllCompetition = () => {
  const { id } = useParams();
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    getCardsInfo();
  }, [id]);

  const getCardsInfo = () => {
    const url = process.env.BACKEND_URL + "/api/competitions";

    const options = {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setCompetitions(data.competitions);
        console.log(data.competitions);
      });
  };

  return competitions.map((param) => {
    return (
      <div key={param.id} className="card" style="width: 18rem;">
        <div className="card-body">
          <h4 className="card-title">{param.competition_name}</h4>
          <h5 className="card-text">{param.qualifier_date}</h5>
          <h5 className="card-text">{param.category}</h5>
          <h5 className="card-text">{param.stage}</h5>
          <Link to="/competition/:id">
            <button className="home-button2">+INFO</button>
          </Link>
        </div>
      </div>
    );
  });
};

export default AllCompetition;
