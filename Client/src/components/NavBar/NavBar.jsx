import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/Imagenes/Logo.png";

const NavBar = () => {
  const categories = [
    "CATEGORIAS",
    "Comidas",
    "Ropa",
    "Repuestos",
    "Bazar",
    "Librería",
    "Marroquinerías",
    "Juguetes",
    "Viveros",
    "Joyería",
    "Motos",
    "Automotor",
    "Mercería",
    "Cotillón",
    "Repostería",
    "Heladerías",
    "Postres",
    "Almacén",
    "Kiosko",
    "Distribuidoras",
  ];

  const aderidosList = [
    "ADERIDOS",
    "ADN Indumentaria",
    "Alas Ferreterías",
    "Angeline Boutique",
    "Baruk",
    "Bartolome",
    "Ben Bru",
    "Bertola Repuestos",
    "Biancotti Lonas",
    "Bravin Ferretería",
    "Brulee",
    "Capitan Pizza",
    "Casablanca",
    "Creaciones Ferretería",
    "Cuia Exquisiteces",
    "Date El Gusto",
    "El Mercadito Verdulería",
    "Fast Food",
    "Guapas",
    "Helados Ray Ban",
    "Helados Yampy",
    "Igui",
    "Kala",
    "Kiosko Remo",
    "La Eurlogia",
    "La Ideal",
    "Lola",
    "Lomitos 2x1",
    "Luscher Service Automotor",
    "M&M",
    "Masasseci Motos",
    "Maytena",
    "Maximo Deportes",
    "Milanski Fabrica de Milanesas",
    "Mini San Almacén",
    "Morra Electricidad",
    "Orko",
    "Otto",
    "Pamero",
    "Pascual Rodados",
    "Puesto Ruta 6 Verdulería",
    "Punto Clave Gráfica",
    "Ruda Macho",
    "Tatoo House",
    "Tienda Leon",
    "Tienda Los Amigos",
    "Zalocco Repuestos",
  ];

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img className="logo" src={logo} alt="Logo"></img>
        </NavLink>
      </div>
      <div>
        <NavLink  className="About" to="/about">About</NavLink>
      </div>
      <div className="categories-selector">
        <select>
          {categories.map((category, index) => (
            <option key={index} value={`/category/${category.toLowerCase()}`}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="aderidos-selector">
        <select>
          {aderidosList.map((aderido, index) => (
            <option
              key={index}
              value={`/aderido/${aderido.toLowerCase().replace(/\s/g, "-")}`}
            >
              {aderido}
            </option>
          ))}
        </select>
      </div>

      <div className="login-button">
        <NavLink to="/login">
          <div className="user-icon">
            <FaUser />
          </div>
          <button>Iniciar Sesión</button>
        </NavLink>
      </div>
    </div>
  );
};
export default NavBar;
