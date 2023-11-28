import React, { useState } from "react";
import "./SingUp.css";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async () => {};

  return (
    <div className="padreSingUp">
      <div className="SingUp-container">
        <>
          <h2 className="login">Ingresa a tu cuenta</h2>
          <form>
            <input
              className="input-SingUp"
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <input
              className="input-SingUp"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <input
              className="input-SingUp"
              type="text"
              placeholder="Localidad"
              value={localidad}
              onChange={(e) => setLocalidad(e.target.value)}
            />
            <br />
            <br />
            <input
              className="input-SingUp"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <button 
            className="Registrarme" type="button" onClick={handleLogin}>
              Registrarme
            </button>
          </form>
        </>
        <br />
        <br />
        <hr />
        <br />
        <div className="divparrafo">
          <p>
            ¿Ya tienes una cuenta?
          </p>
          <NavLink to="/login">
            <button className="iniciarsesion" >Inicia sesión</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
