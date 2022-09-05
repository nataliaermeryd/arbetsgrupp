import { AuthContext } from "../P-Context/AuthContext";
import { useContext } from "react";

export const useAuthContext =() => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuthContext can only be used inside and AuthContextProvider');
    }
    return context
}