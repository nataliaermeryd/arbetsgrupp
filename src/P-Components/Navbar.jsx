import { Link } from "react-router-dom";
import { useLogOut } from "../P-Hooks/useLogOut";
import { useAuthContext } from "../P-Hooks/useAuthContext";
const Navbar = () => {
  const { logout } = useLogOut();
  const { user } = useAuthContext();

  const handleLogOut = () => {
    logout()
  }

  return (
    <header>
      <div className="navbar">
        <Link to="/">
          <h2>QuizForum
            
          </h2>
        </Link>
        <nav>
        <div className="users">
          {user && ( 
          <div className="userstate">
            <span className="user-details">{user.email}</span>
            <button className="logout" onClick={handleLogOut}>Log Out</button>
           
          </div>
          )}
          {!user && ( 
          <Link to="/signin">
            <h1 >Log In</h1>
          </Link>
          )}
        </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;