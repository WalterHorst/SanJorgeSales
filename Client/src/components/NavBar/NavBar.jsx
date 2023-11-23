// NavBar.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { FaUser } from 'react-icons/fa';

const NavBar = () => {
  const [showProductLinks, setShowProductLinks] = useState(false);
  const [showAderidosLinks, setShowAderidosLinks] = useState(false);

  const categories = [
    'Comidas',
    'Ropa',
    'Repuestos',
    'Bazar',
    'Librería',
    'Marroquinerías',
    'Juguetes',
    'Viveros',
    'Joyería',
    'Motos',
    'Automotor',
    'Mercería',
    'Cotillón',
    'Repostería',
    'Heladerías',
    'Postres',
    'Almacén',
    'Kiosko',
    'Distribuidoras',
  ];

  const aderidosList = [
    'ADN Indumentaria',
    'Alas Ferreterías',
    'Angeline Boutique',
    'Baruk',
    'Bartolome',
    'Ben Bru',
    'Bertola Repuestos',
    'Biancotti Lonas',
    'Bravin Ferretería',
    'Brulee',
    'Capitan Pizza',
    'Casablanca',
    'Creaciones Ferretería',
    'Cuia Exquisiteces',
    'Date El Gusto',
    'El Mercadito Verdulería',
    'Fast Food',
    'Guapas',
    'Helados Ray Ban',
    'Helados Yampy',
    'Igui',
    'Kala',
    'Kiosko Remo',
    'La Eurlogia',
    'La Ideal',
    'Lola',
    'Lomitos 2x1',
    'Luscher Service Automotor',
    'M&M',
    'Masasseci Motos',
    'Maytena',
    'Maximo Deportes',
    'Milanski Fabrica de Milanesas',
    'Mini San Almacén',
    'Morra Electricidad',
    'Orko',
    'Otto',
    'Pamero',
    'Pascual Rodados',
    'Puesto Ruta 6 Verdulería',
    'Punto Clave Gráfica',
    'Ruda Macho',
    'Tatoo House',
    'Tienda Leon',
    'Tienda Los Amigos',
    'Zalocco Repuestos',
  ];

  const handleProductToggle = () => {
    setShowProductLinks(!showProductLinks);
    setShowAderidosLinks(false);
  };

  const handleAderidosToggle = () => {
    setShowAderidosLinks(!showAderidosLinks);
    setShowProductLinks(false);
  };

 
return (
  <div className="navbar">
    <div className="logo">
      <NavLink to="/">
        <img
          className="logo"
          src="https://lavanderiasanjorge.com/tienda/wp-content/uploads/2020/07/logo-lavanderia-tintoreria-san-jorge.png"
          alt="Logo"
        ></img>
      </NavLink>
    </div>
    <div className="nav-links">
      <div className="dropdown" onClick={handleAderidosToggle}>
        <button className="dropbtn">Comercios Aderidos</button>
        <div className={`dropdown-content ${showAderidosLinks ? 'show' : ''}`}>
          {aderidosList.map((comercio, index) => (
            <NavLink key={index} to={`/comercios/${comercio.toLowerCase()}`}>
              {comercio}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="dropdown" onClick={handleProductToggle}>
        <button className="dropbtn">Categorías</button>
        <div className={`dropdown-content ${showProductLinks ? 'show' : ''}`}>
          {categories.map((category, index) => (
            <NavLink key={index} to={`/productos/${category.toLowerCase()}`}>
              {category}
            </NavLink>
          ))}
        </div>
      </div>
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
}
export default NavBar;

