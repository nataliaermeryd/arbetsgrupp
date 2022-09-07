import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
export const useLogIn = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();


  const logIn = async (email, password) => {
    axios.defaults.baseURL = "http://localhost:3030/api";
    setLoading(true);
    setError(null);

    const response = await axios.post("/user/signin", {
      headers: { "Content-Type": "application/json" },
    });

    const json = response.data;

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {
        localStorage.setItem('user', JSON.stringify(json))

        dispatch({type:'LOGIN', payload: json})
        setLoading(false);

    }
  };

  return  {logIn, loading, error }
};