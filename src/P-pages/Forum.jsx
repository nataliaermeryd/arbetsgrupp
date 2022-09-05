import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PostDetails from "../P-Components/PostDetails";
import CreateForumpost from "../P-Components/ForumForm";

export function ShowForumposts() {
  axios.defaults.baseURL = "http://localhost:3030/api";

  const [forumposts, setForumposts] = useState([]);

  useEffect(() => {
    axios
      .get("/forum")
      .then((response) => {
        console.log(response.data);
        setForumposts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deletePost = (e) => {
    axios.delete(`http://localhost:3030/api/forum/${e.target.name}`);

    setForumposts((data) => {
      return data.filter((forumpost) => forumpost._id !== e.target.name);
    });
  };

  return (
      
    <section class='sticky items-center m-auto w-full p-4 bg-coolGray-800 pb-[90px]'>
        <div class='grid-cols-2 gap-y-4 sm:grid-cols-2 w-full rounded-3xl items-center'>
          
          <div
            className="posts"
            class="
            bg-white bg-opacity-60 w-full object-cover 
            border-gray-200 border-2 rounded-3xl border-dashed p-8
            text-center h-full bg-opacity-80
            ">
              <h3 class="font-bold">DISCUSSIONS</h3>
          <ul>
            {forumposts.map((forumpost) => (
              <PostDetails
                key={forumpost._id}
                forumpost={forumpost}
                deletePost={deletePost}
              />
            ))}
            </ul>
        </div>
        
            <div
            className="forum-container"
            class=" 
            bg-white bg-opacity-60 w-full object-cover 
            border-gray-200 border-2 rounded-3xl border-dashed p-8
            text-center h-full bg-opacity-80
            ">
            <CreateForumpost />
          </div>
    
        </div>
      </section>
  );
}

export default ShowForumposts;
