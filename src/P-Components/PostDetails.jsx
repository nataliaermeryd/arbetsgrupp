import React from "react";

const PostDetails = ({ forumpost, deletePost }) => {
  const { _id, title, text } = forumpost;

  return (
    <div className="postinfo" key={_id}>
      <h3>{title}</h3>
      <p>{text}</p>

      <button className="delete-btn" name={_id} onClick={deletePost}>
        Delete
      </button>
    </div>
  );
};

export default PostDetails;
