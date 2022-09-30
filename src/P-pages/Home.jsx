import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section class="sticky flex items-center m-auto w-full p-4 pt-[110px] bg-coolGray-800 bg-opacity-80">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[1200px] m-auto items-center">
        <Link id="signin" to="/Signin">
          <div
            class="
            group
            bg-white bg-opacity-60 w-full 
            sm:pt-60 sm:pb-60 sm:p-10 
            border-gray-200 border-dashed rounded-3xl border-2
            shadow
            pt-[15%] pb-[15%] p-[5%]
            "
          >
            <h3
              class="
              text-4xl text-gray-400 font-bold text-center
              group-hover:text-4xl
              "
            >
              ALREADY A MEMBER?
            </h3>
            <hr />
            <h2
              class="
              text-center text-transparent text-4xl bg-clip-text 
              bg-gradient-to-r from-purple-100 to-blue-600
              group-hover:from-blue-600 
              group-hover:to-purple-100
              "
            >
              ⟪ SIGN IN!
            </h2>
          </div>
        </Link>

        <Link to="/Signup">
          <div
            class="
            group
            bg-white bg-opacity-60 w-full sm:pt-60 sm:pb-60 sm:p-8
            border-gray-200 border-2 rounded-3xl border-dashed 
            shadow
            pt-[15%] pb-[15%] p-[5%]
            "
          >
            <h3
              class="
              text-4xl text-gray-400 font-bold text-center
              group-hover:text-4xl
              "
            >
              WANNA BE A MEMBER?
            </h3>
            <hr />
            <h2
              class="
              text-center text-transparent text-4xl bg-clip-text 
              bg-gradient-to-r from-red-500 to-pink-100
              group-hover:from-pink-100 
              group-hover:to-red-500
              "
            >
              SIGN UP! ⟫
            </h2>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
