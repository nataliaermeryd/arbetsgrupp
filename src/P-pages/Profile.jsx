import { Link } from "react-router-dom";
import { useAuthContext } from "../P-Hooks/useAuthContext";


const Profile =()=> {
  
const { user } = useAuthContext();

    return (
        <main className="main-container">
            <h1> Welcome to your profile page {user.email}</h1>
            <div className="userlinks">
                <Link to="/forum">I want to visit the Forum</Link>
                <Link to="/quiz">I want to play a game and visit the Quiz</Link>

            </div>
        </main>
    )
}

export default Profile;