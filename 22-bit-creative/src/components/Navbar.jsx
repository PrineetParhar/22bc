import React from "react";

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white py-4 px-6 shadow-md flex justify-between items-center">
      <h1 className="text-3xl font-semibold">22-bit-creative</h1>
      <div className="space-x-6 font-bold">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#about" className="hover:text-gray-300">
          About
        </a>
        <a href="#services" className="hover:text-gray-300">
          Services
        </a>
        <a href="#contact" className="hover:text-gray-300">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
