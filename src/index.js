import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ForumContextProvider } from './P-Context/ForumContext';
import { AuthContextProvider } from './P-Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <ForumContextProvider>
    <App />
    </ForumContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
