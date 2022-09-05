import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSignUp } from "../P-Hooks/useSignUp";

const SignUp = () => {
  const [email, setEmail] = useState("");
  //const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, loading, error } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(email, password);
  };

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (

    <section class='sticky top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-coolGray-800 bg-opacity-80'>
      <div class='max-w-lg w-full m-auto p-8 bg-white rounded-3xl border-2 border-dashed gray-200'>
                  
        <p
          class='
          font-bold text-gray-400 text-[24px]
          cursor-pointer
          hover:text-[28px] hover:text-gray-300'
          type='click'
          onClick={navigateBack}
        >
          ⟪
        </p>

        <form class='p-7 bg-coolGray-50 rounded-2xl' onSubmit={handleSubmit} autoComplete="off">
          
            <hr />
            <h2 class='text-3xl text-red-400 font-bold text-center pt-3 pb-3'>SIGN UP</h2>
            <hr class="pb-2" />
          
              <div class='flex flex-col py-2'>
                <input
                  class='border p-2 rounded-xl text-center'
                  type="email"
                  placeholder="YOUR EMAIL"
                  required="REQUIRED"
                  autoComplete="off"
              
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            {/*
            <div class='flex flex-col py-2'>
              <input
                class='border p-2 rounded-xl text-center'
                type="text"
                placeholder="USERNAME"
                autocomplete='off'
                required="REQUIRED"

                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>  
            */}
            <div class='flex flex-col py-2 pb-4'>
              <input
                class='border p-2 rounded-xl text-center'
                type="password"
                placeholder='PASSWORD'
                required="REQUIRED"
                autoComplete="off"

                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
          </div>
          <hr class="pb-1"/>
          
          <button
            class='border rounded-xl w-full my-3 py-2 bg-indigo-500 hover:bg-indigo-200 text-white'
            type="submit"
            disabled={loading}
            ><b>
              SIGN UP
            </b></button>
          {error && <div className="error-field">{error}</div>}
            
          <button
            class='border rounded-xl w-full my-3 py-2 bg-red-500 hover:bg-red-100 text-white'
            ><b>
              SIGN UP WITH GOOGLE
            </b></button>
          
          <hr class="mt-4"/>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
