import React from "react";
import { useParams } from "react-router-dom";

const GetUser = () => {
  const params = useParams();
  console.log(params.name);

  return <div>GetUser</div>;
};

export default GetUser;
