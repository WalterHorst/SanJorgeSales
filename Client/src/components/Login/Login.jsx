// Login.js
import React, { useState } from 'react';
import SignUp from '../SingUp/SingUp';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = async () => {
    // Lógica de autenticación aquí
  };

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <div className="login-container">
        {isSignUp ? (
          <SignUp />
        ) : (
          <>
            <h2>Iniciar Sesión</h2>
            <form>
              <label>
                Usuario:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <br />
              <label>
                Contraseña:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <button type="button" onClick={handleLogin}>
                Iniciar Sesión
              </button>
            </form>
          </>
        )}
        <p>
          {isSignUp
            ? '¿Ya tienes una cuenta? '
            : '¿No tienes una cuenta? '}
          <button onClick={handleToggle}>
            {isSignUp ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
