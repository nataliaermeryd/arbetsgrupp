import { ForumContext } from "../P-Context/ForumContext";
import { useContext } from "react";

export const useForumContext =() => {
    const forumContext = useContext(ForumContext)

    if(!forumContext){
        throw Error('useForumContext can only be used inside and ForumContextProvider');
    }
    return forumContext
}