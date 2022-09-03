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
    <main className="main-container">
    <Link to="/mypage">Back to profile</Link>
    <h1>This is the Forum</h1>
    <div className="forum-container">
      <CreateForumpost />
      <div className="posts">
          <h3>Forumposts:</h3>
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
    </div>
    </main>
  );
}

export default ShowForumposts;
