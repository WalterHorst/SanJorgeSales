import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/Imagenes/Logo.png";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img className="logo" src={logo} alt="Logo"></img>
        </NavLink>
      </div>
      <div className="social-icons">
        <a href="mailto:TUCORREO@DOMINIO.COM">
          <FaEnvelope />
        </a>
        <a
          href="https://www.instagram.com/TUINSTAGRAM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/TUNUMERODETELEFONO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div className="login-button-container">
        <NavLink to="/login">
          <button className="inicio">Iniciar Sesión</button>
        </NavLink>
        <NavLink to={"registro"}>
          <button className="inicio2">Crear cuenta</button>
        </NavLink>
      </div>
      <div className="burgerBtnNav">
        <BurgerBtn></BurgerBtn>
      </div>
    </div>
  );
};
export default NavBar;
