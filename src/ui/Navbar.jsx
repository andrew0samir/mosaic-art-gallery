import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 bg-opacity-20 backdrop-blur-lg border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-white hover:text-blue-200 transition duration-300"
          >
            #Mosaic
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-blue-200 transition duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } lg:flex absolute lg:relative top-full left-0 right-0 lg:top-auto bg-blue-900 lg:bg-transparent bg-opacity-95 lg:bg-opacity-0 backdrop-blur-lg lg:backdrop-blur-none flex-col lg:flex-row items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-8 py-4 lg:py-0`}
          >
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "text-blue-300 font-semibold" : "text-white"
                } hover:text-blue-200 transition duration-300`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "text-blue-300 font-semibold" : "text-white"
                } hover:text-blue-200 transition duration-300`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "text-blue-300 font-semibold" : "text-white"
                } hover:text-blue-200 transition duration-300`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "text-blue-300 font-semibold" : "text-white"
                } hover:text-blue-200 transition duration-300`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
