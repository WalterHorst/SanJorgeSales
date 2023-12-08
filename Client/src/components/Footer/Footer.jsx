import React from "react";
import "../Footer/Footer"; // Asegúrate de tener un archivo de estilos para tu footer
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>Contacto</h4>
        <p>Dirección: Calle Principal 123, Ciudad</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Email: info@tuecommerce.com</p>
      </div>
      <div>
        <h4>Síguenos</h4>
        <a
          href="https://www.facebook.com/tuecommerce"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <br />
        <a
          href="https://twitter.com/tuecommerce"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>

      <div>
        <h4>Políticas y Términos</h4>
        <a href="/privacidad">Política de Privacidad</a>

        <br />
        <a href="/terminos">Términos y Condiciones</a>
      </div>

      <div>
        <h4>Vende con Nosotros</h4>
        <p>
          ¿Quieres vender tus productos en nuestra plataforma? ¡Únete a
          nosotros!
        </p>
        <p>
          <a href="/vende">Más información</a>
        </p>
      </div>
      {/* <div className="copyrigth">
        <p>&copy; 2023 SanJorgeSales </p>
      </div> */}
    </footer>
  );
};

export default Footer;
