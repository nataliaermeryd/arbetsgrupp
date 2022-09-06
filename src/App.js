import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./P-Hooks/useAuthContext";

import Home from "./P-pages/Home";
import SignIn from "./P-pages/SignIn";
import SignUp from "./P-pages/SignUp";
import Profile from "./P-pages/Profile";
import Forum from "./P-pages/Forum";
import Navbar from "./P-Components/Navbar";
import Footer from "./P-Components/Footer";
import Quiz from "./P-pages/Quiz";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="allPages">
          <Routes>
            <Route
              path="/"
              element={!user ? <Home /> : <Navigate to="/mypage" />}
            />
            <Route
              path="/mypage"
              element={user ? <Profile /> : <Navigate to="/" />}
            />
            <Route
              path="/forum"
              element={user ? <Forum /> : <Navigate to="/" />}
            />
            <Route
              path="/quiz"
              element={user ? <Quiz /> : <Navigate to="/" />}
            />
            <Route
              path="/signin"
              element={!user ? <SignIn /> : <Navigate to="/mypage" />}
            />
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Navigate to="/mypage" />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
