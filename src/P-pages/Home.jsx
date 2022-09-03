import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="main-container">
      <div>
        <h1>Welcome!</h1>
        <div className="userlinks">
          <p>
            Already a member? <br/><Link to="/signin">Click here!</Link>
          </p>

          <p>
            Want to sign up? <br/>
            <Link to="/signup">Click here!</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
