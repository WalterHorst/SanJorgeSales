import React, { useState } from "react";
import "./SingUp.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {createUser} from "../../redux/actions"

const Login = (props) => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [address, setaddress] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleSingUp = async () => {
  console.log('Datos que estás enviando:', { name, password, address, email });
  try {
    await dispatch(createUser({ name, password, address, email }));
    alert(`bienvenido a kymoon, ${name} !`);
    navigate('/productos')
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert('El email ya esta registrado. Por favor, elige otro email o inicia sesión.');
    } else {
      console.error('Error en la solicitud:', error.response ? error.response.data : error.message);
      alert('Ocurrió un error. Por favor, intenta nuevamente más tarde.');
    }
  }
};


  return (
    <div className="padreSingUp">
      <div className="bluebox">
        <div className="SingUp-container">
          <>
            <h2 className="login">Crea tu cuenta</h2>
            <form>
              <input
                className="input-SingUp"
                type="text"
                placeholder="Nombre de usuario"
                value={name}
                onChange={(e) => setname(e.target.value)}
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
                value={address}
                onChange={(e) => setaddress(e.target.value)}
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
                className="Registrarme" type="button" onClick={handleSingUp}>
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
    </div>
  );
};

export default Login;
