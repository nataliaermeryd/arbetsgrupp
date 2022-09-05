import { Link } from "react-router-dom";
import { useLogOut } from "../P-Hooks/useLogOut";
import { useAuthContext } from "../P-Hooks/useAuthContext";
import Logo from "../assets/LOGOTDQ.png";

const Navbar = () => {
  const { logout } = useLogOut();
  const { user } = useAuthContext();

  const handleLogOut = () => {
    logout()
  }

  return (
    <header>
      <div className="navbar bg-white bg-opacity-60 border-t border-b border-dashed border-gray-300 shadow">
        <Link to="/" class="cursor-pointer">
          <img src={Logo} style={{ height: 70 }} alt="logo" />
        </Link>
        <nav>
        <div className="users ">
            {user && ( 
          
          <div className="userstate ">
            <span className="user-details">{ user.email }</span>  
                <button
                  className="logout"
                  class=" 
                  text-[17px] font-bold 
                  text-center text-transparent bg-clip-text 
                  bg-gradient-to-r from-red-500 to-pink-100
                  hover:from-pink-100 hover:to-red-500 hover:text-[18px]"
                  onClick={handleLogOut}>
                  SIGN OUT ⟫
                  </button>
              </div>
              
          )}
          {!user && ( 
          <Link to="/signin" class="cursor-pointer">
                <h1
                  class="
                  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-200
                  hover:from-purple-200 hover:to-blue-600"
                >
                  SIGN IN ⟫
                </h1>
          </Link>
          )}
        </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;