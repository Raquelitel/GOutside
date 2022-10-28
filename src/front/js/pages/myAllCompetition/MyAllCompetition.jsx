import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyAllCompetitions = () => {
  const [myCompetitions, setMyCompetitions] = useState([]);

  useEffect(() => {
    getMyCompetitions();
  }, []);

  const getMyCompetitions = () => {
    const url = process.env.BACKEND_URL + "/api/my-competitions";

    const options = {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setMyCompetitions(data.myCompetitions);
        console.log(data.myCompetitions);
      });
  };

  return (
    <>
      {myCompetitions && myCompetitions.map((param) => {
        return (
          <div key={param.id} className="card">
            <div className="card-body">
              <h4 className="card-title">{param.competition_name}</h4>
              <h5 className="card-text">{param.qualifier_date}</h5>
              <h5 className="card-text">{param.category}</h5>
              <h5 className="card-text">{param.stage}</h5>
              <Link to={`/competition/${param.id}`}>
                <button className="home-button2">+INFO</button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MyAllCompetitions;
