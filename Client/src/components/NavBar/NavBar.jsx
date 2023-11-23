import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to={"/"}>
          <img
            className="logo"
            src="https://lavanderiasanjorge.com/tienda/wp-content/uploads/2020/07/logo-lavanderia-tintoreria-san-jorge.png"
          ></img>
        </NavLink>
      </div>
      {/* <div className="user-icon">
        <FaUser />
      </div> */}
      <div className="login-button">
        <NavLink to={"/login"}>
          <button>Iniciar Sesión</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
