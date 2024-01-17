import React, { useState } from "react";
import "./Login.css";
import { NavLink, Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {loginUser} from "../../redux/actions"
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log('Datos que estás enviando:', { password, name });
  try {
    await dispatch(loginUser({ name, password}));
    alert(`bienvenido a kymoon, ${name} !`);
    navigate('/productos')
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert('los datos ingresados son incorrectos');
    } else {
      console.error('Error en la solicitud:', error.response ? error.response.data : error.message);
      alert('Ocurrió un error. Por favor, intenta nuevamente más tarde.');
    }
  }
  };

  return (
    <div className="padreLogin">
      <div className="bluebox">
      <div className="login-container">
        <>
          <h2 className="login">Ingresa a tu cuenta</h2>
          <form>
            <input
              className="input-login"
              type="text"
              placeholder="Nombre de usuario"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <br />
            <br/>
            <input
              className="input-login"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <br/>
            <br/>
            <button className="Registrarme" type="button" onClick={handleLogin}>
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
    </div>
  );
};

export default Login;
