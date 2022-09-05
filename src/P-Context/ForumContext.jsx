import { createContext, useReducer } from "react";

//creates a new context that can be provided to and used in all components
export const ForumContext = createContext();

export const forumReducer = (state, action) => {
  switch (action.type) {
    case "SET_FORUMPOSTS":
      return {
        forumposts: action.payload,
      }

    case "CREATE_FORUMPOST":
      return {
        forumposts: [action.payload, ...state.forumposts],
      }

    case "DELETE_FORUMPOST":
      return {
        forumposts: state.forumposts.filter(post => post._id !== action.payload._id)
      };
    default:
      return state
  }
};

export const ForumContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(forumReducer, {
    forumposts: null
  });

  return (
    <ForumContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ForumContext.Provider>
  );
};