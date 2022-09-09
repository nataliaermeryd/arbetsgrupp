import React from 'react';



export default function Footer() {
  return (
    <footer
      class="
      fixed bottom-0 left-0 z-20 p-4 w-full bg-white h-[70px]
      bg-opacity-90 border-t border-b border-dashed border-gray-300
      shadow md:flex md:items-center md:justify-between md:p-6 
      dark:
      dark:
      ">
      <span
        class="
        text-sm sm:text-center text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-600 to-purple-300
        ">
        © 2022 <a href="/" class="text-transparent bg-clip-text 
                  bg-gradient-to-r to-red-500 from-pink-200 hover:text-[15px]">SPERN™</a>. All Rights Reserved.
    </span>
      <ul
        class="
        flex flex-wrap items-center mt-3 text-sm mt-0
        text-transparent bg-clip-text 
        bg-gradient-to-r from-blue-600 via-purple-300 via-pink-300 to-red-400
        ">
        <li>
            <a href="#" class="mr-4 hover:text-[15px] md:mr-6 ">LINK</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:text-[15px] md:mr-6">LOREM</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:text-[15px] md:mr-6">LINK</a>
        </li>
        <li>
            <a href="#" class="hover:text-[15px]">LOREM</a>
        </li>
    </ul>
</footer>
  );
};
