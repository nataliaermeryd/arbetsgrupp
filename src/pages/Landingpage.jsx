import React from 'react';
import { Link } from "react-router-dom";



export default function Landingpage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">


        <Link to="/Quizgame"><div className='bg-white w-full h-full object-cover pt-60 pb-60 border-gray-200 border-4 p-8'>
        <div><h2 className='text-4xl font-bold text-center py-6'>WANNA PLAY A GAME?</h2></div>
      </div></Link>
      
      <Link to="/Forumhome"><div className='bg-white w-full h-full object-cover pt-60 pb-60 border-gray-200 border-4 p-8'>
        <h2 className='text-4xl font-bold text-center py-6'>DISCUSS WITH MEMBERS?</h2>
        </div></Link>

    </div>
  )
}