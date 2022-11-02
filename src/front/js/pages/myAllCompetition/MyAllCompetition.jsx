import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import Card from "../homeUser/cards/Card.jsx";
import logo from "../../../img/logo-GOutside.png";
const MyAllCompetitions = () => {
  const [myCompetitions, setMyCompetitions] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    getMyCompetitions();
  }, []);

  const getMyCompetitions = () => {
    const url = process.env.BACKEND_URL + "/api/my-competitions";

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
        console.log(data);
        setMyCompetitions(data);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        {myCompetitions.map((myCompetition) => {
          return (
            <div key={myCompetition.id} className=" col-md-6 col-lg-4">
              <div className="card m-2">
                <img
                  src={
                    !myCompetition.poster_image_url
                      ? logo
                      : myCompetition.poster_image_url
                  }
                  className="competition-img-card"
                  alt="cartel competicion"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    {myCompetition.competition_name}
                  </h4>
                  <h5 className="card-text">{myCompetition.qualifier_date}</h5>
                  <h5 className="card-text">
                    {myCompetition.category?.toString()?.replace("_", " ")}
                  </h5>
                  <h5 className="card-text">
                    {myCompetition.stage?.toString()?.replace("_", " ")}
                  </h5>
                  <div className="d-flex justify-content-center gap-3">
                    <Link to={`/competition/${myCompetition.id}`}>
                      <button className="btn-sucessfull">+INFO</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* {store.userRol != "Rol.administration" && (
        <>
          <div className="carousel-item">
            <div className="card align-items-center justify-content-md-center text-center home-user-card">
              <div className="container-fluid align-items-center d-flex justify-content-between">
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <h2 className="m-3">MIS COMPETICIONES</h2>
                <span
                  className="carousel-control-next-icon "
                  aria-hidden="true"
                ></span>
              </div>
              <MyAllCompetitions />
            </div>
          </div>
          <div className="carousel-item">
            <div className="card align-items-center justify-content-md-center text-center home-user-card">
              <div className="container-fluid align-items-center d-flex justify-content-between">
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <h2 className="m-3">Descubre tu próximo reto... ¡APÚNTATE!</h2>
                <span
                  className="carousel-control-next-icon "
                  aria-hidden="true"
                ></span>
              </div>
              <div className="align-items-center justify-content-md-center text-center mb-5">
               <Card />
              </div>
            </div>
          </div>
        </>
      )} */}
    </>
  );
};

export default MyAllCompetitions;
