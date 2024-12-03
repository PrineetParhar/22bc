import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white shadow-md">
      {/* Navbar container */}
      <div className="flex justify-between items-center max-w-7xl mx-auto py-3 px-4">
        {/* Logo or Title */}
        <h1 className="text-2xl font-extrabold font-serif tracking-wide hover:opacity-90 transition-opacity duration-300">
          <a href="#">22-bit-creative</a>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-gray-400 transition duration-300">
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-gray-400 transition duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-2 space-y-2 text-center font-medium text-sm">
          <a
            href="#"
            className="block hover:text-gray-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block hover:text-gray-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="block hover:text-gray-400 transition duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block hover:text-gray-400 transition duration-300"
          >
            Contact
          </a>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
