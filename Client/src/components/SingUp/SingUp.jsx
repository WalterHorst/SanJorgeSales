// SignUp.js
import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // Lógica de creación de cuenta aquí
  };

  return (
    <div>
      <h2>Crear Cuenta</h2>
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
        <button type="button" onClick={handleSignUp}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default SignUp;
