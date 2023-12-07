import React from "react";
import "./Tienda.css";
import imgComercio from "../../assets/Imagenes/imgComercio.jpeg";
import imgComercio1 from "../../assets/Imagenes/imgComercio1.jpeg";

const Tienda = () => {
  return (
    <div className="containerTienda">
      <div>
        <img className="div-img" src={imgComercio} alt="img tu negocio" />
        <img className="div-img1" src={imgComercio1} alt="img tu negocio" />
      </div>
      <div>{/* Otro contenido si es necesario */}</div>
    </div>
  );
};

export default Tienda;
