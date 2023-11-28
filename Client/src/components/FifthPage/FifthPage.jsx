import React from "react";
import "./FifthPage.css";

const FifthPage = () => {
  return (
    <div className="conteinerP5">
     
      <h1 className="titulo2">
        <strong>Elige el plan que te convenga</strong>
      </h1>

      <h3 className="titulo2">
        <strong>Selecciona el plan más conveniente para tu negocio</strong>
      </h3>
      <div className="planes-container">
        <div className="plan"></div>
        <div className="plan"></div>
        <div className="plan"></div>
      </div>

      <button className="Btn" >comprar planes</button>
    </div>
  );
};

export default FifthPage;
