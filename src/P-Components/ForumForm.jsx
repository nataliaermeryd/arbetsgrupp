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
        <div class="h-auto w-auto rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]">
          <div class="h-auto w-auto bg-white">
        <input
        class="w-full text-center"
        id="forumpost"
        type="text"
        name="title"
        placeholder="SUBJECT OF YOUR DISCUSSION"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
            />
          </div>
        </div>
      <p class="h-[5px]"/>
    <div class="h-auto w-auto rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]">
    <div class="h-auto w-auto bg-white">
      <textarea
        class="w-full h-full text-center"
        id="forumpost"
        type="textarea"
        name="text"
        placeholder="What's on your mind? :) "
        onChange={(e) => setText(e.target.value)}
        value={text}
            />
      </div>
    </div>
  

      <button type="submit">DISCUSS</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  );
};


export default CreateForumpost;