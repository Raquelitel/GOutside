import React, { useEffect, useState } from "react";
import MapView from "../../component/MapView/MapView.jsx";
import { Context } from "../../store/appContext.js";
import { useParams } from "react-router-dom";

const AllCompetition = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

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
        setData(data.competitions);
        console.log(data.competitions);
      });
  };

  return (
    <div className="card" style="width: 18rem;">
      <div className="card-body">
        <h4 className="card-title">{data.name}</h4>
        <h5 className="card-text">{data.qualifier_date}</h5>
        <h5 className="card-text">{data.category}</h5>
        <h5 className="card-text">{data.stage}</h5>
        <Link to="/competition/:id">
          <button className="home-button2">+INFO</button>
        </Link>
      </div>
    </div>
  );
};

export default AllCompetition;
