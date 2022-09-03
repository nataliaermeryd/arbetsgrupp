import React from 'react'
import {useNavigate} from 'react-router-dom';


export default function Signup() {
        const navigate = useNavigate();
        const navigateToSignin = () => {
        navigate('/');
    };
    return (
      
    <section class='fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-coolGray-800 bg-opacity-80'>

        <div class='max-w-lg w-full m-auto p-8 bg-white rounded-2xl'>
                <form method='post' class='p-7 mb-8 bg-coolGray-50 rounded-2xl border-2 border-dashed gray-200 border-4'>
                <p class='text-bold text-gray-400 text-2xl cursor-pointer' type='click' onClick={navigateToSignin} >⟪</p>
                  <h2 class='text-3xl text-gray-400 font-bold text-center py-6'>| SIGN UP |</h2>
                  
                <div class='flex flex-col py-2'>
                        <input
                            class='border p-2 rounded-xl text-center'
                            type="email"
                            placeholder='YOUR EMAIL'
                            autocomplete='off'

                            id='email'
                            required="REQUIRED"
                        />
                  </div>

                <div class='flex flex-col py-2'>
                        <input
                            class='border p-2 rounded-xl text-center'
                            type="text"
                            placeholder='NEW USERNAME'
                            autocomplete='off'

                            id='username'
                            required="REQUIRED"
                        />
                  </div>

                <div class='flex flex-col py-2'>
                        <input
                            class='border p-2 rounded-xl text-center'
                            type="text"
                            placeholder='NEW PASSWORD'
                            autocomplete='off'

                            id='password'
                            required="REQUIRED"
                        />
                  </div>
                  <button type='submit' class='border rounded-xl text-bold w-full my-5 py-2 bg-indigo-500 hover:bg-indigo-200 text-white'><b>SIGN UP</b></button>
                  <button class='border rounded-xl text-bold w-full my-5 py-2 bg-red-500 hover:bg-red-100 text-white'><b>SIGN UP WITH GOOGLE</b></button>
            </form>
        </div>  
          
    </section>
  )
}