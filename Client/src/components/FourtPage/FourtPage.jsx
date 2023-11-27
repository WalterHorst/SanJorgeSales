import imagen4 from "../../assets/Imagenes/imagenPage4.png";
import "./FourtPage.css";

const FourtPage = () => {
  return (
    <div>
      <div className="second-page-container">
        <div>
          <img className="image" src={imagen4} alt="" />
        </div>
        <div>
          <h1>
            <strong>Kymoon es la plataforma pensada para tus clientes.</strong>
          </h1>
          <h2>
            Comprar nunca fue tan fácil como ahora, por eso, nosotros hemos
            desarrollado este Marketplace pensando en nuestros usuarios.
            Destacamos en la facilidad, compromiso y determinación con la que
            trabajamos. Un sitio web confiable, nos adaptamos a todo tipo de
            comercios con una gran variedad de productos de gran calidad.
          </h2>
        </div>
      </div>
      <h1>Una gran cantidad de comerciantes eligieron confiar en nosotros.</h1>
    </div>
  );
};
export default FourtPage;
