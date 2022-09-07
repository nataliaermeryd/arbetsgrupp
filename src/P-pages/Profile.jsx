import { Link } from "react-router-dom";

const Profile =()=> {
  

return (   
          
    <section class='sticky flex items-center w-full p-4 bg-coolGray-800 bg-opacity-80'>
        <div
            id="handleMiddle"
            class='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full m-auto rounded-3xl items-center
            '>

            <Link to="/quiz">
                <div
                class='
                group
                bg-white bg-opacity-60 w-full object-cover pt-60 pb-60
                border-gray-200 border-dashed rounded-3xl border-2 p-8
                '>
                <h2
                class='
                font-thin text-[38px] text-center py-6
                text-transparent bg-clip-text 
                bg-gradient-to-r to-blue-600 from-purple-100
                group-hover:to-purple-100 
                group-hover:from-blue-600 
                group-hover:text-[39px]
                '>
                    ⟪ WANNA PLAY A GAME!
                </h2>
                </div>
            </Link>
                
            <Link to="/forum">
                <div
                class='
                group
                bg-white bg-opacity-60 w-full object-cover pt-60 pb-60
                border-gray-200 border-2 rounded-3xl border-dashed p-8
                '>
                <h2
                class='
                font-thin text-[38px] text-center py-6
                text-transparent bg-clip-text 
                bg-gradient-to-r from-red-500 to-pink-100
                group-hover:from-pink-100 
                group-hover:to-red-500 
                group-hover:text-[39px]
                '>
                    DISCUSS WITH USERS! ⟫
                </h2>
                </div>
            </Link>

        </div>  
           
     </section>
            
        
    )
}

export default Profile;