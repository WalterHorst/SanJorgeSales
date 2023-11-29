import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/Imagenes/Logo.png";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { Modal, Button } from "antd";
import { useState } from "react";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="modalContainer">
          <div className="modalIcons">
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
          <NavLink to="/login">
            <button className="inicio" onClick={handleCancel}>
              Iniciar Sesión
            </button>
          </NavLink>
          <NavLink to={"registro"}>
            <button className="inicio2" onClick={handleCancel}>
              Crear cuenta
            </button>
          </NavLink>
        </div>
      </Modal>
    </div>
  );
};
export default NavBar;
