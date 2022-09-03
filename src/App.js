import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landingpage from "./pages/Landingpage";
import Dashboard from "./pages/Dashboard";
import ForumHome from "./pages/ForumHome";
import Quizgame from "./pages/Quizgame";
import NewTopic from "./pages/NewTopic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/Forumhome" element={<ForumHome />} />
        <Route path="/Quizgame" element={<Quizgame />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newtopic" element={<NewTopic/>} />
      </Routes>
    </Router>
  );
}

export default App;
