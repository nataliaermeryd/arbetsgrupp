import { useAuthContext } from "../P-Hooks/useAuthContext";
import { useForumContext } from "../P-Hooks/useForumContext";

const PostDetails = ({ forumpost  }) => {

  const { user } = useAuthContext();
  const { dispatch } = useForumContext();

  const deletePost = async () => {
    if (!user) {
      return;
    }
    const res = await fetch("http://localhost:3030/api/forum/" + forumpost._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await res.json();
    if (res.ok) {
      dispatch({ type: "DELETE_FORUMPOST", payload: json });
    }
  };

  return (

  <div class="mx-auto flex h-auto p-1 max-w-screen-sm items-center justify-center">
      <div
        className="postinfo" key={forumpost._id}
        class="h-auto w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[3px]">
          <div class=" h-full w-full bg-white">
            <h6>Category: {forumpost.category}</h6>
      <h2>{forumpost.title}</h2>
      <p>{forumpost.text}</p>

      <button className="delete-btn" onClick={deletePost}>
        Delete
          </button>
          </div>
    </div>
    </div>
  );
};

export default PostDetails;
