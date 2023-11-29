import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/Imagenes/Logo.png";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { Modal, Button } from "antd";
import { useState } from "react";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
        <BurgerBtn showModal={showModal}></BurgerBtn>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1>IG</h1>
        <h1>WAPP</h1>
        <h1>Inicio</h1>
        <h1>Registrarse</h1>
      </Modal>
    </div>
  );
};
export default NavBar;
