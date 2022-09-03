import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogIn } from "../P-Hooks/useLogIn";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, error, loading } = useLogIn();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await logIn(email, password);
  };
  return (
    <main className="main-container">
      <div className="auth-container">
        <h3>Log In</h3>
        <form className="log-in" onSubmit={handleSubmit}>
          <label>E-mail:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button type="submit" disabled={loading}>
            Log in
          </button>
          {error && <div className="error-field">{error}</div>}
        </form>

        <p>
          Not a member yet? <br/><Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </main>
  );
};

export default SignIn;