import imagen2 from "../../assets/Imagenes/imagenPage2.jpg";
import "./SecondPage.css";

const SecondPage = () => {
  return (
    <div className="second-page-container">
      <div>
        <h1 className="main-title">
          <strong>Abre hoy tu tienda online con Kymoon.</strong>
        </h1>
        <h2 className="subtitle">
          Empieza a vender desde la comodidad de tu ordenador.
        </h2>
        <button className="signup-button">Regístrate gratis</button>
      </div>
      <img
        src={imagen2}
        alt="Descripción de la imagen"
        className="page-image"
      />
    </div>
  );
};

export default SecondPage;
