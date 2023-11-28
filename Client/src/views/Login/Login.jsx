import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {};

  return (
    <div className="padreLogin">
      <div className="login-container">
        <>
          <h2 className="login">Ingresa a tu cuenta</h2>
          <form>
            <input
              className="input-login"
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              className="input-login"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={handleLogin}>
              Inicia sesión
            </button>
          </form>
        </>
        <br />
        <br />
        <hr />
        <br />
        <div className="divparrafo">
          <p>
            ¿No tienes una cuenta?
          </p>
          <NavLink to="/registro">
            <button className="btnregistro" >Registrate</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
