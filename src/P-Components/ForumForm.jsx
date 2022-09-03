import {  useState } from "react";
import axios from "axios";
import { useAuthContext } from "../P-Hooks/useAuthContext";
import { useForumContext } from "../P-Hooks/useForumContext";

const CreateForumpost = () => {
  const { user } = useAuthContext();
  const { dispatch } = useForumContext();

  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  
  
  const handleSubmit = async (event) => {
    axios.defaults.baseURL = "http://localhost:3030/api";
    
    event.preventDefault();
    
    if (!user) {
      setError("You must be logged in to post to the forum")
      return
    }
    
    const forumpost = { title,text }

   const response = await axios.post("/forum/newpost", forumpost, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()
      if(!response.ok){
        setError(json.error)
    }
      if(response.ok) {
        setTitle("")
        setText("")
        setError(null)
          dispatch({type: 'CREATE_FORUMPOST', payload: json});
      }
    
  }
    
  

  return (
    <div>
    <form className="forum-form" onSubmit={handleSubmit}>
      <h3>Add a post to the forum:</h3>
      <input
        id="forumpost"
        type="text"
        name="title"
        placeholder="Title of post"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <textarea
        id="forumpost"
        type="textarea"
        name="text"
        placeholder="Your text goes here :) "
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
  

      <button type="submit">Submit post</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  );
};


export default CreateForumpost;