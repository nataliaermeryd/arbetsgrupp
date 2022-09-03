import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../P-Hooks/useSignUp";

const SignUp = () => {
  const [email, setEmail] = useState("");
  //const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, loading, error } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(email, password);
  };
  return (
    <main className="main-container">
      <div className="auth-container">
        <h3>Sign Up</h3>
        <form className="sign-up" onSubmit={handleSubmit}>
          <label>E-mail:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {/*
          <label>Username:</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          */}
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button type="submit" disabled={loading}>
            Sign Up!
          </button>
          {error && <div className="error-field">{error}</div>}
        </form>

        <p>
          Already a member? <br />
          <Link to="/signin">Log in here</Link>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
