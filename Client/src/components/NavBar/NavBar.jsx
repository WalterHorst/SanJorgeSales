import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/Imagenes/Logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img className="logo" src={logo} alt="Logo"></img>
        </NavLink>
      </div>
      <div className="login-button-container">
        <NavLink to="/login">
          <button className="login-button">Iniciar Sesión</button>
        </NavLink>
        <NavLink>
          <button className="login-button">Crear cuenta</button>
        </NavLink>
      </div>
    </div>
  );
};
export default NavBar;
