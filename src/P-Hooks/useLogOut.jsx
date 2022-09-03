import { useAuthContext } from "./useAuthContext";
import { useForumContext } from "./useForumContext";

export const useLogOut = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: forumpostDispatch } = useForumContext();
  
  const logout = () => {
    // empty local storage and use the dispatch logout function
    localStorage.removeItem('user');

    dispatch({ type: "LOGOUT" });
    forumpostDispatch({ type: 'SET_FORUMPOSTS', payload: null})
  };
  return { logout };
};