import React from "react";
import Logo from "../assets/Ellipse 1.png";

function Navbar() {
  return (
    <div
      style={{ backgroundColor: "#302F34" }}
      className='text-white h-20 flex items-center justify-between px-6'>
      <div className='flex items-center'>
        <img className='w-16' src={Logo} alt='Logo' />
        <h1 className='m-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400'>
          Sangam
        </h1>
      </div>
      <input
        type='text'
        placeholder='Search'
        className='border border-gray-300 p-2 rounded-3xl w-1/3 text-black'
      />
      <div className='rounded-full bg-gray-400 h-14 w-16 flex items-center justify-center'>
        <i class='fa-solid fa-user text-3xl text-center'></i>
      </div>
    </div>
  );
}

export default Navbar;
