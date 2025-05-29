import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-center space-x-8">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
