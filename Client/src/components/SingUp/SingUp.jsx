import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [locality, setLocality] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {};

  return (
    <div className="signup-container">
      <h2 className="h2-login ">Sign Up</h2>
      <form>
          <input
            type="text"
            placeholder="localidad"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          />
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
