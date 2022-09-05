import React from "react";

const PostDetails = ({ forumpost, deletePost }) => {
  const { _id, title, text } = forumpost;

  return (

  <div class="mx-auto flex h-auto p-1 max-w-screen-sm items-center justify-center">
      <div
        className="postinfo" key={_id}
        class="h-auto w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[3px]">
          <div class=" h-full w-full bg-white">
      <h3>{title}</h3>
      <p>{text}</p>

      <button className="delete-btn" name={_id} onClick={deletePost}>
        Delete
          </button>
          </div>
    </div>
    </div>
  );
};

export default PostDetails;
