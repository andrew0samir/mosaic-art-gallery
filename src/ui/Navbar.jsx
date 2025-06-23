import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-sky-700 to-cyan-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 box-border ">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-white">
            {/* <img src="/src/assets/react.svg" alt="Logo" /> */}
            Logo
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
            className={`absolute top-full left-0 right-0 flex-col items-center space-y-4 space-x-0 text-white py-4 backdrop-blur-xl ${
              isMenuOpen ? "flex" : "hidden"
            }  sm:bg-transparent lg:flex lg:relative lg:top-auto lg:flex-row lg:space-y-0 lg:space-x-8 lg:py-0`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "underline underline-offset-4 " : ""
                } hover:underline hover:underline-offset-4 transition duration-300`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "underline underline-offset-4 " : ""
                } hover:underline hover:underline-offset-4 transition duration-300`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "underline underline-offset-4 " : ""
                } hover:underline hover:underline-offset-4 transition duration-300`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "underline underline-offset-4 " : ""
                } hover:underline hover:underline-offset-4 transition duration-300`
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
