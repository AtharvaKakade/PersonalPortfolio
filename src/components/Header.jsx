import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Shared class function for NavLink
  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-full transition-all duration-300 ${
      isActive
        ? "border border-white text-white"
        : "text-gray-300 hover:bg-gray-600 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-[2px] bg-black/50">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center md:justify-center relative">
        {/* Logo */}
        <NavLink
          to="/"
          className="md:hidden absolute left-4 text-3xl font-bebas font-extrabold bg-gradient-to-r from-[#000814] via-[#001D3D] via-[#003566] via-[#FFC300] via-[#FFD60A] to-[#000814] bg-[length:300%_300%] animate-gradient-text text-transparent bg-clip-text"
        >
          A K
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center bg-gray-700/20 rounded-full px-3 py-2 border-[0.5px] border-gray-700 shadow-[inset_0_0_6px_rgba(255,255,255,0.3)] space-x-2">
          <NavLink to="/" className={linkClasses} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/exp" className={linkClasses}>
            Experience
          </NavLink>
          <NavLink to="/projects" className={linkClasses}>
            Projects
          </NavLink>
          <a className="pr-3" onClick={() => setIsModalOpen(true)}>
            More
          </a>
        </nav>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 absolute right-4"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <NavLink to="/" className={linkClasses} end onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClasses} onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink to="/exp" className={linkClasses} onClick={toggleMenu}>
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={linkClasses}
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
            <a className="pr-3 pl-4" onClick={() => setIsModalOpen(true)}>
              More
            </a>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
