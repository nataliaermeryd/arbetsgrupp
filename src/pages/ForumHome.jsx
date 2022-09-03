import React from 'react'
import { Link } from "react-router-dom";
import background from '../assets/forum-background.jpg'
// syntax to add background image 
// style={{ backgroundImage: `url(${background})`}}

export default function ForumHome() {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${background})`}}>
      <div className='text-2xl font-semibold flex flex-col'>

        <p>2. nice logo</p>
        <div className='items-center text-green-400/100'>
          <p>"Let's talk some shit"</p>
        </div>
      
      
      <Link to="/choosetopic"><p className='border-solid border-2 border-sky-500 rounded-lg'>4. choose a topic (new page or select list with all the topics)</p></Link>
      <Link to="/newtopic"><p className='border-solid border-2 border-sky-500 rounded-lg'>5. create a topic (new page)</p></Link>
      <p>6. online users</p>
      <p>7. footer</p>
      <p>8. link to main page (choose kahoot or forum)</p>
      <p>9. footer with info (social media, kontakt, logo)</p>
      <p>10. scroll to top of page on every topic page</p>
      </div>
  </div>
    
  )
}
