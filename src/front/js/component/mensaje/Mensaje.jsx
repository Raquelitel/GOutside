import React from "react";
import "./mensaje.css";

const Mensaje = ({ children }) => {
  return (
    <div className="mb-2 text-center text-uppercase mensaje-aviso">
      {children}
    </div>
  );
};

export default Mensaje;
