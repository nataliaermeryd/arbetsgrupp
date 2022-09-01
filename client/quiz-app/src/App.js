import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Blogposts from "./pages/Blogposts";
import Quizgame from "./pages/Quizgame";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/Blogposts" element={<Blogposts/>}/>
        <Route path="/Quizgame" element={<Quizgame/>}/>
        
        
      </Routes>
    </Router>
  );
}

export default App;
