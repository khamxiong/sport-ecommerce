import { useState } from "react"
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-[#36BA98] px-[8%] py-4 flex flex-col justify-center items-center shadow-sm" >
         <h4 className="text-xl font-medium text-white">
            Product Recommendation Systems
         </h4>
         <div className="flex gap-2 mt-4">
               <input className="p-2 min-w-[30rem] rounded-md"
               type="text" placeholder="Search..." />
               <button className="p-2 bg-[#D66464]  text-white rounded-md inline-block"> <IoSearch size={20} className="inline-block" /> Search</button>
         </div>
    </div>
  )
}

export default Header
