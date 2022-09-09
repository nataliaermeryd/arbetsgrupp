import { Link } from "react-router-dom";

const Profile =()=> {
  

return (   
          
    <section class='sticky flex items-center m-auto w-full p-4 pt-[110px] bg-coolGray-800 bg-opacity-80'>
        <div
            class='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[1200px] m-auto items-center
        '>

            <Link to="/quiz">
                <div
                class='
                group
                bg-white bg-opacity-60 w-full 
                sm:pt-60 sm:pb-60 sm:p-10 
                border-gray-200 border-dashed rounded-3xl border-2 
                shadow
                pt-[15%] pb-[15%] p-[5%]
                '>
                <h2
                class='
                font-thin text-[2em] text-center py-6
                text-transparent bg-clip-text 
                bg-gradient-to-r to-blue-600 from-purple-100
                group-hover:to-purple-100 
                group-hover:from-blue-600 
                group-hover:text-[2.1em]
                '>
                    ⟪ WANNA PLAY A GAME!
                </h2>
                </div>
            </Link>
                
            <Link to="/forum">
                <div
                class='
                group
                bg-white bg-opacity-60 w-full sm:pt-60 sm:pb-60 sm:p-8
                border-gray-200 border-2 rounded-3xl border-dashed 
                shadow
                pt-[15%] pb-[15%] p-[5%]
                '>
                <h2
                class='
                font-thin text-[2em] text-center py-6
                text-transparent bg-clip-text 
                bg-gradient-to-r from-red-500 to-pink-100
                group-hover:from-pink-100 
                group-hover:to-red-500 
                group-hover:text-[2.1em]
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