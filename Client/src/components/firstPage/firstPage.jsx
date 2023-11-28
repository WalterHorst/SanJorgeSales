import React from "react";
import "./firstPage.css";
import img1 from "../../assets/Imagenes/Pagina1/img1.png";
import img3 from "../../assets/Imagenes/Pagina1/img2.png";
import img2 from "../../assets/Imagenes/Pagina1/img3.png";
import img4 from "../../assets/Imagenes/Pagina1/img4.png";
import img5 from "../../assets/Imagenes/Pagina1/img5.png";
import img6 from "../../assets/Imagenes/Pagina1/img6.png";
import img7 from "../../assets/Imagenes/Pagina1/img7.png";
import img8 from "../../assets/Imagenes/Pagina1/img8.png";


const FirstPage = () => {
  return (
    <div>
      <h1>
        <strong>Beneficios de vender en Kymoon:</strong>
      </h1>
      <div className="Firstcontainer">
        <div className="image-container">
          <img
            src={img1}
            alt=""
          />
          <div className="image-text">Atención las 24 horas.</div>
        </div>
        <div className="image-container">
          <img
            src={img3}
            alt=""
          />
          <div className="image-text">Flexibilidad en los medios de pago.</div>
        </div>
        <div className="image-container">
          <img
            src={img2}
            alt=""
          />
          <div className="image-text">Envios rapido y seguro.</div>
        </div>
        <div className="image-container">
          <img
            src={img4}
            alt=""
          />
          <div className="image-text">Variedades en productos.</div>
        </div>
        <div className="image-container">
          <img
            src={img5}
            alt=""
          />
          <div className="image-text">Simplicidad.</div>
        </div>

        <div className="image-container">
          <img
            src={img6}
            alt=""
          />
          <div className="image-text">
            Mantenerte siempre conectado con tus compradores.
          </div>
        </div>

        <div className="image-container">
          <img
            src={img7}
            alt=""
          />
          <div className="image-text">Gestiona sin problemas tu negocio.</div>
        </div>
        <div className="image-container">
          <img
            src={img8}
            alt=""
          />
          <div className="image-text">
            Publica productos fácilmente y lleva un registro de tu Stock.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
