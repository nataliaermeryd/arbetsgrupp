import React, { useEffect, useState } from "react";
import axios from "axios";
import PostDetails from "../P-Components/PostDetails";
import CreateForumpost from "../P-Components/ForumForm";
import { useNavigateBack } from "../P-Hooks/useNavigateBack";


export function ShowForumposts() {
  axios.defaults.baseURL = "http://localhost:3030/api";
 
  const { navigateBack } = useNavigateBack();

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

  /*
  const deletePost = (e) => {
    axios.delete(`http://localhost:3030/api/forum/${e.target.name}`);

    setForumposts((data) => {
      return data.filter((forumpost) => forumpost._id !== e.target.name);
    });
  };
*/
 
  return (
    <section class=" items-center w-full pt-[110px]">
<<<<<<< HEAD
      <p
=======
      <paragraph
>>>>>>> TestN
        class="fixed text-left
          font-bold text-gray-400 text-[24px]
          cursor-pointer pl-2
          hover:text-[26px] hover:text-gray-300"
        type="click"
        onClick={navigateBack}
      >
        ⟪
<<<<<<< HEAD
      </p>
=======
      </paragraph>
>>>>>>> TestN
      <div class="grid-cols w-full m-auto items-center max-w-[1200px]">
        <div
          className="posts"
          class="
             w-full 
            text-center pb-20
            "
        >
          <hr class="pt-5 pb-5" />
          <h3 id="textShadow" class="font-bold text-white text-xl">
            DISCUSSIONS
          </h3>
          <ul class="pb-5">
            {forumposts.map((forumpost) => (
              <PostDetails
                key={forumpost._id}
                forumpost={forumpost}
              />
            ))}
          </ul>
          <hr class="pb-5" />
          <CreateForumpost />
          <hr class="pt-5" />
        </div>
      </div>
    </section>
  );
}

export default ShowForumposts;
