import React from 'react'
import { Link } from "react-router-dom";


export default function ForumHome() {
  return (
    <div className='grid grid-rows-5 grid-flow-col gap-4'>
      <p>1. background picture</p>
      <p>2. nice logo</p>
      <p>3. welcome text "Let's talk some shit"</p>
      <p className='border-solid border-2 border-sky-500 rounded-lg'>4. choose a topic (new page or select list with all the topics)</p>
      
      <Link to="/newtopic"><p className='border-solid border-2 border-sky-500 rounded-lg'>5. create a topic (new page)</p></Link>
      <p>6. online users</p>
      <p>7. footer</p>
      <p>8. link to main page (choose kahoot or forum)</p>
      <p>9. footer with info (social media, kontakt, logo)</p>
      <p>10. scroll to top of page on every topic page</p>
    </div>
  )
}
