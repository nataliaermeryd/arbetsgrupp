import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLogIn } from "../P-Hooks/useLogIn";
import { useNavigateBack } from "../P-Hooks/useNavigateBack";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, error, loading } = useLogIn();
  const { navigateBack } = useNavigateBack();

  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate('/Signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await logIn(email, password);
  };
  return (

    <section
      class='sticky top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 pt-[110px] bg-coolGray-800 bg-opacity-80'>
      <div class='max-w-lg w-full m-auto p-8 bg-white rounded-3xl border-2 border-dashed gray-200'>

        <p
          class='absolute 
          font-bold text-gray-400 text-[24px]
          cursor-pointer
          hover:text-[26px] hover:text-gray-300'
          type='click'
          onClick={ navigateBack }
        >
          ⟪
        </p>
        
        <form class='p-7 bg-coolGray-50 rounded-2xl text-center' onSubmit={handleSubmit}>
          
          <hr />
          <h2
            class='
            text-3xl font-bold text-center pt-3 pb-3
            text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-400 to-purple-300
          '>
            SIGN IN
          </h2>
          <hr class="pb-2" />
          <div class='flex flex-col py-2'>
            <input
                class='border p-2 rounded-xl text-center'
                type="email"
                placeholder="YOUR EMAIL"
                autocomplete='off'
              
                onChange={(e) => setEmail(e.target.value)}
                value={email}

              />
          </div>

          <div class='flex flex-col py-2 pb-4'>
            <input
              class='border p-2 rounded-xl text-center'
              type="password"
              placeholder='PASSWORD'
              autocomplete='off'

              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <hr />

          <button
            class='
            border rounded-xl w-full my-3 py-2 text-white
            bg-gradient-to-r from-indigo-400 to-purple-200 text-white
            hover:from-indigo-100 hover:to-purple-100'
            type="submit"
            disabled={loading}
            ><b>
              SIGN IN
            </b></button>
          {error && <div className="error-field">{error}</div>}
          <button
            class='border rounded-xl w-full my-3 py-2 bg-red-500 hover:bg-red-100 text-white'
            ><b>
              SIGN IN WITH GOOGLE
            </b></button>

          <div class='flex justify-between'>
            <p class='flex items-center'><input class='mr-2' type="checkbox" /> Remember Me</p>
            <button type='click' onClick={navigateToSignup} >Sign Up!</button>
          </div>
          
          <hr class="mt-4"/>

        </form>
      </div>
    </section>
  );
};

export default SignIn;