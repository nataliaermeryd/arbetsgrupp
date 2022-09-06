import { Link } from "react-router-dom";

const Home = () => {
  return (
    
    <section class='sticky top-0 left-0 right-0 bottom-0 flex items-center m-auto w-full p-4 bg-coolGray-800 bg-opacity-80'>
      <div
        id="handleMiddle"
        class='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full m-auto items-center'>

        <Link to="/Signin">
          <div
            class='
            group
            bg-white bg-opacity-60 w-full pt-60 pb-60 p-10 
            border-gray-200 border-dashed rounded-3xl border-2
            shadow
            '>
            <h3
              class='
              text-4xl text-gray-400 font-bold text-center
              group-hover:text-4xl
              '>
              ALREADY A MEMBER?
            </h3>
            <hr />
              <h2
              class='
              text-center text-transparent text-5xl bg-clip-text 
              bg-gradient-to-r from-purple-100 to-blue-600
              group-hover:from-blue-600 
              group-hover:to-purple-100
              '>
              ⟪ SIGN IN!
            </h2>
        </div>
        </Link>
      
        <Link to="/Signup">
          <div
            class='
            group
            bg-white bg-opacity-60 w-full pt-60 pb-60
            border-gray-200 border-2 rounded-3xl border-dashed p-8
            shadow
            '>
            <h3
              class='
              text-4xl text-gray-400 font-bold text-center
              group-hover:text-4xl
              '>
              WANNA BE A MEMBER?
            </h3>
          <hr />
            <h2
              class='
              text-center text-transparent text-5xl bg-clip-text 
              bg-gradient-to-r from-red-500 to-pink-100
              group-hover:from-pink-100 
              group-hover:to-red-500
              '>
              SIGN UP! ⟫
            </h2>
        </div>
        </Link>

    </div>
  </section>
  );
};

export default Home;
