import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const navigateToSignup = () => {
        navigate('/Signup');
    };
    
  return (

    <section class='fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-coolGray-800 bg-opacity-80'>

        <div class='max-w-lg w-full m-auto p-8 bg-white rounded-2xl'>
            <form class='p-7 mb-8 bg-coolGray-50 rounded-2xl border-2 border-dashed gray-200 border-4 text-center'>
                  <h2 class='text-3xl text-gray-400 font-bold text-center py-6'>| THE DISCUSSING QUIZ |</h2>
                  
                <div class='flex flex-col py-2'>
                    <input class='border p-2 rounded-xl text-center' type="text" placeholder='USERNAME' autocomplete='off' />
                  </div>

                <div class='flex flex-col py-2'>
                    <input class='border p-2 rounded-xl text-center' type="text" placeholder='PASSWORD' autocomplete='off' />
                  </div>

                    <div class='flex justify-between'>
                    <p class='flex items-center'><input class='mr-2' type="checkbox" /> Remember Me</p>
                    <button type='click' onClick={navigateToSignup} >Sign Up!</button>
                </div>
                  <button class='border rounded-xl w-full my-5 py-2 bg-indigo-500 hover:bg-indigo-200 text-white'><b>SIGN IN</b></button>
                  <button class='border rounded-xl w-full my-5 py-2 bg-red-500 hover:bg-red-100 text-white'><b>SIGN IN WITH GOOGLE</b></button>
            </form>
        </div>  
          
    </section>
  )
}
