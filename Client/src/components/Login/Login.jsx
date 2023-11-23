import React, { useState } from "react";
import "./Login.css";
import SignUp from "../SingUp/SingUp";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = async () => {};

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="padreLogin">
      <div className="login-container">
        {isSignUp ? (
          <SignUp />
        ) : (
          <>
            <h2>Login</h2>
            <form>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <button type="button" onClick={handleLogin}>
                Log In
              </button>
            </form>
          </>
        )}
        <p>
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button onClick={handleToggle}>
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
